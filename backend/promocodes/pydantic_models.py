import pydantic


class FetchPromocodeRequestPayload(pydantic.BaseModel):
    utm_source: str
    utm_campaign: str


class FetchPromocodeResponsePayload(pydantic.BaseModel):
    promocode: str
