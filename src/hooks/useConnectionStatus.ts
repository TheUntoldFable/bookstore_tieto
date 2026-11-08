import { useNetInfo } from '@react-native-community/netinfo';
import { useIsFetching } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export type ConnectionStatus = 'online' | 'slow' | 'offline';

export const SLOW_REQUEST_MS = 4000;

export function useConnectionStatus(): ConnectionStatus {
  const { isConnected, isInternetReachable } = useNetInfo();
  const isFetching = useIsFetching() > 0;
  const [isSlow, setIsSlow] = useState(false);

  useEffect(() => {
    if (!isFetching) {
      return;
    }
    const timer = setTimeout(() => setIsSlow(true), SLOW_REQUEST_MS);
    return () => {
      clearTimeout(timer);
      setIsSlow(false);
    };
  }, [isFetching]);

  if (isConnected === false || isInternetReachable === false) {
    return 'offline';
  }
  return isSlow ? 'slow' : 'online';
}
