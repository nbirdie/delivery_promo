import json

import pydantic
from django.http import HttpResponseBadRequest, HttpResponseNotFound, JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import View

from promocodes.models import PromoCode
from promocodes.pydantic_models import FetchPromocodeRequestPayload, FetchPromocodeResponsePayload


def update_promocode(
    next_unused_promocode: PromoCode, fetch_promocode_request_payload: FetchPromocodeRequestPayload
) -> None:
    next_unused_promocode.utm_source = fetch_promocode_request_payload.utm_source
    next_unused_promocode.utm_campaign = fetch_promocode_request_payload.utm_campaign
    next_unused_promocode.is_used = True
    next_unused_promocode.save()


@method_decorator(csrf_exempt, name="dispatch")
class PromocodeView(View):
    def post(self, request) -> HttpResponseBadRequest | HttpResponseNotFound | JsonResponse:
        try:
            decoded_json: dict[str, str] = json.loads(request.body.decode("utf-8"))
            request_payload: FetchPromocodeRequestPayload = FetchPromocodeRequestPayload(**decoded_json)
        except pydantic.ValidationError:
            return HttpResponseBadRequest("Please specify utm_source and utm_campaign params.")

        next_unused_promocode: PromoCode | None = PromoCode.objects.filter(is_used=False).order_by("id").first()
        if not next_unused_promocode:
            return HttpResponseNotFound("Promocode not found")
        update_promocode(next_unused_promocode, request_payload)

        response_payload: FetchPromocodeResponsePayload = FetchPromocodeResponsePayload(
            promocode=next_unused_promocode.promocode
        )
        return JsonResponse(response_payload.dict())
