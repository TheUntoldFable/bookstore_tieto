import { ActivityIndicator, Image, ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ErrorMessage from '@/components/ErrorMessage';
import { radii, space, textStyles } from '@/constants/tokens';
import { SearchBookDoc } from '@/features/search/lib/types';
import { useTheme } from '@/hooks/useTheme';
import { getCoverUrl } from '@/lib/api';
import { useBookDetails } from '@/lib/queries';

const BookDetailsContent = ({ props }: { props: SearchBookDoc }) => {
  const { colors } = useTheme();
  const { data, isLoading, isError, refetch, error } = useBookDetails(props.key);

  const renderDetails = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" color={colors.textMuted} />;
    }

    if (isError) {
      return <ErrorMessage message={error.message} onRetry={refetch} />;
    }

    const description = data?.description?.value;

    return (
      <Text style={[styles.description, { color: colors.text }]}>
        {description || 'No description available'}
      </Text>
    );
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        {props.cover_i !== undefined && (
          <Image
            source={{ uri: getCoverUrl(props.cover_i, 'M') }}
            style={[styles.cover, { backgroundColor: colors.surfaceMuted }]}
          />
        )}
        {renderDetails()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookDetailsContent;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    gap: space.lg,
    padding: space.lg,
  },
  cover: {
    width: 200,
    aspectRatio: 2 / 3,
    borderRadius: radii.md,
  },
  description: {
    ...textStyles.body,
  },
});
