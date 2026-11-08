import type { Theme as NavigationTheme } from '@react-navigation/native';

import type { Theme } from '@/constants/theme';
import { fontFamily } from '@/constants/tokens';

export const navigationFonts: NavigationTheme['fonts'] = {
  regular: { fontFamily: fontFamily.regular, fontWeight: '400' },
  medium: { fontFamily: fontFamily.medium, fontWeight: '500' },
  bold: { fontFamily: fontFamily.semiBold, fontWeight: '600' },
  heavy: { fontFamily: fontFamily.semiBold, fontWeight: '600' },
};

export const toNavigationTheme = (theme: Theme): NavigationTheme => ({
  dark: theme.dark,
  colors: {
    primary: theme.colors.accent,
    background: theme.colors.background,
    card: theme.colors.surface,
    text: theme.colors.text,
    border: theme.colors.border,
    notification: theme.colors.danger,
  },
  fonts: navigationFonts,
});
