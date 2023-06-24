import asyncio
import json

import pydantic
from asgiref.sync import sync_to_async
from django.http import HttpResponseBadRequest, HttpResponseNotFound, HttpResponseRedirect, JsonResponse
from django.utils.decorators import classonlymethod, method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import View

from promocodes.models import PromoCode
from promocodes.pydantic_models import FetchPromocodeRequestPayload, FetchPromocodeResponsePayload


class AsyncView(View):
    @classonlymethod
    def as_view(cls, **initkwargs):
        view = super().as_view(**initkwargs)
        view._is_coroutine = asyncio.coroutines._is_coroutine
        return view


@sync_to_async
def fetch_next_unused_promocode() -> PromoCode | None:
    try:
        return PromoCode.objects.filter(is_used=False).order_by("id").first()
    except Exception:
        print("All promocodes already have been used")
        return None


@sync_to_async
def update_promocode(
    next_unused_promocode: PromoCode, fetch_promocode_request_payload: FetchPromocodeRequestPayload
) -> None:
    next_unused_promocode.utm_source = fetch_promocode_request_payload.utm_source
    next_unused_promocode.utm_campaign = fetch_promocode_request_payload.utm_campaign
    next_unused_promocode.is_used = True
    next_unused_promocode.save()


@method_decorator(csrf_exempt, name="dispatch")
class PromocodeView(AsyncView):
    async def post(self, request) -> HttpResponseNotFound | HttpResponseRedirect:
        try:
            decoded_json: dict[str, str] = json.loads(request.body.decode("utf-8"))
            request_payload: FetchPromocodeRequestPayload = FetchPromocodeRequestPayload(**decoded_json)
        except pydantic.ValidationError:
            return HttpResponseBadRequest("Please specify utm_source and utm_campaign params.")

        next_unused_promocode: PromoCode | None = await fetch_next_unused_promocode()
        if not next_unused_promocode:
            return HttpResponseNotFound("Promocode not found")
        await update_promocode(next_unused_promocode, request_payload)

        response_payload: FetchPromocodeResponsePayload = FetchPromocodeResponsePayload(
            promocode=next_unused_promocode.promocode
        )
        return JsonResponse(response_payload.dict())
