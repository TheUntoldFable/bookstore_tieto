export type SearchBookDoc = {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
  cover_edition_key?: string;
};

export type SearchBooksResponse = {
  numFound: number;
  docs: SearchBookDoc[];
};

export type SearchBooksParams = {
  q: string;
  fields?: string;
  limit: number;
};

export type CoverSize = 'S' | 'M' | 'L';
