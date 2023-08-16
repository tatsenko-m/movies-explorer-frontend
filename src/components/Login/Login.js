import React from "react";
import AuthForm from "../AuthForm/AuthForm";

const Login = ({ isAuthError, authErrorMessage, onLogin }) => {
  return (
    <section className="login">
      <AuthForm
        type="login"
        heading="Рады видеть!"
        submitButtonText="Войти"
        isAuthError={isAuthError}
        authErrorMessage={authErrorMessage}
        onLogin={onLogin}
      />
    </section>
  );
};

export default Login;
