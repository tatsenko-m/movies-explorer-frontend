import React from 'react';
import { Link } from 'react-router-dom';

const AccountLink = () => {
  return (
    <Link to="/profile" className="account-link">
      <p className="account-link_text">Аккаунт</p>
      <div className="account-link_icon"></div>
    </Link>
  );
};

export default AccountLink;