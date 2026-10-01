import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { EVENT_CONFIG } from '../config/event';
import { triggerPowerConfetti } from '../utils/confetti';
import { LightningIcon, SparkleIcon, CalendarIcon, ClockIcon } from './Icons';
import { PoolFloatie, PopStar } from './Decorations';
import { PhotoDecorations } from './PhotoDecorations';

interface HeroProps {
  motionPaused?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ motionPaused = false }) => {
  const shouldReduceMotion = useReducedMotion() || motionPaused;
  const [boltActive, setBoltActive] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const photoCardRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver para detener animaciones si la foto sale de pantalla y ahorrar recursos
  useEffect(() => {
    const el = photoCardRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleActivatePower = () => {
    setBoltActive(true);
    triggerPowerConfetti(shouldReduceMotion);
    setTimeout(() => setBoltActive(false), 900);
  };

  return (
    <section
      aria-label="Portada de la invitación"
      style={{
        position: 'relative',
        paddingTop: '20px',
        paddingBottom: '36px',
        paddingLeft: '16px',
        paddingRight: '16px',
        maxWidth: '720px',
        margin: '0 auto',
      }}
    >
      {/* Adornos flotantes contextuales (desactivados si hay pausa de movimiento) */}
      <div
        className={motionPaused ? '' : 'float-ambient'}
        style={{
          position: 'absolute',
          top: '28px',
          left: '12px',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        <PoolFloatie size={52} color="var(--color-pink)" />
      </div>

      <div
        className={motionPaused ? '' : 'float-ambient-alt'}
        style={{
          position: 'absolute',
          top: '40px',
          right: '16px',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        <PopStar size={34} color="var(--color-yellow)" />
      </div>

      {/* Encabezado del Hero en columna centrada compartiendo el mismo eje */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '20px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* 1. POOL PARTY */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--color-pink)',
            color: 'var(--color-white)',
            padding: '6px 18px',
            borderRadius: 'var(--radius-full)',
            border: '2px solid var(--color-text-dark)',
            boxShadow: 'var(--shadow-pop-sm)',
            fontWeight: 800,
            fontSize: '0.9rem',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '10px',
          }}
        >
          <span>🌊 Pool Party ⚡️</span>
        </div>

        {/* 2. Igna ⚡️ (Relleno rosa pastel #F6B8D7 con contorno oscuro y rayo integrado) */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 9vw, 4.4rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            color: '#F6B8D7',
            WebkitTextStroke: '2px var(--color-text-dark)',
            textShadow: '3px 3px 0px var(--color-text-dark)',
            letterSpacing: '-0.5px',
            margin: '0 0 10px 0',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <span>Igna</span>
          <motion.span
            animate={
              boltActive
                ? { scale: [1, 1.45, 1], rotate: [0, -15, 15, 0] }
                : { scale: 1, rotate: 0 }
            }
            transition={{ duration: 0.5 }}
            style={{ display: 'inline-block' }}
          >
            ⚡️
          </motion.span>
        </h1>

        {/* 3. ¡MIS 10 AÑOS! (Compartiendo el mismo eje central) */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            background: 'var(--color-yellow)',
            color: 'var(--color-text-dark)',
            padding: '6px 20px',
            borderRadius: 'var(--radius-md)',
            border: '2px solid var(--color-text-dark)',
            boxShadow: 'var(--shadow-pop-sm)',
            fontWeight: 800,
            fontSize: '1.05rem',
            marginBottom: '12px',
          }}
        >
          <span>¡MIS 10 AÑOS!</span>
          <span aria-hidden="true">🎈</span>
        </div>

        {/* 4. Las invito a celebrar mis 10 años 🥳🎈 */}
        <p
          style={{
            fontSize: 'clamp(1.1rem, 3.8vw, 1.35rem)',
            fontWeight: 700,
            color: 'var(--color-text-dark)',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: 1.35,
          }}
        >
          Las invito a celebrar mis 10 años 🥳🎈
        </p>
      </div>

      {/* Tarjeta de Fotografía Principal con escena animada de cumpleaños y pool party */}
      <div
        ref={photoCardRef}
        className={`photo-card-frame ${!isInView ? 'is-offscreen' : ''}`}
      >
        {/* Foto de Igna usando <picture> con WebP y fallback JPG con proporciones y calidad intactas */}
        <picture>
          <source type="image/webp" srcSet={EVENT_CONFIG.photoPath.webp} />
          <img
            src={EVENT_CONFIG.photoPath.jpg}
            alt="Igna en la Laguna Ayres de Chicureo con agua turquesa y cerros de fondo"
            width={EVENT_CONFIG.photoPath.width}
            height={EVENT_CONFIG.photoPath.height}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="photo-stable"
          />
        </picture>

        {/* Ilustraciones decorativas animadas automáticamente: globos, flotador, pelota y confeti */}
        <PhotoDecorations />
      </div>

      {/* Botón Principal: Activar Power ⚡️ */}
      <div style={{ textAlign: 'center', marginBottom: '22px' }}>
        <motion.button
          onClick={handleActivatePower}
          whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
          type="button"
          id="btn-activar-power"
          aria-label="Activar Power para disparar confeti y celebrar"
          style={{
            minHeight: '52px',
            minWidth: '220px',
            padding: '14px 28px',
            background: 'linear-gradient(135deg, var(--color-yellow) 0%, #FFC800 100%)',
            color: 'var(--color-text-dark)',
            borderRadius: 'var(--radius-full)',
            border: '3px solid var(--color-text-dark)',
            boxShadow: 'var(--shadow-pop)',
            fontWeight: 800,
            fontSize: '1.15rem',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            cursor: 'pointer',
            transition: 'box-shadow 0.2s ease',
          }}
        >
          <motion.span
            animate={boltActive ? { rotate: [0, -20, 20, 0], scale: [1, 1.4, 1] } : {}}
            transition={{ duration: 0.4 }}
            style={{ display: 'inline-flex' }}
          >
            <LightningIcon size={24} color="var(--color-pink)" />
          </motion.span>
          <span>Activar Power ⚡️</span>
          <SparkleIcon size={20} color="var(--color-purple)" />
        </motion.button>
      </div>

      {/* Resumen inmediato de Fecha y Horario en la zona de portada */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '12px',
          background: 'var(--color-white)',
          padding: '14px 18px',
          borderRadius: 'var(--radius-md)',
          border: '2.5px solid var(--color-text-dark)',
          boxShadow: 'var(--shadow-pop)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--color-aqua-light)',
              border: '2px solid var(--color-text-dark)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <CalendarIcon size={22} color="var(--color-pink)" />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#688297', textTransform: 'uppercase' }}>
              Fecha
            </div>
            <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--color-text-dark)' }}>
              Viernes 20 de Noviembre
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--color-pink-soft)',
              border: '2px solid var(--color-text-dark)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <ClockIcon size={22} color="var(--color-pink)" />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#688297', textTransform: 'uppercase' }}>
              Horario
            </div>
            <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--color-text-dark)' }}>
              {EVENT_CONFIG.scheduleLabel}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
