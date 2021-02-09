const Header: React.FC = () => {
  return (
    <header>
      <div className="logo__container">
        <img src="./images/logo-bookmark.svg" alt="bookmark-logo" />
      </div>
      <nav>
        <ul className="nav__list">
          <li className="nav__item">Features</li>
          <li className="nav__item">Pricing</li>
          <li className="nav__item">Contact</li>
          <li className="nav__item login__button">Login</li>
        </ul>
      </nav>
      <div className="hamburger__icon">
        <img src="./images/icon-hamburger.svg" alt="hamburger-icon" />
      </div>
    </header>
  );
};

export default Header;
