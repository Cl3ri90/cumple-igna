import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { LightningIcon, SparkleIcon } from './Icons';
import { triggerVictoryConfetti } from '../utils/confetti';

interface PowerChargeGameProps {
  motionPaused?: boolean;
}

export const PowerChargeGame: React.FC<PowerChargeGameProps> = ({ motionPaused = false }) => {
  const shouldReduceMotion = useReducedMotion() || motionPaused;
  const [chargedLevel, setChargedLevel] = useState<number>(0);

  const boltsConfig = [
    { id: 1, color: '#FFE600', name: 'Rayo 1: Chispa Solar' },
    { id: 2, color: '#FF3BBE', name: 'Rayo 2: Energía Rosa' },
    { id: 3, color: '#00D9F5', name: 'Rayo 3: Oleada Aqua' },
  ];

  const handleChargeBolt = (index: number) => {
    // Si toca el rayo actual o siguiente, aumentamos
    if (index >= chargedLevel) {
      const nextLevel = index + 1;
      setChargedLevel(nextLevel);
      if (nextLevel === 3) {
        triggerVictoryConfetti(shouldReduceMotion);
      }
    } else {
      // Si toca uno ya cargado, permite togglear a ese nivel
      setChargedLevel(index + 1);
    }
  };

  const handleReset = () => {
    setChargedLevel(0);
  };

  return (
    <section
      aria-label="Juego interactivo Carga el Power"
      style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '0 16px 40px 16px',
      }}
    >
      <div
        style={{
          background: 'var(--color-dark-surface)',
          color: 'var(--color-white)',
          borderRadius: 'var(--radius-lg)',
          border: '3px solid var(--color-aqua)',
          boxShadow: 'var(--shadow-pop-lg)',
          padding: '24px 20px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Badge flúor del minijuego */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--color-lime)',
            color: 'var(--color-text-dark)',
            padding: '5px 16px',
            borderRadius: 'var(--radius-full)',
            border: '2px solid var(--color-white)',
            boxShadow: 'var(--shadow-pop-sm)',
            fontWeight: 800,
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          <SparkleIcon size={16} color="var(--color-text-dark)" />
          <span>Interacción Especial</span>
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.65rem',
            fontWeight: 700,
            color: 'var(--color-yellow)',
            margin: '0 0 6px 0',
          }}
        >
          Carga el Power ⚡️
        </h3>

        <p
          style={{
            fontSize: '0.95rem',
            color: '#B0CDE0',
            maxWidth: '440px',
            margin: '0 auto 20px auto',
          }}
        >
          Toca cada uno de los 3 rayos para desbloquear la máxima energía para la Pool Party.
        </p>

        {/* 3 Rayos Grandes Interactivos */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '22px',
          }}
        >
          {boltsConfig.map((bolt, index) => {
            const isCharged = chargedLevel > index;
            return (
              <motion.button
                key={bolt.id}
                type="button"
                onClick={() => handleChargeBolt(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleChargeBolt(index);
                  }
                }}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
                aria-label={`${bolt.name}: ${isCharged ? 'Cargado' : 'Sin cargar'}. Toca para activar.`}
                aria-pressed={isCharged}
                style={{
                  width: '68px',
                  height: '84px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: isCharged ? bolt.color : '#1C3A54',
                  border: isCharged ? '3px solid #FFFFFF' : '2px dashed #40688A',
                  boxShadow: isCharged
                    ? `0 0 24px ${bolt.color}, var(--shadow-pop-sm)`
                    : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  transition: 'background-color 0.25s ease, border 0.25s ease, box-shadow 0.25s ease',
                  padding: '8px',
                }}
              >
                <motion.div
                  animate={
                    isCharged && !shouldReduceMotion
                      ? { scale: [1, 1.25, 1], rotate: [0, -10, 10, 0] }
                      : {}
                  }
                  transition={{ duration: 0.3 }}
                >
                  <LightningIcon
                    size={38}
                    color={isCharged ? '#FFFFFF' : '#6A8CA8'}
                  />
                </motion.div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: isCharged ? '#123047' : '#88A9C5',
                  }}
                >
                  #{bolt.id}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Mensaje al completar el Power */}
        {chargedLevel === 3 ? (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: 'rgba(0, 217, 245, 0.15)',
              border: '2px solid var(--color-aqua)',
              borderRadius: 'var(--radius-md)',
              padding: '16px',
              maxWidth: '460px',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--color-lime)',
                marginBottom: '8px',
                textShadow: '0 0 10px rgba(199, 255, 0, 0.4)',
              }}
            >
              ¡Power activado! ⚡️ Nos vemos en el agua 🌊
            </div>
            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--color-white)',
                marginBottom: '14px',
              }}
            >
              ¡Toda la energía cargada para celebrar los 10 años de Igna!
            </p>
            <button
              type="button"
              onClick={handleReset}
              id="btn-reiniciar-power"
              aria-label="Reiniciar juego Carga el Power"
              style={{
                minHeight: '44px',
                padding: '8px 20px',
                backgroundColor: 'var(--color-pink)',
                color: 'var(--color-white)',
                borderRadius: 'var(--radius-full)',
                border: '2px solid var(--color-white)',
                fontWeight: 800,
                fontSize: '0.9rem',
                boxShadow: 'var(--shadow-pop-sm)',
              }}
            >
              Reiniciar ⚡️
            </button>
          </motion.div>
        ) : (
          <div style={{ fontSize: '0.88rem', color: '#88A9C5', fontWeight: 600 }}>
            {chargedLevel === 0 && '⚡️ Toca el primer rayo para empezar'}
            {chargedLevel === 1 && '⚡️ ¡Uno cargado! Faltan dos rayos'}
            {chargedLevel === 2 && '⚡️ ¡Casi listo! Activa el último rayo'}
          </div>
        )}
      </div>
    </section>
  );
};
