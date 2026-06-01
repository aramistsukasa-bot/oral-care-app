import Hammy from './Hammy';

const ALL_TIPS = [
  {
    category: 'brushing', emoji: '🪥', title: '正しいブラッシング',
    tips: [
      '歯ブラシは1ヶ月ごとに交換しよう',
      '鉛筆を持つくらいの軽い力で磨く',
      '1本1本の歯を意識して2〜3分かける',
      '歯と歯茎の境目を45度の角度で磨く',
    ],
  },
  {
    category: 'floss', emoji: '🧵', title: 'フロス・歯間ブラシ',
    tips: [
      '歯ブラシだけでは汚れの60%しか落とせない',
      '毎日1回、フロスや歯間ブラシを使おう',
      '歯と歯の間をゆっくり前後に動かす',
      '出血する場合はやさしく続けると改善することも',
    ],
  },
  {
    category: 'cavity', emoji: '🦷', title: '虫歯を防ぐポイント',
    tips: [
      '食後すぐ歯磨きで酸の時間を短くする',
      '甘い飲み物・間食は回数を減らす',
      'フッ素入り歯磨き粉を使おう',
      '定期的に歯科検診を受ける（年2回が目安）',
    ],
  },
  {
    category: 'gum', emoji: '🌿', title: '歯周病の予防',
    tips: [
      '歯と歯茎の境目の歯垢をしっかり取り除く',
      '禁煙は歯周病リスクを大きく下げる',
      '糖尿病などの全身疾患のコントロールも大切',
      '歯科でのクリーニング（PMTC）を定期的に',
    ],
  },
  {
    category: 'saliva', emoji: '💧', title: '唾液を増やすコツ',
    tips: [
      'よく噛んで食べると唾液が増える',
      '水分をこまめに摂ってお口の乾燥を防ぐ',
      '「パタカラ体操」で口の周りを動かそう',
      '鼻呼吸を意識する（口呼吸は唾液を減らす）',
    ],
  },
  {
    category: 'nutrition', emoji: '🥛', title: '歯を強くする食べ物',
    tips: [
      'カルシウム：乳製品・小魚・豆腐',
      'ビタミンD：魚・卵・きのこ類',
      'ビタミンC：野菜・果物（歯茎を健康に）',
      '硬いものを噛むことで顎の発達を助ける',
    ],
  },
];

const EXERCISES = [
  {
    emoji: '🗣️', name: 'パタカラ体操',
    desc: '「パ・タ・カ・ラ」を1回10秒×3セット。\nお口の筋肉を鍛えて飲み込む力を高めよう！',
  },
  {
    emoji: '👄', name: 'あいうべ体操',
    desc: '「あ・い・う・べ」を30回繰り返す。\n舌の動きを改善し、鼻呼吸をサポート！',
  },
  {
    emoji: '💪', name: '口輪筋トレーニング',
    desc: '「う〜」「い〜」を交互に10回。\n口まわりの筋肉を強化してかむ力アップ！',
  },
];

const TrainingScreen = ({ answers, onBack, onReset }) => {
  const wrongCats = answers
    ? [...new Set(answers.filter(a => !a.correct).map(a => a.category))]
    : [];

  const tips = wrongCats.length > 0
    ? ALL_TIPS.filter(t => wrongCats.includes(t.category))
    : ALL_TIPS.slice(0, 3);

  return (
    <div>
      <div className="char-area">
        <Hammy animation="cheer" />
        <div className="bubble bubble-green">
          毎日の積み重ねが大切だよ！<br />
          一緒に頑張ろう！🦷✨
        </div>
      </div>

      <div className="card">
        <div className="result-header">口腔ケアのコツ</div>
        <div className="deco-teeth">🦷 🦷 🦷 🦷 🦷</div>
      </div>

      {/* ケアのヒント */}
      {tips.map(t => (
        <div className="tip-card" key={t.category}>
          <div className="tip-header">
            <span className="tip-emoji">{t.emoji}</span>
            <span className="tip-title">{t.title}</span>
          </div>
          <ul className="tip-list">
            {t.tips.map((item, i) => (
              <li key={i} className="tip-item">
                <span className="tip-dot" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* お口の体操 */}
      <div className="card" style={{ marginTop: 8 }}>
        <div className="section-label">🏃 お口の体操</div>
      </div>
      {EXERCISES.map(ex => (
        <div className="tip-card" key={ex.name}>
          <div className="tip-header">
            <span className="tip-emoji">{ex.emoji}</span>
            <span className="tip-title">{ex.name}</span>
          </div>
          <p className="tip-desc">
            {ex.desc.split('\n').map((l, i) => <span key={i}>{l}<br /></span>)}
          </p>
        </div>
      ))}

      <div className="card">
        <p className="disclaimer">
          ※ 体調不良や痛みがある場合は無理せずお休みください。<br />
          ※ 気になる症状は歯科医院へご相談ください。
        </p>
        <div className="btn-col">
          <button className="btn-secondary" onClick={onBack}>← 結果に戻る</button>
          <button className="btn-primary"   onClick={onReset}>ホームへ戻る</button>
        </div>
      </div>
    </div>
  );
};

export default TrainingScreen;
