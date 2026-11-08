import { createStaticNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  createNativeStackScreen,
} from '@react-navigation/native-stack';

import BooksDetailsScreen from '@/screens/BooksDetailsScreen';
import SearchScreen from '@/screens/SearchScreen';

export const RootStack = createNativeStackNavigator({
  initialRouteName: 'Search',
  screenOptions: ({ theme }) => ({ statusBarStyle: theme.dark ? 'light' : 'dark' }),
  screens: {
    Search: createNativeStackScreen({
      screen: SearchScreen,
      options: { title: 'Find a book' },
      linking: '',
    }),
    BookDetails: createNativeStackScreen({
      screen: BooksDetailsScreen,
      options: { title: 'Book details' },
    }),
  },
});

export const Navigation = createStaticNavigation(RootStack);
