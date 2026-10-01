import React from 'react';

export const PhotoDecorations: React.FC = () => {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 10,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {/* 1. Globo Rosa Pastel (Esquina superior izquierda del cielo) */}
      <div
        className="anim-balloon-pink"
        style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          filter: 'drop-shadow(2px 4px 6px rgba(18, 48, 71, 0.22))',
        }}
      >
        <svg
          width="64"
          height="100"
          viewBox="0 0 64 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 'clamp(52px, 12vw, 68px)', height: 'auto', display: 'block' }}
        >
          {/* Cuerda curva */}
          <path
            d="M32 73 C26 82 38 88 30 98"
            stroke="#123047"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
          {/* Nudo del globo */}
          <polygon points="28,73 36,73 32,69" fill="#E85AA8" stroke="#123047" strokeWidth="1.6" />
          {/* Cuerpo del globo */}
          <path
            d="M32 6 C47 6 58 20 58 38 C58 55 43 69 34 71 L30 71 C21 69 6 55 6 38 C6 20 17 6 32 6 Z"
            fill="#FFA3DA"
            stroke="#123047"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          {/* Sombra de volumen */}
          <path
            d="M48 24 C53 32 54 44 48 55 C43 64 35 68 32 69 C41 67 54 53 54 38 C54 28 50 20 48 24 Z"
            fill="#E85AA8"
            opacity="0.35"
          />
          {/* Brillo / Reflejo */}
          <path
            d="M20 15 C26 11 32 10 34 10 C32 12 28 14 24 20 C21 25 21 30 20 31 C19 28 18 20 20 15 Z"
            fill="#FFFFFF"
            opacity="0.85"
          />
          <circle cx="21" cy="36" r="2.2" fill="#FFFFFF" opacity="0.8" />
        </svg>
      </div>

      {/* 2. Globo Lila Pastel (Esquina superior derecha del cielo) */}
      <div
        className="anim-balloon-lilac"
        style={{
          position: 'absolute',
          top: '16px',
          right: '14px',
          filter: 'drop-shadow(2px 4px 6px rgba(18, 48, 71, 0.22))',
        }}
      >
        <svg
          width="58"
          height="96"
          viewBox="0 0 58 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 'clamp(46px, 11vw, 60px)', height: 'auto', display: 'block' }}
        >
          {/* Cuerda curva con lazo suave */}
          <path
            d="M29 69 C35 77 24 84 31 94"
            stroke="#123047"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
          {/* Nudo */}
          <polygon points="25,69 33,69 29,65" fill="#9960E6" stroke="#123047" strokeWidth="1.6" />
          {/* Cuerpo del globo */}
          <path
            d="M29 6 C43 6 52 19 52 35 C52 50 39 64 31 66 L27 66 C19 64 6 50 6 35 C6 19 15 6 29 6 Z"
            fill="#C9A3FF"
            stroke="#123047"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          {/* Sombra de volumen */}
          <path
            d="M43 22 C48 30 48 41 43 51 C39 59 31 63 29 64 C37 62 48 50 48 35 C48 26 45 18 43 22 Z"
            fill="#8B4DE0"
            opacity="0.32"
          />
          {/* Brillo / Reflejo */}
          <path
            d="M19 14 C24 11 29 10 31 10 C29 12 26 14 22 19 C20 24 19 28 19 29 C18 26 17 19 19 14 Z"
            fill="#FFFFFF"
            opacity="0.85"
          />
          <circle cx="19" cy="34" r="2" fill="#FFFFFF" opacity="0.8" />
        </svg>
      </div>

      {/* 3. Trazos de Confeti en la zona del cielo (suaves y discretos) */}
      <div
        className="anim-confetti-item-1"
        style={{
          position: 'absolute',
          top: '28px',
          left: '32%',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z"
            fill="#FFE600"
            stroke="#123047"
            strokeWidth="1.6"
          />
        </svg>
      </div>

      <div
        className="anim-confetti-item-2"
        style={{
          position: 'absolute',
          top: '52px',
          right: '34%',
        }}
      >
        <svg width="18" height="12" viewBox="0 0 22 14" fill="none">
          <rect
            x="2"
            y="2"
            width="18"
            height="9"
            rx="3"
            transform="rotate(-15 2 2)"
            fill="#00D9F5"
            stroke="#123047"
            strokeWidth="1.6"
          />
        </svg>
      </div>

      <div
        className="anim-confetti-item-3"
        style={{
          position: 'absolute',
          top: '84px',
          left: '24%',
        }}
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" fill="#FF3BBE" stroke="#123047" strokeWidth="1.6" />
          <circle cx="6" cy="6" r="1.5" fill="#FFFFFF" />
        </svg>
      </div>

      <div
        className="anim-confetti-item-4"
        style={{
          position: 'absolute',
          top: '72px',
          right: '25%',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
          <rect
            x="3"
            y="3"
            width="12"
            height="12"
            rx="2.5"
            transform="rotate(22 3 3)"
            fill="#C7FF00"
            stroke="#123047"
            strokeWidth="1.6"
          />
        </svg>
      </div>

      {/* 4. Flotador tipo aro (Esquina inferior izquierda, colores Rosa y Aqua) */}
      <div
        className="anim-pool-ring"
        style={{
          position: 'absolute',
          bottom: '14px',
          left: '12px',
          filter: 'drop-shadow(2px 6px 8px rgba(18, 48, 71, 0.28))',
        }}
      >
        <svg
          width="82"
          height="82"
          viewBox="0 0 88 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 'clamp(62px, 15vw, 82px)', height: 'auto', display: 'block' }}
        >
          <defs>
            {/* Máscara para dona con agujero central */}
            <mask id="ringHoleMask">
              <rect width="88" height="88" fill="white" />
              <circle cx="44" cy="44" r="17" fill="black" />
            </mask>
          </defs>

          {/* Grupo enmascarado del aro */}
          <g mask="url(#ringHoleMask)">
            {/* Base aqua */}
            <circle cx="44" cy="44" r="38" fill="#00D9F5" stroke="#123047" strokeWidth="3" />
            {/* Franjas rosa flúor */}
            <path d="M44 6 A38 38 0 0 1 82 44 L44 44 Z" fill="#FF3BBE" />
            <path d="M44 82 A38 38 0 0 1 6 44 L44 44 Z" fill="#FF3BBE" />
            {/* Franja decorativa amarilla en un cuarto */}
            <path d="M20 20 L27 27 A38 38 0 0 1 44 6 L44 14 Z" fill="#FFE600" opacity="0.6" />
          </g>

          {/* Borde exterior del aro */}
          <circle cx="44" cy="44" r="38" stroke="#123047" strokeWidth="2.8" fill="none" />
          {/* Borde interior del agujero */}
          <circle cx="44" cy="44" r="17" stroke="#123047" strokeWidth="2.8" fill="none" />
          {/* Brillo plástico del flotador */}
          <path
            d="M26 18 A 28 28 0 0 1 60 18"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
            opacity="0.85"
          />
        </svg>
      </div>

      {/* 5. Pelota de playa (Esquina inferior derecha, con segmentos de colores) */}
      <div
        className="anim-beach-ball"
        style={{
          position: 'absolute',
          bottom: '16px',
          right: '12px',
          filter: 'drop-shadow(2px 6px 8px rgba(18, 48, 71, 0.28))',
        }}
      >
        <svg
          width="76"
          height="76"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 'clamp(58px, 14vw, 76px)', height: 'auto', display: 'block' }}
        >
          {/* Círculo base con borde */}
          <circle cx="40" cy="40" r="36" fill="#FFFFFF" stroke="#123047" strokeWidth="2.8" />

          {/* Segmentos de colores */}
          {/* Segmento 1: Aqua */}
          <path
            d="M40 4 C24 4 11 16 7 32 C18 36 29 28 40 12 Z"
            fill="#00D9F5"
            stroke="#123047"
            strokeWidth="1.6"
          />
          {/* Segmento 2: Amarillo Rayo */}
          <path
            d="M7 32 C4 42 6 53 14 62 C23 52 30 36 40 12 C29 28 18 36 7 32 Z"
            fill="#FFE600"
            stroke="#123047"
            strokeWidth="1.6"
          />
          {/* Segmento 3: Rosa Flúor */}
          <path
            d="M14 62 C23 71 36 76 48 74 C44 58 41 34 40 12 C30 36 23 52 14 62 Z"
            fill="#FF3BBE"
            stroke="#123047"
            strokeWidth="1.6"
          />
          {/* Segmento 4: Lima */}
          <path
            d="M48 74 C62 72 73 61 76 47 C62 45 49 32 40 12 C41 34 44 58 48 74 Z"
            fill="#C7FF00"
            stroke="#123047"
            strokeWidth="1.6"
          />
          {/* Segmento 5: Blanco con sombra */}
          <path
            d="M76 47 C77 39 74 27 67 19 C56 22 47 21 40 12 C49 32 62 45 76 47 Z"
            fill="#FFFFFF"
            stroke="#123047"
            strokeWidth="1.6"
          />

          {/* Tapa central blanca de la pelota */}
          <ellipse
            cx="40"
            cy="13"
            rx="7"
            ry="4.5"
            fill="#FFFFFF"
            stroke="#123047"
            strokeWidth="2"
          />
          {/* Brillo plástico */}
          <path
            d="M20 22 A 26 26 0 0 1 35 14"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.9"
          />
        </svg>
      </div>
    </div>
  );
};
