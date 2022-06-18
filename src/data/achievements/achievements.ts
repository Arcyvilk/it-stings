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
    // eslint-disable-next-line prettier/prettier
    description: 'You really DO enjoy stinging yourself, don\'t you.',
    clicks: 500,
    img: '',
  },
  {
    id: 'one_thousand_touches',
    name: 'Death of thousand stings',
    description:
      'Your self-inflicted torture achieves levels unknown to mankind.',
    clicks: 1000,
    img: '',
  },
];
