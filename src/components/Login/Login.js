import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="login">
      <form className="login__form">
        <div className="login__fields">
          <label className="login__field">
            <span className="login__caption">Имя</span>
            <input
              id="name"
              name="name"
              className="login__input"
              type="text"
              minLength="2"
              maxLength="40"
              required
            />
          </label>
          <label className="login__field">
            <span className="login__caption">E-mail</span>
            <input
              id="email"
              name="email"
              className="login__input"
              type="email"
              required
            />
          </label>
        </div>
      </form>
    </section>
  );
};

export default Login;
