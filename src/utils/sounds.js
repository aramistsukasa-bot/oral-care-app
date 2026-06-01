let _ctx = null;

const getCtx = () => {
  if (!_ctx) {
    _ctx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (_ctx.state === 'suspended') _ctx.resume();
  return _ctx;
};

const tone = (ctx, type, freq, startTime, duration, gain = 0.3) => {
  const osc = ctx.createOscillator();
  const g   = ctx.createGain();
  osc.connect(g);
  g.connect(ctx.destination);
  osc.type = type;
  osc.frequency.setValueAtTime(freq, startTime);
  g.gain.setValueAtTime(0, startTime);
  g.gain.linearRampToValueAtTime(gain, startTime + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
  osc.start(startTime);
  osc.stop(startTime + duration + 0.02);
};

/* 正解：ピンポン♪（低→高の2音） */
export const playCorrect = () => {
  const ctx = getCtx();
  const t = ctx.currentTime;
  tone(ctx, 'sine', 880,    t,        0.18, 0.28); // A5
  tone(ctx, 'sine', 1046.5, t + 0.16, 0.26, 0.28); // C6
};

/* 不正解：ブー（低いのこぎり波で下降） */
export const playWrong = () => {
  const ctx = getCtx();
  const t = ctx.currentTime;
  const osc = ctx.createOscillator();
  const g   = ctx.createGain();
  osc.connect(g);
  g.connect(ctx.destination);
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(220, t);
  osc.frequency.linearRampToValueAtTime(110, t + 0.5);
  g.gain.setValueAtTime(0.22, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
  osc.start(t);
  osc.stop(t + 0.52);
};

/* クイズ終了：明るいファンファーレ（C major arpeggio + ハーモニー） */
export const playFanfare = () => {
  const ctx = getCtx();
  const t = ctx.currentTime;
  const melody   = [[523.25, 0], [659.25, 0.13], [783.99, 0.26], [1046.5, 0.4]];
  const harmony  = [[659.25, 0], [783.99, 0.13], [987.77, 0.26], [1318.5, 0.4]];
  melody.forEach(([freq, offset]) => {
    tone(ctx, 'sine',     freq, t + offset, offset === 0.4 ? 0.55 : 0.15, 0.26);
  });
  harmony.forEach(([freq, offset]) => {
    tone(ctx, 'triangle', freq, t + offset, offset === 0.4 ? 0.55 : 0.15, 0.10);
  });
};

/* ボタンクリック：軽い2段クリック音 */
export const playClick = () => {
  const ctx = getCtx();
  const t = ctx.currentTime;
  tone(ctx, 'sine', 900,  t,        0.05, 0.09);
  tone(ctx, 'sine', 1200, t + 0.04, 0.04, 0.06);
};
