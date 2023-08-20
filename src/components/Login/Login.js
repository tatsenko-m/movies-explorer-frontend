import React from "react";
import AuthForm from "../AuthForm/AuthForm";

const Login = ({
  isAuthError,
  authErrorMessage,
  onLogin,
  savedLoginInputs,
  setSavedLoginInputs,
  isLoading,
  isRegistering,
}) => {
  return (
    <section className="login">
      <AuthForm
        type="login"
        heading="Рады видеть!"
        submitButtonText="Войти"
        isAuthError={isAuthError}
        authErrorMessage={authErrorMessage}
        onLogin={onLogin}
        savedLoginInputs={savedLoginInputs}
        setSavedLoginInputs={setSavedLoginInputs}
        isLoading={isLoading}
        isRegistering={isRegistering}
      />
    </section>
  );
};

export default Login;
