import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { radii, space, textStyles } from '@/constants/tokens';
import { BookListItemProps } from '@/features/search/types';
import { useTheme } from '@/hooks/useTheme';
import { getCoverUrl } from '@/lib/api';

const BookListItem = ({ book }: BookListItemProps) => {
  const { colors } = useTheme();
  const authors = book.author_name?.join(', ');

  return (
    <View style={[styles.row, { borderBottomColor: colors.border }]}>
      {book.cover_i ? (
        <Image
          source={{ uri: getCoverUrl(book.cover_i, 'M') }}
          style={[styles.cover, { backgroundColor: colors.surfaceMuted }]}
        />
      ) : (
        <View style={[styles.cover, { backgroundColor: colors.surfaceMuted }]} />
      )}
      <View style={styles.details}>
        <Text style={[styles.title, { color: colors.text }]} numberOfLines={2}>
          {book.title}
        </Text>
        {authors && (
          <Text style={[styles.meta, { color: colors.textMuted }]} numberOfLines={1}>
            {authors}
          </Text>
        )}
        {book.first_publish_year !== undefined && (
          <Text style={[styles.meta, { color: colors.textMuted }]}>{book.first_publish_year}</Text>
        )}
      </View>
    </View>
  );
};

export default BookListItem;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: space.md,
    paddingVertical: space.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  cover: {
    width: 48,
    height: 72,
    borderRadius: radii.sm,
  },
  details: {
    flex: 1,
    gap: space.xs,
  },
  title: {
    ...textStyles.heading,
  },
  meta: {
    ...textStyles.caption,
  },
});
