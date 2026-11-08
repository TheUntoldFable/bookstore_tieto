import { CircleX } from 'lucide-react-native';
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Empty from '@/components/Empty';
import ErrorMessage from '@/components/ErrorMessage';
import { radii, space, textStyles } from '@/constants/tokens';
import BookListItem from '@/features/search/components/BookListItem';
import { SEARCH_DEBOUNCE_MS } from '@/features/search/constants';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import { useTheme } from '@/hooks/useTheme';
import { useSearchBooks } from '@/lib/queries';

const SearchScreen = () => {
  const { colors, dark } = useTheme();
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebouncedValue(query, SEARCH_DEBOUNCE_MS);
  const searchTerm = query.trim() ? debouncedQuery : '';

  const { data, isLoading, isError, refetch } = useSearchBooks(searchTerm);

  const renderContent = () => {
    if (isLoading) {
      return (
        <View style={styles.noResultsContainer}>
          <ActivityIndicator size="large" color={colors.text} />
        </View>
      );
    }

    if (isError) {
      return (
        <ErrorMessage
          message="Something went wrong. Check your connection and try again."
          onRetry={refetch}
        />
      );
    }

    if (data?.numFound === 0) {
      return <Empty />;
    }

    return (
      <FlatList
        data={data?.docs ?? []}
        keyExtractor={(book) => book.key}
        renderItem={({ item }) => <BookListItem book={item} />}
        contentContainerStyle={styles.list}
      />
    );
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <View
        style={[
          styles.searchField,
          { borderColor: colors.border, backgroundColor: colors.surfaceMuted },
        ]}
      >
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search books..."
          placeholderTextColor={colors.textMuted}
          keyboardAppearance={dark ? 'dark' : 'light'}
          style={[styles.input, { color: colors.text }]}
        />
        {query.length > 0 && (
          <Pressable onPress={() => setQuery('')} hitSlop={space.sm} style={styles.clearButton}>
            <CircleX size={20} color={colors.textMuted} />
          </Pressable>
        )}
      </View>
      {renderContent()}
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  list: {
    paddingHorizontal: 10,
  },
  searchField: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radii.sm,
  },
  input: {
    ...textStyles.body,
    flex: 1,
    paddingHorizontal: space.md,
    paddingVertical: space.sm,
  },
  clearButton: {
    paddingRight: space.md,
  },

  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
