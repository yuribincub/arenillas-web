# Arenillas · Web Oficial
### *"La Esencia que Resiste"*

Web oficial del pueblo de Arenillas, Soria.  
Desarrollada con **Astro 4** + **Tailwind CSS**, aplicando el Manual de Marca completo.

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
│   ├── favicon.svg
│   └── images/              ← ⚠️ Añadir fotos reales aquí
│       ├── hero-arenillas.jpg
│       ├── pueblo-piedra.jpg
│       ├── turismo-espliego.jpg
│       ├── boina-fest.jpg
│       └── galeria/
│           ├── gal-01.jpg … gal-12.jpg
│
├── src/
│   ├── layouts/
│   │   └── Layout.astro        ← HTML base, SEO, scripts globales
│   │
│   ├── components/
│   │   ├── Nav.astro           ← Navegación (transparente en hero)
│   │   ├── Hero.astro          ← Sección hero full-screen
│   │   ├── SectionPueblo.astro ← Intro + pilares + historia
│   │   ├── Manifiesto.astro    ← Manifiesto oscuro full-bleed
│   │   ├── SectionTurismo.astro← Cards de experiencias
│   │   ├── BoinaFest.astro     ← Festival section
│   │   ├── GaleriaPreview.astro← Galería preview home
│   │   ├── SectionContacto.astro← CTA contacto
│   │   └── Footer.astro        ← Footer completo
│   │
│   ├── pages/
│   │   ├── index.astro         ← HOME
│   │   ├── el-pueblo.astro     ← Historia + Arquitectura + Comunidad
│   │   ├── turismo.astro       ← Turismo completo
│   │   ├── boina-fest.astro    ← Festival
│   │   ├── galeria.astro       ← Galería con filtros + lightbox
│   │   └── contacto.astro      ← Formulario de contacto
│   │
│   └── styles/
│       └── global.css          ← Tokens, componentes, utilidades
│
├── astro.config.mjs
└── tailwind.config.mjs
```

---

## 🎨 Sistema de diseño (Manual de Marca)

### Paleta de color

| Token           | HEX       | Uso                                |
| --------------- | --------- | ---------------------------------- |
| `lavanda-deep`  | `#5C4E78` | Color primario · logo · cabeceras  |
| `lavanda`       | `#8B7BA8` | Accents · iconos                   |
| `lavanda-light` | `#C4B5D4` | Bordes suaves · texto sobre oscuro |
| `lavanda-pale`  | `#EDE8F3` | Fondos de sección                  |
| `tierra`        | `#9E7B5A` | CTAs secundarios · accents cálidos |
| `tierra-dark`   | `#6B4E32` | Texto sobre claro · Boina Fest     |
| `musgo`         | `#5A6B4A` | Naturaleza · senderismo            |
| `crema`         | `#F7F3EF` | Fondo principal                    |
| `carbon`        | `#1A1614` | Fondo secciones oscuras            |

### Tipografía

- **Serif editorial**: Cormorant Garamond — títulos, citas, hero
- **Sans funcional**: Inter — navegación, botones, cuerpo web

### Clases clave

```html
<!-- Contenedor editorial -->
<div class="container-brand">…</div>

<!-- Sección con padding estándar -->
<section class="section">…</section>

<!-- Label de sección -->
<p class="section-label">Texto</p>

<!-- Botones -->
<a class="btn-primary">Principal</a>
<a class="btn-outline">Secundario</a>
<a class="btn-ghost">Fantasma</a>

<!-- Tags / badges -->
<span class="tag tag-lavanda">Naturaleza</span>
<span class="tag tag-tierra">Festival</span>
<span class="tag tag-musgo">Senderismo</span>

<!-- Animación reveal on scroll -->
<div class="reveal">…</div>
<div class="reveal reveal-delay-1">…</div>
```

---

## 🖼️ Fotografías necesarias

Añadir en `public/images/`:

| Archivo                           | Descripción                  | Ratio recomendado |
| --------------------------------- | ---------------------------- | ----------------- |
| `hero-arenillas.jpg`              | Paisaje soriano al atardecer | 16:9 · min 1920px |
| `pueblo-hero.jpg`                 | Vista del pueblo             | 16:9              |
| `pueblo-piedra.jpg`               | Arquitectura piedra          | 4:5               |
| `pueblo-historia.jpg`             | Calle histórica              | 3:4               |
| `turismo-espliego.jpg`            | Campo de espliego            | 5:4               |
| `turismo-destilacion.jpg`         | Destilación                  | 5:4               |
| `turismo-senderismo.jpg`          | Ruta senderismo              | 5:4               |
| `boina-fest.jpg`                  | Festival                     | 1:1               |
| `boina-fest-hero.jpg`             | Hero festival                | 16:9              |
| `galeria/gal-01.jpg … gal-12.jpg` | Galería general              | Varios            |
| `comunidad-01/02/03.jpg`          | Vida del pueblo              | Varios            |

**Estilo fotográfico** (ver Manual de Marca sección 09):
- Hora dorada · sin HDR · sin filtros agresivos
- Temperatura cálida 5500-6500K
- Mucho espacio negativo

---

## 📧 Formulario de contacto

El formulario usa `fetch` y puede integrarse con:

### Netlify Forms (gratis, recomendado)
```html
<!-- Añadir a <form>: -->
data-netlify="true" name="contacto"
```

### Formspree
```javascript
// Cambiar action en contacto.astro:
action="https://formspree.io/f/TU_ID"
```

### API Route Astro (Node/SSR)
```
src/pages/api/contacto.ts  ← crear endpoint propio
```

---

## 🌐 Deploy

### Netlify (recomendado)
```bash
npm run build
netlify deploy --prod --dir=dist
```
O conectar el repo en [netlify.com](https://netlify.com) con build command `npm run build`.

### Vercel
```bash
vercel --prod
```

### GitHub Pages
Añadir a `astro.config.mjs`:
```javascript
base: '/arenillas-web'
```

---

## ♿ Accesibilidad

- WCAG 2.1 AA
- Skip to main content link
- `aria-label` en todos los controles
- `aria-current="page"` en navegación
- Alto contraste en combinaciones de color
- Foco visible en todos los elementos interactivos

---

## 📊 SEO

Cada página define su propio `title` y `description` en el frontmatter.  
Layout.astro gestiona automáticamente:
- Meta tags básicos
- Open Graph (redes sociales)
- Twitter Card
- URL canónica
- `lang="es"`

---

## 📞 Contacto técnico

Proyecto de revitalización digital — Arenillas, Soria  
Web: [www.arenillas.es](https://www.arenillas.es)  
Email: ayuntamiento@arenillas.es