import { useState } from 'react';
import Hammy from './Hammy';
import { questions } from '../data/questions';

const BUBBLE_MSGS = {
  idle:    'さあ、次の質問だよ！正直に答えてね！',
  correct: 'よかった！問題ないよ！',
  wrong:   'わかった！記録しておくね。',
};

const SelfCheckScreen = ({ onComplete, onBack }) => {
  const [idx,      setIdx]      = useState(0);
  const [answers,  setAnswers]  = useState([]);
  const [anim,     setAnim]     = useState('idle');
  const [disabled, setDisabled] = useState(false);

  const q        = questions[idx];
  const progress = (idx / questions.length) * 100;

  const handleAnswer = (answer) => {
    if (disabled) return;
    setDisabled(true);

    const newAnim    = answer ? 'wrong' : 'correct';
    const newAnswers = [...answers, { questionId: q.id, answer, category: q.category }];
    setAnim(newAnim);
    setAnswers(newAnswers);

    setTimeout(() => {
      const next = idx + 1;
      if (next >= questions.length) {
        onComplete(newAnswers);
      } else {
        setIdx(next);
        setAnim('idle');
        setDisabled(false);
      }
    }, 650);
  };

  return (
    <div>
      <div style={{ marginBottom: 8 }}>
        <button className="btn-back" onClick={onBack}>← ホームへ戻る</button>
      </div>

      <div className="char-area">
        <Hammy animation={anim} />
        <div className={`bubble${anim === 'correct' ? ' bubble-green' : anim === 'wrong' ? ' bubble-red' : ''}`}>
          {idx === 0 && anim === 'idle'
            ? '当てはまると思ったら「はい」、そうでなければ「いいえ」を選んでね！'
            : BUBBLE_MSGS[anim]}
        </div>
      </div>

      <div className="progress-wrap">
        <div className="progress-label">
          <span>質問 {idx + 1} / {questions.length}</span>
          <span>口腔機能セルフチェック</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="card">
        <div className="q-num">{q.emoji} {q.categoryLabel}</div>
        <div className="q-text">{q.text}</div>
        <p style={{ fontSize: 13, color: '#78909C', lineHeight: 1.6, marginBottom: 20 }}>
          {q.detail}
        </p>

        <div className="btn-col">
          <button
            className="btn-primary"
            style={{ background: 'linear-gradient(135deg, #EF5350, #E53935)', boxShadow: '0 4px 14px rgba(239,83,80,.35)' }}
            disabled={disabled}
            onClick={() => handleAnswer(true)}
          >
            はい（当てはまる）
          </button>
          <button
            className="btn-secondary"
            disabled={disabled}
            onClick={() => handleAnswer(false)}
          >
            いいえ（当てはまらない）
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelfCheckScreen;
