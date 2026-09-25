export interface Source {
  title: string
  publisher: string
  url: string
  /** ISO date the source was last checked. */
  accessed: string
}

/**
 * Every source cited anywhere on the site. Profiles reference these ids, so a typo or a
 * missing source is a type error. SOURCES.md is generated from this file.
 */
export const sources = {
  'nintendo-ir-units': {
    title: 'Dedicated Video Game Sales Units',
    publisher: 'Nintendo Co., Ltd. Investor Relations',
    url: 'https://www.nintendo.co.jp/ir/en/finance/hard_soft/index.html',
    accessed: '2026-09-25',
  },
  'nintendo-ir-regions': {
    title: 'Consolidated Sales Transition by Region (through December 2016)',
    publisher: 'Nintendo Co., Ltd. Investor Relations',
    url: 'https://www.nintendo.co.jp/ir/library/historical_data/pdf/consolidated_sales_e1612.pdf',
    accessed: '2026-09-25',
  },
  'wikipedia-nes': {
    title: 'Nintendo Entertainment System',
    publisher: 'Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Nintendo_Entertainment_System',
    accessed: '2026-09-25',
  },
  'nesdev-cpu': {
    title: 'CPU',
    publisher: 'NESdev Wiki',
    url: 'https://www.nesdev.org/wiki/CPU',
    accessed: '2026-09-25',
  },
  'nesdev-oam': {
    title: 'PPU OAM',
    publisher: 'NESdev Wiki',
    url: 'https://www.nesdev.org/wiki/PPU_OAM',
    accessed: '2026-09-25',
  },
  'nesdev-palettes': {
    title: 'PPU palettes',
    publisher: 'NESdev Wiki',
    url: 'https://www.nesdev.org/wiki/PPU_palettes',
    accessed: '2026-09-25',
  },
  'nesdev-cartridge': {
    title: 'Cartridge connector',
    publisher: 'NESdev Wiki',
    url: 'https://www.nesdev.org/wiki/Cartridge_connector',
    accessed: '2026-09-25',
  },
  'vghf-nes-launch': {
    title: 'The NES Launch Collection',
    publisher: 'Video Game History Foundation',
    url: 'https://gamehistory.org/nes-launch-collection-1985/',
    accessed: '2026-09-25',
  },
  'soranews-uemura': {
    title: 'Famicom creator Masayuki Uemura had no faith in the game system’s success',
    publisher: 'SoraNews24 (from Shupure News, April 2013)',
    url: 'https://soranews24.com/2013/04/30/famicom-creator-masayuki-uemura-had-no-faith-in-the-game-systems-success-colored-it-after-his-boss-scarf/',
    accessed: '2026-09-25',
  },
  'kotaku-blowing': {
    title: 'Blowing on cartridges didn’t help them, it hurt them',
    publisher: 'Kotaku',
    url: 'https://kotaku.com/blowing-on-cartridges-didnt-help-them-it-hurt-them-5946085',
    accessed: '2026-09-25',
  },
  'wikipedia-rob': {
    title: 'R.O.B.',
    publisher: 'Wikipedia',
    url: 'https://en.wikipedia.org/wiki/R.O.B.',
    accessed: '2026-09-25',
  },
  'wikipedia-smb': {
    title: 'Super Mario Bros.',
    publisher: 'Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Super_Mario_Bros.',
    accessed: '2026-09-25',
  },
  'wikipedia-zelda': {
    title: 'The Legend of Zelda (video game)',
    publisher: 'Wikipedia',
    url: 'https://en.wikipedia.org/wiki/The_Legend_of_Zelda_(video_game)',
    accessed: '2026-09-25',
  },
  'wikipedia-metroid': {
    title: 'Metroid (video game)',
    publisher: 'Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Metroid_(video_game)',
    accessed: '2026-09-25',
  },
  'wikipedia-ff': {
    title: 'Final Fantasy (video game)',
    publisher: 'Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Final_Fantasy_(video_game)',
    accessed: '2026-09-25',
  },
  'wikipedia-smb3': {
    title: 'Super Mario Bros. 3',
    publisher: 'Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Super_Mario_Bros._3',
    accessed: '2026-09-25',
  },
} as const satisfies Record<string, Source>

export type SourceId = keyof typeof sources
