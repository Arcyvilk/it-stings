import { ouchSound } from 'assets/sounds/ouch';
import { useStoryModeContext } from 'shared/context';
import { Sounds } from 'data/clickables';

export const sounds = {
  ouch: ouchSound,
};

type UseSounds = {
  playClickSound: () => void;
};

export const useSounds = (): UseSounds => {
  const { activeClickable } = useStoryModeContext();

  const getRandomSound = (soundName: Sounds): string => {
    const soundList = sounds[soundName];
    const min = Math.ceil(1);
    const max = Math.floor(soundList.length);
    const soundIndex = Math.floor(Math.random() * max) + min;
    return soundList[soundIndex];
  };

  const playClickSound = () => {
    const clickSoundName = activeClickable.clickSound;
    if (clickSoundName) {
      const randomClickSound = getRandomSound(clickSoundName);
      new Audio(randomClickSound).play();
    }
  };

  return { playClickSound };
};
