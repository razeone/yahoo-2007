import { articles } from './articles'

export interface SearchResult {
  slug: string
  title: string
  snippet: string
  url: string
}

export const serviceColumns: readonly (readonly string[])[] = [
  [
    'Respuestas',
    'Autos',
    'Entretenimiento',
    'Finanzas',
    'Juegos',
    'Webs personales',
    'Grupos',
  ],
  [
    'Salud',
    'Horóscopos',
    'Empleos',
    'Infantil',
    'Local',
    'Mapas',
    'Mensajería',
  ],
  [
    'Cine',
    'Música',
    'Noticias',
    'Parejas',
    'Bienes raíces',
    'Compras',
    'Deportes',
  ],
  [
    'Tecnología',
    'Televisión',
    'Viajes',
    'Tiempo',
    'Guía de empresas',
    'Internacional',
    'Más servicios...',
  ],
]

export const browserNoticeLinks = [
  'Actualizar el navegador',
  'Requisitos del sistema',
  'Consejos de seguridad',
  'Preguntas frecuentes',
] as const

export const footerLinks = [
  'Publicidad',
  'Marketing de búsqueda',
  'Ayuda',
  'Política de privacidad',
  'Condiciones del servicio',
  'Sugerir un sitio',
] as const

/** Los resultados salen de las propias páginas, así nunca se descuadran. */
export const searchResults: SearchResult[] = articles.map(
  ({ slug, title, snippet, url }) => ({ slug, title, snippet, url }),
)

export const relatedQueries = [
  'cómo termina la vida del sol',
  'qué es una supernova',
  'el futuro de la tierra',
  'cuándo se apagará el sol',
] as const
