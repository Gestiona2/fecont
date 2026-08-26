import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Demo: el sitio vive en una subcarpeta de demos.emp2web.com.
// Cuando FECONT apruebe y tenga su dominio, poner site: "https://www.fecont.com"
// y base: "/" — los enlaces no hay que tocarlos, los resuelve src/lib/ruta.ts.
//
// output queda en "static" — no agregar adapter salvo que el proyecto necesite
// SSR real (formularios y automatizaciones van por proxy o GitHub Actions).
export default defineConfig({
  site: "https://demos.emp2web.com",
  base: "/fecont",
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
