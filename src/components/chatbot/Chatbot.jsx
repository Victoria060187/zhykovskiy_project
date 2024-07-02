import './Chatbot.css';
import { useState } from 'react';

function Chatbot() {
  const [isChatbotOpen, setChatbotOpen] = useState(false);

  const handleChatbotToggle = () => {
    setChatbotOpen(!isChatbotOpen);
  };

  return (
    <section className="chatbot">
      <div className="container">
        <div className="chatbot_row">
          <div className="chatbot-title-container">
            <div className="chatbot-title"> Запис на консультацію</div>
          </div>
          <div className="chatbot-button-container">
            <div className="chatbot-button-content">
              <button type="button" className="chatbot-button" onClick={handleChatbotToggle}>
                Відкрити чатбот
              </button>
              {isChatbotOpen && (
                <div className="chatbot-container">
                  {/* Здесь можно вставить компонент вашего чатбота */}
                  <p>Чатбот відкрит!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chatbot;