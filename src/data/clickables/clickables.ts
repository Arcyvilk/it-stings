import goldenCactus from 'assets/images/cacti/cactus_golden.png';
import hedgehog from 'assets/images/cacti/hedgehog.png';
import barbedWire from 'assets/images/cacti/barbedWire.png';
import razorWire from 'assets/images/cacti/razorWire.png';
import seaUrchin from 'assets/images/cacti/seaUrchin.png';
import teddyBear from 'assets/images/cacti/teddyBear.png';
import happyCat from 'assets/images/cacti/happyCat.png';
import angryCat from 'assets/images/cacti/angryCat.png';

export type Clickable = {
  id: string;
  name: string;
  description: string;
  src: string;
  clicks: number;
  minSize: number;
  growth: number;
  unlockable: boolean;
  mute?: boolean;
};

export const clickables: Clickable[] = [
  {
    id: 'cactus_golden',
    name: 'Golden Cactus',
    description: 'A golden cactus.',
    src: goldenCactus,
    clicks: 0,
    minSize: 100,
    growth: 1.5,
    unlockable: true,
  },
  {
    id: 'hedgehog',
    name: 'Hedgehog',
    description: 'A cute specimen of the Erinaceus Europaeus.',
    src: hedgehog,
    clicks: 680,
    minSize: 100,
    growth: 1.5,
    unlockable: true,
  },
  {
    id: 'barbed_wire',
    name: 'Barbed wire',
    description: 'A shiny roll of pure suffering.',
    src: barbedWire,
    clicks: 1150,
    minSize: 100,
    growth: 2,
    unlockable: true,
  },
  {
    id: 'razor_wire',
    name: 'Razor wire',
    // eslint-disable-next-line prettier/prettier
    description: 'If you thought the barbed wire wasn\'t extreme enough.',
    src: razorWire,
    clicks: 1530,
    minSize: 100,
    growth: 3,
    unlockable: true,
  },
  {
    id: 'sea_urchin',
    name: 'Sea urchin',
    description: 'A spiny, globular echinoderm.',
    src: seaUrchin,
    clicks: 1740,
    minSize: 100,
    growth: 1.5,
    unlockable: true,
  },
  {
    id: 'teddy_bear',
    name: 'Teddy bear',
    description: 'Cute cuddly bear.',
    src: teddyBear,
    clicks: 2120,
    minSize: 100,
    growth: 0,
    mute: true,
    unlockable: true,
  },
  {
    id: 'happy_cat',
    name: 'Harry',
    description: 'Gentle and friendly orange tomcat.',
    src: happyCat,
    clicks: 2270,
    minSize: 100,
    growth: 0,
    mute: true,
    unlockable: true,
  },
  {
    id: 'angry_cat',
    name: 'Angry Harry',
    description:
      'Even the most gentle of all feline family will get annoyed when poked one time too much.',
    src: angryCat,
    clicks: 2420,
    minSize: 100,
    growth: 7,
    unlockable: true,
  },
];
