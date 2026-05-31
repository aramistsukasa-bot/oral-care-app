const Character = ({ expression = 'happy' }) => {
  const isWorried = expression === 'worried';

  return (
    <svg width="200" height="250" viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="cEyeL">
          <circle cx="82" cy="82" r="19" />
        </clipPath>
        <clipPath id="cEyeR">
          <circle cx="118" cy="82" r="19" />
        </clipPath>
      </defs>

      {/* ══════════════════════════════
          ボブヘア（後ろ全体）
      ══════════════════════════════ */}
      <path
        d="M 48 110
           Q 44 52 100 26
           Q 156 52 152 110
           Q 140 130 100 132
           Q 60 130 48 110 Z"
        fill="#8B5E30"
      />

      {/* ══════════════════════════════
          首
      ══════════════════════════════ */}
      <rect x="91" y="128" width="18" height="15" rx="4" fill="#FFD5A8" />

      {/* ══════════════════════════════
          白衣ボディ（細くてかわいい）
      ══════════════════════════════ */}
      <path
        d="M 70 138 Q 67 236 100 240 Q 133 236 130 138
           Q 118 130 100 128 Q 82 130 70 138 Z"
        fill="white"
      />
      {/* 水色スクラブ */}
      <path
        d="M 80 138 Q 78 236 100 240 Q 122 236 120 138
           Q 112 132 100 130 Q 88 132 80 138 Z"
        fill="#80DEEA"
      />
      {/* 白衣前立て（左） */}
      <path d="M 100 130 L 78 152 L 62 239 L 90 236 Z" fill="white" />
      {/* 白衣前立て（右） */}
      <path d="M 100 130 L 122 152 L 138 239 L 110 236 Z" fill="white" />
      <line x1="100" y1="153" x2="100" y2="239" stroke="#E0E0E0" strokeWidth="0.6" />
      {/* ボタン */}
      <circle cx="100" cy="177" r="2.8" fill="#B0BEC5" />
      <circle cx="100" cy="196" r="2.8" fill="#B0BEC5" />
      <circle cx="100" cy="215" r="2.8" fill="#B0BEC5" />
      {/* ポケット */}
      <rect x="108" y="151" width="20" height="15" rx="3" fill="#B2EBF2" stroke="#80DEEA" strokeWidth="0.8" />
      <rect x="114" y="155" width="7" height="2.5" rx="1" fill="#EF5350" />
      <rect x="117" y="152" width="2.5" height="8" rx="1" fill="#EF5350" />

      {/* ══════════════════════════════
          左腕（下げている）
      ══════════════════════════════ */}
      <path
        d="M 70 144 Q 54 162 52 192 Q 50 210 60 214
           Q 70 217 72 198 Q 74 178 74 158"
        fill="white" stroke="#E8E8E8" strokeWidth="0.6"
      />
      {/* 左手 */}
      <ellipse cx="57" cy="215" rx="11" ry="9" fill="#FFD5A8" />

      {/* ══════════════════════════════
          右腕（ミラーを持ち上げている）
      ══════════════════════════════ */}
      <path
        d="M 130 144 Q 146 148 158 138 Q 166 128 160 116
           Q 154 106 144 114 Q 134 122 126 136"
        fill="white" stroke="#E8E8E8" strokeWidth="0.6"
      />
      {/* 右手 */}
      <ellipse cx="162" cy="113" rx="11" ry="9" fill="#FFD5A8" transform="rotate(-25 162 113)" />

      {/* ══════════════════════════════
          歯科用デンタルミラー
      ══════════════════════════════ */}
      {/* ハンドル（金属） */}
      <rect x="157" y="52" width="7" height="58" rx="3.5" fill="#C4C4D0" transform="rotate(12 160 81)" />
      {/* ハンドル光沢 */}
      <rect x="158.5" y="54" width="3" height="54" rx="1.5" fill="white" opacity="0.3" transform="rotate(12 160 81)" />
      {/* ハンドルのネック（細い部分） */}
      <path d="M 154 56 Q 149 48 152 38 Q 155 32 161 34 Q 165 38 162 48 Z" fill="#C4C4D0" />
      {/* ミラー本体 */}
      <circle cx="151" cy="30" r="15" fill="#D8D8E8" stroke="#B0B0C0" strokeWidth="1.5" />
      <circle cx="151" cy="30" r="12" fill="#ECECF4" />
      {/* ミラーの映り込み */}
      <ellipse cx="146" cy="25" rx="6" ry="5" fill="white" opacity="0.75" />
      <circle cx="156" cy="35" r="3" fill="white" opacity="0.5" />
      <circle cx="151" cy="30" r="1.5" fill="white" opacity="0.4" />

      {/* ══════════════════════════════
          頭（顔ベース）
      ══════════════════════════════ */}
      <ellipse cx="100" cy="78" rx="52" ry="55" fill="#FFD5A8" />

      {/* ══════════════════════════════
          耳
      ══════════════════════════════ */}
      <ellipse cx="48" cy="80" rx="7" ry="9" fill="#FFD5A8" />
      <ellipse cx="48" cy="80" rx="4.5" ry="6" fill="#F0B890" />
      <ellipse cx="152" cy="80" rx="7" ry="9" fill="#FFD5A8" />
      <ellipse cx="152" cy="80" rx="4.5" ry="6" fill="#F0B890" />

      {/* ══════════════════════════════
          ボブヘア前部（バング＋サイド）
      ══════════════════════════════ */}
      {/* 左サイドの丸いふくらみ */}
      <path
        d="M 48 82 Q 36 100 40 118"
        stroke="#8B5E30" strokeWidth="22" fill="none" strokeLinecap="round"
      />
      <path
        d="M 48 82 Q 36 100 40 118"
        stroke="#A07040" strokeWidth="14" fill="none" strokeLinecap="round"
      />
      {/* 右サイドの丸いふくらみ */}
      <path
        d="M 152 82 Q 164 100 160 118"
        stroke="#8B5E30" strokeWidth="22" fill="none" strokeLinecap="round"
      />
      <path
        d="M 152 82 Q 164 100 160 118"
        stroke="#A07040" strokeWidth="14" fill="none" strokeLinecap="round"
      />
      {/* 前髪・バング（顔上部を覆う束） */}
      <path d="M 50 82 Q 52 56 62 48 Q 60 66 60 82" fill="#8B5E30" />
      <path d="M 60 82 Q 63 52 72 46 Q 71 64 71 80" fill="#9E6A38" />
      <path d="M 71 80 Q 75 48 84 42 Q 83 62 83 78" fill="#8B5E30" />
      <path d="M 83 78 Q 87 46 100 40 Q 100 62 100 76" fill="#9E6A38" />
      <path d="M 100 76 Q 113 46 117 42 Q 117 62 117 78" fill="#8B5E30" />
      <path d="M 117 78 Q 128 52 129 46 Q 129 64 129 80" fill="#9E6A38" />
      <path d="M 129 80 Q 138 56 140 56 Q 140 72 140 82" fill="#8B5E30" />
      {/* ハイライト */}
      <path d="M 63 49 Q 70 39 82 35" stroke="#C08840" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.55" />
      <path d="M 88 40 Q 98 32 108 30" stroke="#C08840" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.55" />

      {/* ══════════════════════════════
          眉毛
      ══════════════════════════════ */}
      {isWorried ? (
        <>
          <path d="M 62 62 Q 72 67 84 64" stroke="#5A3010" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M 116 64 Q 128 67 138 62" stroke="#5A3010" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M 62 62 Q 74 56 86 60" stroke="#5A3010" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M 114 60 Q 126 56 138 62" stroke="#5A3010" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        </>
      )}

      {/* ══════════════════════════════
          左目（大きくてぱっちり丸い）
      ══════════════════════════════ */}
      {/* 白目（大きな円） */}
      <circle cx="82" cy="82" r="19" fill="white" />
      {/* 虹彩（明るい水色） */}
      <circle cx="82" cy="83" r="15" fill="#4ECCD8" clipPath="url(#cEyeL)" />
      <circle cx="82" cy="81" r="11" fill="#28B0BE" clipPath="url(#cEyeL)" />
      {/* 瞳孔 */}
      <circle cx="82" cy="83" r="7.5" fill="#061418" clipPath="url(#cEyeL)" />
      {/* ハイライト①（大・左上） */}
      <circle cx="73" cy="73" r="7" fill="white" clipPath="url(#cEyeL)" />
      {/* ハイライト②（小・右下） */}
      <circle cx="90" cy="91" r="3.5" fill="white" opacity="0.9" clipPath="url(#cEyeL)" />
      {/* 上まぶたライン */}
      <path d="M 62 77 Q 82 62 102 77" stroke="#140400" strokeWidth="5.5" fill="none" strokeLinecap="round" />
      {/* 下まぶたライン */}
      <path d="M 64 93 Q 82 103 100 93" stroke="#2C1008" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      {/* まつ毛（上） */}
      <line x1="62" y1="77" x2="54" y2="66" stroke="#140400" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="70" y1="69" x2="66" y2="58" stroke="#140400" strokeWidth="3" strokeLinecap="round" />
      <line x1="82" y1="66" x2="82" y2="55" stroke="#140400" strokeWidth="3" strokeLinecap="round" />
      <line x1="94" y1="69" x2="98" y2="58" stroke="#140400" strokeWidth="3" strokeLinecap="round" />
      <line x1="102" y1="77" x2="110" y2="66" stroke="#140400" strokeWidth="3.5" strokeLinecap="round" />

      {/* ══════════════════════════════
          右目（大きくてぱっちり丸い）
      ══════════════════════════════ */}
      <circle cx="118" cy="82" r="19" fill="white" />
      <circle cx="118" cy="83" r="15" fill="#4ECCD8" clipPath="url(#cEyeR)" />
      <circle cx="118" cy="81" r="11" fill="#28B0BE" clipPath="url(#cEyeR)" />
      <circle cx="118" cy="83" r="7.5" fill="#061418" clipPath="url(#cEyeR)" />
      <circle cx="109" cy="73" r="7" fill="white" clipPath="url(#cEyeR)" />
      <circle cx="126" cy="91" r="3.5" fill="white" opacity="0.9" clipPath="url(#cEyeR)" />
      <path d="M 98 77 Q 118 62 138 77" stroke="#140400" strokeWidth="5.5" fill="none" strokeLinecap="round" />
      <path d="M 100 93 Q 118 103 136 93" stroke="#2C1008" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <line x1="98" y1="77" x2="90" y2="66" stroke="#140400" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="106" y1="69" x2="102" y2="58" stroke="#140400" strokeWidth="3" strokeLinecap="round" />
      <line x1="118" y1="66" x2="118" y2="55" stroke="#140400" strokeWidth="3" strokeLinecap="round" />
      <line x1="130" y1="69" x2="134" y2="58" stroke="#140400" strokeWidth="3" strokeLinecap="round" />
      <line x1="138" y1="77" x2="146" y2="66" stroke="#140400" strokeWidth="3.5" strokeLinecap="round" />

      {/* ══════════════════════════════
          丸いピンクチーク
      ══════════════════════════════ */}
      <circle cx="60" cy="103" r="18" fill="#FFB6C1" opacity="0.48" />
      <circle cx="140" cy="103" r="18" fill="#FFB6C1" opacity="0.48" />

      {/* ══════════════════════════════
          鼻（小さくてかわいい）
      ══════════════════════════════ */}
      <path d="M 95 108 Q 100 113 105 108" stroke="#D49870" strokeWidth="2.2" fill="none" strokeLinecap="round" />

      {/* ══════════════════════════════
          口（明るい笑顔）
      ══════════════════════════════ */}
      {isWorried ? (
        <path d="M 86 118 Q 100 113 114 118" stroke="#C05050" strokeWidth="3" fill="none" strokeLinecap="round" />
      ) : (
        <>
          {/* 口の輪郭 */}
          <path d="M 80 116 Q 100 132 120 116" stroke="#B04848" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          {/* 歯の白 */}
          <path d="M 81 116 Q 100 130 119 116 Q 100 127 81 116" fill="white" />
          {/* 舌（ピンク） */}
          <ellipse cx="100" cy="126" rx="10" ry="5.5" fill="#FF8A9A" opacity="0.75" />
          {/* えくぼ */}
          <circle cx="78" cy="118" r="2.5" fill="#FFB6C1" opacity="0.7" />
          <circle cx="122" cy="118" r="2.5" fill="#FFB6C1" opacity="0.7" />
        </>
      )}

      {/* ══════════════════════════════
          キラキラ（happy / normal）
      ══════════════════════════════ */}
      {!isWorried && (
        <>
          {/* 大きな星 */}
          <path
            d="M 22 68 L 24.5 61 L 27 68 L 34 70.5 L 27 73 L 24.5 80 L 22 73 L 15 70.5 Z"
            fill="#FFE082" opacity="0.9"
          />
          {/* 小さな星 */}
          <path
            d="M 175 112 L 176.5 108 L 178 112 L 182 113.5 L 178 115 L 176.5 119 L 175 115 L 171 113.5 Z"
            fill="#B2EBF2" opacity="0.85"
          />
          <circle cx="30" cy="88" r="3" fill="#FFE082" opacity="0.65" />
          <circle cx="170" cy="100" r="2.5" fill="#80DEEA" opacity="0.7" />
          <circle cx="18" cy="56" r="2" fill="white" opacity="0.8" />
        </>
      )}
    </svg>
  );
};

export default Character;
