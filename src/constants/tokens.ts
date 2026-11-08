export const palette = {
  // Light theme
  paper: '#FAF6EE',
  paperBright: '#FFFDF8',
  parchment: '#F1EADC',
  sand: '#E3D9C6',
  ink: '#1F1A14',
  inkMuted: '#6B6052',
  forest: '#2F5D46',
  white: '#FFFFFF',
  oxblood: '#A33A2C',
  // Dark theme
  charcoal: '#1B1814',
  charcoalRaised: '#24201B',
  charcoalMuted: '#2E2923',
  charcoalBorder: '#3A332A',
  cream: '#F2EBDD',
  creamMuted: '#A89C88',
  sage: '#86B89A',
  forestDeep: '#10241A',
  coral: '#E8907F',
} as const;

export const space = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

export const radii = {
  sm: 6,
  md: 10,
  lg: 16,
  pill: 999,
} as const;

export const fontFamily = {
  regular: 'Jost-Regular',
  medium: 'Jost-Medium',
  semiBold: 'Jost-SemiBold',
} as const;

export const textStyles = {
  display: { fontFamily: fontFamily.semiBold, fontSize: 28, lineHeight: 34 },
  title: { fontFamily: fontFamily.semiBold, fontSize: 22, lineHeight: 28 },
  heading: { fontFamily: fontFamily.semiBold, fontSize: 17, lineHeight: 22 },
  body: { fontFamily: fontFamily.regular, fontSize: 16, lineHeight: 24 },
  label: { fontFamily: fontFamily.medium, fontSize: 14, lineHeight: 20 },
  caption: { fontFamily: fontFamily.regular, fontSize: 13, lineHeight: 18 },
} as const;
