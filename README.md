# FECONT — propuesta de diseño

Rediseño del sitio del **Fondo de Empleados de Contadores Públicos (FECONT)** con su
identidad visual de 2025.

**Esto es una propuesta, no el sitio terminado.** Solo existe el home, para validar la
dirección de diseño con la Junta Directiva.

Demo: https://demos.emp2web.com/fecont/

## Qué trae

Diez secciones sobre azul noche, con secciones claras intercaladas:
portada animada · credibilidad · portafolio de ahorro y crédito · **simulador de cuota**
· por qué pertenecer · pagos y cuentas · transparencia · noticias · afiliación · cierre.

El simulador calcula con la fórmula de anualidad y una tasa de referencia del **15 % E. A.**
(promedio del sector solidario). **No es una oferta de crédito** y la interfaz lo dice:
las tasas reales de FECONT se cambian en `src/datos/inicio.json`.

Las fotografías son de stock y el contenido de noticias es de ejemplo, marcado como tal
en la propia página.

## Cómo trabajar en él

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # compila a dist/
npm run preview  # revisa el compilado antes de publicar
```

**Todo el texto visible vive en `src/datos/`**, un archivo por página. Los `.astro` leen de
ahí y no llevan texto escrito adentro.

## Publicación

GitHub Actions compila y publica en GitHub Pages con cada cambio en `main`
(`.github/workflows/deploy.yml`). El sitio vive en una subcarpeta del dominio de demos, por
eso `base: "/fecont"` en `astro.config.mjs`; los enlaces internos los resuelve
`src/lib/ruta.ts`, así que cuando FECONT tenga dominio propio basta cambiar `base` a `/`.

## Stack

Astro 7 estático + Tailwind 4. Tipografías (Montserrat y Nunito), GSAP e íconos guardados
dentro del sitio, nunca desde un CDN ajeno: privacidad del visitante y longevidad.

El archivo de íconos es un subconjunto propio de Lucide 0.544 con los 31 que usa el sitio
—7 KB en vez de 368 KB—, bajo licencia ISC.
