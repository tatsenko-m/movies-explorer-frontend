import React, { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = (evt) => {
    evt.preventDefault();
    setIsEditing(true);
  };

  const handleSaveClick = (evt) => {
    evt.preventDefault();
    setIsEditing(false);
  };

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form">
        <div className="profile__fields">
          <label className="profile__field">
            <span className="profile__caption">Имя</span>
            {isEditing ? (
              <input
                id="name"
                name="name"
                className="profile__input"
                type="text"
                value="Виталий"
                minLength="2"
                maxLength="40"
              />
            ) : (
              <p className="profile__input">Виталий</p>
            )}
          </label>
          <label className="profile__field">
            <span className="profile__caption">E-mail</span>
            {isEditing ? (
              <input
                id="email"
                name="email"
                className="profile__input"
                type="email"
                value="pochta@yandex.ru"
                minLength="2"
                maxLength="40"
              />
            ) : (
              <p className="profile__input">pochta@yandex.ru</p>
            )}
          </label>
        </div>
        {isEditing ? (
          <button className="profile__save-button" type="submit" onClick={handleSaveClick}>
            Сохранить
          </button>
        ) : (
          <button className="profile__edit-button" onClick={handleEditClick}>
            Редактировать
          </button>
        )}
      </form>
      {!isEditing && (
        <button className="profile__signout-button" type="button">
          Выйти из аккаунта
        </button>
      )}
    </section>
  );
};

export default Profile;
