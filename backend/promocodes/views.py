import json

import pydantic
from django.http import HttpResponseBadRequest, HttpResponseNotFound, JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import View

from promocodes.models import PromoCode
from promocodes.pydantic_models import FetchPromocodeRequestPayload, FetchPromocodeResponsePayload


@method_decorator(csrf_exempt, name="dispatch")
class PromocodeView(View):
    async def post(self, request) -> HttpResponseBadRequest | HttpResponseNotFound | JsonResponse:
        try:
            decoded_json: dict[str, str] = json.loads(request.body.decode("utf-8"))
            request_payload: FetchPromocodeRequestPayload = FetchPromocodeRequestPayload(**decoded_json)
        except pydantic.ValidationError:
            return HttpResponseBadRequest("Please specify utm_source and utm_campaign params.")

        next_unused_promocode: PromoCode | None = PromoCode.objects.filter(is_used=False).order_by("id").first()
        if not next_unused_promocode:
            return HttpResponseNotFound("Promocode not found")

        next_unused_promocode.utm_source = request_payload.utm_source
        next_unused_promocode.utm_campaign = request_payload.utm_campaign
        next_unused_promocode.is_used = True
        next_unused_promocode.save()

        response_payload: FetchPromocodeResponsePayload = FetchPromocodeResponsePayload(
            promocode=next_unused_promocode.promocode
        )
        return JsonResponse(response_payload.dict())
