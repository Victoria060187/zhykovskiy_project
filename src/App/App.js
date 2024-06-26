import './App.scss';
import Header from '../components/header/Header';
import MainPage from '../components/mainPage/MainPage';
import AboutUs from '../components/aboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="main_page-content">
          <MainPage />
        </div>
        <AboutUs />
      </div>
    </div>
  );
}

export default App;
