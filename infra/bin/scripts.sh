#!/bin/bash
CURRENT_DIR=$(pwd)
PROJECT_NAME="milonask"
INPUTED_COMMANDS_COUNT="$#"
INPUTED_COMMAND="$1"

GREEN="\033[0;32m"
RED="\033[0;31m"
LIGHT_BLUE="\033[1;34m"
NC="\033[0m"

MANUAL_INFO=""
MANUAL_INFO+="${LIGHT_BLUE}Usage:${NC} sh ./start-project.sh COMMAND\n"
MANUAL_INFO+="${LIGHT_BLUE}Options:${NC}\n"
MANUAL_INFO+="    setup_app  . . . . . . . Starts app.\n"
MANUAL_INFO+="    setup_app_local  . . . . Starts app with local development mode.\n"
MANUAL_INFO+="    stop_app . . . . . . . . Delete all app's containers.\n"
MANUAL_INFO+="    delete_app . . . . . . . Delete all app's containers and volumes.\n"
MANUAL_INFO+="    create_admin . . . . . . Create superuser for access to admin panel.\n"
MANUAL_INFO+="    load_data  . . . . . . . Load test data with promocodes to database.\n"
MANUAL_INFO+="    help . . . . . . . . . . Returns more information."


function get_project_root_path() {
    project_root_path=$CURRENT_DIR
    while [[ "$project_root_path" != "/" && $(basename "$project_root_path") != "$PROJECT_NAME" ]]; do
        project_root_path=$(dirname "$project_root_path")
    done
    echo $project_root_path
}

function setup_app() {
    printf "\n${GREEN}Add backend env variables${NC}\n"
    sh $(get_project_root_path)/backend/bin/create-env.sh

    printf "\n${GREEN}Start up containers${NC}\n"
    if [ $1 = true ]; then
        docker-compose -f docker-compose.local.yaml up -d --build
    else
        docker-compose -f docker-compose.yaml up -d --build
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
    printf "\n${GREEN}::: App lounch starts :::${NC}\n"
    setup_app false
# sh scripts.sh setup_app_local
elif [ $INPUTED_COMMAND = "setup_app_local" ]; then
    echo $(pwd)
    printf "\n${GREEN}::: App lounch starts with local development mode :::${NC}\n"
    setup_app true
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
