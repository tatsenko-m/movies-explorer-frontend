import React from "react";
import FormTooltip from "../FormTooltip/FormTooltip";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Profile = ({
  isUpdateUserError,
  updateUserErrorMessage,
  isUpdateUserSuccess,
  onUpdateUser,
  onSignOut,
}) => {
  const currentUser = React.useContext(CurrentUserContext);

  const [isEditing, setIsEditing] = React.useState(false);
  const [name, setName] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);

  const nameInputRef = React.useRef(null);
  const emailInputRef = React.useRef(null);

  const isNameValid = (value) => {
    const namePattern = /^[a-zA-Zа-яА-ЯёЁ\s-]+$/;
    return namePattern.test(value);
  };

  const handleNameChange = (evt) => {
    const inputValue = evt.target.value;
    setName(inputValue);
    if (!isNameValid(inputValue)) {
      evt.target.setCustomValidity(
        "Используйте только латиницу, кириллицу, пробел или дефис"
      );
    } else {
      evt.target.setCustomValidity("");
    }
  };

  const handleEditClick = (evt) => {
    evt.preventDefault();
    setIsEditing(true);
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsEditing(false);
    onUpdateUser(name, email);
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);

    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        setIsEditing(false);
      }
    }

    function handleOutsideClick(event) {
      const fieldsContainer = document.querySelector(".profile__fields");
      if (fieldsContainer && !fieldsContainer.contains(event.target)) {
        setIsEditing(false);
      }
    }

    if (isEditing) {
      document.addEventListener("keydown", handleEscapeKey);
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isEditing]);

  return (
    <section className="profile">
      <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
      <form className="profile__form" onSubmit={handleSubmit}>
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
                onChange={handleNameChange}
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
                onChange={(evt) => setEmail(evt.target.value)}
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
        <FormTooltip
          isError={isUpdateUserError}
          errorMessage={updateUserErrorMessage}
          isSuccess={isUpdateUserSuccess}
          successMessage="Профиль успешно обновлен"
        />
        {isEditing ? (
          <button
            className={`profile__save-button ${
              (name === currentUser.name && email === currentUser.email) ||
              !nameInputRef.current?.validity.valid ||
              !emailInputRef.current?.validity.valid
                ? "profile__save-button_disabled"
                : ""
            }`}
            type="submit"
            disabled={
              (name === currentUser.name && email === currentUser.email) ||
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
        <button
          className="profile__signout-button"
          type="button"
          onClick={onSignOut}
        >
          Выйти из аккаунта
        </button>
      )}
    </section>
  );
};

export default Profile;
