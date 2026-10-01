import React from 'react';
import { WaveIcon, SparkleIcon, LightningIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-dark-surface)',
        color: 'var(--color-white)',
        paddingTop: '36px',
        paddingBottom: 'calc(36px + env(safe-area-inset-bottom, 0px))',
        paddingLeft: '16px',
        paddingRight: '16px',
        textAlign: 'center',
        borderTop: '3px solid var(--color-aqua)',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '14px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <SparkleIcon size={24} color="var(--color-yellow)" />
          <WaveIcon size={28} color="var(--color-aqua)" />
          <LightningIcon size={24} color="var(--color-pink)" />
        </div>

        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem',
            fontWeight: 700,
            color: 'var(--color-white)',
            lineHeight: 1.35,
          }}
        >
          ¡Prepara tu traje de baño, toalla y toda la energía! 🌊☀️🩱
        </p>

        <p
          style={{
            fontSize: '0.9rem',
            color: '#A0B8CC',
            maxWidth: '420px',
          }}
        >
          Nos vemos el viernes 20 de noviembre junto a la laguna para celebrar con todo el Power.
        </p>

        <div
          style={{
            marginTop: '8px',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: 'var(--color-lime)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span>⚡️ Igna Power — 10 Años 🌊</span>
        </div>
      </div>
    </footer>
  );
};
