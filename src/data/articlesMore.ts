import type { Article } from './articles'

/**
 * Resultados 6 a 15 (páginas 2 y 3 del buscador). A medida que se baja en el
 * ranking los sitios son menos formales: foros, apuntes, enciclopedias libres.
 */
export const moreArticles: readonly Article[] = [
  // ---------- Página 2 ----------
  {
    slug: 'hilo-puede-explotar-el-sol',
    url: 'foro.astroforo.es/viewtopic.php?t=8814',
    snippet:
      '¿El sol puede explotar? [Tema cerrado] - Buenas, soy nuevo. Ayer vi un documental y me quedé preocupado, ¿alguien me lo explica?',
    theme: 'foro',
    site: {
      name: 'AstroForo',
      tagline: 'La comunidad de aficionados a la astronomía · desde 2001',
      nav: ['Índice', 'Buscar', 'Miembros', 'Registrarse', 'Entrar'],
    },
    title: '¿El sol puede explotar? [Tema cerrado]',
    byline: 'Foro general » Dudas de principiantes » 47 respuestas',
    date: 'Último mensaje: 12 de junio de 2007',
    lead: 'Buenas, soy nuevo en el foro. Ayer vi un documental en la tele y me quedé preocupado. ¿Alguien me puede explicar si el sol va a explotar y cuándo? Gracias de antemano.',
    sections: [
      {
        heading: 'Re: ¿El sol puede explotar?',
        paragraphs: [
          'Bienvenido al foro. La respuesta corta es no. Para explotar como supernova una estrella necesita al menos ocho veces la masa del Sol, y la nuestra no llega ni de lejos. Lo que hará dentro de miles de millones de años es hincharse y luego quedarse como una enana blanca.',
          'Te recomiendo que leas el hilo fijo de la sección antes de abrir tema, esta pregunta sale cada dos semanas.',
        ],
      },
      {
        heading: 'Re: ¿El sol puede explotar?',
        paragraphs: [
          'A mí lo que me llama la atención es la cantidad de documentales que exageran esto para meter efectos especiales. Luego llegan los críos preguntando si nos vamos a morir el año que viene.',
          'MODERACIÓN: cerramos el tema porque se está repitiendo. Toda la información está en el hilo fijo. Un saludo y no te desanimes, pregunta lo que quieras en el hilo correspondiente.',
        ],
      },
    ],
    comments: [
      {
        author: 'nova_77',
        date: '11 jun, 18:22',
        text: 'Yo tengo la misma duda desde hace años. +1 al hilo fijo, está muy bien explicado.',
      },
      {
        author: 'ManuelG',
        date: '12 jun, 09:03',
        text: 'Por favor usad el buscador antes de abrir tema. Es el cuarto esta semana.',
      },
    ],
    sidebar: {
      title: 'Temas relacionados',
      links: [
        'HILO FIJO: preguntas frecuentes',
        '¿Qué telescopio me compro?',
        'Fotos de la última luna llena',
        'Normas del foro',
      ],
    },
    footerNote:
      'AstroForo · Powered by phpBB · Todos los horarios son GMT +1',
  },
  {
    slug: 'supernova-enciclopedia',
    url: 'www.enciclopedia-astral.org/wiki/Supernova',
    snippet:
      'Una supernova es una explosión estelar que puede manifestarse de forma muy notable, incluso a simple vista, en lugares de la esfera celeste...',
    theme: 'enciclopedia',
    site: {
      name: 'Enciclopedia Astral',
      tagline: 'El contenido lo escriben sus lectores',
      nav: ['Portada', 'Artículo', 'Discusión', 'Editar', 'Historial', 'Aleatorio'],
    },
    title: 'Supernova',
    byline: 'Artículo de la Enciclopedia Astral',
    date: 'Revisado por última vez el 3 de junio de 2007',
    lead: 'Una supernova es una explosión estelar que puede manifestarse de forma muy notable, incluso a simple vista, en lugares de la esfera celeste donde antes no se apreciaba nada.',
    sections: [
      {
        heading: 'Clasificación',
        paragraphs: [
          'Las supernovas se dividen en dos grandes familias según su espectro. Las de tipo I carecen de líneas de hidrógeno; las de tipo II las presentan. Dentro del tipo I, las Ia se originan en enanas blancas que superan el límite de Chandrasekhar.',
          'Esta sección necesita referencias. Puedes ayudar a la Enciclopedia Astral añadiéndolas.',
        ],
      },
      {
        heading: 'Efectos sobre la Tierra',
        paragraphs: [
          'Se estima que una supernova a menos de 25 años luz tendría consecuencias graves para la biosfera terrestre, principalmente por la destrucción de la capa de ozono. No se conoce ninguna candidata a esa distancia.',
          'El Sol no puede producir una supernova por ser insuficientemente masivo. Véase el artículo Enana blanca.',
        ],
      },
    ],
    factBox: {
      title: 'Contenido',
      items: [
        '1. Clasificación',
        '2. Mecanismo del colapso',
        '3. Efectos sobre la Tierra',
        '4. Supernovas históricas',
        '5. Véase también',
      ],
    },
    sidebar: {
      title: 'Herramientas',
      links: [
        'Lo que enlaza aquí',
        'Versión para imprimir',
        'Citar este artículo',
        'Página de discusión (12)',
      ],
    },
    footerNote:
      'Contenido disponible bajo licencia libre · Esta página se editó por última vez hace 9 días',
  },
  {
    slug: 'estudio-recalcula-vida-del-sol',
    url: 'www.diariodelmeridiano.es/ciencia/20070607/sol-estudio.html',
    snippet:
      'Un equipo internacional ajusta a la baja la fecha en la que nuestra estrella empezará a expandirse. Los autores piden calma: hablamos de miles de millones de años.',
    theme: 'noticias',
    site: {
      name: 'Diario del Meridiano',
      tagline: 'Edición digital · Actualizado a las 14:30',
      nav: ['Portada', 'España', 'Internacional', 'Economía', 'Ciencia', 'Deportes', 'Opinión'],
    },
    kicker: 'CIENCIA',
    title: 'Un estudio recalcula cuánto le queda al Sol',
    byline: 'Agencias / Redacción',
    date: '7 de junio de 2007',
    lead: 'Un equipo internacional ajusta a la baja la fecha en la que nuestra estrella empezará a expandirse. Los autores piden calma: hablamos de miles de millones de años.',
    sections: [
      {
        paragraphs: [
          'El trabajo, presentado esta semana en un congreso celebrado en Múnich, afina los modelos de evolución estelar con datos de heliosismología, la técnica que estudia las vibraciones de la superficie solar para deducir qué ocurre en el interior.',
          'La corrección es pequeña —del orden de un 2%— pero llamativa por el titular que ha generado en algunos medios. "Nadie tiene que cambiar sus planes", ironizó uno de los firmantes ante la prensa.',
        ],
      },
      {
        heading: 'Ni explosión ni apagón repentino',
        paragraphs: [
          'Los investigadores insistieron en desmentir dos ideas muy extendidas: que el Sol pueda estallar como una supernova, algo imposible por su masa, y que pueda apagarse de un día para otro.',
          'El proceso real, explicaron, es una expansión lenta que se prolongará durante cientos de millones de años y que terminará con la estrella convertida en una enana blanca del tamaño de la Tierra.',
        ],
      },
    ],
    sidebar: {
      title: 'Lo más leído',
      links: [
        'Un pueblo de Soria se queda sin médico',
        'El tiempo: llega el calor',
        'Las claves del nuevo plan de vivienda',
        'Ver todas las noticias de Ciencia',
      ],
    },
    footerNote:
      'Diario del Meridiano · Prohibida la reproducción · Envíanos tus fotos',
  },
  {
    slug: 'trabajo-fin-sistema-solar',
    url: 'www.apuntesdelaula.com/trabajos/ciencias/fin-sistema-solar.doc.html',
    snippet:
      'Trabajo de Ciencias de la Naturaleza. 3º ESO. Tema: el fin del sistema solar. Índice, desarrollo y conclusión. Descargar en formato Word.',
    theme: 'escolar',
    site: {
      name: 'Apuntes del Aula',
      tagline: 'Trabajos, resúmenes y exámenes para toda la ESO',
      nav: ['Inicio', 'Primaria', 'ESO', 'Bachillerato', 'Subir trabajo', 'Contacto'],
    },
    title: 'Trabajo de ciencias: el fin del sistema solar',
    byline: 'Enviado por: Laura M. · Categoría: 3º ESO · Valoración: ★★★☆☆ (28 votos)',
    date: 'Publicado el 19 de mayo de 2007',
    lead: 'Trabajo de Ciencias de la Naturaleza. 3º ESO. Tema: el fin del sistema solar. Incluye índice, desarrollo y conclusión. Se puede descargar en formato Word.',
    sections: [
      {
        heading: '1. Introducción',
        paragraphs: [
          'En este trabajo vamos a hablar del fin del sistema solar. Es un tema muy interesante porque nos afecta a todos, aunque sea dentro de mucho tiempo. He consultado varias páginas de internet y la enciclopedia de casa.',
        ],
      },
      {
        heading: '2. Desarrollo',
        paragraphs: [
          'El Sol es una estrella de tipo enana amarilla. Está compuesto principalmente por hidrógeno y helio. Cuando se le acabe el hidrógeno se convertirá en una gigante roja y se hará muy grande, tanto que se tragará a Mercurio y a Venus, y puede que a la Tierra.',
          'Después de la fase de gigante roja el Sol expulsará sus capas exteriores y se quedará solo el núcleo, que se llama enana blanca. Se irá enfriando poco a poco hasta apagarse.',
        ],
      },
      {
        heading: '3. Conclusión',
        paragraphs: [
          'En conclusión, el sistema solar tiene los días contados, pero no debemos preocuparnos porque quedan miles de millones de años. Lo importante es cuidar el planeta mientras tanto.',
        ],
      },
    ],
    sidebar: {
      title: 'Más de 3º ESO',
      links: [
        'La célula (resumen)',
        'Las capas de la Tierra',
        'Ejercicios de tectónica',
        'Cómo hacer una portada bonita',
      ],
    },
    footerNote:
      'Apuntes del Aula · Los trabajos los envían los usuarios · No nos hacemos responsables de las notas',
  },
  {
    slug: 'cinco-mitos-fin-del-mundo',
    url: 'www.cosmoscopio.es/espacio/cinco-mitos-fin-del-mundo.html',
    snippet:
      'Repasamos las cinco versiones del apocalipsis cósmico que más circulan por el correo electrónico y qué dice de ellas la astronomía.',
    theme: 'revista',
    site: {
      name: 'Cosmoscopio',
      tagline: 'La actualidad del universo, cada semana',
      nav: ['Portada', 'Espacio', 'Ciencia', 'Naturaleza', 'Tecnología', 'Foro'],
    },
    kicker: 'ESPACIO / DIVULGACIÓN',
    title: 'Cinco mitos sobre el fin del mundo',
    byline: 'Redacción Cosmoscopio',
    date: '28 de mayo de 2007',
    lead: 'Repasamos las cinco versiones del apocalipsis cósmico que más circulan por el correo electrónico y qué dice de ellas la astronomía.',
    sections: [
      {
        heading: '1. "El Sol va a explotar"',
        paragraphs: [
          'Es el más popular y el más fácil de desmontar: le falta masa. Nuestra estrella terminará hinchada y después apagada, sin estallido.',
        ],
      },
      {
        heading: '2. "Un planeta oculto nos va a chocar"',
        paragraphs: [
          'Un cuerpo del tamaño de un planeta en camino hacia nosotros llevaría décadas siendo el objeto más brillante del cielo nocturno. No hay manera de esconderlo, ni interés en hacerlo.',
        ],
      },
      {
        heading: '3. "Se va a invertir el campo magnético y moriremos"',
        paragraphs: [
          'Las inversiones magnéticas han ocurrido cientos de veces y están registradas en las rocas del fondo oceánico. Ninguna coincide con una extinción.',
        ],
      },
      {
        heading: '4. "Betelgeuse va a estallar y nos freirá"',
        paragraphs: [
          'Estallará, sí, pero está a más de 600 años luz. Desde aquí será un espectáculo visible de día durante semanas, y nada más.',
        ],
      },
      {
        heading: '5. "Los científicos lo saben y lo ocultan"',
        paragraphs: [
          'Sería el secreto peor guardado de la historia: en astronomía los datos se publican, y cualquier aficionado con un telescopio decente puede comprobar buena parte de ellos desde su terraza.',
        ],
      },
    ],
    sidebar: {
      title: 'También en Espacio',
      links: [
        'La increíble forma en la que el sol llegaría a su fin',
        'Diez cosas que no sabías de Marte',
        'El cometa que volverá en 2061',
        'Guía para ver las Perseidas',
      ],
    },
    footerNote:
      'Cosmoscopio · Edición digital · Prohibida la reproducción total o parcial',
  },

  // ---------- Página 3 ----------
  {
    slug: 'mi-hijo-no-duerme',
    url: 'www.universo-curioso.com/blog/mi-hijo-no-duerme.html',
    snippet:
      'Me escribe una madre preocupada: su hijo de nueve años no duerme desde que vio un documental sobre el final del Sol. Va por ustedes esta entrada.',
    theme: 'blog',
    site: {
      name: 'Universo Curioso',
      tagline: 'Preguntas raras con respuestas serias',
      nav: ['Portada', 'Preguntas', 'Archivo', 'Sobre el blog', 'Contacto'],
    },
    title: 'Mi hijo no duerme por culpa de un documental',
    byline: 'Publicado por Elena Vidal',
    date: '2 de junio de 2007 · 41 comentarios',
    lead: 'Me escribe una madre preocupada: su hijo de nueve años no duerme desde que vio un documental sobre el final del Sol. Va por ustedes esta entrada, que no lleva ni una sola cifra difícil.',
    sections: [
      {
        paragraphs: [
          'Lo primero que le dije es lo que le digo a él ahora: el Sol lleva encendido 4.600 millones de años y le queda para otros tantos. Puesto en escala humana, si toda la vida del Sol fuera un día, ahora serían las doce del mediodía.',
          'Lo segundo, que no va a explotar. Eso lo hacen las estrellas muy grandes, y la nuestra es más bien mediana. Es una buena noticia y además es verdad, que es la mejor combinación posible.',
        ],
      },
      {
        heading: 'Por qué los documentales asustan',
        paragraphs: [
          'Porque un documental necesita imágenes, y una expansión que dura cien millones de años no se ve. Una explosión, sí. Así que se recurre a la explosión aunque el guion diga otra cosa dos minutos después, cuando el niño ya se ha ido a la cama.',
          'Mi consejo, que no es científico sino de tía pesada: verlo con ellos y parar cuando haga falta. Preguntar "¿esto cuándo pasa?" es una herramienta buenísima contra el miedo.',
        ],
      },
    ],
    comments: [
      {
        author: 'Carmen',
        date: '2 junio, 21:15',
        text: 'Soy la madre del correo. Se lo he leído esta noche y me ha dicho "ah, entonces vale". Gracias de corazón.',
      },
      {
        author: 'dani85',
        date: '3 junio, 10:02',
        text: 'Lo de las doce del mediodía es una manera preciosa de contarlo, me lo apunto para clase.',
      },
    ],
    sidebar: {
      title: 'Archivo del blog',
      links: [
        '¿Puede una supernova destruir nuestro planeta?',
        '¿Por qué el cielo es negro de noche?',
        '¿Cuánto pesa una nube?',
        'Ver todas las preguntas',
      ],
    },
    footerNote:
      'Universo Curioso · Publicado con una plantilla libre · Sindicación RSS 2.0',
  },
  {
    slug: 'hilo-el-sol-se-apaga-foto',
    url: 'foro.astroforo.es/viewtopic.php?t=9021',
    snippet:
      'el sol se apaga? mirad esta foto que hice ayer desde el balcon, se ve una mancha rara y no se si es del telescopio o que',
    theme: 'foro',
    site: {
      name: 'AstroForo',
      tagline: 'La comunidad de aficionados a la astronomía · desde 2001',
      nav: ['Índice', 'Buscar', 'Miembros', 'Registrarse', 'Entrar'],
    },
    title: '¿El sol se apaga? mirad esta foto',
    byline: 'Foro general » Observaciones » 23 respuestas',
    date: 'Último mensaje: 4 de junio de 2007',
    lead: 'el sol se apaga? mirad esta foto que hice ayer desde el balcon con la camara de mi hermano, se ve una mancha rara y no se si es del telescopio o que. adjunto imagen (perdon por la calidad)',
    sections: [
      {
        heading: 'Re: ¿El sol se apaga?',
        paragraphs: [
          'Tranquilo, eso es una mancha solar. Son regiones más frías de la superficie, aparecen y desaparecen siguiendo un ciclo de once años. Justo ahora estamos en mínimo, así que has tenido suerte de pillar una.',
          'Por cierto, y esto es importante: no vuelvas a apuntar al Sol sin un filtro homologado delante del objetivo. Se pierde la vista en segundos y no se recupera.',
        ],
      },
      {
        heading: 'Re: ¿El sol se apaga?',
        paragraphs: [
          'Suscribo lo del filtro. Cada verano hay algún caso y no tiene ninguna gracia. Los filtros de rosca que se ponen en el ocular están prohibidos desde hace años, se pueden romper por el calor.',
          'La foto, para haberla hecho con una compacta a pulso, está bastante bien. Bienvenido al vicio.',
        ],
      },
    ],
    comments: [
      {
        author: 'el_pucelano',
        date: '4 jun, 12:40',
        text: 'jaja yo pensé lo mismo la primera vez. Bienvenido!',
      },
    ],
    sidebar: {
      title: 'Temas relacionados',
      links: [
        '¿El sol puede explotar? [Tema cerrado]',
        'Filtros solares: guía de compra',
        'Fotos de la última luna llena',
        'Normas del foro',
      ],
    },
    footerNote: 'AstroForo · Powered by phpBB · Todos los horarios son GMT +1',
  },
  {
    slug: 'directorio-el-sol',
    url: 'www.eldirectorioweb.net/ciencia/astronomia/sistema-solar/el-sol/',
    snippet:
      'Directorio de enlaces: Ciencia > Astronomía > Sistema Solar > El Sol. 34 sitios catalogados. Ordenar por popularidad, por fecha o alfabéticamente.',
    theme: 'directorio',
    site: {
      name: 'El Directorio Web',
      tagline: 'Todas las webs en español, ordenadas por categorías',
      nav: ['Inicio', 'Categorías', 'Añadir web', 'Top 100', 'Novedades'],
    },
    title: 'Ciencia > Astronomía > Sistema Solar > El Sol',
    byline: '34 sitios catalogados en esta categoría',
    date: 'Última revisión del editor: 14 de abril de 2007',
    lead: 'Directorio de enlaces revisados a mano por nuestros editores voluntarios. Puedes ordenar los resultados por popularidad, por fecha de alta o alfabéticamente.',
    sections: [
      {
        heading: 'Sitios destacados',
        paragraphs: [
          'Astronomía Fácil — Página personal con explicaciones sin fórmulas sobre el Sol y el sistema solar. Recomendada para principiantes. (1.204 visitas desde el directorio)',
          'Cosmoscopio, sección Espacio — Revista de divulgación con actualización semanal. (987 visitas)',
          'Misterios del Cosmos — Artículos largos y foro activo. Requiere registro para participar. (761 visitas)',
        ],
      },
      {
        heading: 'Otros sitios de la categoría',
        paragraphs: [
          'Bitácora Estelar · Enciclopedia Astral (artículo "Sol") · AstroForo, subforo del Sol · Efemérides solares · Observación solar para aficionados · El Sol para niños · Fotografía solar paso a paso · Manchas y ciclos.',
          '¿Falta tu web? Puedes proponerla desde el formulario de alta. Los editores revisan las propuestas en un plazo aproximado de seis semanas.',
        ],
      },
    ],
    sidebar: {
      title: 'Categorías hermanas',
      links: [
        'Sistema Solar > Planetas',
        'Sistema Solar > Cometas',
        'Astronomía > Instrumentos',
        'Astronomía > Asociaciones',
      ],
    },
    footerNote:
      'El Directorio Web · Editado por voluntarios · Añade nuestro botón a tu página',
  },
  {
    slug: 'la-web-de-chema',
    url: 'www.paginaspersonales.net/~chema/sol/index.htm',
    snippet:
      'Bienvenidos a mi página sobre el Sol. Aquí encontraréis fotos, datos y las respuestas a las preguntas que más me hacéis. Firma en mi libro de visitas.',
    theme: 'casero',
    site: {
      name: 'La página de Chema',
      tagline: 'Astronomía, montaña y otras aficiones',
      nav: ['Inicio', 'El Sol', 'Fotos', 'Mis enlaces', 'Libro de visitas'],
    },
    title: 'Todo sobre el Sol (mi página)',
    byline: 'Chema, desde Albacete',
    date: 'Actualizado el 8 de marzo de 2007',
    lead: 'Bienvenidos a mi página sobre el Sol. Aquí encontraréis fotos que he hecho yo, datos curiosos y las respuestas a las preguntas que más me hacéis por correo. Firma en mi libro de visitas antes de irte.',
    sections: [
      {
        heading: 'Datos que me parecen alucinantes',
        paragraphs: [
          'La luz que te da ahora mismo en la cara salió del Sol hace ocho minutos y veinte segundos. Pero la energía que la produjo tardó decenas de miles de años en salir del núcleo, rebotando de átomo en átomo. Es luz muy vieja.',
          'El Sol se lleva el 99,8% de toda la masa del sistema solar. Todo lo demás —los ocho planetas, las lunas, los asteroides— cabe en ese 0,2% que sobra.',
        ],
      },
      {
        heading: '¿Y lo de que va a explotar?',
        paragraphs: [
          'Me lo preguntáis mucho desde que salió aquello en la tele. No, no va a explotar. Le falta tamaño. Se hará gigante y roja, tardará una eternidad y luego se quedará pequeñita y blanca. Nada de bombas.',
          'Si queréis algo más serio que mi página, mirad en mis enlaces, tengo puestos varios sitios buenos.',
        ],
      },
    ],
    sidebar: {
      title: 'Mis secciones',
      links: [
        'Mis fotos del cielo',
        'Rutas por la sierra',
        'Mis enlaces favoritos',
        'Firma el libro de visitas',
      ],
    },
    footerNote:
      'Página alojada gratuitamente · Mejor vista con resolución 800x600 · Eres el visitante 43.981',
  },
  {
    slug: 'manchas-solares-y-clima',
    url: 'www.misteriosdelcosmos.org/articulos/manchas-solares-clima.html',
    snippet:
      'El número de manchas sube y baja cada once años. Repasamos qué se sabe y qué no sobre su relación con el clima terrestre.',
    theme: 'oscuro',
    site: {
      name: 'Misterios del Cosmos',
      tagline: 'Divulgación y debate astronómico',
      nav: ['Índice', 'Artículos', 'Efemérides', 'Foro', 'Galería', 'Colabora'],
    },
    title: 'Las manchas solares y el clima de la Tierra',
    byline: 'Por A. Sandoval · Sección de Artículos',
    date: '18 de mayo de 2007',
    lead: 'El número de manchas sube y baja siguiendo un ciclo de unos once años. Repasamos qué se sabe, qué se sospecha y qué directamente se ha inventado sobre su relación con el clima terrestre.',
    sections: [
      {
        heading: 'Qué son',
        paragraphs: [
          'Una mancha es una zona donde el campo magnético del Sol es tan intenso que frena la convección y deja la superficie unos 1.500 grados más fría que el entorno. Sigue estando a más de 4.000 grados: se ve oscura sólo por contraste.',
        ],
      },
      {
        heading: 'El mínimo de Maunder',
        paragraphs: [
          'Entre 1645 y 1715 las manchas casi desaparecieron. Coincidió con un periodo especialmente frío en Europa, con el Támesis helado y ferias sobre el hielo. La coincidencia es real y sugerente, pero la magnitud del efecto solar parece demasiado pequeña para explicar por sí sola aquel enfriamiento.',
          'De ahí a decir que el Sol explica cualquier cambio climático hay un salto que los datos no sostienen. La variación de energía a lo largo de un ciclo es de apenas un 0,1%.',
        ],
      },
    ],
    sidebar: {
      title: 'En el foro',
      links: [
        'El destino de la Tierra y el final del sistema solar',
        'Hilo oficial: fotos de la Luna',
        'Quedada para observar Saturno',
        'Normas del foro (leer antes de postear)',
      ],
    },
    footerNote:
      'Misterios del Cosmos · Asociación sin ánimo de lucro · Se autoriza la copia citando la fuente',
  },
]
