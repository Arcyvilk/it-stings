import { ouchSound } from 'assets/story-mode/sounds/ouch';
import { angryCatSound } from 'assets/story-mode/sounds/angryCat';

import { useAppContext, useStoryModeContext } from 'shared/context';
import { Sounds } from 'data/story-mode/clickables';

export const sounds = {
  ouch: ouchSound,
  angryCat: angryCatSound,
};

type UseSounds = {
  playClickSound: () => void;
  playStorySound: (storyId?: string) => void;
};

export const useSounds = (): UseSounds => {
  const { volumeOn } = useAppContext();
  const { activeClickable } = useStoryModeContext();

  const getRandomSound = (soundName: Sounds): string => {
    const soundList = sounds[soundName];
    const min = Math.ceil(0);
    const max = Math.floor(soundList.length);
    const soundIndex = Math.floor(Math.random() * max) + min;
    return soundList[soundIndex];
  };

  const playClickSound = () => {
    if (!volumeOn) {
      return;
    }
    const clickSoundName = activeClickable.clickSound;
    if (clickSoundName) {
      const randomClickSound = getRandomSound(clickSoundName);
      new Audio(randomClickSound).play();
    }
  };

  const playStorySound = async (storyId?: string) => {
    if (!volumeOn || !storyId) {
      return;
    }
    try {
      const sound = await import(`assets/sounds/story/${storyId}.mp3`);
      if (sound?.default) {
        new Audio(sound.default).play();
      }
    } catch (e) {
      /** the file most likely does not exist */
    }
  };

  return { playClickSound, playStorySound };
};
