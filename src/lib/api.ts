import axios from 'axios';

import { CoverSize, SearchBooksParams } from '@/features/search/lib/types';

export const BASE_URL = 'https://openlibrary.org';
const REQUEST_TIMEOUT_MS = 10_000;
const http = axios.create({ baseURL: BASE_URL, timeout: REQUEST_TIMEOUT_MS });

export const COVERS_URL = 'https://covers.openlibrary.org';

export const getCoverUrl = (coverId: number, size: CoverSize) =>
  `${COVERS_URL}/b/id/${coverId}-${size}.jpg`;

export const searchBooks = async (query: string, signal?: AbortSignal) => {
  const params: SearchBooksParams = {
    q: query,
    fields: 'key,title,author_name,first_publish_year,cover_i,cover_edition_key',
    limit: 10,
  };

  const result = await http.get('/search.json', { signal, params });
  return result.data;
};

export const getBookDetails = async (workKey: string, signal?: AbortSignal) => {
  const result = await http.get(`${workKey}.json`, { signal });
  return result.data;
};
