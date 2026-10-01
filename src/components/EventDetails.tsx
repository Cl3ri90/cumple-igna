import React, { useMemo } from 'react';
import { EVENT_CONFIG } from '../config/event';
import { calculateEventCountdown } from '../utils/date';
import { CalendarIcon, ClockIcon, MapPinIcon, SwimsuitIcon, LightningIcon } from './Icons';

interface EventDetailsProps {
  onOpenMap: () => void;
}

export const EventDetails: React.FC<EventDetailsProps> = ({ onOpenMap }) => {
  const countdown = useMemo(() => {
    return calculateEventCountdown(EVENT_CONFIG.date, EVENT_CONFIG.timeZone);
  }, []);

  return (
    <section
      aria-label="Detalles de la fiesta"
      style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '0 16px 36px 16px',
      }}
    >
      {/* Contador de días exclusivo según fecha local de America/Santiago */}
      <div
        style={{
          background: 'linear-gradient(135deg, var(--color-aqua) 0%, #00B4D8 100%)',
          color: 'var(--color-text-dark)',
          borderRadius: 'var(--radius-lg)',
          border: '3px solid var(--color-text-dark)',
          boxShadow: 'var(--shadow-pop)',
          padding: '16px 20px',
          textAlign: 'center',
          marginBottom: '24px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--color-yellow)',
            padding: '4px 14px',
            borderRadius: 'var(--radius-full)',
            border: '2px solid var(--color-text-dark)',
            boxShadow: 'var(--shadow-pop-sm)',
            fontWeight: 800,
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '8px',
          }}
        >
          <LightningIcon size={14} color="var(--color-pink)" />
          <span>Cuenta Regresiva</span>
        </div>

        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.6rem, 5.5vw, 2.2rem)',
            fontWeight: 700,
            color: 'var(--color-white)',
            textShadow: '2px 2px 0px var(--color-text-dark)',
            lineHeight: 1.15,
            marginBottom: '4px',
          }}
        >
          {countdown.label}
        </div>

        <div
          style={{
            fontSize: '0.95rem',
            fontWeight: 700,
            color: 'var(--color-text-dark)',
          }}
        >
          {countdown.sublabel}
        </div>
      </div>

      {/* Título de la sección */}
      <div style={{ textAlign: 'center', marginBottom: '18px' }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.75rem',
            fontWeight: 700,
            color: 'var(--color-text-dark)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span>Coordenadas del Cumple</span>
          <span style={{ color: 'var(--color-pink)' }}>⚡️</span>
        </h2>
      </div>

      {/* Grid de 4 tarjetas de datos compactas y claras */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '14px',
          marginBottom: '20px',
        }}
      >
        {/* 1. Fecha */}
        <div
          style={{
            background: 'var(--color-white)',
            borderRadius: 'var(--radius-md)',
            border: '2.5px solid var(--color-text-dark)',
            boxShadow: 'var(--shadow-pop)',
            padding: '16px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px',
          }}
        >
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--color-aqua-light)',
              border: '2px solid var(--color-text-dark)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <CalendarIcon size={24} color="var(--color-pink)" />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-aqua-deep)', textTransform: 'uppercase' }}>
              Día
            </div>
            <div style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--color-text-dark)' }}>
              Viernes 20 de Noviembre
            </div>
            <div style={{ fontSize: '0.85rem', color: '#4A6572', fontWeight: 500, marginTop: '2px' }}>
              ¡Anotar en el calendario!
            </div>
          </div>
        </div>

        {/* 2. Horario */}
        <div
          style={{
            background: 'var(--color-white)',
            borderRadius: 'var(--radius-md)',
            border: '2.5px solid var(--color-text-dark)',
            boxShadow: 'var(--shadow-pop)',
            padding: '16px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px',
          }}
        >
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--color-pink-soft)',
              border: '2px solid var(--color-text-dark)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <ClockIcon size={24} color="var(--color-pink)" />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-pink)', textTransform: 'uppercase' }}>
              Horario
            </div>
            <div style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--color-text-dark)' }}>
              {EVENT_CONFIG.scheduleLabel}
            </div>
            <div style={{ fontSize: '0.85rem', color: '#4A6572', fontWeight: 500, marginTop: '2px' }}>
              Tarde completa de agua y diversión
            </div>
          </div>
        </div>

        {/* 3. Lugar */}
        <div
          style={{
            background: 'var(--color-white)',
            borderRadius: 'var(--radius-md)',
            border: '2.5px solid var(--color-text-dark)',
            boxShadow: 'var(--shadow-pop)',
            padding: '16px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px',
          }}
        >
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: '#FFFBE6',
              border: '2px solid var(--color-text-dark)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <MapPinIcon size={24} color="var(--color-yellow)" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#D97706', textTransform: 'uppercase' }}>
              Lugar
            </div>
            <div style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--color-text-dark)' }}>
              {EVENT_CONFIG.venue}
            </div>
            <div style={{ marginTop: '8px' }}>
              <button
                type="button"
                onClick={onOpenMap}
                id="btn-ver-ubicacion-card"
                aria-label="Buscar ubicación en Google Maps"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--color-text-dark)',
                  backgroundColor: 'var(--color-yellow)',
                  border: '2px solid var(--color-text-dark)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '6px 12px',
                  boxShadow: 'var(--shadow-pop-sm)',
                }}
              >
                <span>📍 {EVENT_CONFIG.mapsUrl ? 'Ver ubicación' : 'Buscar lugar'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4. Dress Code */}
        <div
          style={{
            background: 'var(--color-white)',
            borderRadius: 'var(--radius-md)',
            border: '2.5px solid var(--color-text-dark)',
            boxShadow: 'var(--shadow-pop)',
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--color-aqua-light)',
              border: '2px solid var(--color-text-dark)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <SwimsuitIcon size={24} color="var(--color-aqua-deep)" />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-aqua-deep)', textTransform: 'uppercase' }}>
              Dress Code
            </div>
            <div style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--color-text-dark)' }}>
              {EVENT_CONFIG.dressCode}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
