import './App.scss';

import Header from '../components/header/Header';
import MainPage from '../components/mainPage/MainPage';
import AboutUs from '../components/aboutUs/AboutUs';
import Activity from '../components/activity/Activity';
import Chatbot from '../components/chatbot/Chatbot';
import Footer from '../components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Activity />
      <AboutUs />
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;
