import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}

export const LightningIcon: React.FC<IconProps> = ({ className, size = 24, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
      fill={color}
      stroke="#123047"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CalendarIcon: React.FC<IconProps> = ({ className, size = 24, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="18" rx="4" fill="#FFFFFF" stroke="#123047" strokeWidth="2" />
    <path d="M16 2V6M8 2V6M3 10H21" stroke="#123047" strokeWidth="2" strokeLinecap="round" />
    <circle cx="8" cy="14" r="1.5" fill={color} />
    <circle cx="12" cy="14" r="1.5" fill={color} />
    <circle cx="16" cy="14" r="1.5" fill={color} />
    <circle cx="8" cy="18" r="1.5" fill={color} />
    <circle cx="12" cy="18" r="1.5" fill={color} />
  </svg>
);

export const ClockIcon: React.FC<IconProps> = ({ className, size = 24, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" fill="#FFFFFF" stroke="#123047" strokeWidth="2" />
    <path d="M12 7V12L15.5 14" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const MapPinIcon: React.FC<IconProps> = ({ className, size = 24, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M12 21C16 17 20 13.4183 20 9.5C20 5.35786 16.4183 2 12 2C7.58172 2 4 5.35786 4 9.5C4 13.4183 8 17 12 21Z"
      fill="#FFFFFF"
      stroke="#123047"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9.5" r="3.5" fill={color} stroke="#123047" strokeWidth="1.5" />
  </svg>
);

export const SwimsuitIcon: React.FC<IconProps> = ({ className, size = 24, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Estilizado como bikini / traje de baño pop */}
    <path
      d="M7 3C6 4.5 5 7 5 9C6.5 9 8 8 9.5 7C9.5 5 8.5 3.5 7 3Z"
      fill={color}
      stroke="#123047"
      strokeWidth="1.5"
    />
    <path
      d="M17 3C18 4.5 19 7 19 9C17.5 9 16 8 14.5 7C14.5 5 15.5 3.5 17 3Z"
      fill={color}
      stroke="#123047"
      strokeWidth="1.5"
    />
    <path d="M9.5 7C11 7.5 13 7.5 14.5 7" stroke="#123047" strokeWidth="1.5" />
    <path
      d="M6 15C8 14.5 16 14.5 18 15C18 17 16 21 12 21C8 21 6 17 6 15Z"
      fill={color}
      stroke="#123047"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const ShareIcon: React.FC<IconProps> = ({ className, size = 24, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="18" cy="5" r="3" fill="#FFFFFF" stroke="#123047" strokeWidth="2" />
    <circle cx="6" cy="12" r="3" fill="#FFFFFF" stroke="#123047" strokeWidth="2" />
    <circle cx="18" cy="19" r="3" fill="#FFFFFF" stroke="#123047" strokeWidth="2" />
    <line x1="8.59" y1="10.51" x2="15.42" y2="6.49" stroke={color} strokeWidth="2" />
    <line x1="8.59" y1="13.49" x2="15.42" y2="17.51" stroke={color} strokeWidth="2" />
  </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.5 15.58 3.38 17.07L2.05 22L7.08 20.69C8.54 21.52 10.22 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.66 15.34C16.45 15.93 15.57 16.47 15.01 16.53C14.61 16.57 14.1 16.58 12.33 15.85C10.08 14.92 8.63 12.63 8.52 12.48C8.41 12.33 7.62 11.28 7.62 10.19C7.62 9.1 8.17 8.57 8.39 8.34C8.57 8.15 8.87 8.07 9.13 8.07C9.22 8.07 9.3 8.07 9.37 8.08C9.58 8.09 9.68 8.1 9.82 8.44C10 8.87 10.43 9.94 10.49 10.05C10.55 10.16 10.59 10.3 10.51 10.46C10.44 10.62 10.39 10.68 10.27 10.82C10.15 10.96 10.04 11.07 9.91 11.23C9.77 11.38 9.64 11.54 9.8 11.81C9.96 12.08 10.52 12.99 11.34 13.72C12.4 14.66 13.27 14.96 13.59 15.09C13.83 15.19 14.07 15.17 14.24 14.98C14.45 14.74 14.71 14.37 14.97 14.01C15.15 13.76 15.37 13.79 15.63 13.88C15.89 13.97 17.27 14.65 17.56 14.79C17.85 14.93 18.04 15 18.11 15.12C18.18 15.24 18.18 15.75 16.66 15.34Z"
      fill="#25D366"
    />
  </svg>
);

export const WaveIcon: React.FC<IconProps> = ({ className, size = 24, color = '#00D9F5' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M2 13C4.5 13 5.5 11 8 11C10.5 11 11.5 13 14 13C16.5 13 17.5 11 20 11C21 11 21.6 11.3 22 11.7M2 17C4.5 17 5.5 15 8 15C10.5 15 11.5 17 14 17C16.5 17 17.5 15 20 15C21 15 21.6 15.3 22 15.7"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SparkleIcon: React.FC<IconProps> = ({ className, size = 24, color = '#FFE600' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z"
      fill={color}
      stroke="#123047"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);
