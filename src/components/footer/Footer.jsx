import Logo from '../../assets/images/logo.jpg';
import Facebook from '../../assets/images/facebook.svg';
import Instagram from '../../assets/images/instagram.svg';
import Telegram from '../../assets/images/telegram.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-contacts">
            <h1>Зв`яжіться з нами:</h1>
            <p>Телефон: +380 63 769 95 68</p>
          </div>
          <div className="footer-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="footer-text">
            <p>© 2024 Zhukovskyi & Co. All rights reserved.</p>
          </div>
          <div className="footer-icons">
            <h1>Ми у соціальних мережах</h1>
            <a
              href="https://www.facebook.com/profile.php?id=61561431654537"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Facebook} alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/zhukovskyi_volodymyr/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Instagram} alt="instagram" />
            </a>
            <a href="https://t.me/vzhykovski" target="_blank" rel="noreferrer">
              <img src={Telegram} alt="telegram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
