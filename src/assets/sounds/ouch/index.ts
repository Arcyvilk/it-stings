import sound_1 from './01.mp3';
import sound_2 from './02.mp3';
import sound_3 from './03.mp3';
import sound_4 from './04.mp3';
import sound_5 from './05.mp3';
import sound_6 from './06.mp3';
import sound_7 from './07.mp3';
import sound_8 from './08.mp3';
import sound_9 from './09.mp3';
import sound_10 from './10.mp3';
import sound_11 from './11.mp3';
import sound_12 from './12.mp3';

export const sounds: string[] = [
  sound_1,
  sound_2,
  sound_3,
  sound_4,
  sound_5,
  sound_6,
  sound_7,
  sound_8,
  sound_9,
  sound_10,
  sound_11,
  sound_12,
];

export const getOuch = (): string => {
  const min = Math.ceil(1);
  const max = Math.floor(sounds.length);
  const soundIndex = Math.floor(Math.random() * max) + min;
  return sounds[soundIndex];
};
