/**
 * Utilidades para cálculo de fecha y contador en la zona horaria America/Santiago.
 * Respeta el requerimiento de no inventar horas o minutos.
 */

export interface CountdownState {
  status: 'upcoming' | 'today' | 'passed';
  daysRemaining: number;
  label: string;
  sublabel: string;
}

export function getSantiagoDateString(timeZone: string = 'America/Santiago'): string {
  try {
    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    return formatter.format(new Date()); // Formato YYYY-MM-DD
  } catch {
    // Fallback estándar si el navegador tuviera problemas con el timezone
    const now = new Date();
    return now.toISOString().split('T')[0];
  }
}

export function calculateEventCountdown(
  eventDateStr: string,
  timeZone: string = 'America/Santiago'
): CountdownState {
  const todayStr = getSantiagoDateString(timeZone);

  const [tY, tM, tD] = todayStr.split('-').map(Number);
  const [eY, eM, eD] = eventDateStr.split('-').map(Number);

  // Crear fechas UTC a medianoche para evitar desfases de horario de verano en el conteo de días
  const todayUtc = Date.UTC(tY, tM - 1, tD);
  const eventUtc = Date.UTC(eY, eM - 1, eD);

  const diffMs = eventUtc - todayUtc;
  const days = Math.round(diffMs / (1000 * 60 * 60 * 24));

  if (days > 0) {
    return {
      status: 'upcoming',
      daysRemaining: days,
      label: days === 1 ? '¡Falta 1 día!' : `Faltan ${days} días`,
      sublabel: 'para la fiesta en el agua ⚡️',
    };
  } else if (days === 0) {
    return {
      status: 'today',
      daysRemaining: 0,
      label: '¡Es hoy! 🥳🎈',
      sublabel: '¡Nos vemos en la laguna! 🌊⚡️',
    };
  } else {
    return {
      status: 'passed',
      daysRemaining: 0,
      label: '¡Fue una fiesta increíble! 🌊',
      sublabel: 'Gracias por acompañar a Igna 💖⚡️',
    };
  }
}
