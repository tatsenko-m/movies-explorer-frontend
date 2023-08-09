import React from "react";
import AuthForm from '../AuthForm/AuthForm';

const Register = () => {
  return (
    <section className="register">
      <AuthForm type="register" heading="Добро пожаловать!" submitButtonText="Зарегистрироваться" />
    </section>
  );
};

export default Register;