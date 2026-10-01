import React from 'react';
import { LightningIcon } from './Icons';

export const HeaderNav: React.FC = () => {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(243, 253, 255, 0.92)',
        borderBottom: '2px solid rgba(18, 48, 71, 0.1)',
        paddingTop: 'calc(10px + env(safe-area-inset-top, 0px))',
        paddingBottom: '10px',
        paddingLeft: '16px',
        paddingRight: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.25s ease',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'var(--color-yellow)',
          color: 'var(--color-text-dark)',
          padding: '6px 18px',
          borderRadius: 'var(--radius-full)',
          border: '2px solid var(--color-text-dark)',
          boxShadow: 'var(--shadow-pop-sm)',
          fontWeight: 800,
          fontSize: '0.88rem',
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
        }}
      >
        <LightningIcon size={16} color="var(--color-pink)" />
        <span>Igna Power ⚡️</span>
      </div>
    </header>
  );
};
