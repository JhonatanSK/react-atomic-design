import { colors } from '@components/bosons/colors';

import { dark } from './dark';
import { light } from './light';

export const theme = {
  colors,
};

export const themes = {
  dark: { ...theme, ...dark },
  light: { ...theme, ...light },
};
