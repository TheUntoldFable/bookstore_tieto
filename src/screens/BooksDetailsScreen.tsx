import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { BookDetailsScreenParams } from '@/navigation/types';

const BooksDetailsScreen: FC<BookDetailsScreenParams> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>BooksDetailsScreen</Text>
    </View>
  );
};

export default BooksDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
