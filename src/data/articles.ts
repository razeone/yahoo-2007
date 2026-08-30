/**
 * Contenido inventado para los cinco sitios que aparecen en los resultados.
 *
 * Cada entrada es una página completa de un sitio ficticio de 2007, con su
 * propia identidad visual (`theme`). Todos los dominios, autores y sitios son
 * imaginarios; ninguno corresponde a una publicación real.
 */

export type ArticleTheme =
  | 'revista'
  | 'casero'
  | 'blog'
  | 'oscuro'
  | 'bitacora'
  | 'foro'
  | 'enciclopedia'
  | 'noticias'
  | 'escolar'
  | 'directorio'

export interface ArticleSection {
  heading?: string
  paragraphs: string[]
}

export interface ArticleComment {
  author: string
  date: string
  text: string
}

export interface Article {
  /** Identificador en la URL: /?q=...&a=<slug> */
  slug: string
  /** Debe coincidir con la URL mostrada en los resultados. */
  url: string
  /** Texto que el buscador muestra bajo el título. */
  snippet: string
  theme: ArticleTheme
  site: {
    name: string
    tagline: string
    nav: readonly string[]
  }
  title: string
  kicker?: string
  byline: string
  date: string
  lead: string
  sections: readonly ArticleSection[]
  pullQuote?: string
  factBox?: {
    title: string
    items: readonly string[]
  }
  comments?: readonly ArticleComment[]
  sidebar: {
    title: string
    links: readonly string[]
  }
  footerNote: string
}

/** Los cinco primeros resultados: páginas trabajadas, de sitios "serios". */
export const topArticles: readonly Article[] = [
  {
    slug: 'final-del-sol',
    url: 'www.cosmoscopio.es/espacio/final-del-sol.html',
    snippet:
      'la tierra podría llegar a explotar a causa de una super nova, esto quiere decir una explosión del sol',
    theme: 'revista',
    site: {
      name: 'Cosmoscopio',
      tagline: 'La actualidad del universo, cada semana',
      nav: ['Portada', 'Espacio', 'Ciencia', 'Naturaleza', 'Tecnología', 'Foro'],
    },
    kicker: 'ESPACIO / EL FUTURO DEL SISTEMA SOLAR',
    title:
      'La increíble forma en la que el sol llegaría al fin de su existencia',
    byline: 'Redacción Cosmoscopio',
    date: '14 de marzo de 2007',
    lead: 'la tierra podría llegar a explotar a causa de una super nova, esto quiere decir una explosión del sol. Los expertos consultados por esta revista aseguran que el fenómeno está previsto, aunque no para mañana.',
    sections: [
      {
        paragraphs: [
          'Cada segundo, en el corazón del Sol, seiscientos millones de toneladas de hidrógeno se transforman en helio. Es esa reacción, y no otra cosa, la que sostiene el peso de la estrella e impide que se derrumbe sobre sí misma. El día que el combustible se termine, el equilibrio se romperá.',
          'Y el combustible se va a terminar. Los cálculos más aceptados dan al Sol unos 4.600 millones de años de vida por delante, poco más o menos la misma edad que ya tiene. Estamos, por así decirlo, exactamente en la mitad de la película.',
        ],
      },
      {
        heading: 'Primero crecerá, y mucho',
        paragraphs: [
          'Cuando el hidrógeno del núcleo se agote, el Sol no se apagará como una bombilla. Hará lo contrario: se hinchará. Las capas exteriores se expandirán hasta engullir la órbita de Mercurio, después la de Venus, y muy probablemente la de la Tierra. Nuestro planeta quedaría dentro de la propia atmósfera de la estrella.',
          'Ese estado se llama gigante roja. La superficie estará mucho más fría —de ahí el color— pero será tan enorme que, vista desde donde hoy estamos, ocuparía medio cielo. Los océanos habrán hervido mucho antes de que llegue ese momento.',
        ],
      },
      {
        heading: '¿Y la explosión?',
        paragraphs: [
          'Aquí conviene ser prudentes. En internet circula la idea de que el Sol terminará estallando como una supernova y llevándose por delante a la Tierra. Los astrónomos que hemos consultado lo niegan: para explotar así hace falta una masa mucho mayor, al menos ocho veces la solar.',
          'Lo que sí ocurrirá es algo más discreto y, a su manera, más hermoso. El Sol expulsará sus capas exteriores en una serie de pulsos y quedará envuelto en una nebulosa planetaria, un anillo de gas iluminado desde dentro. En el centro quedará el núcleo desnudo: una enana blanca del tamaño de la Tierra, tan densa que una cucharada pesaría toneladas.',
          'Esa brasa seguirá enfriándose durante miles de millones de años, hasta apagarse del todo. No habrá estruendo. Habrá silencio.',
        ],
      },
    ],
    pullQuote:
      '«El Sol no tiene masa suficiente para estallar. Terminará como una brasa, no como una bomba.»',
    factBox: {
      title: 'Las cifras',
      items: [
        'Edad actual del Sol: unos 4.600 millones de años',
        'Combustible restante: unos 5.000 millones de años',
        'Diámetro como gigante roja: hasta 200 veces el actual',
        'Masa mínima para una supernova: 8 masas solares',
        'Temperatura del núcleo: 15 millones de grados',
      ],
    },
    sidebar: {
      title: 'También en Espacio',
      links: [
        'Diez cosas que no sabías de Marte',
        'El cometa que volverá en 2061',
        'Así suena Júpiter',
        '¿Hay agua en la Luna?',
        'Guía para ver las Perseidas',
      ],
    },
    footerNote:
      'Cosmoscopio · Edición digital · Prohibida la reproducción total o parcial',
  },
  {
    slug: 'gigante-roja',
    url: 'www.astronomia-facil.net/sistema-solar/gigante-roja.html',
    snippet:
      'Dentro de miles de millones de años el Sol agotará su combustible y crecerá hasta transformar por completo el sistema solar.',
    theme: 'casero',
    site: {
      name: 'Astronomía Fácil',
      tagline: 'Astronomía para todos los públicos · desde 1999',
      nav: ['Inicio', 'El Sistema Solar', 'Estrellas', 'Telescopios', 'Enlaces', 'Libro de visitas'],
    },
    title: '¿Qué ocurrirá cuando el Sol se convierta en una gigante roja?',
    byline: 'Ramón Belmonte, aficionado a la astronomía desde los 12 años',
    date: 'Última actualización: 2 de febrero de 2007',
    lead: 'Dentro de miles de millones de años el Sol agotará su combustible y crecerá hasta transformar por completo el sistema solar. En esta página lo explico paso a paso y sin fórmulas, como me habría gustado que me lo explicaran a mí.',
    sections: [
      {
        heading: '1. Qué es una gigante roja',
        paragraphs: [
          'Una gigante roja es una estrella que ya ha gastado el hidrógeno de su núcleo. Sin esa reacción, el centro se contrae y se calienta, y ese calor extra empuja las capas de fuera hacia afuera. La estrella se vuelve enorme y su superficie se enfría, y por eso la vemos roja.',
          'Es importante entender que la estrella no gana masa. Solo se reparte de otra manera: la misma cantidad de material ocupando un volumen muchísimo mayor. Por eso una gigante roja es, en su parte exterior, más tenue que el aire que respiramos.',
        ],
      },
      {
        heading: '2. Qué pasará con los planetas',
        paragraphs: [
          'Mercurio y Venus están sentenciados: quedarán dentro de la estrella y se evaporarán. Con la Tierra hay discusión. Al expandirse, el Sol pierde masa, y al perder masa su gravedad afloja, así que las órbitas se ensanchan. Puede que la Tierra escape por poco.',
          'Pero escapar no es sobrevivir. A esa distancia la superficie estaría a más de mil grados. Habría dejado de haber agua, atmósfera y cualquier cosa parecida a un paisaje mucho antes.',
          'Los que salen ganando son los mundos helados de fuera. Europa, Encélado o Titán se descongelarían durante unos cientos de millones de años. Habrá océanos en el sistema solar exterior justo cuando aquí ya no quede nada.',
        ],
      },
      {
        heading: '3. Y después',
        paragraphs: [
          'La fase de gigante roja no dura. Comparada con los 10.000 millones de años de vida normal de la estrella, es un suspiro: unos cientos de millones de años. Después el Sol suelta sus capas exteriores y se queda el núcleo, una enana blanca.',
          'Si alguien pudiera mirar el sistema solar desde lejos en ese momento vería un anillo de gas de colores con un punto blanco y diminuto en el centro. Es uno de los objetos más bonitos del cielo, y hay decenas catalogados. Cada uno fue una estrella como la nuestra.',
        ],
      },
    ],
    factBox: {
      title: 'Resumen rápido',
      items: [
        'Hoy: estrella normal (secuencia principal)',
        'Dentro de ~5.000 millones de años: gigante roja',
        'Después: nebulosa planetaria',
        'Al final: enana blanca que se enfría',
        'Nunca: supernova (le falta masa)',
      ],
    },
    sidebar: {
      title: 'Secciones de la web',
      links: [
        'El Sol paso a paso',
        'Cómo empezar con un telescopio',
        'Mapas del cielo mes a mes',
        'Preguntas de los visitantes',
        'Escríbeme',
      ],
    },
    footerNote:
      'Página personal sin ánimo de lucro · Optimizada para 1024x768 · Visitas: 128.457',
  },
  {
    slug: 'supernovas-y-la-tierra',
    url: 'www.universo-curioso.com/preguntas/supernovas-y-la-tierra.html',
    snippet:
      'Los astrónomos explican qué distancia tendría que tener una estrella para que su explosión afectara seriamente a la Tierra.',
    theme: 'blog',
    site: {
      name: 'Universo Curioso',
      tagline: 'Preguntas raras con respuestas serias',
      nav: ['Portada', 'Preguntas', 'Archivo', 'Sobre el blog', 'Contacto'],
    },
    title: '¿Puede una supernova destruir nuestro planeta?',
    byline: 'Publicado por Elena Vidal',
    date: '8 de mayo de 2007 · 23 comentarios',
    lead: 'Los astrónomos explican qué distancia tendría que tener una estrella para que su explosión afectara seriamente a la Tierra. La respuesta corta es: bastante cerca, y por suerte no tenemos ninguna candidata ahí.',
    sections: [
      {
        paragraphs: [
          'Una supernova libera en unas semanas más energía que la que el Sol emitirá en toda su vida. Dicho así asusta. Pero la energía se reparte en todas direcciones, y el espacio es enorme, de modo que lo que importa no es cuánta energía hay sino a qué distancia estamos.',
        ],
      },
      {
        heading: 'La distancia crítica',
        paragraphs: [
          'El número que se maneja habitualmente son unos 25 o 30 años luz. Por debajo de esa distancia, la radiación de alta energía bastaría para dañar seriamente la capa de ozono. Sin ozono, la radiación ultravioleta del propio Sol llegaría a la superficie sin filtrar y el efecto sobre el plancton y las plantas sería devastador.',
          'Ojo con el matiz: el planeta no se rompería. No hay una onda expansiva que parta la Tierra en dos, como se ve en algunas películas. Lo que se rompería es la biosfera, que para nosotros viene a ser lo mismo.',
        ],
      },
      {
        heading: '¿Hay alguna estrella así de cerca?',
        paragraphs: [
          'No. Las candidatas conocidas a supernova están todas lejísimos en estos términos. Betelgeuse, la más citada, está a más de 600 años luz. Cuando explote —y explotará— aquí se verá como una segunda estrella muy brillante, visible incluso de día durante unas semanas. Será un espectáculo, no una catástrofe.',
          'Hay quien sospecha que alguna extinción del pasado remoto pudo tener este origen. Es una hipótesis interesante y difícil de demostrar, porque una supernova no deja fósiles: deja, como mucho, isótopos raros en los sedimentos marinos.',
        ],
      },
      {
        heading: 'Y el Sol, ya que estamos',
        paragraphs: [
          'El Sol no puede hacer esto. Le falta masa por un factor de ocho. Su final será una gigante roja y después una enana blanca, un proceso largo y sin explosión. Lo digo porque es la pregunta que me llega cada semana en el correo.',
        ],
      },
    ],
    pullQuote:
      '«El planeta no se rompería. Lo que se rompería es la biosfera, que para nosotros viene a ser lo mismo.»',
    comments: [
      {
        author: 'jaime_rm',
        date: '8 mayo, 23:41',
        text: 'Entonces lo de Betelgeuse es seguro? mi profesor dijo que igual ya ha explotado y no lo sabemos todavía',
      },
      {
        author: 'Elena Vidal',
        date: '9 mayo, 08:12',
        text: 'Es posible, sí. La luz tarda más de 600 años en llegar, así que veríamos el suceso con ese retraso. Pero seguiría sin afectarnos.',
      },
      {
        author: 'marisol',
        date: '9 mayo, 12:55',
        text: 'Muy bien explicado, lo he mandado a mi hijo que anda preocupadísimo con esto desde que lo vio en la tele.',
      },
      {
        author: 'anónimo',
        date: '10 mayo, 02:30',
        text: 'y si explota una que no conocemos??',
      },
    ],
    sidebar: {
      title: 'Archivo del blog',
      links: [
        '¿Por qué el cielo es negro de noche?',
        '¿Cuánto pesa una nube?',
        '¿Se puede oír algo en el espacio?',
        '¿Qué hay dentro de un agujero negro?',
        'Ver todas las preguntas',
      ],
    },
    footerNote:
      'Universo Curioso · Publicado con una plantilla libre · Sindicación RSS 2.0',
  },
  {
    slug: 'destino-de-la-tierra',
    url: 'www.misteriosdelcosmos.org/articulos/destino-de-la-tierra.html',
    snippet:
      'Un recorrido por las distintas etapas que atravesarán el Sol, los planetas y sus órbitas durante el futuro lejano.',
    theme: 'oscuro',
    site: {
      name: 'Misterios del Cosmos',
      tagline: 'Divulgación y debate astronómico',
      nav: ['Índice', 'Artículos', 'Efemérides', 'Foro', 'Galería', 'Colabora'],
    },
    title: 'El destino de la Tierra y el final del sistema solar',
    byline: 'Por A. Sandoval · Sección de Artículos',
    date: '21 de enero de 2007',
    lead: 'Un recorrido por las distintas etapas que atravesarán el Sol, los planetas y sus órbitas durante el futuro lejano. Las escalas de tiempo son tan grandes que conviene tomárselas con calma: aquí un millón de años no es nada.',
    sections: [
      {
        heading: 'Dentro de mil millones de años',
        paragraphs: [
          'El Sol brilla hoy alrededor de un 30% más que cuando se formó, y seguirá subiendo. Ese aumento lento es, en la práctica, más peligroso para la vida que cualquier catástrofe futura. Dentro de unos mil millones de años el exceso de calor habrá acelerado el ciclo del carbono hasta el punto de dejar la atmósfera sin CO₂ suficiente para la fotosíntesis.',
          'Las plantas desaparecerían primero. Después, todo lo que depende de ellas. La Tierra seguiría girando, con océanos y nubes, pero estéril.',
        ],
      },
      {
        heading: 'Dentro de tres mil millones de años',
        paragraphs: [
          'Los océanos se evaporan. El vapor de agua en la alta atmósfera se descompone por la radiación solar y el hidrógeno escapa al espacio. Cuando el proceso termina, el agua no vuelve: se ha perdido para siempre. El planeta quedaría como un Venus algo más pequeño.',
          'Por esas fechas, además, nuestra galaxia habrá empezado a chocar con la de Andrómeda. Suena dramático, pero las estrellas están tan separadas que casi ninguna colisionará; lo que cambia es el cielo, que se llenará de bandas de luz durante unos cientos de millones de años.',
        ],
      },
      {
        heading: 'Dentro de cinco mil millones de años',
        paragraphs: [
          'Llega la fase de gigante roja. El Sol se expande, pierde alrededor de un tercio de su masa en forma de viento estelar y las órbitas de todo el sistema se ensanchan en consecuencia. Mercurio y Venus caen dentro. La Tierra queda en el límite y su suerte depende de detalles del cálculo que todavía se discuten.',
          'Sea cual sea el desenlace, para entonces hará mucho que no queda nada que rescatar.',
        ],
      },
      {
        heading: 'Después',
        paragraphs: [
          'El Sol expulsa sus capas y deja una enana blanca del tamaño de la Tierra. Los planetas exteriores, si han sobrevivido, seguirán orbitando una brasa cada vez más tenue. Con el tiempo suficiente —cientos de miles de millones de años— esa brasa se apagará hasta convertirse en un objeto frío y oscuro.',
          'El sistema solar seguirá existiendo, técnicamente. Simplemente no habrá nada encendido en él.',
        ],
      },
    ],
    factBox: {
      title: 'Cronología',
      items: [
        '+1.000 millones de años: fin de la fotosíntesis',
        '+3.000 millones: océanos evaporados',
        '+4.000 millones: encuentro con Andrómeda',
        '+5.000 millones: gigante roja',
        '+8.000 millones: enana blanca',
      ],
    },
    sidebar: {
      title: 'En el foro',
      links: [
        '¿Podremos mover la Tierra de órbita?',
        'Hilo oficial: fotos de la Luna',
        'Dudas de un principiante',
        'Quedada para observar Saturno',
        'Normas del foro (leer antes de postear)',
      ],
    },
    footerNote:
      'Misterios del Cosmos · Asociación sin ánimo de lucro · Se autoriza la copia citando la fuente',
  },
  {
    slug: 'como-explotan-las-estrellas',
    url: 'www.bitacora-estelar.net/guias/como-explotan-las-estrellas.html',
    snippet:
      'Una explicación sencilla sobre las explosiones estelares, sus causas y los elementos que dejan dispersos en el espacio.',
    theme: 'bitacora',
    site: {
      name: 'Bitácora Estelar',
      tagline: 'Cuaderno de un observador de provincias',
      nav: ['Bitácora', 'Guías', 'Categorías', 'Enlaces amigos', 'Quién soy'],
    },
    title: 'Cómo explotan las estrellas: guía de supernovas',
    byline: 'Escrito por Nuria Cabal',
    date: '30 de abril de 2007 · Categoría: Guías',
    lead: 'Una explicación sencilla sobre las explosiones estelares, sus causas y los elementos que dejan dispersos en el espacio. La escribo porque en clase me la pidieron tres veces la misma semana.',
    sections: [
      {
        heading: 'Una estrella es un pulso',
        paragraphs: [
          'Toda estrella vive tensando dos fuerzas contrarias: su propia gravedad, que tira hacia dentro, y la presión de la fusión nuclear, que empuja hacia fuera. Mientras las dos se igualan, la estrella es estable. Toda la vida de una estrella es ese empate.',
          'La fusión va fabricando elementos cada vez más pesados: hidrógeno a helio, helio a carbono, y así sucesivamente. Cada escalón da menos energía que el anterior y dura menos tiempo. Al final la estrella queda con capas ordenadas como una cebolla.',
        ],
      },
      {
        heading: 'El hierro lo estropea todo',
        paragraphs: [
          'El problema aparece con el hierro. Fusionar hierro no libera energía: la consume. En cuanto el núcleo se llena de hierro, la presión desaparece de golpe y la gravedad gana la partida.',
          'El núcleo se derrumba en menos de un segundo. Las capas exteriores caen sobre un centro que ya no puede comprimirse más, rebotan y salen despedidas a decenas de miles de kilómetros por segundo. Eso es una supernova de tipo II.',
        ],
      },
      {
        heading: 'El otro tipo',
        paragraphs: [
          'Hay una segunda manera de explotar, y es más silenciosa de contar. Una enana blanca en un sistema doble puede ir robando material a su compañera. Cuando supera cierto límite de masa, se enciende entera de una vez y se destruye sin dejar nada detrás. Son las de tipo Ia, y como todas explotan con un brillo muy parecido, se usan para medir distancias en el universo.',
        ],
      },
      {
        heading: 'Lo que queda',
        paragraphs: [
          'Una supernova esparce por el espacio los elementos que fabricó y también otros nuevos, forjados en el propio estallido. El calcio de los huesos, el hierro de la sangre y el oxígeno del aire salieron de ahí. No es una metáfora bonita: es un inventario.',
          'De la estrella queda una estrella de neutrones o, si era muy masiva, un agujero negro. Y alrededor, durante miles de años, una nube en expansión que los aficionados podemos fotografiar con paciencia y un buen filtro.',
        ],
      },
    ],
    pullQuote:
      '«El calcio de los huesos y el hierro de la sangre salieron de ahí. No es una metáfora: es un inventario.»',
    comments: [
      {
        author: 'Tomás',
        date: '1 mayo, 19:08',
        text: 'Nuria, lo del hierro no lo había entendido nunca hasta hoy. Gracias por la guía.',
      },
      {
        author: 'observatorio_pepe',
        date: '3 mayo, 21:44',
        text: 'Añado que la del Cangrejo se vio desde China en el año 1054 y quedó anotada. Impresiona pensarlo.',
      },
    ],
    sidebar: {
      title: 'Categorías',
      links: [
        'Guías (12)',
        'Observaciones (48)',
        'Material y trastos (9)',
        'Cielo del mes (36)',
        'Divagaciones (7)',
      ],
    },
    footerNote:
      'Bitácora Estelar · Contenido bajo licencia libre · Hecho a mano, sin gestor de contenidos',
  },
]

export const articles = topArticles

export const articleBySlug = new Map(
  articles.map((article) => [article.slug, article] as const),
)
