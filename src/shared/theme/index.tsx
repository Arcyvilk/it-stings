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
    secondaryBg: '#9FA2B2',
    tertiaryBg: '#7d8197',
    dangerBg: '#d692a1',
    primaryText: '#16262E',
    secondaryText: '#2E4756',
    tertiaryText: '#19262e',
    dangerText: '#30141b',
  },
  dark: {
    primaryBg: '#16262E',
    secondaryBg: '#2E4756',
    tertiaryBg: '#19262e',
    dangerBg: '#30141b',
    primaryText: '#DBC2CF',
    secondaryText: '#9FA2B2',
    tertiaryText: '#7d8197',
    dangerText: '#d692a1',
  },
};
