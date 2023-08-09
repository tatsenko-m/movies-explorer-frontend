import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

const Logo = () => {
  return (
    <>
      <Link to="/" className="logo-link">
        <img
          className="logo-link__logo"
          src={logo}
          alt="Логотип учебного проекта"
        />
      </Link>
    </>
  );
};

export default Logo;
