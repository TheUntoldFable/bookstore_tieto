import { useQuery } from '@tanstack/react-query';

import { SearchBooksResponse } from '@/features/search/lib/types';
import { searchBooks } from '@/lib/api';

export const useSearchBooks = (query: string) => {
  const term = query.trim();

  const queryRes = useQuery<SearchBooksResponse>({
    queryKey: ['searchBooks', term],
    queryFn: ({ signal }) => searchBooks(term, signal),
    enabled: term.length > 0,
  });

  return queryRes;
};
