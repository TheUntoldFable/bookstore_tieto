import { QueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

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
