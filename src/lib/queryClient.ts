import NetInfo from '@react-native-community/netinfo';
import { onlineManager, QueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

// Pause queries while offline and resume them on reconnect.
onlineManager.setEventListener((setOnline) =>
  NetInfo.addEventListener((state) => setOnline(!!state.isConnected))
);

const MAX_RETRIES = 2;

const shouldRetry = (failureCount: number, error: unknown): boolean => {
  if (failureCount >= MAX_RETRIES) {
    return false;
  }

  const status = isAxiosError(error) ? error.response?.status : undefined;
  const isClientError = status !== undefined && status >= 400 && status < 500 && status !== 429;

  return !isClientError;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: shouldRetry,
    },
  },
});
