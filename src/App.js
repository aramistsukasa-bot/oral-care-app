import { useState } from 'react';
import HomeScreen        from './components/HomeScreen';
import QuizScreen        from './components/QuizScreen';
import ResultScreen      from './components/ResultScreen';
import TrainingScreen    from './components/TrainingScreen';
import SelfCheckScreen   from './components/SelfCheckScreen';
import SelfCheckResult   from './components/SelfCheckResult';
import SelfCheckTraining from './components/SelfCheckTraining';
import FoodQuizScreen    from './components/FoodQuizScreen';
import AgeAdviceScreen   from './components/AgeAdviceScreen';
import './App.css';

function App() {
  const [screen,        setScreen]       = useState('home');
  const [answers,       setAnswers]       = useState([]);
  const [checkAnswers,  setCheckAnswers]  = useState([]);
  const [needsTraining, setNeedsTraining] = useState([]);
  const [ageKey,        setAgeKey]        = useState(null);

  const handleQuizComplete  = (ans) => { setAnswers(ans);      setScreen('result'); };
  const handleCheckComplete = (ans) => { setCheckAnswers(ans); setScreen('selfcheck-result'); };
  const handleQuizReset     = ()    => { setAnswers([]);        setScreen('home'); };
  const handleCheckReset    = ()    => { setCheckAnswers([]);   setNeedsTraining([]); setScreen('home'); };

  return (
    <div className="app-wrap">
      <div className="app-inner" key={screen}>

        {screen === 'home' && (
          <HomeScreen
            onStartQuiz={() => setScreen('quiz')}
            onStartCheck={() => setScreen('selfcheck')}
            onStartFoodQuiz={() => setScreen('food-quiz')}
            onStartAgeAdvice={(key) => { setAgeKey(key); setScreen('age-advice'); }}
          />
        )}

        {/* ── ハミークイズ フロー ── */}
        {screen === 'quiz' && (
          <QuizScreen onComplete={handleQuizComplete} onBack={() => setScreen('home')} />
        )}
        {screen === 'result' && (
          <ResultScreen
            answers={answers}
            onTraining={() => setScreen('training')}
            onReset={handleQuizReset}
          />
        )}
        {screen === 'training' && (
          <TrainingScreen
            answers={answers}
            onBack={() => setScreen('result')}
            onReset={handleQuizReset}
          />
        )}

        {/* ── 食べ物クイズ フロー ── */}
        {screen === 'food-quiz' && (
          <FoodQuizScreen onBack={() => setScreen('home')} />
        )}

        {/* ── 年齢別アドバイス フロー ── */}
        {screen === 'age-advice' && ageKey && (
          <AgeAdviceScreen ageKey={ageKey} onBack={() => setScreen('home')} />
        )}

        {/* ── セルフチェック フロー ── */}
        {screen === 'selfcheck' && (
          <SelfCheckScreen
            onComplete={handleCheckComplete}
            onBack={() => setScreen('home')}
          />
        )}
        {screen === 'selfcheck-result' && (
          <SelfCheckResult
            answers={checkAnswers}
            onTraining={(needs) => { setNeedsTraining(needs); setScreen('selfcheck-training'); }}
            onReset={() => setScreen('selfcheck')}
            onBack={() => setScreen('home')}
          />
        )}
        {screen === 'selfcheck-training' && (
          <SelfCheckTraining
            needsTraining={needsTraining}
            onBack={() => setScreen('selfcheck-result')}
            onReset={handleCheckReset}
          />
        )}

      </div>
    </div>
  );
}

export default App;
