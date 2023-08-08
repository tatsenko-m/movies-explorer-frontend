import React from "react";

const Profile = () => {
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form">
        <div className="profile__fields">
          <label className="profile__field">
            <span className="profile__caption">Имя</span>
            <input
              id="name"
              name="name"
              className="profile__input"
              type="text"
              value="Виталий"
              minLength="2"
              maxLength="40"
            />
          </label>
          <label className="profile__field">
            <span className="profile__caption">E-mail</span>
            <input
              id="email"
              name="email"
              className="profile__input"
              type="email"
              value="pochta@yandex.ru"
              minLength="2"
              maxLength="40"
            />
          </label>
        </div>
        <button className="profile__edit-button" type="submit">
          Редактировать
        </button>
      </form>
      <button className="profile__signout-button" type="button">
        Выйти из аккаунта
      </button>
    </section>
  );
};

export default Profile;
