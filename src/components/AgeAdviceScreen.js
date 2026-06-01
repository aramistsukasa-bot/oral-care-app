import Hammy from './Hammy';
import { ageGroups } from '../data/ageAdvice';

const AgeAdviceScreen = ({ ageKey, onBack }) => {
  const group = ageGroups[ageKey];

  return (
    <div>
      <div className="char-area">
        <Hammy animation="cheer" />
        <div className="bubble bubble-green">
          {group.hammyMsg.split('\n').map((l, i, arr) => (
            <span key={i}>{l}{i < arr.length - 1 && <br />}</span>
          ))}
        </div>
      </div>

      <div className="age-hero" style={{ background: group.bgGradient, borderColor: group.borderColor }}>
        <div className="age-hero-emoji">{group.emoji}</div>
        <div className="age-hero-label" style={{ color: group.color }}>{group.label}</div>
        <div className="age-hero-sublabel">{group.sublabel}</div>
        <div className="age-hero-title" style={{ color: group.color }}>
          口腔ケアアドバイス
        </div>
      </div>

      {group.sections.map((section, si) => (
        <div key={si} className="age-section-card" style={{ borderColor: group.borderColor }}>
          <div className="age-section-header">
            <span className="age-section-emoji">{section.emoji}</span>
            <span className="age-section-title" style={{ color: group.color }}>
              {section.title}
            </span>
          </div>
          <ul className="age-item-list">
            {section.items.map((item, ii) => (
              <li key={ii} className="age-item">
                <span className="age-item-dot" style={{ background: group.color }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div style={{ marginTop: 8, marginBottom: 16 }}>
        <button className="btn-secondary" onClick={onBack}>
          ← ホームに戻る
        </button>
      </div>
    </div>
  );
};

export default AgeAdviceScreen;
