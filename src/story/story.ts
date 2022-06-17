import { useMemo } from 'react';

type Story = {
  clicks: number;
  text: string;
};

export const useStory = (): { getStory: (clicks: number) => string } => {
  const sortedStories = useMemo(() => {
    return stories.sort((a: Story, b: Story) => b.clicks - a.clicks);
  }, [stories]);

  const getStory = (clicks: number) => {
    return sortedStories.find(entry => entry.clicks <= clicks)?.text ?? '';
  };

  return { getStory };
};

const stories: Story[] = [
  {
    clicks: 1,
    text: 'You have decided to touch the cactus.',
  },
  {
    clicks: 12,
    text: 'Touching the cactus hurts, and yet, you did it over a dozen of times already.',
  },
  {
    clicks: 30,
    text: 'Why do you keep touching the cactus? It very obviously causes you pain.',
  },
  {
    clicks: 50,
    text: 'The sharp pain in your finger does not stop you from touching the cactus over and over again. In fact, you touch it faster and faster.',
  },
  {
    clicks: 75,
    text: 'You start looking like a sieve.',
  },
  {
    clicks: 100,
    text: 'And here we are, one hundred puncture wounds on your hand later.',
  },
  {
    clicks: 130,
    text: 'You are aware that touching it over and over makes you look like a fool, right?',
  },
  {
    clicks: 160,
    text: 'No glory awaits you. Only pain and suffering.',
  },
  {
    clicks: 180,
    text: 'No, you wont get a medal for this.',
  },
  {
    clicks: 200,
    text: 'There is no trophy for puncturing your hand two hundred times, either.',
  },
  {
    clicks: 230,
    text: 'Look at you, sitting here, expressionless, disturbing the continuity of your skin, for absolutely no reward whatsoever.',
  },
  {
    clicks: 260,
    text: 'In fact, doing it for any kind of reward would be pretty dumb as well.',
  },
  {
    clicks: 290,
    text: 'There is this small little concept called honor and dignity, you know.',
  },
  {
    clicks: 320,
    text: 'It kiiiind of revolves around not making a fool out of yourself, for example by stabbing yourself repeadedly with a god forsaken cactus.',
  },
  {
    clicks: 350,
    text: 'If that example sounded oddly specific, good. It was supposed to.',
  },
  {
    clicks: 380,
    text: 'But I suppose there is no point explaining that to a person willing to put themselves through this kind of activity, you know?',
  },
  {
    clicks: 410,
    text: 'Its almost as if I was talking to a wall.',
  },
  {
    clicks: 440,
    text: 'Wall covered with an extraordinary amount of holes, mind you.',
  },
  {
    clicks: 470,
    text: 'I hope you dont have any people around who could suffer from tryphophobia.',
  },
  {
    clicks: 500,
    text: 'Who am I kidding, who in their right mind would like to spend their time around a cactus toucher. You did that over five hundred times already, by the way.',
  },
];
