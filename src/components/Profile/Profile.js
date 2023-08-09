import React, { useState } from "react";

const Profile = () => {
  const initialName = "Виталий";
  const initialEmail = "pochta@yandex.ru";

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);

  const handleEditClick = (evt) => {
    evt.preventDefault();
    setIsEditing(true);
  };

  const handleSaveClick = (evt) => {
    evt.preventDefault();
    setIsEditing(false);
  };

  const isNameValid = document.getElementById("name")?.validity.valid;
  const isEmailValid = document.getElementById("email")?.validity.valid;

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
                value={name}
                onChange={(e) => setName(e.target.value)}
                minLength="2"
                maxLength="40"
                required
              />
            ) : (
              <p className="profile__input">{name}</p>
            )}
          </label>
          <span className="profile__input-error">
            {document.getElementById("name")?.validationMessage}
          </span>
          <label className="profile__field">
            <span className="profile__caption">E-mail</span>
            {isEditing ? (
              <input
                id="email"
                name="email"
                className="profile__input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            ) : (
              <p className="profile__input">{email}</p>
            )}
          </label>
          <span className="profile__input-error">
            {document.getElementById("email")?.validationMessage}
          </span>
        </div>
        {isEditing ? (
          <button
            className={`profile__save-button ${
              (!isNameValid || !isEmailValid) && "profile__save-button_disabled"
            }`}
            type="submit"
            onClick={handleSaveClick}
            disabled={!isNameValid || !isEmailValid}
          >
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
