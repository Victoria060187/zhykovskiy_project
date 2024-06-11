import MainImg from '../../assets/images/main_page_photo.jpg';
import './MainPage.css';

function MainPage() {
  return (
    <section className="main-page" style={{ backgroundImage: `url(${MainImg})` }}>
      <div className="container">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam iusto accusamus et
          suscipit veniam assumenda obcaecati. Reprehenderit libero, numquam, modi, velit provident
          doloremque ut fugit eaque blanditiis nesciunt facilis doloribus!
        </p>
      </div>
    </section>
  );
}

export default MainPage;
