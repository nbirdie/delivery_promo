#!/bin/bash

CURRENT_DIR=$(pwd)
PROJECT_NAME="milonask"


function get_env_path() {
    project_root_path=$CURRENT_DIR
    while [[ "$project_root_path" != "/" && $(basename "$project_root_path") != "$PROJECT_NAME" ]]; do
        project_root_path=$(dirname "$project_root_path")
    done
    env_file_path="$project_root_path/backend/.env"
    echo $env_file_path
}

function remove_env_file() {
    env_file_path=$(get_env_path)
    if [ -f "$env_file_path" ]; then
        rm -rf $env_file_path
    fi
}

function add_env_variable() {
    variable_name=$1
    new_value=$2
    echo "$variable_name=$new_value" >> "$(get_env_path)"
    printf "Added $variable_name\n"
}


remove_env_file
add_env_variable "SECRET_KEY" "django-insecure-7_*wiwqqlzq2szdsgi_62%bvx22-3n3c3-!yl41d"
add_env_variable "DEBUG" "true"
add_env_variable "TIME_ZONE" "Europe/Moscow"
add_env_variable "APP_TITLE" "Promocodes"
add_env_variable "POSTGRES_ENGINE" "django.db.backends.postgresql"
add_env_variable "POSTGRES_NAME" "postgres"
add_env_variable "POSTGRES_USER" "postgres"
add_env_variable "POSTGRES_PASSWORD" "postgres"
add_env_variable "POSTGRES_HOST" "db"
add_env_variable "POSTGRES_PORT" "5432"