import Hammy from './Hammy';
import { trainings } from '../data/trainings';

const SelfCheckTraining = ({ needsTraining, onBack, onReset }) => {
  const categories = needsTraining && needsTraining.length > 0
    ? needsTraining
    : Object.keys(trainings);

  const exercises = categories.flatMap(cat => trainings[cat] || []);

  return (
    <div>
      <div className="char-area">
        <Hammy animation="cheer" />
        <div className="bubble bubble-green">
          一緒にトレーニングしよう！<br />
          毎日続けることが大切だよ！💪
        </div>
      </div>

      <div className="card">
        <div className="result-header">おすすめトレーニング</div>
        <div className="deco-teeth">🦷 🦷 🦷 🦷 🦷</div>
      </div>

      {exercises.map(ex => (
        <div className="tip-card" key={ex.id}>
          <div className="tip-header">
            <span className="tip-emoji">{ex.emoji}</span>
            <div>
              <div className="tip-title">{ex.name}</div>
              <div style={{ fontSize: 11, color: '#80CBC4', fontWeight: 600, marginTop: 2 }}>
                {ex.category}
              </div>
            </div>
          </div>
          <ol style={{ paddingLeft: 18, marginBottom: 10 }}>
            {ex.steps.map((step, i) => (
              <li key={i} style={{ fontSize: 13, color: '#546E7A', lineHeight: 1.65, marginBottom: 5 }}>
                {step}
              </li>
            ))}
          </ol>
          <div style={{
            background: '#E0F7FA', borderRadius: 8,
            padding: '6px 12px', fontSize: 12, color: '#00838F', fontWeight: 600,
          }}>
            🔁 {ex.frequency}
          </div>
        </div>
      ))}

      <div className="card">
        <p className="disclaimer">
          ※ 体調不良や痛みがある場合は無理せずお休みください。<br />
          ※ 気になる症状は医療機関へご相談ください。
        </p>
        <div className="btn-col">
          <button className="btn-secondary" onClick={onBack}>← 結果に戻る</button>
          <button className="btn-primary"   onClick={onReset}>ホームへ戻る</button>
        </div>
      </div>
    </div>
  );
};

export default SelfCheckTraining;
