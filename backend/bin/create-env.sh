#!/bin/bash

CURRENT_DIR=$(pwd)
PROJECT_NAME="milonask"


get_env_path() {
    project_root_path=$CURRENT_DIR
    while [ "$project_root_path" != "/" ] && [ "$(basename "$project_root_path")" != "$PROJECT_NAME" ]; do
        project_root_path=$(dirname "$project_root_path")
    done
    env_file_path="$project_root_path/backend/.env"
    echo "$env_file_path"
}

remove_env_file() {
    env_file_path=$(get_env_path)
    if [ -f "$env_file_path" ]; then
        rm -rf $env_file_path
    fi
}

add_env_variable() {
    variable_name=$1
    new_value=$2
    echo "$variable_name=$new_value" >> "$(get_env_path)"
    printf "Added $variable_name\n"
}


if [ -z "$DJANGO_SECRET_KEY" ]; then DJANGO_SECRET_KEY="secret_key"
fi

if [ -z "$DJANGO_DEBUG" ]; then DJANGO_DEBUG="true"
fi

if [ -z "$DJANGO_TIME_ZONE" ]; then DJANGO_TIME_ZONE="America/New_York"
fi

if [ -z "$DJANGO_APP_TITLE" ]; then DJANGO_APP_TITLE="Milonask"
fi

if [ -z "$POSTGRES_ENGINE" ]; then POSTGRES_ENGINE="django.db.backends.postgresql"
fi

if [ -z "$POSTGRES_NAME" ]; then POSTGRES_NAME="postgres"
fi

if [ -z "$POSTGRES_USER" ]; then POSTGRES_USER="postgres"
fi

if [ -z "$POSTGRES_PASSWORD" ]; then POSTGRES_PASSWORD="postgres"
fi

if [ -z "$POSTGRES_HOST" ]; then POSTGRES_HOST="db"
fi

if [ -z "$POSTGRES_PORT" ]; then POSTGRES_PORT="5432"
fi

remove_env_file
add_env_variable "DJANGO_SECRET_KEY" "$DJANGO_SECRET_KEY"
add_env_variable "DJANGO_DEBUG" "$DJANGO_DEBUG"
add_env_variable "DJANGO_TIME_ZONE" "$DJANGO_TIME_ZONE"
add_env_variable "DJANGO_APP_TITLE" "$DJANGO_APP_TITLE"
add_env_variable "POSTGRES_ENGINE" "$POSTGRES_ENGINE"
add_env_variable "POSTGRES_NAME" "$POSTGRES_NAME"
add_env_variable "POSTGRES_USER" "$POSTGRES_USER"
add_env_variable "POSTGRES_PASSWORD" "$POSTGRES_PASSWORD"
add_env_variable "POSTGRES_HOST" "$POSTGRES_HOST"
add_env_variable "POSTGRES_PORT" "$POSTGRES_PORT"
