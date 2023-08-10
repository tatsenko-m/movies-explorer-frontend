import React, { useState, useRef } from "react";

const Profile = () => {
  const initialName = "Виталий";
  const initialEmail = "pochta@yandex.ru";
  const isError = false;

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

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
                ref={nameInputRef}
                id="name"
                name="name"
                className="profile__input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                minLength="2"
                maxLength="40"
                required
                placeholder="Имя"
              />
            ) : (
              <p className="profile__input">{name}</p>
            )}
          </label>
          <span className="profile__input-error">
            {nameInputRef.current?.validationMessage}
          </span>
          <label className="profile__field">
            <span className="profile__caption">E-mail</span>
            {isEditing ? (
              <input
                ref={emailInputRef}
                id="email"
                name="email"
                className="profile__input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="user@example.com"
              />
            ) : (
              <p className="profile__input">{email}</p>
            )}
          </label>
          <span className="profile__input-error">
            {emailInputRef.current?.validationMessage}
          </span>
        </div>
        <span className="profile__error">
          {isError ? "При обновлении профиля произошла ошибка." : ""}
        </span>
        {isEditing ? (
          <button
            className={`profile__save-button ${
              (!nameInputRef.current?.validity.valid ||
                !emailInputRef.current?.validity.valid) &&
              "profile__save-button_disabled"
            }`}
            type="submit"
            onClick={handleSaveClick}
            disabled={
              !nameInputRef.current?.validity.valid ||
              !emailInputRef.current?.validity.valid
            }
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
