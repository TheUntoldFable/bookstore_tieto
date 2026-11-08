import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { radii, space, textStyles } from '@/constants/tokens';
import { useTheme } from '@/hooks/useTheme';

type ErrorMessageProps = {
  message: string;
  onRetry: () => void;
};

const ErrorMessage = ({ message, onRetry }: ErrorMessageProps) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.message, { color: colors.danger }]}>{message}</Text>
      <Pressable
        onPress={() => onRetry()}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: colors.danger },
          pressed && styles.pressed,
        ]}
      >
        <Text style={[styles.buttonLabel, { color: colors.onAccent }]}>Try again</Text>
      </Pressable>
    </View>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: space.lg,
    paddingHorizontal: space.xl,
  },
  message: {
    ...textStyles.heading,
    textAlign: 'center',
  },
  button: {
    paddingHorizontal: space.xl,
    paddingVertical: space.sm,
    borderRadius: radii.sm,
  },
  pressed: {
    opacity: 0.8,
  },
  buttonLabel: {
    ...textStyles.label,
  },
});
