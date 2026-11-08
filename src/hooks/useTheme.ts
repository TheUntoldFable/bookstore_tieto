import { useColorScheme } from 'react-native';

import { darkTheme, lightTheme, type Theme } from '@/constants/theme';

export function useTheme(): Theme {
  return useColorScheme() === 'dark' ? darkTheme : lightTheme;
}
