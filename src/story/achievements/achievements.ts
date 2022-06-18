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
    name: '100',
    description: 'You punctured yourself 100 times.',
    clicks: 100,
    img: '',
  },
  {
    id: 'five_hundred_touches',
    name: '500',
    description: 'You punctured yourself 500 times.',
    clicks: 500,
    img: '',
  },
  {
    id: 'one_thousand_touches',
    name: 'Now that is determination',
    description: 'You punctured yourself 1000 times.',
    clicks: 1000,
    img: '',
  },
];
