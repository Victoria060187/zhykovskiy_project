import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header_row">
          <div className="header_logo">
            <div>logo</div>
            <h3 className="header_h3">Zhukovskyi & Co</h3>
          </div>
          <nav className="header_nav">
            <div className="header_nav-main">
              <ul>
                <li className="heder_nav a">Головна</li>
                <li className="heder_nav a">Напрямки діяльності</li>
                <li className="heder_nav a">Про нас</li>
                <li className="heder_nav a">Запис на консультацію</li>
                <li className="heder_nav a">Контакти</li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
