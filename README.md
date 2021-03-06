Создать страницу с выводом данных в виде таблицы и возмоностью добавления, удаления и редактирования пользователей. Дизайн и оформление полностью на свое усмотрение.

Таблица содержит данные о пользователях, в т.ч.:
- Фамилия И.О.
- Роль
- Дата рождения
- Место рождения
- Почта
- Номер телефона
- Дата регистрации
- Последнее изменение записи

Требования:
- при удалении или редактировании пользователя данные в таблице должны обновляться в реальном времени без перезагрузки страницы.
- добавление и редактирование пользователя осуществляется в модальном окне.
- поле "Роль" представляет собой селект со списком ролей из которого можно выбрать значение.
- ФИО выводится в первом столбце в виде фамилия и инициалы.
- добавить возможность сортировки по первому столбцу.
- в каждой строке должна быть возможность удаления выбранного пользователя с подтверждением через диалоговое окно.
- в каждой строке должна быть возможность редактирования пользователя также в модальном окне.
- форма должна валидировать данные перед отправкой данных на сервер.
- дата регистрации проставляется при добавлении нового пользователя.
- дата последнего изменения устанавливается при редактировании выбранного пользователя.

Технические требования:
- обязательно использование redux
- диалоговые окна должны быть реализованы без использования alert, prompt и confirm.
- разрешается использование сторонних компонентов, но пару компонентов все таки сделать своих.
- можно использовать любые плагины при необходимости.
- адаптивность не обязательна, но приветствуется.
- придерживаться методологии БЭМ
- использование шаблонизатора pug и препроцессора SCSS приветствуется.
- для получения и хранения данных использовать приложенный сервер

Особое внимание стоит обратить на следующие моменты:
- код должен быть написан понятно и аккуратно, с соблюдением табуляции и прочих элементов написания и снабжен понятными комментариями;
- читабельность и наличие элементарной архитектуры.

Тестовое задание должно быть предоставлено в следующем виде в ответ на данное письмо:
- ссылка на публичный репозиторий (GitHub, GitLab) с исходным кодом.