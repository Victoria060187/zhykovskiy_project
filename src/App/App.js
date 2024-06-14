import MainPage from '../components/mainPage/MainPage';
import './App.scss';
import Header from '../components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="main_page-content">
          <MainPage />
        </div>
      </div>
    </div>
  );
}

export default App;
