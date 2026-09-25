import type { Dictionary } from '../types'

export const es: Dictionary = {
  meta: {
    title: 'PRESS START: un paseo por el pasillo de consolas',
    description:
      'Un catálogo interactivo de consolas de videojuegos contado con scroll, de la Atari 2600 a la Nintendo Switch.',
  },
  chrome: {
    skipToContent: 'Saltar al contenido',
    backToAisle: 'Volver al pasillo',
    language: 'Idioma',
    disclaimer:
      'Proyecto fan no oficial y educativo. Sin afiliación ni respaldo de ningún fabricante de consolas. Todas las marcas pertenecen a sus respectivos dueños.',
  },
  catalog: {
    heading: 'Press Start',
    aisle: 'Pasillo 7 · Videojuegos',
    lede: 'Ocho máquinas tras el cristal, de la madera al Joy-Con. Arranca un ticket para llevarte una y verla de cerca.',
    makers: 'Fabricante',
    generations: 'Generación',
    all: 'Todas',
    search: 'Buscar consolas',
    searchPlaceholder: 'Busca una consola',
    results: '{count} de {total} consolas',
    empty: 'Nada en esta estantería coincide con «{query}».',
    emptyFiltered: 'Ninguna consola de esta estantería coincide con esos carteles.',
    clearFilters: 'Quitar filtros',
    released: 'Lanzamiento',
    generation: 'Gen',
    pullTicket: 'Arranca un ticket de {name}',
    ticketCta: 'Llévate este ticket',
    draft: 'Datos pendientes de fuentes',
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
    sections: {
      origin: 'Origen y desarrollo',
      specs: 'Por dentro',
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
    heading: 'Estantería vacía',
    body: 'No hay nada en este gancho. Puede que la consola que buscas aún no esté en el catálogo.',
  },
}
