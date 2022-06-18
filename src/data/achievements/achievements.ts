export type Achievement = {
  id: string;
  name: string;
  description: string;
  clicks: number;
  img: string;
};

export const achievements: Achievement[] = [
  {
    id: 'one_touch',
    name: 'It stings!',
    description: 'You touched a cactus.',
    clicks: 1,
    img: '',
  },
  {
    id: 'one_hundred_touches',
    name: 'Perserverance',
    description: 'You punctured yourself 100 times.',
    clicks: 100,
    img: '',
  },
  {
    id: 'five_hundred_touches',
    name: 'Masochism',
    description: 'You punctured yourself 500 times.',
    clicks: 500,
    img: '',
  },
  {
    id: 'one_thousand_touches',
    name: 'Determination',
    description: 'You punctured yourself 1000 times.',
    clicks: 1000,
    img: '',
  },
];
