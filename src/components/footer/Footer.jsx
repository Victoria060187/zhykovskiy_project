import Logo from '../../assets/images/logo.jpg';
import Facebook from '../../assets/images/facebook.svg';
import Instagram from '../../assets/images/instagram.svg';
import Telegram from '../../assets/images/telegram.svg';
import './Footer.css';

function Footer() {
  return (
    <footer id="contacts" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-contacts">
            <h1>Наші контакти:</h1>
            <p>+380 63 769 95 68</p>
          </div>
          <div className="footer-logo">
            <img src={Logo} alt="logo" />
            <div className="footer-text">
              <p>© 2024 Zhukovskyi & Co. All rights reserved.</p>
            </div>
          </div>
          <div className="footer-icons">
            <h1>Ми у соціальних мережах</h1>
            <a
              className="social-icon"
              href="https://www.facebook.com/profile.php?id=61561431654537"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Facebook} alt="facebook" />
            </a>
            <a
              className="social-icon"
              href="https://www.instagram.com/zhukovskyi_volodymyr/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Instagram} alt="instagram" />
            </a>
            <a
              className="social-icon"
              href="https://t.me/vzhykovski"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Telegram} alt="telegram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
