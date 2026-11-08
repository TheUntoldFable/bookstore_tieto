import { useQuery } from '@tanstack/react-query';

import { searchBooks } from '@/lib/api';

export const useSearchBooks = (query: string) => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['searchBooks'],
    queryFn: () => searchBooks(query),
  });

  return {
    data,
    isLoading,
    isError,
    error,
    refetch,
  };
};
