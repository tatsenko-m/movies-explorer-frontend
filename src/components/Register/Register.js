import React from "react";
import AuthForm from "../AuthForm/AuthForm";

const Register = ({
  isAuthError,
  authErrorMessage,
  onRegister,
  savedRegisterInputs,
  setSavedRegisterInputs,
  isLoading,
  isRegistering,
}) => {
  return (
    <section className="register">
      <AuthForm
        type="register"
        heading="Добро пожаловать!"
        submitButtonText="Зарегистрироваться"
        isAuthError={isAuthError}
        authErrorMessage={authErrorMessage}
        onRegister={onRegister}
        savedRegisterInputs={savedRegisterInputs}
        setSavedRegisterInputs={setSavedRegisterInputs}
        isLoading={isLoading}
        isRegistering={isRegistering}
      />
    </section>
  );
};

export default Register;
