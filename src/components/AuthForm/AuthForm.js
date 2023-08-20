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
  savedRegisterInputs,
  setSavedRegisterInputs,
  savedLoginInputs,
  setSavedLoginInputs,
  isLoading,
  isRegistering,
}) => {
  const [name, setName] = useState(() => {
    if (isAuthError && type === "register") {
      return savedRegisterInputs.name;
    } else return "";
  });
  const [email, setEmail] = useState(() => {
    if (isAuthError && type === "register") {
      return savedRegisterInputs.email;
    } else if (isAuthError && type === "login") {
      return savedLoginInputs.email;
    } else return "";
  });
  const [password, setPassword] = useState(() => {
    if (isAuthError && type === "register") {
      return savedRegisterInputs.password;
    } else if (isAuthError && type === "login") {
      return savedLoginInputs.password;
    } else return "";
  });

  const formRef = useRef(null);
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const isNameValid = (value) => {
    const namePattern = /^[a-zA-Zа-яА-ЯёЁ\s-]+$/;
    return namePattern.test(value);
  };

  const isEmailValid = (value) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(value);
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

  const handleEmailChange = (evt) => {
    const inputValue = evt.target.value;
    setEmail(inputValue);
    if (!isEmailValid(inputValue)) {
      evt.target.setCustomValidity("Введите корректный email");
    } else {
      evt.target.setCustomValidity("");
    }
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    if (type === "register") {
      setSavedRegisterInputs({
        name: name,
        email: email,
        password: password,
      });
      onRegister(name, email, password);
    } else if (type === "login") {
      setSavedLoginInputs({
        email: email,
        password: password,
      });
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
                disabled={isLoading || isRegistering}
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
            onChange={handleEmailChange}
            required
            placeholder="user@example.com"
            disabled={isLoading || isRegistering}
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
            disabled={isLoading || isRegistering}
          />
        </label>
        <span className="auth__input-error">
          {passwordInputRef.current?.validationMessage}
        </span>
      </div>
      <FormTooltip isError={isAuthError} errorMessage={authErrorMessage} />
      <button
        className={`auth__submit-button ${
          (!formRef.current?.checkValidity() || isLoading || isRegistering) &&
          "auth__submit-button_disabled"
        }`}
        type="submit"
        disabled={
          !formRef.current?.checkValidity() || isLoading || isRegistering
        }
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
