export interface EventConfig {
  name: string;
  nickname: string;
  age: number;
  date: string; // YYYY-MM-DD
  timeZone: string;
  scheduleLabel: string;
  endTime: string;
  venue: string;
  dressCode: string;
  photoPath: {
    webp: string;
    jpg: string;
    width: number;
    height: number;
  };
  whatsappNumber: string; // formato internacional solo dígitos (ej: '56912345678')
  mapsUrl: string; // URL verificada de Google Maps (si está vacía, se usa búsqueda por nombre)
  siteUrl: string; // URL pública definitiva (para OpenGraph y compartir)
}

export const EVENT_CONFIG: EventConfig = {
  name: 'Igna⚡️',
  nickname: 'Igna Power',
  age: 10,
  date: '2026-11-20',
  timeZone: 'America/Santiago',
  scheduleLabel: 'Post Colegio, hasta las 18:45',
  endTime: '18:45',
  venue: 'Laguna Ayres de Chicureo',
  dressCode: 'Traje de baño',
  photoPath: {
    webp: '/images/igna-pool-party.webp',
    jpg: '/images/igna-pool-party.jpg',
    width: 1080,
    height: 1696,
  },
  // NOTA: Pendiente definir número telefónico para WhatsApp.
  // Cuando se configure un número válido (ej: '56912345678'), se habilitará automáticamente el botón de confirmación.
  whatsappNumber: '+56954014003',
  // NOTA: Pendiente enlace verificado exacto. Si está vacío, se ofrece "Buscar lugar" con búsqueda directa en Google Maps.
  mapsUrl: '',
  // NOTA: Pendiente dominio de producción final.
  siteUrl: 'https://cumple-igna.vercel.app',
};
