import { Link } from 'react-router-dom';

const AccountLink = ({ onCloseMenu }) => {
  return (
    <Link to="/profile" className="account-link" onClick={onCloseMenu}>
      <p className="account-link_text">Аккаунт</p>
      <div className="account-link_icon"></div>
    </Link>
  );
};

export default AccountLink;