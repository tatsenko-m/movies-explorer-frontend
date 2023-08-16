import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import FormTooltip from "../FormTooltip/FormTooltip";

const AuthForm = ({
  type,
  heading,
  submitButtonText,
  isAuthError,
  authErrorMessage,
  onRegister,
  onLogin,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formRef = useRef(null);
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

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

  function handleSubmit(evt) {
    evt.preventDefault();
    if (type === "register") {
      onRegister(name, email, password);
    } else if (type === "login") {
      onLogin(email, password);
    } else {
      return;
    }
  }

  return (
    <form ref={formRef} className="auth__form" onSubmit={handleSubmit}>
      <Logo />
      <h2 className="auth__heading">{heading}</h2>
      <div
        className={`auth__fields${
          type === "login" ? " auth__fields_login" : ""
        }`}
      >
        {type === "register" && (
          <>
            <label className="auth__field">
              <span className="auth__caption">Имя</span>
              <input
                ref={nameInputRef}
                id="name"
                name="name"
                className={`auth__input${
                  nameInputRef.current?.validity.valid
                    ? ""
                    : " auth__input_invalid"
                }`}
                type="text"
                value={name}
                onChange={handleNameChange}
                minLength="2"
                maxLength="40"
                required
                placeholder="Имя"
              />
            </label>
            <span className="auth__input-error">
              {nameInputRef.current?.validationMessage}
            </span>
          </>
        )}
        <label className="auth__field">
          <span className="auth__caption">E-mail</span>
          <input
            ref={emailInputRef}
            id="email"
            name="email"
            className={`auth__input${
              emailInputRef.current?.validity.valid
                ? ""
                : " auth__input_invalid"
            }`}
            type="email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
            required
            placeholder="user@example.com"
          />
        </label>
        <span className="auth__input-error">
          {emailInputRef.current?.validationMessage}
        </span>
        <label className="auth__field">
          <span className="auth__caption">Пароль</span>
          <input
            ref={passwordInputRef}
            id="password"
            name="password"
            className={`auth__input${
              passwordInputRef.current?.validity.valid
                ? ""
                : " auth__input_invalid"
            }`}
            type="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            required
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          />
        </label>
        <span className="auth__input-error">
          {passwordInputRef.current?.validationMessage}
        </span>
      </div>
      <FormTooltip isError={isAuthError} errorMessage={authErrorMessage} />
      <button
        className={`auth__submit-button ${
          !formRef.current?.checkValidity() && "auth__submit-button_disabled"
        }`}
        type="submit"
        disabled={!formRef.current?.checkValidity()}
      >
        {submitButtonText}
      </button>
      {type === "register" && (
        <div className="auth__link-bar">
          <p className="auth__link-caption">Уже зарегистрированы?</p>
          <Link to="/signin" className="auth__link">
            Войти
          </Link>
        </div>
      )}
      {type === "login" && (
        <div className="auth__link-bar">
          <p className="auth__link-caption">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="auth__link">
            Регистрация
          </Link>
        </div>
      )}
    </form>
  );
};

export default AuthForm;
