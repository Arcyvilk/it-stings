export type Theme = {
  primaryBg: string;
  secondaryBg: string;
  tertiaryBg: string;
  dangerBg: string;
  primaryText: string;
  secondaryText: string;
  tertiaryText: string;
  dangerText: string;
};

export const theme: { light: Theme; dark: Theme } = {
  light: {
    primaryBg: '#DBC2CF',
    secondaryBg: '#e6d2dc',
    tertiaryBg: '#a18d98',
    dangerBg: '#d692a1',
    primaryText: '#16262E',
    secondaryText: '#2E4756',
    tertiaryText: '#0d161c',
    dangerText: '#30141b',
  },
  dark: {
    primaryBg: '#16262E',
    secondaryBg: '#2E4756',
    tertiaryBg: '#0d161c',
    dangerBg: '#30141b',
    primaryText: '#DBC2CF',
    secondaryText: '#e6d2dc',
    tertiaryText: '#a18d98',
    dangerText: '#d692a1',
  },
};
