# Movies Explorer: дипломный проект в Яндекс Практикуме (frontend)
Репозиторий для приложения проекта `Movies Explorer`, включающий верстку и JSX. 

> Репозиторий, где ведется работа на backend-частью проекта `Movies Explorer`: [tatsenko-m/movies-explorer-api](https://github.com/tatsenko-m/movies-explorer-api.git)

## Дополнительная информация

* **Название файла макета: dark-4.fig**

    https://disk.yandex.ru/d/79ew7CPdbOqIEQ

* Авторизованное и неавторизованное состояние Header меняется через стейт loggedIn в App.js

* Прелоадер добавляется и убирается через стейт isLoading в App.js

* Сообщение об ошибке бэкенда в формах аутентификации и редактирования профиля (FormError) добавляется и убирается через переменную isError, определенную в компонентах AuthForm и Profile