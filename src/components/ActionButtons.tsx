import React from 'react';
import { EVENT_CONFIG } from '../config/event';
import { MapPinIcon, WhatsAppIcon } from './Icons';

interface ActionButtonsProps {
  onOpenMap: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ onOpenMap }) => {
  // Validación de número de WhatsApp (solo dígitos, mínimo 8 caracteres)
  const cleanPhone = (EVENT_CONFIG.whatsappNumber || '').replace(/\D/g, '');
  const hasValidPhone = cleanPhone.length >= 8;

  // Mensaje oficial requerido codificado para WhatsApp
  const whatsappMessage = encodeURIComponent(
    'Hola, confirmo asistencia al cumpleaños de Igna⚡️ el viernes 20 de noviembre'
  );
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${whatsappMessage}`;

  return (
    <section
      aria-label="Acciones de la invitación"
      style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '0 16px 40px 16px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        {/* Acción 1: Confirmar por WhatsApp (SOLO visible si hay número configurado) */}
        {hasValidPhone && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="btn-confirmar-whatsapp"
            aria-label="Confirmar asistencia abriendo chat de WhatsApp"
            style={{
              minHeight: '52px',
              padding: '14px 24px',
              backgroundColor: '#25D366',
              color: 'var(--color-white)',
              borderRadius: 'var(--radius-full)',
              border: '3px solid var(--color-text-dark)',
              boxShadow: 'var(--shadow-pop)',
              fontWeight: 800,
              fontSize: '1.05rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              textDecoration: 'none',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            }}
          >
            <WhatsAppIcon size={26} />
            <span>Confirmar por WhatsApp</span>
          </a>
        )}

        {/* Acción 2: Ver ubicación / Buscar lugar */}
        <button
          type="button"
          onClick={onOpenMap}
          id="btn-ver-ubicacion"
          aria-label={EVENT_CONFIG.mapsUrl ? 'Abrir ubicación en Google Maps' : 'Buscar Laguna Ayres de Chicureo en Google Maps'}
          style={{
            minHeight: '52px',
            padding: '14px 24px',
            backgroundColor: 'var(--color-aqua)',
            color: 'var(--color-text-dark)',
            borderRadius: 'var(--radius-full)',
            border: '3px solid var(--color-text-dark)',
            boxShadow: 'var(--shadow-pop)',
            fontWeight: 800,
            fontSize: '1.05rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            cursor: 'pointer',
            transition: 'transform 0.15s ease, box-shadow 0.15s ease',
          }}
        >
          <MapPinIcon size={24} color="var(--color-text-dark)" />
          <span>{EVENT_CONFIG.mapsUrl ? 'Ver ubicación' : 'Buscar lugar en Maps'}</span>
        </button>
      </div>
    </section>
  );
};
