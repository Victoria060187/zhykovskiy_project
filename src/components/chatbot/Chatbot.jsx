import './Chatbot.css';

function Chatbot(onClick) {
  return (
    <section className="chatbot">
      <div className="container">
        <div className="chatbot-button-container">
          <div className="chatbot-button-content">
            <button type="button" className="chatbot-button" onClick={onClick}>
              Відкрити чатбот
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Chatbot;
