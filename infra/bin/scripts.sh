#!/bin/bash

CURRENT_DIR=$(pwd)
PROJECT_NAME="milonask"
INPUTED_COMMANDS_COUNT="$#"
INPUTED_COMMAND="$1"

GREEN="$(printf '\033[0;32m')"
RED="$(printf '\033[0;31m')"
LIGHT_BLUE="$(printf '\033[1;34m')"
NC="$(printf '\033[0m')"

MANUAL_INFO=""
MANUAL_INFO="${MANUAL_INFO}${LIGHT_BLUE}Usage:${NC} sh ./scripts.sh COMMAND\n"
MANUAL_INFO="${MANUAL_INFO}${LIGHT_BLUE}Options:${NC}\n"
MANUAL_INFO="${MANUAL_INFO}    setup_app  . . . . . . . Starts app with production mode.\n"
MANUAL_INFO="${MANUAL_INFO}    setup_app_local  . . . . Starts app with local development mode.\n"
MANUAL_INFO="${MANUAL_INFO}    stop_app . . . . . . . . Delete all app's containers.\n"
MANUAL_INFO="${MANUAL_INFO}    delete_app . . . . . . . Delete all app's containers and volumes.\n"
MANUAL_INFO="${MANUAL_INFO}    create_admin . . . . . . Create superuser for access to admin panel.\n"
MANUAL_INFO="${MANUAL_INFO}    load_data  . . . . . . . Load test data with promocodes to database.\n"
MANUAL_INFO="${MANUAL_INFO}    help . . . . . . . . . . Returns more information."


get_project_root_path() {
    project_root_path=$CURRENT_DIR
    while [ "$project_root_path" != "/" ] && [ "$(basename "$project_root_path")" != "$PROJECT_NAME" ]; do
        project_root_path=$(dirname "$project_root_path")
    done
    echo "$project_root_path"
}

setup_app() {
    printf "\n${GREEN}Add backend env variables${NC}\n"
    sh $(get_project_root_path)/backend/bin/create-env.sh

    printf "\n${GREEN}Start up containers${NC}\n"
    if [ "$1" = "local" ]; then
        docker-compose -f docker-compose.local.yaml up -d --build
    elif [ "$1" = "prod" ]; then
        docker-compose -f docker-compose.yaml up -d --build
    else
        printf "\n${RED}Sorry, something went wrong ${NC}\n"
        exit 1
    fi

    printf "\n${GREEN}Updating db tables${NC}\n"
    docker-compose exec backend python manage.py migrate --noinput

    printf "\n${GREEN}Collecting backend static files${NC}\n"
    docker-compose exec backend python manage.py collectstatic --no-input
}


cd $(get_project_root_path)/infra
# sh scripts.sh
if [ $INPUTED_COMMANDS_COUNT -eq 0 ]; then
    printf "\n$MANUAL_INFO\n"
# sh scripts.sh * *
elif [ $INPUTED_COMMANDS_COUNT -gt 1 ]; then
    printf "\n${RED}::: Error: Invalid arguments :::${NC}\n"
    printf "\n$MANUAL_INFO\n"
# sh scripts.sh setup_app
elif [ $INPUTED_COMMAND = "setup_app" ]; then
    printf "\n${GREEN}::: App launch starts :::${NC}\n"
    setup_app "prod"
# sh scripts.sh setup_app_local
elif [ $INPUTED_COMMAND = "setup_app_local" ]; then
    printf "\n${GREEN}::: App launch starts with local development mode :::${NC}\n"
    setup_app "local"
# sh scripts.sh stop_app
elif [ $INPUTED_COMMAND = "stop_app" ]; then
    printf "\n${GREEN}::: Delete all app's containers :::${NC}\n"
    docker-compose down
elif [ $INPUTED_COMMAND = "delete_app" ]; then
    printf "\n${GREEN}::: Delete all app's containers and volumes :::${NC}\n"
    docker-compose down -v
# sh scripts.sh create_admin
elif [ $INPUTED_COMMAND = "create_admin" ]; then
    printf "\n${GREEN}::: Create superuser for access to admin panel :::${NC}\n"
    docker-compose exec backend python manage.py createsuperuser
# sh scripts.sh load_data
elif [ $INPUTED_COMMAND = "load_data" ]; then
    printf "\n${GREEN}::: Load test data with promocodes to database :::${NC}\n"
    docker-compose exec backend python manage.py load_data
# sh scripts.sh help
elif [ $INPUTED_COMMAND = "help" ]; then
    printf "\n$MANUAL_INFO\n"
# sh scripts.sh *
else 
    printf "\n${RED}::: Error: Invalid argument :::${NC}\n"
    printf "\n$MANUAL_INFO\n"
fi
