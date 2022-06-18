export * from './clickables';
export * from './useClickables';

export type ActiveClickable = {
  id: string;
  src: string;
  mute: boolean;
  width: number;
};

export const defaultClickable: ActiveClickable = {
  id: 'NULL',
  src: '',
  mute: false,
  width: 1,
};
