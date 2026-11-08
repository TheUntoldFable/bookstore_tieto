import type { StaticScreenProps } from '@react-navigation/native';

import { SearchBookDoc } from '@/features/search/lib/types';
import { RootStack } from '@/navigation/RootNavigator';

export type RootStackType = typeof RootStack;

export type BookDetailsScreenParams = StaticScreenProps<SearchBookDoc>;

declare module '@react-navigation/native' {
  interface RootNavigator extends RootStackType {}
}
