import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const AuthForm = ({ type, heading, submitButtonText }) => {
  const isError = false;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formRef = useRef(null);
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  return (
    <form ref={formRef} className="auth__form">
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
                }${type === "register" ? " auth__input_focused" : ""}`}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
            }${type === "register" ? " auth__input_focused" : ""}`}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            }${type === "register" ? " auth__input_focused" : ""}`}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          />
        </label>
        <span className="auth__input-error">
          {passwordInputRef.current?.validationMessage}
        </span>
      </div>
      <span className="auth__error">{isError ? "Ошибка." : ""}</span>
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
