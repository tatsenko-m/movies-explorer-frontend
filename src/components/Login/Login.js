import React from "react";
import AuthForm from '../AuthForm/AuthForm';

const Login = () => {
  return (
    <section className="login">
      <AuthForm type="login" heading="Рады видеть!" submitButtonText="Войти" />
    </section>
  );
};

export default Login;
