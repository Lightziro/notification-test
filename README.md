## О проекте

Проект позволяет отправлять оповещения пользователю в реальном времени.

## Запуск проекта

- npm i (Установить зависимостей frontend).
- Создать копию .env.example и дать название .env.
- docker-compose up -d --build (Собрать и запустить docker контейнеры).
- npm run dev (Собрать frontend).
- docker-compose exec backend php artisan migrate (Применить миграции).
- docker-compose exec backend php artisan db:seed (Применить сидер на доп.данные).
- docker-compose exec backend php artisan optimize (Сбросить кэш).
- docker-compose restart supervisor (Перезапуск визора для работы WebSocket)

### Рабочие страницы

- **/** - для пользователя
- **/admin/login** - авторизация с адм.панели
- **/admin/** - базовая страница в адм.панели
- **/admin/notifications** - список оповещений
- **/admin/notifications/create** - создать оповещение
- **/admin/notifications/update/:id** - редактировать оповещение
- **/admin/categories** - список категорий
- **/admin/categories/create** - создать категорию
