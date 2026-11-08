import type { StaticScreenProps } from '@react-navigation/native';

import { RootStack } from '@/navigation/RootNavigator';

export type RootStackType = typeof RootStack;

export type BookDetailsScreenParams = StaticScreenProps<{}>;

declare module '@react-navigation/native' {
  interface RootNavigator extends RootStackType {}
}
