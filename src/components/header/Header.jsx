import './Header.css';
import Logo from '../../assets/images/logo.jpg';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-row">
          <div className="header-logo">
            <img src={Logo} alt="logo" />
          </div>
          <nav className="header-nav">
            <div className="header-nav--main">
              <ul>
                <li className="header-nav a">
                  <a href="#home">Головна</a>
                </li>
                <li className="header-nav a">
                  <a href="#activity">Напрямки діяльності</a>
                </li>
                <li className="header-nav a">
                  <a href="#aboutUs">Про нас</a>
                </li>
                <li className="header-nav a">
                  <a href="#consultation">Запис на консультацію</a>
                </li>
                <li className="header-nav a">
                  <a href="#contacts">Контакти</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
