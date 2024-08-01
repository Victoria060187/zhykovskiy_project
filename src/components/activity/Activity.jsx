import './Activity.css';

function Activity() {
  return (
    <section id="activity" className="activity">
      <div className="activity-container">
        <div className="activity-content">
          <div className="activity-title"> Напрямки діяльності</div>
          <div className="activity-text">
            <ul>
              <li className="activity-item">
                Силова мобілізація або як убезпечити себе від незаконних дій ТЦК.
              </li>
              <li className="activity-item">
                Покарання за ухилення від призову (штрафи, арешт майна, кримінальна
                відповідальність).
              </li>
              <li className="activity-item">Відстрочка від мобілізації.</li>
              <li className="activity-item">
                Бронювання від мобілізації. Все, що потрібно знати мобілізованому працівнику і його
                роботодавцю.
              </li>
              <li className="activity-item">Як проходити ВЛК? Нюанси, які потрібно знати.</li>
              <li className="activity-item">Контракт чи мобілізація?</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Activity;
