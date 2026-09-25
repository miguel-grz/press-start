import type { ProfileCopy } from '../types'

const en: ProfileCopy = {
  hook: 'The grey box that brought home video games back from the 1983 crash.',
  alsoKnownAs: 'Launched in Japan as the Family Computer, or Famicom.',
  verdict: {
    summary:
      'Nintendo walked into a market everyone else had written off, dressed its console up as an entertainment system rather than a video game, and walked out with the template the industry still follows: tightly licensed third-party games and first-party series built to last decades.',
    points: [
      '61.91 million consoles sold worldwide, more than half of them in the Americas.',
      'Mario, Zelda, Metroid and Final Fantasy all started or broke through here.',
      'A twenty-year run in Japan: the last Famicom left the factory in 2003.',
    ],
  },
  origin: {
    intro:
      'In 1978 Hiroshi Yamauchi split Nintendo’s engineers into research and development teams and put Masayuki Uemura in charge of R&D2. Uemura’s team built a home console around a cheap 6502-based chip from Ricoh. Uemura later said the red and white colour scheme came from a scarf Yamauchi liked to wear, and that he expected the machine to flop.',
    timeline: {
      rnd2: 'Yamauchi reorganises Nintendo R&D; Masayuki Uemura leads R&D2.',
      prototype: 'A working test model is built to verify the hardware.',
      famicom: 'The Family Computer launches in Japan for ¥14,800.',
      newYork: 'Redesigned as the NES, it goes on sale in a New York City test market.',
      europe: 'The NES reaches Europe, starting in Scandinavia.',
      nesEnd: 'Nintendo discontinues the NES in North America and Europe.',
      famicomEnd: 'The last Famicom is manufactured in Japan.',
    },
    people: [
      { name: 'Masayuki Uemura', role: 'Lead hardware designer, head of Nintendo R&D2' },
      { name: 'Hiroshi Yamauchi', role: 'President of Nintendo' },
      { name: 'Gunpei Yokoi', role: 'Engineer, Nintendo R&D1' },
    ],
  },
  hardware: {
    intro:
      'For the US launch the Famicom was rebuilt as a flat, front-loading box. Nintendo deliberately positioned it as an entertainment system, not a video game console, for a market still wary after the crash.',
    hotspots: {
      slot: {
        title: 'Front-loading slot',
        body: 'Lift the door, slide the Game Pak in, push it down. Over time the design bent the contact pins, a common reason games refused to boot.',
      },
      buttons: {
        title: 'Power and Reset',
        body: 'Two chunky buttons on the front, with a red power light beside them.',
      },
      ports: {
        title: 'Controller ports',
        body: 'Two detachable controller ports. On the Famicom, both controllers were wired into the console.',
      },
      controller: {
        title: 'The controller',
        body: 'A cross-shaped directional pad, A and B, Select and Start: the layout almost every pad since has built on.',
      },
    },
  },
  media: {
    intro:
      'NES games came on Game Paks: large grey cartridges with a 72-pin connector, inserted like a videotape and pressed down to lock into place.',
    steps: [
      { title: 'Slide it in', body: 'The Game Pak goes in horizontally through the front door.' },
      { title: 'Press it down', body: 'Pushing it down seats the 72 pins in the connector.' },
      { title: 'Power on', body: 'The red light comes on, if the pins make contact.' },
    ],
    note: 'In Japan, Famicom cartridges were smaller, used a 60-pin connector and went straight in from the top.',
  },
  games: {
    smb: 'Credited as a key factor in reviving the industry after the 1983 crash, and the game that popularised side-scrolling platformers.',
    zelda:
      'An open world you could tackle in almost any order, and on NES one of the first cartridges with a battery to save your progress.',
    metroid:
      'Exploration gated by power-ups, a template later named after it, and an ending that revealed the armoured hero was a woman.',
    ff: 'Hironobu Sakaguchi’s turn-based party RPG launched Square’s series and helped popularise the genre on consoles.',
    smb3: 'Introduced the world map and flight, and sold more than 17 million copies.',
  },
  launch: {
    intro:
      'The Famicom launched in Japan in July 1983. The redesigned NES followed with a test launch in New York in October 1985, a nationwide release in 1986, and Europe from 1986 to 1987.',
    priceNote:
      'Sources disagree on the US launch price, which varied by bundle. The figure shown is the Deluxe Set price reported by Wikipedia.',
  },
  legacy: [
    {
      title: 'It revived a dead market',
      body: 'Retailers doubted anyone would buy a home console after the 1983 crash. Nintendo shipped R.O.B. the robot in the box so stores would shelve the NES as a toy, and it worked.',
    },
    {
      title: 'It made licensing the rule',
      body: 'A lockout chip, the 10NES, only ran approved cartridges. Third parties had to sign with Nintendo, earning the Official Seal of Quality.',
    },
    {
      title: 'Its franchises outlived it',
      body: 'Super Mario Bros. and The Legend of Zelda became series that are still releasing games decades later.',
    },
  ],
  funFact: {
    question: 'Did blowing into the cartridge actually fix it?',
    action: 'Blow into the cartridge',
    again: 'Blow again',
    answer:
      'No. Nintendo’s own advice is not to: the moisture in your breath corrodes the pins. What really helped was pulling the cartridge out and seating it again.',
  },
}

const es: ProfileCopy = {
  hook: 'La caja gris que resucitó las consolas domésticas tras el crash de 1983.',
  alsoKnownAs: 'Lanzada en Japón como Family Computer, o Famicom.',
  verdict: {
    summary:
      'Nintendo entró en un mercado que todos daban por muerto, vistió su consola de sistema de entretenimiento en lugar de videojuego y salió con la plantilla que la industria aún sigue: juegos de terceros bajo licencia estricta y sagas propias pensadas para durar décadas.',
    points: [
      '61,91 millones de consolas vendidas en el mundo, más de la mitad en América.',
      'Mario, Zelda, Metroid y Final Fantasy nacieron o despegaron aquí.',
      'Veinte años de vida en Japón: la última Famicom salió de fábrica en 2003.',
    ],
  },
  origin: {
    intro:
      'En 1978 Hiroshi Yamauchi dividió a los ingenieros de Nintendo en equipos de I+D y puso a Masayuki Uemura al frente de R&D2. Su equipo construyó una consola doméstica alrededor de un chip barato de Ricoh basado en el 6502. Uemura contó después que el rojo y blanco salió de una bufanda que a Yamauchi le gustaba llevar, y que esperaba que la máquina fracasara.',
    timeline: {
      rnd2: 'Yamauchi reorganiza el I+D de Nintendo; Masayuki Uemura dirige R&D2.',
      prototype: 'Se construye un modelo de prueba para verificar el hardware.',
      famicom: 'La Family Computer sale en Japón por 14.800 ¥.',
      newYork: 'Rediseñada como NES, se pone a la venta en un mercado de prueba en Nueva York.',
      europe: 'La NES llega a Europa, empezando por Escandinavia.',
      nesEnd: 'Nintendo deja de fabricar la NES en Norteamérica y Europa.',
      famicomEnd: 'Se fabrica la última Famicom en Japón.',
    },
    people: [
      { name: 'Masayuki Uemura', role: 'Diseñador jefe del hardware, director de Nintendo R&D2' },
      { name: 'Hiroshi Yamauchi', role: 'Presidente de Nintendo' },
      { name: 'Gunpei Yokoi', role: 'Ingeniero, Nintendo R&D1' },
    ],
  },
  hardware: {
    intro:
      'Para Estados Unidos la Famicom se reconstruyó como una caja plana de carga frontal. Nintendo la presentó a propósito como sistema de entretenimiento, no como videoconsola, para un mercado aún receloso tras el crash.',
    hotspots: {
      slot: {
        title: 'Ranura frontal',
        body: 'Levantas la tapa, metes el Game Pak y lo empujas hacia abajo. Con el tiempo el diseño doblaba los pines, una causa habitual de que los juegos no arrancaran.',
      },
      buttons: {
        title: 'Power y Reset',
        body: 'Dos botones grandes en el frontal, con la luz roja de encendido al lado.',
      },
      ports: {
        title: 'Puertos de mando',
        body: 'Dos puertos para mandos desmontables. En la Famicom, los dos mandos iban cableados a la consola.',
      },
      controller: {
        title: 'El mando',
        body: 'Una cruceta, A y B, Select y Start: la distribución sobre la que se ha construido casi cada mando posterior.',
      },
    },
  },
  media: {
    intro:
      'Los juegos de NES venían en Game Paks: cartuchos grises y grandes con un conector de 72 pines, que se metían como una cinta de vídeo y se bajaban para fijarlos.',
    steps: [
      { title: 'Deslízalo', body: 'El Game Pak entra en horizontal por la tapa frontal.' },
      { title: 'Presiónalo', body: 'Al bajarlo, los 72 pines encajan en el conector.' },
      { title: 'Enciende', body: 'La luz roja se enciende, si los pines hacen contacto.' },
    ],
    note: 'En Japón, los cartuchos de Famicom eran más pequeños, usaban un conector de 60 pines y entraban directamente por arriba.',
  },
  games: {
    smb: 'Considerado clave para revivir la industria tras el crash de 1983, y el juego que popularizó las plataformas de scroll lateral.',
    zelda:
      'Un mundo abierto que podías recorrer casi en cualquier orden y, en NES, uno de los primeros cartuchos con batería para guardar la partida.',
    metroid:
      'Exploración limitada por mejoras, una fórmula que acabó llevando su nombre, y un final que reveló que la heroína de la armadura era una mujer.',
    ff: 'El RPG por turnos de Hironobu Sakaguchi inició la saga de Square y ayudó a popularizar el género en consola.',
    smb3: 'Introdujo el mapa del mundo y la capacidad de volar, y vendió más de 17 millones de copias.',
  },
  launch: {
    intro:
      'La Famicom salió en Japón en julio de 1983. La NES rediseñada llegó con un lanzamiento de prueba en Nueva York en octubre de 1985, a todo el país en 1986 y a Europa entre 1986 y 1987.',
    priceNote:
      'Las fuentes no coinciden en el precio de lanzamiento en EE. UU., que variaba según el pack. La cifra mostrada es la del Deluxe Set según Wikipedia.',
  },
  legacy: [
    {
      title: 'Resucitó un mercado muerto',
      body: 'Las tiendas dudaban de que alguien volviera a comprar una consola tras el crash de 1983. Nintendo metió al robot R.O.B. en la caja para que la NES acabara en la sección de juguetes, y funcionó.',
    },
    {
      title: 'Impuso las licencias',
      body: 'Un chip de bloqueo, el 10NES, solo aceptaba cartuchos aprobados. Los terceros tenían que firmar con Nintendo y ganarse el Sello Oficial de Calidad.',
    },
    {
      title: 'Sus sagas la sobrevivieron',
      body: 'Super Mario Bros. y The Legend of Zelda se convirtieron en sagas que siguen sacando juegos décadas después.',
    },
  ],
  funFact: {
    question: '¿Soplar el cartucho de verdad lo arreglaba?',
    action: 'Sopla el cartucho',
    again: 'Sopla otra vez',
    answer:
      'No. La propia Nintendo recomienda no hacerlo: la humedad del aliento corroe los pines. Lo que de verdad ayudaba era sacar el cartucho y volver a encajarlo.',
  },
}

export const copy = { en, es }
