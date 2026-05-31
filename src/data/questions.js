export const questions = [
  {
    id: 1,
    category: 'swallowing',
    categoryLabel: '嚥下（えんげ）',
    emoji: '🌊',
    text: '食事中によくむせることがありますか？',
    detail: '水や食べ物を飲み込む際に、咳き込んだりむせたりする',
  },
  {
    id: 2,
    category: 'swallowing',
    categoryLabel: '嚥下（えんげ）',
    emoji: '🌊',
    text: '飲み込んだあとも、口の中に食べ物が残ることがありますか？',
    detail: '食後に食べ物のカスが口の中や喉に残る感じがする',
  },
  {
    id: 3,
    category: 'swallowing',
    categoryLabel: '嚥下（えんげ）',
    emoji: '🌊',
    text: '飲み物を飲む時に口からこぼれることがありますか？',
    detail: '水やスープが口角からこぼれてしまうことがある',
  },
  {
    id: 4,
    category: 'chewing',
    categoryLabel: '咀嚼（そしゃく）',
    emoji: '🦷',
    text: '硬いものを噛むのが難しいと感じますか？',
    detail: 'ステーキや根菜類など、硬い食べ物を噛むのに困難を感じる',
  },
  {
    id: 5,
    category: 'chewing',
    categoryLabel: '咀嚼（そしゃく）',
    emoji: '🦷',
    text: '食事に以前よりも時間がかかるようになりましたか？',
    detail: '同じ量の食事でも、以前と比べて食べ終わるのに時間がかかる',
  },
  {
    id: 6,
    category: 'chewing',
    categoryLabel: '咀嚼（そしゃく）',
    emoji: '🦷',
    text: '食べ物を噛んでいる時に、口の中でうまくまとめられないことがありますか？',
    detail: '噛んでいる最中に食べ物がバラバラになり、飲み込みにくい',
  },
  {
    id: 7,
    category: 'pronunciation',
    categoryLabel: '発音',
    emoji: '🗣️',
    text: '「パ・タ・カ・ラ」などの音が発音しにくいと感じますか？',
    detail: '「パパパ」「タタタ」「カカカ」「ラララ」を速く繰り返すのが難しい',
  },
  {
    id: 8,
    category: 'pronunciation',
    categoryLabel: '発音',
    emoji: '🗣️',
    text: '言葉がはっきりしないと指摘されることがありますか？',
    detail: '話し声がこもる、ろれつが回らないと言われることがある',
  },
  {
    id: 9,
    category: 'tongue',
    categoryLabel: '舌の動き',
    emoji: '👅',
    text: '舌を口の中でうまく動かせないと感じることがありますか？',
    detail: '舌が思うように動かず、食べ物をまとめたり移動させたりしにくい',
  },
  {
    id: 10,
    category: 'tongue',
    categoryLabel: '舌の動き',
    emoji: '👅',
    text: '舌の先を上の前歯の裏につけるのが難しいですか？',
    detail: '舌先を上あごや前歯の裏に触れさせる動きがやりにくい',
  },
];

const CATEGORY_CONFIG = {
  swallowing: { label: '嚥下', emoji: '🌊' },
  chewing:    { label: '咀嚼', emoji: '🦷' },
  pronunciation: { label: '発音', emoji: '🗣️' },
  tongue:     { label: '舌の動き', emoji: '👅' },
};

export const calculateResults = (answers) => {
  const totalScore = answers.filter((a) => a.answer).length;

  const categoryScores = {};
  Object.keys(CATEGORY_CONFIG).forEach((cat) => {
    const catQuestions = questions.filter((q) => q.category === cat);
    const catYes = answers.filter((a) => {
      const q = questions.find((q) => q.id === a.questionId);
      return q && q.category === cat && a.answer;
    });
    categoryScores[cat] = {
      score: catYes.length,
      total: catQuestions.length,
      label: CATEGORY_CONFIG[cat].label,
      emoji: CATEGORY_CONFIG[cat].emoji,
    };
  });

  let level, levelClass, message, characterExpression;
  if (totalScore <= 2) {
    level = '口腔機能は良好です！';
    levelClass = 'level-good';
    message = 'すばらしい！口腔機能は良好です。\nこのまま維持していきましょう！';
    characterExpression = 'happy';
  } else if (totalScore <= 5) {
    level = 'やや注意が必要です';
    levelClass = 'level-caution';
    message = 'いくつか気になる点があります。\nトレーニングで改善していきましょう！';
    characterExpression = 'normal';
  } else if (totalScore <= 8) {
    level = '注意が必要です';
    levelClass = 'level-warning';
    message = '口腔機能に注意が必要です。\n毎日のトレーニングを続けましょう。';
    characterExpression = 'worried';
  } else {
    level = '専門家への相談をおすすめします';
    levelClass = 'level-danger';
    message = 'トレーニングとともに、\n医療機関への相談もご検討ください。';
    characterExpression = 'worried';
  }

  const needsTraining = Object.keys(CATEGORY_CONFIG).filter(
    (cat) => categoryScores[cat].score > 0
  );

  return {
    totalScore,
    totalQuestions: questions.length,
    categoryScores,
    level,
    levelClass,
    message,
    characterExpression,
    needsTraining,
  };
};
