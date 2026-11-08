import { StyleSheet, Text, View } from 'react-native';

import { useTheme } from '@/hooks/useTheme';

import { textStyles } from '../constants/tokens';

const Empty = ({ message }: { message?: string }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.noResultsContainer}>
      <Text style={[styles.noResultsText, { color: colors.text }]}>
        {message ? message : 'No results found'}
      </Text>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultsText: {
    ...textStyles.heading,
    textAlign: 'center',
  },
});
