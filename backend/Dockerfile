FROM python:3.11-slim AS compile-image

RUN apt-get update
RUN apt-get -y upgrade
RUN apt-get install -y libpq-dev --no-install-recommends

RUN pip install --upgrade pip
RUN pip install poetry
RUN poetry config virtualenvs.create false

COPY pyproject.toml ./
COPY poetry.lock ./

RUN poetry install --no-dev
RUN pip uninstall poetry -y

FROM scratch AS runtime-image

WORKDIR /app

COPY --from=compile-image / /
COPY . .

CMD gunicorn src.wsgi:application --bind 0.0.0.0:8000