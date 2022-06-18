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
  clicks: number;
  src: string;
  minSize: number;
  growth: number;
  mute?: boolean;
};

export const clickables: Clickable[] = [
  {
    id: 'cactus_golden',
    name: 'Golden Cactus',
    description: 'A golden cactus',
    clicks: 0,
    src: goldenCactus,
    minSize: 100,
    growth: 1.5,
  },
  {
    id: 'hedgehog',
    name: 'Hedgehog',
    description: 'A cute specimen of the Erinaceus Europaeus',
    clicks: 680,
    src: hedgehog,
    minSize: 100,
    growth: 1.5,
  },
  {
    id: 'barbed_wire',
    name: 'Barbed wire',
    description: 'A shiny roll of pure suffering',
    clicks: 1150,
    src: barbedWire,
    minSize: 100,
    growth: 2,
  },
  {
    id: 'razor_wire',
    name: 'Razor wire',
    // eslint-disable-next-line prettier/prettier
    description: 'If you thought the barbed wire wasn\'t extreme enough',
    clicks: 1530,
    src: razorWire,
    minSize: 100,
    growth: 3,
  },
  {
    id: 'sea_urchin',
    name: 'Sea urchin',
    description: 'A spiny, globular echinoderm',
    clicks: 1740,
    src: seaUrchin,
    minSize: 100,
    growth: 1.5,
  },
  {
    id: 'teddy_bear',
    name: 'Teddy bear',
    description: 'A golden cactus.',
    clicks: 2120,
    src: teddyBear,
    minSize: 100,
    growth: 0,
    mute: true,
  },
  {
    id: 'happy_cat',
    name: 'Harry',
    description: 'Friendly orange tomcat',
    clicks: 2270,
    src: happyCat,
    minSize: 100,
    growth: 0,
    mute: true,
  },
  {
    id: 'angry_cat',
    name: 'Angry Harry',
    description:
      'Friendly orange tomcat stops being friendly if he gets poked one time too much',
    clicks: 2420,
    src: angryCat,
    minSize: 100,
    growth: 10,
  },
];
