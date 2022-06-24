import goldenCactus from 'assets/story-mode/images/cactus_golden.png';
import hedgehog from 'assets/story-mode/images/hedgehog.png';
import barbedWire from 'assets/story-mode/images/barbedWire.png';
import razorWire from 'assets/story-mode/images/razorWire.png';
import seaUrchin from 'assets/story-mode/images/seaUrchin.png';
import teddyBear from 'assets/story-mode/images/teddyBear.png';
import happyCat from 'assets/story-mode/images/happyCat.png';
import angryCat from 'assets/story-mode/images/angryCat.png';
import bandageRoll from 'assets/story-mode/images/bandageRoll.png';
import goldBar from 'assets/story-mode/images/goldBar.png';
import durianFruit from 'assets/story-mode/images/durianFruit.png';
import airFreshener from 'assets/story-mode/images/airFreshener.png';
import wikipedia from 'assets/story-mode/images/wikipedia.png';
import barbedWireCactus from 'assets/story-mode/images/barbedWireCactus.png';

export enum Sounds {
  OUCH = 'ouch',
  ANGRY_CAT = 'angryCat',
}

export type Clickable = {
  id: string;
  name: string;
  description: string;
  src: string;
  clickSound?: Sounds;
  clicks: number;
  minSize: number;
  growth: number;
  unlockable?: boolean;
};

export const clickables: Clickable[] = [
  {
    id: 'cactus_golden',
    name: 'Golden Cactus',
    description: 'A golden cactus.',
    src: goldenCactus,
    clickSound: Sounds.OUCH,
    clicks: 0,
    minSize: 100,
    growth: 0.8,
    unlockable: true,
  },
  {
    id: 'hedgehog',
    name: 'Hedgehog',
    description: 'A cute specimen of the Erinaceus Europaeus.',
    src: hedgehog,
    clickSound: Sounds.OUCH,
    clicks: 1200,
    minSize: 100,
    growth: 0.8,
    unlockable: true,
  },
  {
    id: 'barbed_wire',
    name: 'Barbed wire',
    description: 'A shiny roll of pure suffering.',
    src: barbedWire,
    clickSound: Sounds.OUCH,
    clicks: 2000,
    minSize: 100,
    growth: 1.5,
    unlockable: true,
  },
  {
    id: 'razor_wire',
    name: 'Razor wire',
    // eslint-disable-next-line prettier/prettier
    description: 'If you thought the barbed wire wasn\'t extreme enough.',
    src: razorWire,
    clickSound: Sounds.OUCH,
    clicks: 2670,
    minSize: 100,
    growth: 2.5,
    unlockable: true,
  },
  {
    id: 'sea_urchin',
    name: 'Sea urchin',
    description: 'A spiny, globular echinoderm.',
    src: seaUrchin,
    clickSound: Sounds.OUCH,
    clicks: 3000,
    minSize: 100,
    growth: 0.8,
    unlockable: true,
  },
  {
    id: 'teddy_bear',
    name: 'Teddy bear',
    description: 'Cute cuddly bear.',
    src: teddyBear,
    clicks: 3650,
    minSize: 100,
    growth: 0,
    unlockable: true,
  },
  {
    id: 'happy_cat',
    name: 'Harry',
    description: 'Gentle and friendly orange tomcat.',
    src: happyCat,
    clicks: 3900,
    minSize: 100,
    growth: 0,
    unlockable: true,
  },
  {
    id: 'angry_cat',
    name: 'Very angry Harry',
    description:
      'Even the most gentle of all feline family will get annoyed when poked one time too much.',
    src: angryCat,
    clickSound: Sounds.ANGRY_CAT,
    clicks: 4140,
    minSize: 100,
    growth: 7,
    unlockable: true,
  },
  {
    id: 'bandage_roll',
    name: 'Bandage roll',
    description:
      'Something to soak up the blood leaking from all of your cactus needle wounds.',
    src: bandageRoll,
    clicks: 4280,
    minSize: 200,
    growth: 0,
    unlockable: true,
  },
  {
    id: 'gold_bar',
    name: 'A bar of gold',
    description: 'Absolutely authentic 24-karat gold bar.',
    src: goldBar,
    clicks: 4610,
    minSize: 200,
    growth: 0,
    unlockable: true,
  },
  {
    id: 'bandage_roll_2',
    name: 'Bandage roll',
    description:
      'Something to soak up the blood leaking from all of your cactus needle wounds.',
    src: bandageRoll,
    clicks: 4930,
    minSize: 200,
    growth: 0,
  },
  {
    id: 'durian_fruit',
    name: 'Durian fruit',
    description: 'It stings so much. It stinks so much.',
    src: durianFruit,
    clickSound: Sounds.OUCH,
    clicks: 5340,
    minSize: 150,
    growth: 3,
    unlockable: true,
  },
  {
    id: 'air_freshener',
    name: 'Air freshener',
    description: 'It has a heavy, flowery scent.',
    src: airFreshener,
    clicks: 5710,
    minSize: 200,
    growth: 0,
    unlockable: true,
  },
  {
    id: 'wikipedia',
    name: 'Wikipedia',
    description: 'Why are you touching a Wikipedia logo?',
    src: wikipedia,
    clicks: 6150,
    minSize: 150,
    growth: 0,
  },
  {
    id: 'barbed_wire_cactus',
    name: 'Acanthocereus tetragonus',
    description:
      'A species of edible cacti. Can be eaten raw, assuming you got rid of all the needles before.',
    src: barbedWireCactus,
    clicks: 6820,
    minSize: 200,
    growth: 1,
    unlockable: true,
  },
];
