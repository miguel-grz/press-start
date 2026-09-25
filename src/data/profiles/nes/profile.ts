import type { ConsoleProfile } from '../types'

export const profile: ConsoleProfile = {
  releases: [
    {
      value: { region: 'JP', date: '1983-07-15', name: 'Family Computer' },
      sources: ['wikipedia-nes'],
    },
    {
      value: { region: 'NA', date: '1985-10-18', name: 'Nintendo Entertainment System' },
      sources: ['wikipedia-nes', 'vghf-nes-launch'],
    },
    {
      value: { region: 'EU', date: '1986-09-01', name: 'Nintendo Entertainment System' },
      sources: ['wikipedia-nes'],
    },
  ],
  launchPrices: [
    { value: { region: 'JP', amount: 14800, currency: 'JPY' }, sources: ['wikipedia-nes', 'soranews-uemura'] },
    // Sources disagree on the US launch price (test-market set vs. nationwide Deluxe Set).
    { value: { region: 'NA', amount: 179.99, currency: 'USD' }, sources: ['wikipedia-nes'], uncertain: true },
  ],
  unitsSold: {
    value: { total: 61.91, byRegion: { japan: 19.35, americas: 34.0, other: 8.56 } },
    sources: ['nintendo-ir-units', 'nintendo-ir-regions'],
  },
  softwareSold: { value: 500.01, sources: ['nintendo-ir-units', 'nintendo-ir-regions'] },
  specs: {
    cpu: { value: { name: 'Ricoh 2A03 (6502 core)', mhz: 1.79 }, sources: ['nesdev-cpu', 'wikipedia-nes'] },
    ram: { value: { kb: 2 }, sources: ['wikipedia-nes'] },
    vram: { value: { kb: 2 }, sources: ['wikipedia-nes'] },
    resolution: { value: { width: 256, height: 240 }, sources: ['wikipedia-nes'] },
    colors: { value: { onScreen: 25, palette: 54 }, sources: ['wikipedia-nes', 'nesdev-palettes'] },
    sprites: { value: { total: 64, perLine: 8 }, sources: ['nesdev-oam'] },
    media: { value: { name: 'Game Pak', pins: 72 }, sources: ['nesdev-cartridge'] },
  },
  timeline: [
    { value: { id: 'rnd2', date: '1978' }, sources: ['wikipedia-nes'] },
    { value: { id: 'prototype', date: '1982-10' }, sources: ['wikipedia-nes'] },
    { value: { id: 'famicom', date: '1983-07-15' }, sources: ['wikipedia-nes', 'soranews-uemura'] },
    { value: { id: 'newYork', date: '1985-10-18' }, sources: ['wikipedia-nes', 'vghf-nes-launch'] },
    { value: { id: 'europe', date: '1986-09-01' }, sources: ['wikipedia-nes'] },
    { value: { id: 'nesEnd', date: '1995-08-14' }, sources: ['wikipedia-nes'] },
    { value: { id: 'famicomEnd', date: '2003-09-25' }, sources: ['wikipedia-nes'] },
  ],
  games: [
    { id: 'smb', title: 'Super Mario Bros.', year: 1985, mechanic: 'platformer', sources: ['wikipedia-smb'] },
    { id: 'zelda', title: 'The Legend of Zelda', year: 1986, mechanic: 'adventure', sources: ['wikipedia-zelda'] },
    { id: 'metroid', title: 'Metroid', year: 1986, mechanic: 'exploration', sources: ['wikipedia-metroid'] },
    { id: 'ff', title: 'Final Fantasy', year: 1987, mechanic: 'rpg', sources: ['wikipedia-ff'] },
    { id: 'smb3', title: 'Super Mario Bros. 3', year: 1988, mechanic: 'flight', sources: ['wikipedia-smb3'] },
  ],
  hotspots: [
    { id: 'slot', x: 44, y: 36 },
    { id: 'buttons', x: 37, y: 67 },
    { id: 'ports', x: 65, y: 85 },
    { id: 'controller', x: 7, y: 84 },
  ],
  citations: {
    origin: ['wikipedia-nes', 'soranews-uemura'],
    hardware: ['wikipedia-nes'],
    media: ['nesdev-cartridge', 'wikipedia-nes'],
    legacy0: ['wikipedia-nes', 'wikipedia-rob'],
    legacy1: ['wikipedia-nes'],
    legacy2: ['wikipedia-nes', 'wikipedia-smb', 'wikipedia-zelda'],
    funFact: ['kotaku-blowing', 'wikipedia-nes'],
  },
}
