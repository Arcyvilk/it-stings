import { Sounds } from 'data';

export * from './clickables';
export * from './useClickables';

export type ActiveClickable = {
  id: string;
  src: string;
  clickSound?: Sounds;
  width: number;
};

export const defaultClickable: ActiveClickable = {
  id: 'NULL',
  src: '',
  width: 1,
};
