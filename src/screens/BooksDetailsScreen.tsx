import { FC } from 'react';

import BookDetailsContent from '@/features/book-details/components/BookDetailsContent';
import { BookDetailsScreenParams } from '@/navigation/types';

const BooksDetailsScreen: FC<BookDetailsScreenParams> = ({ route }) => {
  return <BookDetailsContent props={route.params} />;
};

export default BooksDetailsScreen;
