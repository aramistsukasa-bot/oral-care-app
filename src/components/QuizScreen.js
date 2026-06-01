import { useState } from 'react';
import Hammy from './Hammy';
import { allQuestions } from '../data/quizData';
import { pick, quizIdleMessages, correctMessages, wrongMessages } from '../data/hammyMessages';
import { playCorrect, playWrong, playFanfare, playClick } from '../utils/sounds';

const QUIZ_COUNT = 10;

const QuizScreen = ({ onComplete, onBack }) => {
  const [quizQuestions] = useState(() => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, QUIZ_COUNT);
  });
  const [idx,       setIdx]      = useState(0);
  const [selected,  setSelected] = useState(null);
  const [answered,  setAnswered] = useState(false);
  const [answers,   setAnswers]  = useState([]);
  const [anim,      setAnim]     = useState('idle');
  const [msg,       setMsg]      = useState(() => pick(quizIdleMessages));

  const q        = quizQuestions[idx];
  const isCorrect = selected === q.answer;
  const progress  = (idx / quizQuestions.length) * 100;

  const handleSelect = (i) => {
    if (answered) return;
    setSelected(i);
    setAnswered(true);
    const correct = i === q.answer;
    setAnim(correct ? 'correct' : 'wrong');
    setMsg(correct ? pick(correctMessages) : pick(wrongMessages));
    correct ? playCorrect() : playWrong();
  };

  const handleNext = () => {
    const newAnswers = [...answers, { id: q.id, category: q.category, correct: selected === q.answer }];
    if (idx === quizQuestions.length - 1) {
      playFanfare();
      onComplete(newAnswers);
    } else {
      playClick();
      setAnswers(newAnswers);
      setIdx(idx + 1);
      setSelected(null);
      setAnswered(false);
      setAnim('idle');
      setMsg(pick(quizIdleMessages));
    }
  };

  const choiceClass = (i) => {
    if (!answered) return selected === i ? 'choice-btn choice-sel' : 'choice-btn';
    if (i === q.answer) return 'choice-btn choice-correct';
    if (i === selected)  return 'choice-btn choice-wrong';
    return 'choice-btn choice-dim';
  };

  return (
    <div>
      <div className="char-area">
        <Hammy animation={anim} />
        <div className={`bubble ${anim === 'correct' ? 'bubble-green' : anim === 'wrong' ? 'bubble-red' : ''}`}>
          {msg}
        </div>
      </div>

      <div className="card">
        {/* プログレスバー */}
        <div className="progress-wrap">
          <div className="progress-label">
            <span>問題 {idx + 1} / {quizQuestions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* 問題文 */}
        <div className="q-num">Q{idx + 1}</div>
        <div className="q-text">{q.text}</div>

        {/* 4択ボタン */}
        <div className="choices">
          {q.choices.map((c, i) => (
            <button key={i} className={choiceClass(i)} onClick={() => handleSelect(i)}>
              <span className="choice-label">
                {['Ａ', 'Ｂ', 'Ｃ', 'Ｄ'][i]}
              </span>
              <span className="choice-text">{c}</span>
              {answered && i === q.answer && <span className="choice-mark">✓</span>}
              {answered && i === selected && i !== q.answer && <span className="choice-mark">✗</span>}
            </button>
          ))}
        </div>

        {/* 解説 */}
        {answered && (
          <div className={`explanation ${isCorrect ? 'exp-correct' : 'exp-wrong'}`}>
            <span className="exp-icon">{isCorrect ? '🎉' : '💡'}</span>
            {q.explanation}
          </div>
        )}

        {/* 次へボタン */}
        {answered && (
          <button className="btn-primary btn-next" onClick={handleNext}>
            {idx === quizQuestions.length - 1 ? '結果を見る 🏁' : '次の問題 →'}
          </button>
        )}

        {/* 戻るリンク */}
        {!answered && (
          <div style={{ textAlign: 'center', marginTop: 16 }}>
            <button className="btn-back" onClick={idx === 0 ? () => { playClick(); onBack(); } : undefined}>
              {idx === 0 ? '← ホームに戻る' : ''}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizScreen;
