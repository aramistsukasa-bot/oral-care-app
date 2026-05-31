/* ハミー：🦷絵文字ボディ＋SVG顔オーバーレイ */
const Hammy = ({ animation = 'idle' }) => {
  const isHappy = animation === 'correct' || animation === 'cheer';
  const isSad   = animation === 'wrong';

  return (
    <div
      className={`hammy-anim hammy-${animation}`}
      style={{ position: 'relative', width: 170, height: 200 }}
    >
      {/* ── 🦷 絵文字ボディ ── */}
      <span style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: 130,
        lineHeight: 1,
        userSelect: 'none',
        display: 'block',
        textAlign: 'center',
      }}>🦷</span>

      {/* ── 顔 SVGオーバーレイ ── */}
      <svg
        width="170" height="200"
        viewBox="0 0 170 200"
        style={{ position: 'absolute', top: 0, left: 0 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── 眉毛（表情で変化）── */}
        {isSad ? (
          <>
            <path d="M 48 42 Q 60 50 72 43" stroke="#999" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M 86 43 Q 98 50 110 42" stroke="#999" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </>
        ) : isHappy ? (
          <>
            <path d="M 48 39 Q 60 32 72 39" stroke="#555" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M 86 39 Q 98 32 110 39" stroke="#555" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </>
        ) : (
          <>
            <path d="M 48 39 Q 60 34 72 39" stroke="#777" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M 86 39 Q 98 34 110 39" stroke="#777" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </>
        )}

        {/* ── 左目 ── */}
        <circle cx="65" cy="52" r="13" fill="white" stroke="#E0E0EC" strokeWidth="1.5"/>
        {isHappy ? (
          <>
            <circle cx="65" cy="53" r="9.5" fill="#4ECCD8"/>
            <circle cx="65" cy="53" r="6"   fill="#081C22"/>
            <circle cx="59" cy="47" r="4"   fill="white"/>
            <circle cx="70" cy="58" r="2"   fill="white" opacity="0.8"/>
          </>
        ) : (
          <>
            <circle cx="65" cy={isSad ? 55 : 53} r="9.5" fill="#1C1C1C"/>
            <circle cx="60" cy={isSad ? 50 : 47} r="3.5" fill="white"/>
          </>
        )}
        {isSad && (
          <path d="M 60 65 Q 58 74 61 77 Q 63 79 62 76 Q 60 72 61 65" fill="#ADE8F4"/>
        )}

        {/* ── 右目 ── */}
        <circle cx="105" cy="52" r="13" fill="white" stroke="#E0E0EC" strokeWidth="1.5"/>
        {isHappy ? (
          <>
            <circle cx="105" cy="53" r="9.5" fill="#4ECCD8"/>
            <circle cx="105" cy="53" r="6"   fill="#081C22"/>
            <circle cx="99"  cy="47" r="4"   fill="white"/>
            <circle cx="110" cy="58" r="2"   fill="white" opacity="0.8"/>
          </>
        ) : (
          <>
            <circle cx="105" cy={isSad ? 55 : 53} r="9.5" fill="#1C1C1C"/>
            <circle cx="100" cy={isSad ? 50 : 47} r="3.5" fill="white"/>
          </>
        )}
        {isSad && (
          <path d="M 100 65 Q 98 74 101 77 Q 103 79 102 76 Q 100 72 101 65" fill="#ADE8F4"/>
        )}

        {/* ── ほっぺ ── */}
        <circle cx="44"  cy="65" r="14" fill="#FFB6C1" opacity="0.48"/>
        <circle cx="126" cy="65" r="14" fill="#FFB6C1" opacity="0.48"/>

        {/* ── 口（目のすぐ下・根元の間）── */}
        {isSad ? (
          <path d="M 66 76 Q 80 70 94 76"
            stroke="#AAAAAA" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
        ) : isHappy ? (
          <>
            <path d="M 61 75 Q 80 90 99 75"
              stroke="#E06060" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
            <path d="M 62 75 Q 80 88 98 75 Q 80 84 62 75" fill="white"/>
          </>
        ) : (
          <path d="M 62 76 Q 80 88 98 76"
            stroke="#E08080" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
        )}

        {/* ── キラキラ（happy / cheer）── */}
        {isHappy && (
          <>
            <path d="M 10 50 L 12.5 43 L 15 50 L 22 52.5 L 15 55 L 12.5 62 L 10 55 L 3 52.5 Z"
              fill="#FFE082" opacity="0.95"/>
            <path d="M 134 50 L 136 45 L 138 50 L 143 52 L 138 54 L 136 59 L 134 54 L 129 52 Z"
              fill="#B2EBF2" opacity="0.9"/>
            <circle cx="18"  cy="66" r="3"   fill="#FFE082" opacity="0.7"/>
            <circle cx="140" cy="68" r="2.5" fill="#80DEEA" opacity="0.7"/>
            <circle cx="6"   cy="40" r="1.8" fill="white"   opacity="0.8"/>
          </>
        )}
      </svg>
    </div>
  );
};

export default Hammy;
