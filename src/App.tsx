import { QueryClientProvider } from '@tanstack/react-query';
import { useMemo } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Banner from '@/components/Banner';
import { useTheme } from '@/hooks/useTheme';
import { queryClient } from '@/lib/queryClient';
import { Navigation } from '@/navigation/RootNavigator';
import { toNavigationTheme } from '@/navigation/utils';

function App() {
  const theme = useTheme();
  const navigationTheme = useMemo(() => toNavigationTheme(theme), [theme]);

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Navigation theme={navigationTheme} />
        <Banner />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;
