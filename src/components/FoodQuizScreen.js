import { useState } from 'react';
import Hammy from './Hammy';
import { foodQuestions } from '../data/foodQuizData';
import { pick, foodIdleMessages, correctMessages, wrongMessages } from '../data/hammyMessages';

const FoodQuizScreen = ({ onBack }) => {
  const [idx,      setIdx]      = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [answers,  setAnswers]  = useState([]);
  const [anim,     setAnim]     = useState('idle');
  const [msg,      setMsg]      = useState(() => pick(foodIdleMessages));
  const [done,     setDone]     = useState(false);

  const q        = foodQuestions[idx];
  const progress = (idx / foodQuestions.length) * 100;

  const handleSelect = (choice) => {
    if (answered) return;
    const correct = choice === q.answer;
    setSelected(choice);
    setAnswered(true);
    setAnim(correct ? 'correct' : 'wrong');
    setMsg(correct ? pick(correctMessages) : pick(wrongMessages));
  };

  const handleNext = () => {
    const newAnswers = [...answers, { id: q.id, correct: selected === q.answer }];
    if (idx === foodQuestions.length - 1) {
      setAnswers(newAnswers);
      setDone(true);
      setAnim('cheer');
    } else {
      setAnswers(newAnswers);
      setIdx(idx + 1);
      setSelected(null);
      setAnswered(false);
      setAnim('idle');
      setMsg(pick(foodIdleMessages));
    }
  };

  if (done) {
    const score = answers.filter(a => a.correct).length;
    const total  = foodQuestions.length;
    const pct    = Math.round((score / total) * 100);
    const color  = pct >= 80 ? '#FFD700' : pct >= 60 ? '#66BB6A' : '#FF8A65';
    const rank   = pct >= 80 ? 'S' : pct >= 60 ? 'A' : 'B';
    const doneMsg = pct >= 80
      ? '食と歯の関係、完璧に知ってるね！🏆'
      : pct >= 60
      ? '食べ物と歯の知識、なかなかだね！✨'
      : 'いっしょに食と歯の知識を増やそう！💪';

    return (
      <div>
        <div className="char-area">
          <Hammy animation="cheer" />
          <div className="bubble bubble-green">
            {doneMsg}
          </div>
        </div>
        <div className="card">
          <div className="result-header">食べ物クイズ 結果</div>
          <div className="score-circle-wrap">
            <div className="score-circle" style={{ borderColor: color }}>
              <div className="score-rank" style={{ color }}>{rank}</div>
              <div className="score-nums">
                <span style={{ color, fontSize: 36, fontWeight: 800 }}>{score}</span>
                <span style={{ color: '#90A4AE', fontSize: 16 }}> / {total}</span>
              </div>
              <div className="score-pct">{pct}%</div>
            </div>
          </div>
          <div className="result-title" style={{ color }}>
            {pct >= 80 ? '食べ物博士！' : pct >= 60 ? 'よくできました！' : '一緒に学んでいこう！'}
          </div>
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
          <div className="deco-teeth">🍎 🧀 🥛 🍬 🥜</div>
          <div className="btn-col" style={{ marginTop: 16 }}>
            <button className="btn-primary" onClick={onBack}>
              🏠 ホームに戻る
            </button>
          </div>
        </div>
      </div>
    );
  }

  const goodClass = () => {
    if (!answered) return 'food-choice-btn food-choice-good';
    if (q.answer === 'good') return 'food-choice-btn food-choice-good food-choice-answer';
    if (selected === 'good') return 'food-choice-btn food-choice-good food-choice-dim';
    return 'food-choice-btn food-choice-good food-choice-dim';
  };
  const badClass = () => {
    if (!answered) return 'food-choice-btn food-choice-bad';
    if (q.answer === 'bad') return 'food-choice-btn food-choice-bad food-choice-answer';
    if (selected === 'bad') return 'food-choice-btn food-choice-bad food-choice-dim';
    return 'food-choice-btn food-choice-bad food-choice-dim';
  };

  return (
    <div>
      <div className="char-area">
        <Hammy animation={anim} />
        <div className={`bubble ${anim === 'correct' ? 'bubble-green' : anim === 'wrong' ? 'bubble-red' : ''}`}>
          {msg.split('\n').map((l, i, arr) => (
            <span key={i}>{l}{i < arr.length - 1 && <br />}</span>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="progress-wrap">
          <div className="progress-label">
            <span>問題 {idx + 1} / {foodQuestions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="food-item-card">
          <span className="food-emoji-big">{q.emoji}</span>
          <div className="food-name">{q.food}</div>
          <div className="food-question">この食べ物、歯に良い？悪い？</div>
        </div>

        <div className="food-choices">
          <button className={goodClass()} onClick={() => handleSelect('good')} disabled={answered}>
            <span style={{ fontSize: 28 }}>😊</span>
            歯に良い
            {answered && q.answer === 'good' && <span className="food-check">✓</span>}
          </button>
          <button className={badClass()} onClick={() => handleSelect('bad')} disabled={answered}>
            <span style={{ fontSize: 28 }}>😟</span>
            歯に悪い
            {answered && q.answer === 'bad' && <span className="food-check">✓</span>}
          </button>
        </div>

        {answered && (
          <div className={`explanation ${selected === q.answer ? 'exp-correct' : 'exp-wrong'}`}>
            <span className="exp-icon">{selected === q.answer ? '🎉' : '💡'}</span>
            <div>
              <strong>
                {q.food}は歯に{q.answer === 'good' ? '良い' : '悪い'}食べ物！
              </strong>
              <br />
              {q.explanation}
            </div>
          </div>
        )}

        {answered && (
          <button className="btn-primary btn-next" onClick={handleNext}>
            {idx === foodQuestions.length - 1 ? '結果を見る 🏁' : '次の問題 →'}
          </button>
        )}

        {!answered && idx === 0 && (
          <div style={{ textAlign: 'center', marginTop: 16 }}>
            <button className="btn-back" onClick={onBack}>← ホームに戻る</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodQuizScreen;
