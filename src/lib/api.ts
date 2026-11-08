import axios from 'axios';

import { CoverSize, SearchBooksParams } from '@/features/search/lib/types';

export const BASE_URL = 'https://openlibrary.org';

export const SEARCH_URL = `${BASE_URL}/search.json`;

const COVERS_URL = 'https://covers.openlibrary.org';

export const getCoverUrl = (coverId: number, size: CoverSize) =>
  `${COVERS_URL}/b/id/${coverId}-${size}.jpg`;

export const searchBooks = async (query: string, signal?: AbortSignal) => {
  const params: SearchBooksParams = {
    q: query,
    fields: 'key,title,author_name,first_publish_year,cover_i,cover_edition_key',
    limit: 10,
  };

  const result = await axios.get(SEARCH_URL, { signal, params });
  return result.data;
};
