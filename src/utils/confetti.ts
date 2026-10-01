import confetti from 'canvas-confetti';

const FLUOR_COLORS = [
  '#00D9F5', // Aqua
  '#FF3BBE', // Rosa flúor
  '#C7FF00', // Lima
  '#8B3DFF', // Violeta
  '#FFE600', // Amarillo rayo
  '#FFFFFF', // Destello blanco
];

/**
 * Dispara un estallido breve y vibrante de confeti con colores flúor.
 * Respeta automáticamente prefers-reduced-motion mediante disableForReducedMotion.
 */
export function triggerPowerConfetti(isReducedMotion: boolean = false) {
  if (isReducedMotion) {
    // Si la persona tiene reducción de movimiento activada, no disparamos partículas
    return;
  }

  // Estallido principal
  confetti({
    particleCount: 55,
    spread: 70,
    origin: { y: 0.65 },
    colors: FLUOR_COLORS,
    disableForReducedMotion: true,
    ticks: 200,
    gravity: 1.2,
    scalar: 1.1,
  });

  // Micro destellos en dos direcciones para efecto pop
  setTimeout(() => {
    confetti({
      particleCount: 30,
      angle: 60,
      spread: 55,
      origin: { x: 0.15, y: 0.7 },
      colors: FLUOR_COLORS,
      disableForReducedMotion: true,
      ticks: 180,
    });
    confetti({
      particleCount: 30,
      angle: 120,
      spread: 55,
      origin: { x: 0.85, y: 0.7 },
      colors: FLUOR_COLORS,
      disableForReducedMotion: true,
      ticks: 180,
    });
  }, 120);
}

/**
 * Celebración especial al completar el minigame "Carga el Power"
 */
export function triggerVictoryConfetti(isReducedMotion: boolean = false) {
  if (isReducedMotion) return;

  confetti({
    particleCount: 80,
    spread: 90,
    origin: { y: 0.6 },
    colors: FLUOR_COLORS,
    disableForReducedMotion: true,
    ticks: 250,
    scalar: 1.2,
  });
}
