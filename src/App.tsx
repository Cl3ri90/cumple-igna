import React from 'react';
import { EVENT_CONFIG } from './config/event';
import { HeaderNav } from './components/HeaderNav';
import { Hero } from './components/Hero';
import { WaveDivider } from './components/Decorations';
import { EventDetails } from './components/EventDetails';
import { PowerChargeGame } from './components/PowerChargeGame';
import { ActionButtons } from './components/ActionButtons';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  // Acción: Abrir Mapa
  const handleOpenMap = () => {
    if (EVENT_CONFIG.mapsUrl && EVENT_CONFIG.mapsUrl.trim() !== '') {
      window.open(EVENT_CONFIG.mapsUrl, '_blank', 'noopener,noreferrer');
    } else {
      // Fallback seguro de búsqueda directa sin prometer un pin verificado no comprobado
      const searchUrl = 'https://www.google.com/maps/search/?api=1&query=Laguna+Ayres+de+Chicureo';
      window.open(searchUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Barra superior con badge Igna Power */}
      <HeaderNav />

      {/* Contenido principal */}
      <main style={{ flex: 1 }}>
        <Hero />
        <WaveDivider />
        <EventDetails onOpenMap={handleOpenMap} />
        <PowerChargeGame />
        <ActionButtons onOpenMap={handleOpenMap} />
      </main>

      {/* Cierre / Footer */}
      <Footer />
    </div>
  );
};

export default App;
