import React from "react";
import AuthForm from "../AuthForm/AuthForm";

const Register = ({ isAuthError, authErrorMessage, onRegister }) => {
  return (
    <section className="register">
      <AuthForm
        type="register"
        heading="Добро пожаловать!"
        submitButtonText="Зарегистрироваться"
        isAuthError={isAuthError}
        authErrorMessage={authErrorMessage}
        onRegister={onRegister}
      />
    </section>
  );
};

export default Register;
