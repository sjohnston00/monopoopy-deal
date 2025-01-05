import { COLOURS } from './colours.js'

export const PROPERTY_CARD_RENT_VALUES = {
  BROWNS: [1, 2],
  BLUES: [1, 2, 3],
  MAGENTAS: [1, 2, 4],
  ORANGES: [1, 3, 5],
  REDS: [2, 3, 6],
  YELLOWS: [2, 4, 6],
  GREENS: [2, 4, 7],
  DARK_BLUES: [3, 8],
  STATIONS: [1, 2, 3, 4],
  UTILITIES: [1, 2]
}

export const PROPERTY_CARDS = [
  //BROWNS
  {
    type: 'property',
    value: 1,
    color: COLOURS.SADDLE_BROWN,
    name: 'Old Kent Road',
    rent: PROPERTY_CARD_RENT_VALUES.BROWNS
  },
  {
    type: 'property',
    value: 1,
    color: COLOURS.SADDLE_BROWN,
    name: 'Whitechapel Road',
    rent: PROPERTY_CARD_RENT_VALUES.BROWNS
  },
  //LIGHT BLUES
  {
    type: 'property',
    value: 1,
    color: COLOURS.SKY_BLUE,
    name: 'Euston Road',
    rent: PROPERTY_CARD_RENT_VALUES.BLUES
  },
  {
    type: 'property',
    value: 1,
    color: COLOURS.SKY_BLUE,
    name: 'Pentonville Road',
    rent: PROPERTY_CARD_RENT_VALUES.BLUES
  },
  {
    type: 'property',
    value: 1,
    color: COLOURS.SKY_BLUE,
    name: 'The Anglel, Islington',
    rent: PROPERTY_CARD_RENT_VALUES.BLUES
  },
  //MAGENTAS
  {
    type: 'property',
    value: 2,
    color: COLOURS.DARK_ORCHID,
    name: 'Whitehall',
    rent: PROPERTY_CARD_RENT_VALUES.MAGENTAS
  },
  {
    type: 'property',
    value: 2,
    color: COLOURS.DARK_ORCHID,
    name: 'Pall Mall',
    rent: PROPERTY_CARD_RENT_VALUES.MAGENTAS
  },
  {
    type: 'property',
    value: 2,
    color: COLOURS.DARK_ORCHID,
    name: 'Northumberland Avenue',
    rent: PROPERTY_CARD_RENT_VALUES.MAGENTAS
  },
  //ORANGES
  {
    type: 'property',
    value: 2,
    color: COLOURS.ORANGE,
    name: 'Marlborough Street',
    rent: PROPERTY_CARD_RENT_VALUES.ORANGES
  },
  {
    type: 'property',
    value: 2,
    color: COLOURS.ORANGE,
    name: 'Bow Street',
    rent: PROPERTY_CARD_RENT_VALUES.ORANGES
  },
  {
    type: 'property',
    value: 2,
    color: COLOURS.ORANGE,
    name: 'Vine Street',
    rent: PROPERTY_CARD_RENT_VALUES.ORANGES
  },
  //REDS
  {
    type: 'property',
    value: 3,
    color: COLOURS.RED,
    name: 'Trafalgar Square',
    rent: PROPERTY_CARD_RENT_VALUES.REDS
  },
  {
    type: 'property',
    value: 3,
    color: COLOURS.RED,
    name: 'Fleet Street',
    rent: PROPERTY_CARD_RENT_VALUES.REDS
  },
  {
    type: 'property',
    value: 3,
    color: COLOURS.RED,
    name: 'Strand',
    rent: PROPERTY_CARD_RENT_VALUES.REDS
  },
  //YELLOWS
  {
    type: 'property',
    value: 3,
    color: COLOURS.YELLOW,
    name: 'Piccadilly',
    rent: PROPERTY_CARD_RENT_VALUES.YELLOWS
  },
  {
    type: 'property',
    value: 3,
    color: COLOURS.YELLOW,
    name: 'Leicester Square',
    rent: PROPERTY_CARD_RENT_VALUES.YELLOWS
  },
  {
    type: 'property',
    value: 3,
    color: COLOURS.YELLOW,
    name: 'Coventry Street',
    rent: PROPERTY_CARD_RENT_VALUES.YELLOWS
  },
  //GREENS
  {
    type: 'property',
    value: 4,
    color: COLOURS.GREEN,
    name: 'Bond Street',
    rent: PROPERTY_CARD_RENT_VALUES.GREENS
  },
  {
    type: 'property',
    value: 4,
    color: COLOURS.GREEN,
    name: 'Oxford Street',
    rent: PROPERTY_CARD_RENT_VALUES.GREENS
  },
  {
    type: 'property',
    value: 4,
    color: COLOURS.GREEN,
    name: 'Regent Street',
    rent: PROPERTY_CARD_RENT_VALUES.GREENS
  },
  //DARK BLUES
  {
    type: 'property',
    value: 4,
    color: COLOURS.BLUE,
    name: 'Park Lane',
    rent: PROPERTY_CARD_RENT_VALUES.DARK_BLUES
  },
  {
    type: 'property',
    value: 4,
    color: COLOURS.BLUE,
    name: 'Mayfair',
    rent: PROPERTY_CARD_RENT_VALUES.DARK_BLUES
  },
  //STATIONS
  {
    type: 'property',
    value: 2,
    color: COLOURS.BLACK,
    name: 'Fenchurch Street Station',
    rent: PROPERTY_CARD_RENT_VALUES.STATIONS
  },
  {
    type: 'property',
    value: 2,
    color: COLOURS.BLACK,
    name: 'Liverpool Street Station',
    rent: PROPERTY_CARD_RENT_VALUES.STATIONS
  },
  {
    type: 'property',
    value: 2,
    color: COLOURS.BLACK,
    name: 'Kings Cross Station',
    rent: PROPERTY_CARD_RENT_VALUES.STATIONS
  },
  {
    type: 'property',
    value: 2,
    color: COLOURS.BLACK,
    name: 'Marylebone Station',
    rent: PROPERTY_CARD_RENT_VALUES.STATIONS
  },
  //UTILITIES
  {
    type: 'property',
    value: 2,
    color: COLOURS.TEAL,
    name: 'Water Works',
    rent: PROPERTY_CARD_RENT_VALUES.UTILITIES
  },
  {
    type: 'property',
    value: 2,
    color: COLOURS.TEAL,
    name: 'Electric Company',
    rent: PROPERTY_CARD_RENT_VALUES.UTILITIES
  }
]
