import './Chatbot.css';

function Chatbot() {
  const handleChatbotRedirect = () => {
    window.location.href = 'https://t.me/zhukovskyi_bot';
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
              <button type="button" className="chatbot-button" onClick={handleChatbotRedirect}>
                Відкрити чат-бот
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chatbot;
