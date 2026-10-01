import React from 'react';

export const PoolFloatie: React.FC<{ size?: number; className?: string; color?: string }> = ({
  size = 64,
  className = '',
  color = '#FF3BBE',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Salvavidas inflable pop con franjas */}
    <circle cx="50" cy="50" r="42" fill={color} stroke="#123047" strokeWidth="6" />
    {/* Franjas blancas decorativas */}
    <path d="M20 50 C20 33.4 33.4 20 50 20" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
    <path d="M50 80 C66.6 80 80 66.6 80 50" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
    {/* Agujero central */}
    <circle cx="50" cy="50" r="20" fill="var(--color-bg-light)" stroke="#123047" strokeWidth="6" />
    {/* Brillo de plástico */}
    <path d="M38 28 A 26 26 0 0 1 62 28" stroke="#FFE600" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
  </svg>
);

export const WaveDivider: React.FC<{ flip?: boolean }> = ({ flip = false }) => (
  <div
    style={{
      width: '100%',
      overflow: 'hidden',
      lineHeight: 0,
      transform: flip ? 'rotate(180deg)' : 'none',
      marginBottom: flip ? 0 : '-1px',
      marginTop: flip ? '-1px' : 0,
    }}
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      style={{
        display: 'block',
        width: 'calc(100% + 1.3px)',
        height: '46px',
      }}
    >
      <path
        d="M0,0 C150,60 350,-20 500,40 C650,100 900,10 1200,50 L1200,120 L0,120 Z"
        fill="var(--color-bg-light)"
      />
    </svg>
  </div>
);

export const PopStar: React.FC<{ size?: number; color?: string; className?: string }> = ({
  size = 28,
  color = '#FFE600',
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M20 2L24.5 14.5L37 15.5L27.5 24L30.5 36.5L20 30L9.5 36.5L12.5 24L3 15.5L15.5 14.5L20 2Z"
      fill={color}
      stroke="#123047"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  </svg>
);
