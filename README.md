# Vistazú 2007

Recreación de un portal web español de mediados de los 2000 —buscador, rejilla
de servicios y página de resultados— para uso en pantalla en una producción
audiovisual.

**Vistazú es una marca ficticia.** El proyecto reproduce el *estilo* de la época
(cabecera azul claro, botones dorados con degradado, tipografía Arial de 12 px,
ancho fijo de 760 px, enlaces azules y resultados con URL en verde), no la
identidad de ninguna empresa real.

## Las páginas de destino

Los cinco resultados de búsqueda no son texto muerto: cada uno abre la página
completa del sitio ficticio que lo firma, con su propia identidad visual de la
época. El contenido está en [src/data/articles.ts](src/data/articles.ts) y de
ahí salen también los resultados del buscador, así que título, extracto y URL no
pueden descuadrarse.

| Sitio | URL | Aspecto |
| --- | --- | --- |
| Cosmoscopio | `cosmoscopio.es` | revista de divulgación, cabecera azul marino |
| Astronomía Fácil | `astronomia-facil.net` | página personal con contador de visitas |
| Universo Curioso | `universo-curioso.com` | blog con archivo y comentarios |
| Misterios del Cosmos | `misteriosdelcosmos.org` | fondo estrellado, asociación amateur |
| Bitácora Estelar | `bitacora-estelar.net` | cuaderno en serif, categorías y comentarios |

Las cinco comparten el esqueleto de
[ArticlePage.tsx](src/components/ArticlePage.tsx) y cambian de piel con el campo
`theme` (`revista`, `casero`, `blog`, `oscuro`, `bitacora`) en
[ArticlePage.css](src/components/ArticlePage.css).

Rutas: `/` es la portada, `/?q=<consulta>` los resultados y
`/?q=<consulta>&a=<slug>` una página de destino. Se vuelve a los resultados con
el botón atrás del navegador, y el enlace ya visitado se queda morado, como
tocaba entonces.

## Notas de marca

Para mantener el proyecto libre de marcas registradas:

- Logotipo propio (`public/logo.svg`): tipografía sans-serif azul marino con
  acento naranja, deliberadamente distinta del logotipo serif rojo con perfil y
  sombra que usaban otros portales de la época.
- Nombres de servicios genéricos en castellano (`Mensajería`, `Webs personales`,
  `Guía de empresas`) en lugar de nombres de producto registrados.
- El aviso de navegador no cita navegadores concretos.
- Los dominios, autores, publicaciones y comentaristas de las páginas de destino
  son inventados; ninguno corresponde a un medio o una persona real.
- Los iconos y assets de terceros que traía la plantilla se han sacado de la
  aplicación (ver `reference/`, carpeta ignorada por git).

Todo el texto de marca vive en [src/data/brand.ts](src/data/brand.ts). Para
cambiar el nombre del portal basta con editar ese archivo: cabecera, título de
la pestaña, servicios, pie y textos accesibles se actualizan solos. El logotipo
(`public/logo.svg`) y el favicon (`public/favicon.svg`) se editan aparte.

## Desarrollo

```bash
pnpm install
pnpm run dev      # servidor de desarrollo
pnpm run build    # compilación a dist/
pnpm run preview  # vista previa de la compilación
pnpm run lint
```

La home es `/`; la página de resultados es `/?q=<consulta>`.

## Despliegue

`.github/workflows/deploy-pages.yml` publica `dist/` en GitHub Pages en cada
push a `main`. La ruta base se define en [vite.config.ts](vite.config.ts) y debe
coincidir con el nombre del repositorio; si el repositorio se llama de otra
forma, pasa `BASE_PATH=/nombre-del-repo/` al compilar.
