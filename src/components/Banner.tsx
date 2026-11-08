import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { ThemeColors } from '@/constants/theme';
import { space, textStyles } from '@/constants/tokens';
import { useConnectionStatus } from '@/hooks/useConnectionStatus';
import { useTheme } from '@/hooks/useTheme';

export const BACK_ONLINE_VISIBLE_MS = 3000;

type BannerKind = 'offline' | 'slow' | 'backOnline';

const MESSAGES: Record<BannerKind, string> = {
  offline: "You're offline",
  slow: 'Slow connection: results may take longer',
  backOnline: 'Back online',
};

const BACKGROUND: Record<BannerKind, keyof ThemeColors> = {
  offline: 'danger',
  slow: 'warning',
  backOnline: 'accent',
};

const Banner = () => {
  const { colors } = useTheme();
  const status = useConnectionStatus();
  const insets = useSafeAreaInsets();
  const previousStatus = useRef(status);
  const [bannerType, setBannerType] = useState<BannerKind | null>(null);

  useEffect(() => {
    const previous = previousStatus.current;
    previousStatus.current = status;

    if (status !== 'online') {
      setBannerType(status);
      return;
    }
    if (previous !== 'offline') {
      setBannerType(null);
      return;
    }
    setBannerType('backOnline');
    const timeout = setTimeout(() => setBannerType(null), BACK_ONLINE_VISIBLE_MS);
    return () => clearTimeout(timeout);
  }, [status]);

  if (!bannerType) {
    return null;
  }

  return (
    <View
      style={[
        styles.banner,
        {
          paddingBottom: insets.bottom + space.sm,
          backgroundColor: colors[BACKGROUND[bannerType]],
        },
      ]}
    >
      <Text style={[styles.message, { color: colors.onAccent }]}>{MESSAGES[bannerType]}</Text>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  banner: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: space.sm,
    paddingHorizontal: space.lg,
  },
  message: {
    ...textStyles.label,
    textAlign: 'center',
  },
});
