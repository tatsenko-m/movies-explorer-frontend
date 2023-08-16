const FormTooltip = ({ isError, errorMessage, isSuccess, successMessage }) => {
  const tooltipClasses = ["form-tooltip"];

  if (isError) {
    tooltipClasses.push("form-tooltip_type_error");
  } else if (isSuccess) {
    tooltipClasses.push("form-tooltip_type_success");
  }

  return (
    <span className={tooltipClasses.join(" ")}>
      {isError ? errorMessage : isSuccess ? successMessage : ""}
    </span>
  );
};

export default FormTooltip;
