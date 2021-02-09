interface HeaderProps {
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header: React.FC<HeaderProps> = ({ isNavOpen, setIsNavOpen }) => {
  //icon source class
  const IconClass = isNavOpen
    ? './images/icon-close.svg'
    : './images/icon-hamburger.svg';
  //logo source class
  const logoClass = isNavOpen
    ? './images/bookmark-light.svg'
    : './images/logo-bookmark.svg';
  return (
    <header>
      <div className="logo__container">
        <img src={logoClass} alt="bookmark-logo" />
      </div>
      <nav>
        <ul className="nav__list">
          <li className="nav__item">Features</li>
          <li className="nav__item">Pricing</li>
          <li className="nav__item">Contact</li>
          <li className="nav__item login__button">Login</li>
        </ul>
      </nav>
      <div className="hamburger__icon" onClick={() => setIsNavOpen(!isNavOpen)}>
        <img src={IconClass} alt="icon-close / icon-hamburger" />
      </div>
    </header>
  );
};

export default Header;
