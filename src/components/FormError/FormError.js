const FormError = ({ isError, errorMessage }) => {
  return (
    <span className="form-error">
      {isError ? errorMessage : ""}
    </span>
  );
};

export default FormError;
