import { useQuery } from '@tanstack/react-query';

import { BookDetails, SearchBooksResponse } from '@/features/search/lib/types';
import { getBookDetails, searchBooks } from '@/lib/api';

const BOOK_DETAILS_STALE_TIME_MS = 60 * 60 * 1000; //one hour

export const useSearchBooks = (query: string) => {
  const term = query.trim();

  const queryRes = useQuery<SearchBooksResponse>({
    queryKey: ['searchBooks', term],
    queryFn: ({ signal }) => searchBooks(term, signal),
    enabled: term.length > 0,
  });

  return queryRes;
};

export const useBookDetails = (key: string) => {
  const queryRes = useQuery<BookDetails>({
    queryKey: ['bookDetails', key],
    queryFn: ({ signal }) => getBookDetails(key, signal),
    enabled: key.length > 0,
    staleTime: BOOK_DETAILS_STALE_TIME_MS,
  });
  return queryRes;
};
