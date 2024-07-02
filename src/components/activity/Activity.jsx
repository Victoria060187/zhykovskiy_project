import './Activity.css';

function Activity() {
  return (
    <section className="activity">
      <div>
        <div className="activity_row">
          <div className="activity-title-container">
            <div className="activity-title"> Hапрямки діяльності</div>
          </div>

          <div className="activity-content">
            <ul>
              <li className="activity-item">Відсрочка</li>
              <li className="activity-item">Оскарження рішень ВЛК</li>
              <li className="activity-item">Грошове забезпечення</li>
              <li className="activity-item">Супровід у ТЦК</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Activity;
