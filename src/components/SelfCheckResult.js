import Hammy from './Hammy';
import { calculateResults } from '../data/questions';

const ANIM_MAP = { happy: 'cheer', normal: 'idle', worried: 'wrong' };

const SelfCheckResult = ({ answers, onTraining, onReset, onBack }) => {
  const result    = calculateResults(answers);
  const animation = ANIM_MAP[result.characterExpression] || 'idle';

  const bubbleClass =
    result.characterExpression === 'happy'   ? ' bubble-green' :
    result.characterExpression === 'worried' ? ' bubble-red'   : '';

  const levelBg    =
    result.characterExpression === 'happy'   ? { bg: '#E8F5E9', color: '#2E7D32' } :
    result.characterExpression === 'worried' ? { bg: '#FFEBEE', color: '#C62828' } :
                                               { bg: '#E0F7FA', color: '#006064' };

  return (
    <div>
      <div className="char-area">
        <Hammy animation={animation} />
        <div className={`bubble${bubbleClass}`}>
          {result.message.split('\n').map((l, i) => (
            <span key={i}>{l}{i === 0 && <br />}</span>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="result-header">セルフチェック結果</div>

        <div style={{ textAlign: 'center', marginBottom: 18 }}>
          <div style={{
            display: 'inline-block', padding: '10px 24px',
            borderRadius: 20, fontSize: 15, fontWeight: 800,
            background: levelBg.bg, color: levelBg.color,
          }}>
            {result.level}
          </div>
        </div>

        <div className="score-breakdown" style={{ marginBottom: 16 }}>
          <div className="breakdown-item correct-item">
            <span>いいえ</span>
            <strong>{result.totalQuestions - result.totalScore}問</strong>
          </div>
          <div className="breakdown-item wrong-item">
            <span>はい</span>
            <strong>{result.totalScore}問</strong>
          </div>
        </div>

        {/* カテゴリ別内訳 */}
        <div style={{ marginBottom: 16 }}>
          {Object.entries(result.categoryScores).map(([cat, data]) => (
            <div key={cat} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '9px 0', borderBottom: '1px solid #F0F4F8',
            }}>
              <span style={{ fontSize: 18 }}>{data.emoji}</span>
              <span style={{ flex: 1, fontSize: 13, color: '#546E7A', fontWeight: 600 }}>
                {data.label}
              </span>
              <span style={{
                fontSize: 12, fontWeight: 700,
                color: data.score > 0 ? '#E57373' : '#66BB6A',
              }}>
                {data.score > 0 ? `${data.score}/${data.total} 要注意` : '問題なし ✓'}
              </span>
            </div>
          ))}
        </div>

        <div className="deco-teeth">🦷 🦷 🦷 🦷 🦷</div>

        <div className="btn-col">
          {result.needsTraining.length > 0 && (
            <button className="btn-primary btn-green" onClick={() => onTraining(result.needsTraining)}>
              🏃 トレーニングを見る
            </button>
          )}
          <button className="btn-secondary" onClick={onReset}>もう一度チェック</button>
          <button className="btn-back" onClick={onBack}>ホームへ戻る</button>
        </div>
      </div>
    </div>
  );
};

export default SelfCheckResult;
