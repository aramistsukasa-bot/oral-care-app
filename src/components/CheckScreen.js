import { useState } from 'react';
import Character from './Character';
import { questions, calculateResults } from '../data/questions';

const characterMessages = {
  swallowing: '飲み込みに関する質問です。\n当てはまるものを選んでね！',
  chewing: '噛む力に関する質問です。\n正直に答えてみてください！',
  pronunciation: '発音に関する質問です。\nゆっくり考えてみてください！',
  tongue: '舌の動きに関する質問です。\nもう少しで終わります！',
};

const CheckScreen = ({ onComplete, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, { questionId: currentQuestion.id, answer }];

    if (currentIndex === questions.length - 1) {
      const results = calculateResults(newAnswers);
      onComplete(newAnswers, results);
    } else {
      setAnswers(newAnswers);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex === 0) {
      onBack();
    } else {
      setCurrentIndex(currentIndex - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  return (
    <div>
      <div className="character-wrapper">
        <Character expression="normal" />
        <div className="speech-bubble">
          {characterMessages[currentQuestion.category].split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="progress-bar-wrapper">
          <div className="progress-label">
            <span>質問 {currentIndex + 1} / {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="question-number">
          <span>{currentIndex + 1}</span>
          <span className="category-badge">
            {currentQuestion.emoji} {currentQuestion.categoryLabel}
          </span>
        </div>

        <div className="question-text">{currentQuestion.text}</div>
        <div className="question-detail">{currentQuestion.detail}</div>

        <div className="answer-buttons">
          <button className="btn-answer yes" onClick={() => handleAnswer(true)}>
            <span className="answer-emoji">😟</span>
            <span>はい</span>
          </button>
          <button className="btn-answer no" onClick={() => handleAnswer(false)}>
            <span className="answer-emoji">😊</span>
            <span>いいえ</span>
          </button>
        </div>

        <div style={{ marginTop: 20, textAlign: 'center' }}>
          <button
            onClick={handleBack}
            style={{
              background: 'none',
              border: 'none',
              color: '#90A4AE',
              fontSize: 13,
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            ← {currentIndex === 0 ? 'ホームに戻る' : '前の質問に戻る'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckScreen;
