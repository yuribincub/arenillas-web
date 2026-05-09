# Arenillas · Web Oficial
### *"La Esencia que Resiste"*

Web oficial del pueblo de Arenillas, Soria.  
Desarrollada con **Astro 4** + **Tailwind CSS**, aplicando el Manual de Marca completo.

> Este README es también una carta de presentación.  
> Si eres del Ayuntamiento de Arenillas, hay algo para ti al final. ↓

---

## 🚀 Inicio rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Arrancar en desarrollo
npm run dev       # → http://localhost:4321

# 3. Build de producción
npm run build

# 4. Preview del build
npm run preview
```

---

## 📁 Estructura del proyecto

```
arenillas-web/
├── public/
│   ├── favicon.svg                    ← Logomark espliego en SVG
│   └── images/                        ← ⚠️ Añadir fotos reales aquí
│       ├── hero-arenillas.jpg
│       ├── pueblo-hero.jpg
│       ├── pueblo-piedra.jpg
│       ├── pueblo-historia.jpg
│       ├── turismo-hero.jpg
│       ├── turismo-espliego.jpg
│       ├── turismo-destilacion.jpg
│       ├── turismo-senderismo.jpg
│       ├── boina-fest.jpg
│       ├── boina-fest-hero.jpg
│       ├── actualidad-destacada.jpg
│       ├── negocios-hero.jpg
│       ├── comunidad-01.jpg
│       ├── comunidad-02.jpg
│       ├── comunidad-03.jpg
│       ├── negocios/
│       │   ├── bar-horizonte.jpg
│       │   ├── espliego-destileria.jpg
│       │   ├── casa-rural.jpg
│       │   ├── panaderia.jpg
│       │   ├── ceramica.jpg
│       │   └── camping.jpg
│       └── galeria/
│           └── gal-01.jpg … gal-12.jpg
│
├── src/
│   ├── layouts/
│   │   └── Layout.astro               ← HTML base, SEO, scripts globales
│   │
│   ├── components/
│   │   ├── Nav.astro                  ← Navegación con dropdowns + mobile
│   │   ├── Hero.astro                 ← Hero full-screen con CTA doble
│   │   ├── AccesosRapidos.astro       ★ Accesos rápidos para vecinos
│   │   ├── Actualidad.astro           ★ Noticias y eventos en home
│   │   ├── SectionPueblo.astro        ← Historia, pilares, storytelling
│   │   ├── Manifiesto.astro           ← Manifiesto oscuro full-bleed
│   │   ├── SectionTurismo.astro       ← Cards de experiencias turísticas
│   │   ├── BoinaFest.astro            ← Sección festival
│   │   ├── NegociosLocales.astro      ★ Directorio humano de negocios
│   │   ├── GaleriaPreview.astro       ← Galería preview en home
│   │   ├── VivireAqui.astro           ★ Sección aspiracional residentes
│   │   ├── SectionContacto.astro      ← CTA contacto final
│   │   └── Footer.astro               ← Footer completo con enlaces
│   │
│   ├── pages/
│   │   ├── index.astro                ← HOME (web híbrida: turismo + vecinos)
│   │   ├── el-pueblo.astro            ← Historia · Arquitectura · Comunidad
│   │   ├── turismo.astro              ← Guía turística completa
│   │   ├── boina-fest.astro           ← Festival · Historia · Programa
│   │   ├── galeria.astro              ← Galería con filtros + lightbox
│   │   ├── actualidad.astro           ★ Noticias, bandos y avisos
│   │   ├── agenda.astro               ★ Calendario de eventos del pueblo
│   │   ├── servicios.astro            ★ Información práctica para vecinos
│   │   ├── negocios.astro             ★ Directorio de negocios locales
│   │   └── contacto.astro             ← Formulario de contacto completo
│   │
│   └── styles/
│       └── global.css                 ← Sistema de diseño completo
│
├── astro.config.mjs
├── tailwind.config.mjs
└── README.md

★ = Secciones nuevas añadidas en v2.0
```

---

## 🧭 Arquitectura de contenidos

La web está pensada como un **ecosistema digital vivo del pueblo**, no solo
como una web turística. Tiene dos capas que conviven sin conflicto visual:

### Capa 1 — Emocional / Branding / Turismo
Para visitantes, medios y quienes descubren Arenillas por primera vez.

| Sección    | Ruta          | Propósito                           |
| ---------- | ------------- | ----------------------------------- |
| Home hero  | `/`           | Identidad, emoción, primer impacto  |
| El pueblo  | `/el-pueblo`  | Historia, arquitectura, comunidad   |
| Turismo    | `/turismo`    | Experiencias, rutas, patrimonio     |
| Boina Fest | `/boina-fest` | Festival, cultura, vitalidad local  |
| Galería    | `/galeria`    | Imágenes del pueblo con lightbox    |
| Vivir aquí | `/vivir-aqui` | Aspiracional para nuevos residentes |

### Capa 2 — Útil / Vecinal / Vida local
Para residentes y personas que visitan la web con frecuencia.

| Sección         | Ruta          | Propósito                             |
| --------------- | ------------- | ------------------------------------- |
| Accesos rápidos | `/` (home)    | 8 accesos directos para vecinos       |
| Actualidad      | `/actualidad` | Noticias, bandos y avisos con filtros |
| Agenda          | `/agenda`     | Calendario de eventos del pueblo      |
| Servicios       | `/servicios`  | Ayuntamiento, consultorio, transporte |
| Negocios        | `/negocios`   | Directorio humano de negocios locales |
| Contacto        | `/contacto`   | Formulario + información directa      |

### Navegación

```
Descubrir ▾           Actualidad ▾          Servicios ▾
  El pueblo             Noticias               Servicios locales
  Turismo               Agenda                 Ayuntamiento
  Boina Fest            Bandos y avisos        Consultorio
  Galería                                      Transporte
                                               Teléfonos útiles

Negocios              Vivir aquí             Contacto
```

---

## 🎨 Sistema de diseño

### Paleta de color

| Token           | HEX       | Uso                                      |
| --------------- | --------- | ---------------------------------------- |
| `lavanda-deep`  | `#5C4E78` | Color primario · logo · cabeceras · CTAs |
| `lavanda`       | `#8B7BA8` | Accents · iconos · section-label         |
| `lavanda-light` | `#C4B5D4` | Bordes · texto sobre oscuro              |
| `lavanda-pale`  | `#EDE8F3` | Fondos suaves · cards · tags             |
| `tierra-dark`   | `#6B4E32` | Boina Fest · contraste sobre claro       |
| `tierra`        | `#9E7B5A` | CTAs secundarios · accents cálidos       |
| `tierra-light`  | `#C9A882` | Detalles · metadata                      |
| `tierra-arena`  | `#E8D5B8` | Tags · fondos sutiles                    |
| `musgo`         | `#5A6B4A` | Naturaleza · senderismo                  |
| `cielo`         | `#A8C4D4` | Gráficos · detalles                      |
| `crema`         | `#F7F3EF` | Fondo principal                          |
| `carbon`        | `#1A1614` | Secciones oscuras · texto principal      |
| `grafito`       | `#2D2926` | Texto secundario                         |
| `humo`          | `#6B6561` | Texto auxiliar · metadata                |
| `grisclaro`     | `#C8C3BE` | Bordes · separadores                     |

### Tipografía

| Fuente             | Token        | Uso                                 |
| ------------------ | ------------ | ----------------------------------- |
| Cormorant Garamond | `font-serif` | Títulos, citas, hero, manifiesto    |
| Inter              | `font-sans`  | Navegación, botones, cuerpo, labels |

### Clases del sistema (`global.css`)

```html
<!-- Layout -->
<div class="container-brand">…</div>    <!-- max-w-7xl + padding editorial -->
<section class="section">…</section>    <!-- py-24 md:py-32 -->
<section class="section-sm">…</section> <!-- py-16 md:py-20 -->

<!-- Tipografía escalable (clamp) -->
<p  class="section-label">…</p>         <!-- Etiqueta encima de título -->
<h1 class="text-display">…</h1>         <!-- Hero: 3rem → 6rem -->
<h2 class="text-heading">…</h2>         <!-- Sección: 2rem → 3.5rem -->
<h3 class="text-title">…</h3>           <!-- Subsección: 1.5rem → 2.25rem -->
<p  class="text-lead">…</p>             <!-- Lead: 1.05rem → 1.25rem -->

<!-- Botones -->
<a class="btn-primary">…</a>            <!-- Relleno lavanda-deep -->
<a class="btn-outline">…</a>            <!-- Borde lavanda-deep -->
<a class="btn-ghost">…</a>              <!-- Solo texto + subrayado hover -->

<!-- Tags -->
<span class="tag tag-lavanda">…</span>  <!-- Lavanda pálido -->
<span class="tag tag-tierra">…</span>   <!-- Arena / tierra -->
<span class="tag tag-musgo">…</span>    <!-- Verde musgo -->
<span class="tag tag-dark">…</span>     <!-- Negro -->

<!-- Formularios -->
<label class="field-label">…</label>
<input class="field-input" …/>

<!-- Cards con hover lift -->
<article class="card">…</article>

<!-- Animaciones reveal on scroll -->
<div class="reveal">…</div>
<div class="reveal reveal-delay-1">…</div>   <!-- +0.15s -->
<div class="reveal reveal-delay-2">…</div>   <!-- +0.30s -->
<div class="reveal reveal-delay-3">…</div>   <!-- +0.45s -->
<div class="reveal reveal-delay-4">…</div>   <!-- +0.60s -->

<!-- Utilidades -->
<div class="bg-noise">…</div>           <!-- Textura de grano sutil -->
<div class="glass">…</div>              <!-- Glassmorphism claro -->
<div class="glass-dark">…</div>         <!-- Glassmorphism oscuro -->
<div class="hide-scrollbar">…</div>     <!-- Ocultar scrollbar -->
<p   class="text-balance">…</p>         <!-- text-wrap: balance -->
```

---

## 🖼️ Fotografías necesarias

Estilo: hora dorada, sin HDR, temperatura cálida 5500–6500K, espacio negativo generoso. Ver Manual de Marca · Sección 09.

| Archivo                    | Descripción                          | Ratio             |
| -------------------------- | ------------------------------------ | ----------------- |
| `hero-arenillas.jpg`       | Paisaje soriano al atardecer         | 16:9 · min 1920px |
| `pueblo-hero.jpg`          | Vista panorámica del pueblo          | 16:9              |
| `pueblo-piedra.jpg`        | Arquitectura de piedra               | 4:5               |
| `pueblo-historia.jpg`      | Calle histórica empedrada            | 3:4               |
| `turismo-hero.jpg`         | Campo de espliego + horizonte        | 16:9              |
| `turismo-espliego.jpg`     | Detalle espliego en flor             | 5:4               |
| `turismo-destilacion.jpg`  | Proceso de destilación artesanal     | 5:4               |
| `turismo-senderismo.jpg`   | Ruta por el entorno                  | 5:4               |
| `boina-fest.jpg`           | Escenario o público del festival     | 1:1               |
| `boina-fest-hero.jpg`      | Ambiente nocturno del festival       | 16:9              |
| `comunidad-01/02/03.jpg`   | Vida cotidiana del pueblo            | Varios            |
| `actualidad-destacada.jpg` | Imagen para noticia destacada        | 16:9              |
| `negocios-hero.jpg`        | Vista del pueblo o comercio local    | 16:9              |
| `galeria/gal-01…12.jpg`    | Galería general del pueblo           | Varios            |
| `negocios/*.jpg`           | Fotos de cada negocio del directorio | 4:3               |

---

## 📧 Formulario de contacto

El formulario usa `fetch` estándar. Tres opciones de integración:

### Netlify Forms — gratuito, recomendado
```html
<!-- Añadir al elemento <form> en contacto.astro: -->
data-netlify="true" name="contacto"
```

### Formspree
```js
// Cambiar el action en contacto.astro:
action="https://formspree.io/f/TU_ID"
```

### API Route Astro (SSR propio)
```
src/pages/api/contacto.ts
```

---

## 🌐 Deploy

### Netlify — recomendado
```bash
npm run build
netlify deploy --prod --dir=dist
```
O conectar el repo en [netlify.com](https://netlify.com):
Build command: `npm run build` · Publish directory: `dist`

### Vercel
```bash
vercel --prod
```

### VPS o hosting estático
```bash
npm run build
# Subir contenido de /dist/ por FTP/SFTP
```

---
### URL de prueba
Usa esta sección para agregar tu URL de prueba (no es la URL oficial del proyecto):
```text
Test URL: https://arenilla.netlify.app
```

## ♿ Accesibilidad

- WCAG 2.1 nivel AA
- `lang="es"` en el HTML raíz
- `aria-label` en todos los elementos interactivos sin texto visible
- `aria-current="page"` en la navegación activa
- `aria-expanded` / `aria-hidden` en menús desplegables y modales
- `:focus-visible` con outline visible en todos los elementos
- Contraste mínimo 4.5:1 en texto normal, 3:1 en texto grande
- `alt` descriptivo en todas las imágenes
- `<label>` asociado a cada campo del formulario

---

## 📊 SEO

Cada página define `title` y `description` en su frontmatter.
`Layout.astro` gestiona automáticamente:

- `<title>` y `<meta name="description">`
- Open Graph completo (title, description, image, url, locale)
- Twitter Card
- URL canónica
- `lang="es"` y charset UTF-8
- `theme-color: #5C4E78` para navegadores móviles

---

## 🔧 Mantenimiento frecuente

| Tarea                          | Dónde                                                                           |
| ------------------------------ | ------------------------------------------------------------------------------- |
| Añadir noticia a la home       | `src/components/Actualidad.astro` → array `items`                               |
| Añadir noticia al archivo      | `src/pages/actualidad.astro` → array `noticias`                                 |
| Añadir evento a la agenda      | `src/pages/agenda.astro` → array `eventos`                                      |
| Añadir negocio al directorio   | `NegociosLocales.astro` + `negocios.astro`                                      |
| Actualizar programa Boina Fest | `src/pages/boina-fest.astro` → sección `#agenda`                                |
| Cambiar teléfono / email       | `Footer.astro`, `SectionContacto.astro`, `contacto.astro`, `servicios.astro`    |
| Añadir foto a la galería       | `src/pages/galeria.astro` → array `fotos` + archivo en `public/images/galeria/` |

---

## 🗺️ Mejoras futuras sugeridas

- [ ] CMS headless (Notion API, Contentful o Sanity) — noticias sin tocar código
- [ ] Mapa interactivo de rutas de senderismo con trazado GPX
- [ ] Newsletter / lista de avisos por email (Brevo o Mailchimp)
- [ ] PWA con notificaciones push para bandos y avisos urgentes
- [ ] Panel de administración simple para el ayuntamiento
- [ ] Multilingüe (es / en) para turismo internacional
- [ ] Integración directa con la sede electrónica existente

---
---

## 💜 Una nota personal

*Esta sección no es documentación técnica.*

---

Este proyecto empezó como un ejercicio: ¿qué pasaría si Arenillas tuviera
una web a la altura de su identidad?

Pero a medida que avanzaba el trabajo —el manual de marca, la paleta de colores
sacada del espliego, el manifiesto, los accesos para los vecinos, el directorio
de negocios— algo cambió. Dejó de ser un ejercicio. Se convirtió en una candidatura.

**Estoy presentando mi solicitud al programa de repoblación de Arenillas.**

Soy informático. Y lo que mejor sé hacer para demostrar cómo podría ayudar
a un pueblo es exactamente esto: construir las herramientas digitales que necesita,
con el cuidado que merece.

Esta web no es una promesa. Es una muestra de trabajo real. Lo que veis aquí
—el diseño, el código, la estructura— es lo que haría si viviera en Arenillas.
Solo que lo hice antes de llegar.

Si me dais la oportunidad de vivir allí, esto es lo que aportaría:

- Mantener la web actualizada, segura y en funcionamiento
- Gestionar la presencia digital del pueblo en redes y buscadores
- Ayudar a vecinos y negocios locales con sus necesidades tecnológicas
- Trabajar en remoto desde allí, contribuyendo a la economía local
- Estar disponible para el pueblo, no solo para una pantalla

No busco escapar de la ciudad. Busco un lugar donde tener raíces y donde
lo que hago tenga más sentido que un ticket en una cola de soporte.

Arenillas me parece ese lugar.

---

*La esencia que resiste.*  
*Ojalá pueda resistir junto a vosotros.*

---

Proyecto de revitalización digital — Arenillas, Soria  
Web: [www.arenillas.es](https://www.arenillas.es)  
Email: ayuntamiento@arenillas.es