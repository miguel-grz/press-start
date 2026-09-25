import type { Dictionary } from '../types'

export const es: Dictionary = {
  meta: {
    title: 'PRESS START: las historias detrás de las consolas',
    description:
      'Un recorrido interactivo por las consolas que dieron forma a los videojuegos, de la Atari 2600 a la Nintendo Switch.',
  },
  chrome: {
    skipToContent: 'Saltar al contenido',
    home: 'Inicio de PRESS START',
    consoles: 'Consolas',
    timeline: 'Cronología',
    language: 'Idioma',
    disclaimer:
      'Proyecto fan no oficial y educativo. Sin afiliación ni respaldo de ningún fabricante de consolas. Todas las marcas pertenecen a sus respectivos dueños.',
    photoCredit: 'Fotografías de consolas de Evan-Amos, dominio público, vía Wikimedia Commons.',
  },
  home: {
    hero: {
      title: 'Cada consola tiene una historia.',
      lede: 'Ocho máquinas que marcaron los videojuegos, de la Atari 2600 a la Nintendo Switch. Elige una y pulsa start.',
      explore: 'Explorar las consolas',
      timeline: 'Ver la cronología',
    },
    lineup: {
      title: 'Elige tu consola.',
      filter: 'Filtrar por fabricante',
      all: 'Todas',
      explore: 'Explorar',
      previous: 'Desplazar la colección a la izquierda',
      next: 'Desplazar la colección a la derecha',
    },
    inside: {
      title: 'Dentro de cada consola.',
      lede: 'No es solo una lección de historia. Cada página es una review interactiva de la máquina.',
      review: {
        title: 'La review',
        body: 'Precio de lanzamiento, ventas y veredicto de un vistazo, cada cifra con su fuente.',
      },
      reviewRows: { price: 'Precio de lanzamiento', units: 'Unidades vendidas', verdict: 'Veredicto' },
      media: { title: 'Formatos físicos, en movimiento', body: 'Mira cómo entra el cartucho y cómo gira el disco.' },
      games: { title: 'Cinco juegos icónicos', body: 'Cada uno reinterpretado en una pequeña animación original.' },
      specs: { title: 'Specs que se sienten', body: 'Procesador, memoria y resolución, animados lado a lado.' },
      hardware: {
        title: 'El hardware de cerca',
        body: 'Puntos interactivos en los puertos, interruptores y ranuras clave.',
      },
    },
    timeline: {
      title: 'Cinco décadas, una estantería.',
      lede: 'Las máquinas en el orden en que llegaron.',
    },
    closing: {
      title: 'Cuando quieras.',
      cta: 'Empezar en 1977',
    },
  },
  generation: {
    2: 'Segunda generación',
    3: 'Tercera generación',
    4: 'Cuarta generación',
    5: 'Quinta generación',
    6: 'Sexta generación',
    8: 'Octava generación',
  },
  console: {
    photoAlt: 'La consola {name} con su mando',
    draft: 'Datos pendientes de fuentes',
    sections: {
      origin: 'Origen y desarrollo',
      specs: 'Por dentro',
      media: 'Formato físico',
      launch: 'Lanzamiento y ventas',
      games: 'Juegos icónicos',
      legacy: 'Legado',
      funFact: 'Dato curioso',
    },
    researching: 'La historia de esta consola aún se está investigando y documentando.',
    timelineLabel: 'Dónde se sitúa la {name} en la historia de las consolas',
    previous: 'Consola anterior',
    next: 'Consola siguiente',
  },
  notFound: {
    heading: 'Game over.',
    body: 'Esta página no existe. Puede que la consola que buscas aún no esté en la colección.',
    back: 'Volver al inicio',
  },
}
