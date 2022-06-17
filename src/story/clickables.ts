import goldenCactus from 'assets/images/cacti/cactus_golden.png';
import hedgehog from 'assets/images/cacti/hedgehog.png';
import barbedWire from 'assets/images/cacti/barbedWire.png';
import razorWire from 'assets/images/cacti/razorWire.png';
import seaUrchin from 'assets/images/cacti/seaUrchin.png';
import teddyBear from 'assets/images/cacti/teddyBear.png';
import happyCat from 'assets/images/cacti/happyCat.png';
import angryCat from 'assets/images/cacti/angryCat.png';

export type Clickable = {
  clicks: number;
  src: string;
  minSize: number;
  growth: number;
  mute?: boolean;
};

export const clickables: Clickable[] = [
  {
    clicks: 0,
    src: goldenCactus,
    minSize: 200,
    growth: 3,
  },
  {
    clicks: 680,
    src: hedgehog,
    minSize: 200,
    growth: 3,
  },
  {
    clicks: 1150,
    src: barbedWire,
    minSize: 200,
    growth: 5,
  },
  {
    clicks: 1530,
    src: razorWire,
    minSize: 200,
    growth: 7,
  },
  {
    clicks: 1740,
    src: seaUrchin,
    minSize: 200,
    growth: 2,
  },
  {
    clicks: 2120,
    src: teddyBear,
    minSize: 200,
    growth: 0,
    mute: true,
  },
  {
    clicks: 2270,
    src: happyCat,
    minSize: 200,
    growth: 0,
    mute: true,
  },
  {
    clicks: 2420,
    src: angryCat,
    minSize: 200,
    growth: 10,
  },
];
