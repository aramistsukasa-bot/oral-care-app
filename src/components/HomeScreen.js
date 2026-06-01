import { useState } from 'react';
import Hammy from './Hammy';
import { funFacts } from '../data/funFacts';
import { homeMessages, pick } from '../data/hammyMessages';
import { playClick } from '../utils/sounds';

const HomeScreen = ({ onStartQuiz, onStartCheck, onStartFoodQuiz, onStartAgeAdvice }) => {
  const [msg]  = useState(() => pick(homeMessages));
  const [fact] = useState(() => pick(funFacts));

  return (
    <div>
      <div className="app-logo">
        <div className="app-logo-icon">🦷</div>
        <div className="app-logo-title">ハミーのお口ケア</div>
        <div className="app-logo-sub">ORAL CARE APP</div>
      </div>

      <div className="char-area">
        <Hammy animation="idle" />
        <div className="bubble">
          {msg.split('\n').map((l, i, arr) => (
            <span key={i}>{l}{i < arr.length - 1 && <br />}</span>
          ))}
        </div>
      </div>

      <div className="funfact-card">
        <div className="funfact-header">
          <span className="funfact-badge">今日の豆知識</span>
          ✨
        </div>
        <div className="funfact-content">
          <span className="funfact-emoji">{fact.emoji}</span>
          <div>
            <div className="funfact-title">{fact.title}</div>
            <div className="funfact-text">{fact.fact}</div>
          </div>
        </div>
      </div>

      <div className="home-menu">
        <div className="menu-card menu-card-check" onClick={() => { playClick(); onStartCheck(); }} role="button" tabIndex={0}>
          <div className="menu-card-icon">🔍</div>
          <div className="menu-card-title">口腔機能セルフチェック</div>
          <div className="menu-card-desc">
            嚥下・咀嚼・発音・舌の動きをチェック。<br />
            結果に合わせたトレーニングを提案します。
          </div>
          <div className="menu-card-badge">10問 / はい・いいえ</div>
        </div>

        <div className="menu-card menu-card-quiz" onClick={() => { playClick(); onStartQuiz(); }} role="button" tabIndex={0}>
          <div className="menu-card-icon">❓</div>
          <div className="menu-card-title">ハミークイズ</div>
          <div className="menu-card-desc">
            口腔ケアの知識を4択クイズでチェック！<br />
            ブラッシング・虫歯・歯周病など幅広く出題。
          </div>
          <div className="menu-card-badge">10問 / 4択</div>
        </div>

        <div className="menu-card menu-card-food" onClick={() => { playClick(); onStartFoodQuiz(); }} role="button" tabIndex={0}>
          <div className="menu-card-icon">🍎</div>
          <div className="menu-card-title">食べ物と歯のクイズ</div>
          <div className="menu-card-desc">
            この食べ物は歯に良い？悪い？<br />
            食と口腔ケアの関係を理由つきで楽しく学ぼう！
          </div>
          <div className="menu-card-badge">10問 / 良い・悪い</div>
        </div>
      </div>

      <div className="age-select-section">
        <div className="age-select-title">📋 年齢別アドバイス</div>
        <div className="age-select-desc">あなたの年齢層を選んでね</div>
        <div className="age-btns">
          <button className="age-btn age-btn-child" onClick={() => { playClick(); onStartAgeAdvice('child'); }}>
            <span className="age-btn-emoji">🧒</span>
            <span className="age-btn-label">子ども</span>
            <span className="age-btn-sub">15歳以下</span>
          </button>
          <button className="age-btn age-btn-adult" onClick={() => { playClick(); onStartAgeAdvice('adult'); }}>
            <span className="age-btn-emoji">🧑</span>
            <span className="age-btn-label">大人</span>
            <span className="age-btn-sub">16〜64歳</span>
          </button>
          <button className="age-btn age-btn-senior" onClick={() => { playClick(); onStartAgeAdvice('senior'); }}>
            <span className="age-btn-emoji">👴</span>
            <span className="age-btn-label">高齢者</span>
            <span className="age-btn-sub">65歳以上</span>
          </button>
        </div>
      </div>

      <p className="disclaimer">
        ※ このアプリは口腔ケアの学習を目的としています。<br />
        気になる症状は歯科医院にご相談ください。
      </p>
    </div>
  );
};

export default HomeScreen;
