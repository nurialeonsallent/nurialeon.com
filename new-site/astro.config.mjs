import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import embeds from "astro-embed/integration"

import { externalLink } from "./src/utils/externalLink"

const blogAntiguo = {
  "/blog/": "/posts/",
  "/blog/1": "/posts/",
  "/blog/2": "/posts/",
  "/blog/3": "/posts/",
  "/blog/4": "/posts/",
  "/blog/5": "/posts/",
  "/blog/6": "/posts/",
  "/blog/7": "/posts/",
  "/blog/8": "/posts/",
  "/blog/9": "/posts/",
  "/blog/10": "/posts/",
  "/blog/11": "/posts/",
  "/2025/01/06/terapiapareja-barcelona-psicologiapareja/":
    "/posts/cuando-ir-a-terapia-de-parejas-familias/",
  "/2024/12/10/sexualidad-vidasexual-psicologa-barcelona/":
    "/posts/sexualidad-salud-mental/",
  "/2024/10/21/culpa-maternidad-psicologa-centro-barcelona/":
    "/posts/la-culpa-en-la-maternidad/",
  "/2024/10/16/alimentacion-habitos-dieta-barcelona/":
    "/posts/peligros-consecuencias-dietas-restrictivas/",
  "/2024/10/08/falta-de-sue%C3%B1o-salud-mental-psicologa-barcelona/":
    "/posts/falta-de-sue%C3%B1o-salud-mental/",
  "/2024/09/04/autoestima-subir-psicologa-barcelona/":
    "/posts/autoestima-sientete-bien-por-fin/",
  "/2024/08/10/dejar-de-fumar-psicologa-barcelona/":
    "/posts/como-dejar-de-fumar/",
  "/2024/07/11/deporte-ansiedad-saludmental-psicologa-barcelona/":
    "/posts/ansiedad-y-deporte/",
  "/2024/06/18/el-poder-del-juego-mental-creatividad/":
    "/posts/importancia-de-divertirse-adultos/",
  "/2024/05/16/comida-hambre-psicologa-barcelona/": "/posts/tipos-de-hambre/",
  "/2024/04/20/como-elegir-psicologo-terapeuta-barcelona/":
    "/posts/como-elegir-mejor-psicologo-terapeuta/",
  "/2024/04/17/terapia-pareja-terapia-psicologica-relaciones/":
    "/posts/como-tener-relaciones-pareja-sanas/",
  "/2024/03/25/enfermedad-dolor-psicologa-barcelona/":
    "/posts/dolor-cronico-convivencia/",
  "/2024/03/23/alimentacion-psiconutricion-psicologa-barcelona/":
    "/posts/hambre-saciedad-se%C3%B1ales-de-nuestro-cuerpo/",
  "/2024/03/02/como-ser-un-buen-lider-el-arte-de-liderar/":
    "/posts/el-arte-de-liderar-como-ser-un-buen-lider/el-arte-de-liderar-como-ser-un-buen-lider/",
  "/2024/01/29/comer-con-ansiedad-psicologia/":
    "/posts/psiconutricion-emociones-conducta-alimentaria/",
  "/2024/01/22/crecer-en-pareja-consejos/":
    "/posts/consejos-para-crecer-en-pareja/",
  "/2023/11/28/como-cuidar-y-educar-a-nuestros-hijos/":
    "/posts/claves-para-educar-cuidar-nuestros-hijos/",
  "/2023/11/25/como-no-amargarse-la-vida-y-no-sufrir/":
    "/posts/como-dejar-de-amargarse-la-vida/",
  "/2023/10/07/duda-patologica-toma-de-decisiones/":
    "/posts/como-tomar-buenas-decisiones-superar-bloqueo/",
  "/2023/09/23/miedos-ansiedad-fobias/":
    "/posts/como-gestionar-miedos-fobias-ansiedad/",
  "/2023/08/09/como-gestionar-emociones-intensas/":
    "/posts/como-gestionar-las-emociones/",
  "/2023/05/17/ira-y-agresividad-rabia-enojo/":
    "/posts/como-gestionar-ira-agresividad/",
  "/2022/09/10/como-ser-mas-fuerte-emocionalmente/":
    "/posts/como-ser-mas-positivo-fuerte-mentalmente/",
  "/2022/03/07/vinculos-afectivos-y-apego-seguro/":
    "/posts/tipos-de-apego-importancia-lazos-afectivos/",
  // "": "/posts/la-tristeza-y-la-furia-cuento/",
  "/2021/12/14/empezar-una-relacion-psicologia/":
    "/posts/terapia-empezar-relacion-dificultades/",
  "/2021/07/24/ansiedad-estres-factores-psicologia/":
    "/posts/ansiedad-estres-factores-asociados/",
  "/2021/07/03/estilos-de-crianza-parental-psicologia/":
    "/posts/estilos-de-crianza-parental-desarrollo-ni%C3%B1os/",
  "/2021/06/26/personalidad-y-conduca-agresiva-psicologia/":
    "/posts/relacion-agresividad-personalidad-factores/",
  "/2021/06/05/bienvenidos-al-blog-psicologia/": "/posts/bienvenidos/",
}

// https://astro.build/config
export default defineConfig({
  site: "https://www.nurialeon.com",
  integrations: [
    embeds(),
    mdx(),
    sitemap(),
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
  markdown: {
    rehypePlugins: [[externalLink, {}]],
  },
  // image: {
  //   layout: "responsive",
  // },
  redirects: {
    "/sitemap.xml": "/sitemap-index.xml",
    "/servicios/": "/psicologo-barcelona/",
    ...blogAntiguo,
  },
})
