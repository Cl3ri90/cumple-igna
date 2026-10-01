# Igna Power — Pool Party ⚡️🌊

Miniweb interactiva de invitación para el cumpleaños de 10 años de **Igna⚡️** («Igna Power»). Diseñada con una estética alegre, colores flúor pop, confeti y animaciones suaves, optimizada para celulares y lista para enviar a las invitadas.

---

## 🎨 Concepto y Dirección de Arte

- **Concepto:** «Igna Power — Pool Party ⚡️🌊». Celebración junto a la laguna con energía, agua turquesa, rayos y detalles pop.
- **Paleta flúor:**
  - Aqua: `#00D9F5` (base y energía del agua)
  - Rosa flúor: `#FF3BBE` (acento vibrante en armonía con la camiseta de Igna)
  - Lima: `#C7FF00` (energía pop)
  - Violeta: `#8B3DFF` (profundidad y contrastes)
  - Amarillo rayo: `#FFE600` (rayos y stickers)
  - Fondo claro: `#F3FDFF`
  - Texto oscuro: `#123047` (alto contraste y máxima legibilidad)
- **Fotografía protagonista:** Foto vertical real de Igna en la Laguna Ayres de Chicureo. Su rostro y cuerpo se conservan 100% naturales, sin recortes en la cabeza ni textos superpuestos sobre su rostro. Se proveen versiones WebP y JPG optimizadas con dimensiones explícitas (`1080 × 1696`), preservando además el archivo original en `public/images/original/`.

---

## 📅 Datos del Evento

- **Nombre principal:** `Igna⚡️`
- **Apodo secundario:** `Igna Power`
- **Invitación:** `Las invito a celebrar mis 10 años 🥳🎈`
- **Fecha visible:** `Viernes 20 de Noviembre` (2026)
- **Horario visible:** `Post Colegio, hasta las 18:45` (sin hora de inicio inventada)
- **Lugar:** `Laguna Ayres de Chicureo`
- **Dress code:** `Traje de baño`
- **Contador:** Días calculados en base a la zona horaria local `America/Santiago` (*«Faltan X días»*, *«¡Es hoy!»* o mensaje de cierre, sin cuentas regresivas de minutos inventados).

---

## ⚡️ Características e Interacciones

1. **Botón «Activar Power ⚡️»:** Dispara un estallido breve de confeti flúor multicromático y anima el rayo central.
2. **Minijuego «Carga el Power ⚡️»:** Tres rayos interactivos y accesibles (teclado `Enter`/`Espacio`) que se encienden secuencialmente al tocarlos. Al encender los tres, se desbloquea el mensaje *«¡Power activado! ⚡️ Nos vemos en el agua 🌊»* con botón de reinicio.
3. **Accesibilidad y `prefers-reduced-motion`:** Cumple las directrices de reducción de movimiento con `useReducedMotion` de Motion y `disableForReducedMotion` en `canvas-confetti`.
4. **Acciones útiles:**
   - **Confirmar por WhatsApp:** Botón activo que enlaza directamente a `wa.me/56954014003` con el mensaje oficial: *«Hola, confirmo asistencia al cumpleaños de Igna⚡️ el viernes 20 de noviembre»*.
   - **Ver ubicación / Buscar lugar:** Abre el enlace configurado o realiza la búsqueda en Google Maps.

---

## 📌 Configuración y Enlaces

Los datos del evento están centralizados en [`src/config/event.ts`](file:///c:/Users/claud/OneDrive/Documentos/Proyectos_Antigravity/Cumple-Igna/src/config/event.ts):

1. **Teléfono de WhatsApp (`whatsappNumber`):**
   - Configurado con `+56954014003`. El enlace se genera automáticamente solo con dígitos internacionales (`56954014003`).
2. **Enlace de Google Maps (`mapsUrl`):**
   - Mientras esté vacío, el botón ofrece *«Buscar lugar en Maps»* realizando la búsqueda por *«Laguna Ayres de Chicureo»*. Si dispones del enlace exacto del recinto, puedes pegarlo en `mapsUrl`.
3. **Dominio definitivo (`siteUrl`):**
   - Configurado provisionalmente en `https://cumple-igna.vercel.app`. Al publicar la web en tu hosting propio o subdominio, puedes actualizar esta URL para la vista previa OpenGraph.

---

## 🚀 Instalación y Comandos Locales

```bash
# 1. Instalar dependencias
npm install

# 2. Modo desarrollo (HMR)
npm run dev

# 3. Compilación de producción
npm run build

# 4. Vista previa de la compilación
npm run preview

# 5. Verificación de linter
npm run lint
```

---

## 🌐 Publicación en Vercel o Netlify

El proyecto es 100% estático. Todo lo necesario para la producción se encuentra en la carpeta `dist/`.

### Opción A: Despliegue en Vercel
1. Instala el CLI de Vercel (si no lo tienes):
   ```bash
   npm i -g vercel
   ```
2. Ejecuta en la raíz del proyecto:
   ```bash
   vercel
   ```
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. O conecta el repositorio Git en [vercel.com](https://vercel.com) seleccionando **Vite**.

### Opción B: Despliegue en Netlify
1. Arrastra la carpeta `dist/` directamente a [app.netlify.com/drop](https://app.netlify.com/drop).
2. O conecta tu repositorio en Netlify con:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
