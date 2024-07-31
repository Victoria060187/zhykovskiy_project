import MainImg from '../../assets/images/main_page_photo.jpg';
import './MainPage.css';

function MainPage() {
  return (
    <section id="home" className="main-page" style={{ backgroundImage: `url(${MainImg})` }}>
      <div className="main-container">
        <div className="main-content">
          <div className="main-title">Zhukovskyi & Co</div>
          <div className="main-text">
            Юридична компанія Zhukovskyi & Co пропонує сучасний підхід до вирішення юридичних
            питань. Ми спілкуємося з клієнтами зрозумілою мовою, щоб вони чітко розуміли процес і
            майбутні дії. Наша мета - підвищувати обізнаність у законодавстві, що допомагає
            захиститися від свавілля та маніпуляцій. Юриспруденція може бути простою, якщо
            пояснювати її без зайвого пафосу.
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainPage;
