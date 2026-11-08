import axios from 'axios';

export const BASE_URL = 'https://openlibrary.org';

export const SEARCH_URL = `${BASE_URL}/search.json`;

export type SearchBooksParams = {
  q: string;
  fields: string;
  limit: number;
};

export const searchBooks = async (query: string, signal?: AbortSignal) => {
  const params: SearchBooksParams = {
    q: query,
    fields: 'key,title,author_name,first_publish_year,cover_i,cover_edition_key',
    limit: 10,
  };

  const result = await axios.get(SEARCH_URL, { signal, params });
  return result.data;
};
