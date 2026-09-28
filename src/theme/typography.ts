import { Platform, TextStyle } from 'react-native';

/** Brand script (cursive Tun logo) */
export const fontBrand: TextStyle['fontFamily'] = Platform.select({
  ios: 'Snell Roundhand',
  android: 'serif',
  default: 'serif',
});

/** Display / place titles */
export const fontSerif: TextStyle['fontFamily'] = Platform.select({
  ios: 'Georgia',
  android: 'serif',
  default: 'serif',
});

/** Handwritten dish titles */
export const fontScript: TextStyle['fontFamily'] = Platform.select({
  ios: 'Snell Roundhand',
  android: 'serif',
  default: 'serif',
});

/** UI body */
export const fontSans: TextStyle['fontFamily'] = Platform.select({
  ios: 'Avenir Next',
  android: 'sans-serif',
  default: 'System',
});
