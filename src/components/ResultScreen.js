import { useState } from 'react';
import Hammy from './Hammy';
import { getResult, categoryLabels } from '../data/quizData';
import { pick } from '../data/hammyMessages';

const ResultScreen = ({ answers, onTraining, onReset }) => {
  const score  = answers.filter(a => a.correct).length;
  const total  = answers.length;
  const result = getResult(score);
  const [msg]  = useState(() => pick(result.messages));

  const wrongCategories = [...new Set(
    answers.filter(a => !a.correct).map(a => a.category)
  )];

  const pct = Math.round((score / total) * 100);

  return (
    <div>
      <div className="char-area">
        <Hammy animation={result.animation} />
        <div className="bubble">
          {msg.split('\n').map((l, i, arr) => (
            <span key={i}>{l}{i < arr.length - 1 && <br />}</span>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="result-header">結果発表</div>

        {/* スコアサークル */}
        <div className="score-circle-wrap">
          <div className="score-circle" style={{ borderColor: result.color }}>
            <div className="score-rank" style={{ color: result.color }}>
              {result.rank}
            </div>
            <div className="score-nums">
              <span style={{ color: result.color, fontSize: 36, fontWeight: 800 }}>{score}</span>
              <span style={{ color: '#90A4AE', fontSize: 16 }}> / {total}</span>
            </div>
            <div className="score-pct">{pct}%</div>
          </div>
        </div>

        <div className="result-title" style={{ color: result.color }}>{result.title}</div>

        {/* 正解・不正解の内訳 */}
        <div className="score-breakdown">
          <div className="breakdown-item correct-item">
            <span>✓ 正解</span>
            <strong>{score}問</strong>
          </div>
          <div className="breakdown-item wrong-item">
            <span>✗ 不正解</span>
            <strong>{total - score}問</strong>
          </div>
        </div>

        {/* 苦手カテゴリ */}
        {wrongCategories.length > 0 && (
          <div className="weak-area">
            <div className="weak-title">📝 復習したいテーマ</div>
            <div className="weak-cats">
              {wrongCategories.map(cat => (
                <span key={cat} className="cat-badge">
                  {categoryLabels[cat]?.emoji} {categoryLabels[cat]?.label}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="deco-teeth">🦷 🦷 🦷 🦷 🦷</div>

        <div className="btn-col">
          <button className="btn-primary btn-green" onClick={onTraining}>
            📚 ケアのコツを見る
          </button>
          <button className="btn-secondary" onClick={onReset}>
            もう一度チャレンジ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
