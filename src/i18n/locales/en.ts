export const en = {
  meta: {
    title: 'PRESS START: a walk down the console aisle',
    description:
      'An interactive, scroll-driven catalog of video game consoles, from the Atari 2600 to the Nintendo Switch.',
  },
  chrome: {
    skipToContent: 'Skip to content',
    backToAisle: 'Back to the aisle',
    language: 'Language',
    disclaimer:
      'Unofficial, educational fan project. Not affiliated with or endorsed by any console maker. All trademarks belong to their respective owners.',
  },
  catalog: {
    heading: 'Press Start',
    aisle: 'Aisle 7 · Video games',
    lede: 'Eight machines behind the glass, from wood-grain to Joy-Con. Pull a ticket to take one home for a closer look.',
    makers: 'Maker',
    generations: 'Generation',
    all: 'All',
    search: 'Search consoles',
    searchPlaceholder: 'Find a console',
    results: '{count} of {total} consoles',
    empty: 'Nothing on this shelf matches “{query}”.',
    emptyFiltered: 'No console on this shelf matches those markers.',
    clearFilters: 'Clear filters',
    released: 'Released',
    generation: 'Gen',
    pullTicket: 'Pull a ticket for {name}',
    ticketCta: 'Take this ticket',
    draft: 'Facts pending sources',
  },
  generation: {
    2: 'Second generation',
    3: 'Third generation',
    4: 'Fourth generation',
    5: 'Fifth generation',
    6: 'Sixth generation',
    8: 'Eighth generation',
  },
  console: {
    sections: {
      origin: 'Origin & development',
      specs: 'Under the hood',
      launch: 'Launch & sales',
      games: 'Iconic games',
      legacy: 'Legacy',
      funFact: 'Fun fact',
    },
    researching: 'This console’s story is still being researched and sourced.',
    timelineLabel: 'Where the {name} sits in console history',
    previous: 'Previous console',
    next: 'Next console',
  },
  notFound: {
    heading: 'Empty shelf',
    body: 'There’s nothing on this peg. The console you’re looking for may not be in the catalog yet.',
  },
} as const
