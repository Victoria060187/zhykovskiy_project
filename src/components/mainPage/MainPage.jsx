import MainImg from '../../assets/images/main_page_photo.jpg';
import './MainPage.css';

function MainPage() {
  return (
    <section className="main-page" style={{ backgroundImage: `url(${MainImg})` }}>
      <div className="main-container">
        <div className="main-content">
          <div className="main-title">Zhukovskiy & Co</div>
          <div className="main-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime inventore ratione
            dolorum vitae ea explicabo quisquam dolorem ullam tempora tempore velit repellendus
            soluta voluptates a, qui, eos aliquid perspiciatis facere.
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainPage;
