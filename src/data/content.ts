export interface SearchResult {
  title: string
  snippet: string
  url: string
}

export const serviceColumns = [
  [
    'Respuestas',
    'Autos',
    'Entretenimiento',
    'Finanzas',
    'Juegos',
    'GeoCities',
    'Grupos',
  ],
  [
    'Salud',
    'Horóscopos',
    'Empleos',
    'Infantil',
    'Local',
    'Mapas',
    'Messenger',
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
    'Páginas Amarillas',
    'Yahoo! Internacional',
    'Más servicios...',
  ],
] as const

export const footerLinks = [
  'Publicidad',
  'Marketing de búsqueda',
  'Ayuda',
  'Política de privacidad',
  'Condiciones del servicio',
  'Sugerir un sitio',
] as const

export const searchResults: SearchResult[] = [
  {
    title: 'La increíble forma en la que el sol llegaría al fin de su existencia',
    snippet:
      'la tierra podría llegar a explotar a causa de una super nova, esto quiere decir una explosión del sol',
    url: 'www.ciencia-hoy.es/espacio/final-del-sol.html',
  },
  {
    title: '¿Qué ocurrirá cuando el Sol se convierta en una gigante roja?',
    snippet:
      'Dentro de miles de millones de años el Sol agotará su combustible y crecerá hasta transformar por completo el sistema solar.',
    url: 'www.astronomia-facil.net/sistema-solar/gigante-roja.html',
  },
  {
    title: '¿Puede una supernova destruir nuestro planeta?',
    snippet:
      'Los astrónomos explican qué distancia tendría que tener una estrella para que su explosión afectara seriamente a la Tierra.',
    url: 'www.universo-curioso.com/preguntas/supernovas-y-la-tierra.html',
  },
  {
    title: 'El destino de la Tierra y el final del sistema solar',
    snippet:
      'Un recorrido por las distintas etapas que atravesarán el Sol, los planetas y sus órbitas durante el futuro lejano.',
    url: 'www.misteriosdelcosmos.org/articulos/destino-de-la-tierra.html',
  },
  {
    title: 'Cómo explotan las estrellas: guía de supernovas',
    snippet:
      'Una explicación sencilla sobre las explosiones estelares, sus causas y los elementos que dejan dispersos en el espacio.',
    url: 'www.observatorio-virtual.es/guias/como-explotan-las-estrellas.html',
  },
]

export const relatedQueries = [
  'cómo termina la vida del sol',
  'qué es una supernova',
  'el futuro de la tierra',
  'cuándo se apagará el sol',
] as const