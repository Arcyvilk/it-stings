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
  clicks: number;
  src: string;
  minSize: number;
  growth: number;
  mute?: boolean;
};

export const clickables: Clickable[] = [
  {
    id: 'cactus_golden',
    clicks: 0,
    src: goldenCactus,
    minSize: 100,
    growth: 1.5,
  },
  {
    id: 'hedgehog',
    clicks: 680,
    src: hedgehog,
    minSize: 100,
    growth: 1.5,
  },
  {
    id: 'barbed_wire',
    clicks: 1150,
    src: barbedWire,
    minSize: 100,
    growth: 2,
  },
  {
    id: 'razor_wire',
    clicks: 1530,
    src: razorWire,
    minSize: 100,
    growth: 3,
  },
  {
    id: 'sea_urchin',
    clicks: 1740,
    src: seaUrchin,
    minSize: 100,
    growth: 1.5,
  },
  {
    id: 'teddy_bear',
    clicks: 2120,
    src: teddyBear,
    minSize: 100,
    growth: 0,
    mute: true,
  },
  {
    id: 'happy_cat',
    clicks: 2270,
    src: happyCat,
    minSize: 100,
    growth: 0,
    mute: true,
  },
  {
    id: 'angry_cat',
    clicks: 2420,
    src: angryCat,
    minSize: 100,
    growth: 5,
  },
  {
    id: 'cactus_golden_2',
    clicks: 2530,
    src: goldenCactus,
    minSize: 100,
    growth: 1.5,
  },
];
