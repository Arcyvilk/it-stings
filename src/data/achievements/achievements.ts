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
    id: '100_touches',
    name: 'Perserverance',
    description: 'You punctured yourself 100 times.',
    clicks: 100,
    img: '',
  },
  {
    id: '500_touches',
    name: 'Masochism',
    description: 'You touched the cactus one thousand times. Impressive.',
    clicks: 500,
    img: '',
  },
  {
    id: '1000_touches',
    name: 'Death of thousand stings',
    // eslint-disable-next-line prettier/prettier
    description: 'You really DO enjoy stinging yourself, don\'t you.',
    clicks: 1000,
    img: '',
  },
  {
    id: 'teddy',
    // eslint-disable-next-line prettier/prettier
    name: 'Finally something that doesn\'t sting',
    description: 'You touched a teddy bear.',
    clicks: 3650,
    img: '',
  },
  {
    id: 'happy_harry',
    name: 'Soft kitty, warm kitty...',
    description: 'You discovered Harry.',
    clicks: 3950,
    img: '',
  },
  {
    id: 'angry_harry',
    name: '...little ball of claws',
    description: 'You made Harry angry.',
    clicks: 4150,
    img: '',
  },
  {
    id: '5000_touches',
    name: 'Tryphophobia',
    description:
      'Your self-inflicted torture achieved levels unknown to mankind.',
    clicks: 5000,
    img: '',
  },
  {
    id: '9001_touches',
    // eslint-disable-next-line prettier/prettier
    name: 'IT\'S OVER NINE THOUSAND',
    description:
      '...what does the scanner say about your puncture wounds number?',
    clicks: 9001,
    img: '',
  },
];
