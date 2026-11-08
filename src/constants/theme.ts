import { palette, radii, space, textStyles } from '@/constants/tokens';

export type ThemeColors = {
  background: string;
  surface: string;
  surfaceMuted: string;
  border: string;
  text: string;
  textMuted: string;
  accent: string;
  onAccent: string;
  danger: string;
  warning: string;
};

export type Theme = {
  dark: boolean;
  colors: ThemeColors;
  space: typeof space;
  radii: typeof radii;
  text: typeof textStyles;
};

export const lightTheme: Theme = {
  dark: false,
  colors: {
    background: palette.paper,
    surface: palette.paperBright,
    surfaceMuted: palette.parchment,
    border: palette.sand,
    text: palette.ink,
    textMuted: palette.inkMuted,
    accent: palette.forest,
    onAccent: palette.white,
    danger: palette.oxblood,
    warning: palette.ochre,
  },
  space,
  radii,
  text: textStyles,
};

export const darkTheme: Theme = {
  dark: true,
  colors: {
    background: palette.charcoal,
    surface: palette.charcoalRaised,
    surfaceMuted: palette.charcoalMuted,
    border: palette.charcoalBorder,
    text: palette.cream,
    textMuted: palette.creamMuted,
    accent: palette.sage,
    onAccent: palette.forestDeep,
    danger: palette.coral,
    warning: palette.honey,
  },
  space,
  radii,
  text: textStyles,
};
