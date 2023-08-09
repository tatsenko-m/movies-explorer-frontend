import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="register">
      <form className="register__form">
        <div className="register__fields">
          <label className="register__field">
            <span className="register__caption">Имя</span>
            <input
              id="name"
              name="name"
              className="register__input"
              type="text"
              minLength="2"
              maxLength="40"
              required
            />
          </label>
          <label className="register__field">
            <span className="register__caption">E-mail</span>
            <input
              id="email"
              name="email"
              className="register__input"
              type="email"
              required
            />
          </label>
        </div>
      </form>
    </section>
  );
};

export default Register;