[![Milonask promocodes project workflow](https://github.com/nbirdie/delivery_promo/actions/workflows/main.yaml/badge.svg)](https://github.com/nbirdie/delivery_promo/actions/workflows/main.yaml)

# Milonask

[![Javascript](https://img.shields.io/badge/-Javascript-464646?style=flat-square&logo=Javascript)](https://github.com/features/actions)
[![React](https://img.shields.io/badge/-React-464646?style=flat-square&logo=React)](https://github.com/features/actions)
[![Python](https://img.shields.io/badge/-Python-464646?style=flat-square&logo=Python)](https://www.python.org/)
[![Django](https://img.shields.io/badge/-Django-464646?style=flat-square&logo=Django)](https://www.djangoproject.com/)
[![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-464646?style=flat-square&logo=PostgreSQL)](https://www.postgresql.org/)
[![Nginx](https://img.shields.io/badge/-NGINX-464646?style=flat-square&logo=NGINX)](https://nginx.org/ru/)
[![gunicorn](https://img.shields.io/badge/-gunicorn-464646?style=flat-square&logo=gunicorn)](https://gunicorn.org/)
[![docker](https://img.shields.io/badge/-Docker-464646?style=flat-square&logo=docker)](https://www.docker.com/)
[![GitHub%20Actions](https://img.shields.io/badge/-GitHub%20Actions-464646?style=flat-square&logo=GitHub%20actions)](https://github.com/features/actions)

## Содержание
1. [Описание](#description)
2. [Запуск проекта](#launch)
3. [Доступ в админку](#admin)
4. [Ссылки на промокоды](#promocodes-links)

## <a name='description'>Описание</a>
Проект по созданию кликабельного лендинга, админки с аналитикой по промокодам для рекламной компании крупного ритейл клиента.


## <a name='launch'>Запуск проекта</a>
Чтобы развернуть проект необходимо выполнить следующие действия (у Вас уже должен быть установлен Docker):

* для запуска в выполните команды:
  * `sh ./infra/bin/scripts.sh setup_app` - prod режим
  * `sh ./infra/bin/scripts.sh setup_app_local` - dev режим
* для доступа в админку создайте суперпользователя:
  * `sh ./infra/bin/scripts.sh create_admin`
* чтобы загруить тестовые данные в БД выполните команду:
  * `sh ./infra/bin/scripts.sh load_data`
* чтобы получить больше информации об использовании CLI выполните команду:
  * `sh ./infra/bin/scripts.sh help`

При локальной разработке проект доступен по адресу http://localhost/.

Готовый проект можно найти на сайте http://89.108.99.250/.

## <a name='admin'>Доступ в админку</a>
Для доступа в админку уже создан тестовый администратор:

* Логин: test_admin_login
* Пароль: test_admin_password

Чтобы войти, перейдите по ссылке http://89.108.99.250/admin/.

## <a name='promocodes-links'>Ссылки на промокоды</a>

Подготовлены тестовые ссылки для получения промокодов,
однако при желании можно использовать ссылки и с другими utm метками:

* http://89.108.99.250?utm_source=osen_banner1&utm_campaign=osen
* http://89.108.99.250?utm_source=osen_banner2&utm_campaign=osen
* http://89.108.99.250?utm_source=osen_banner3&utm_campaign=osen
