import React from 'react';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

/** Lightweight top/bottom dark scrim without native linear-gradient. */
export default function LinearGradientFallback({
  style,
}: {
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View pointerEvents="none" style={[styles.wrap, style]}>
      <View style={styles.top} />
      <View style={styles.mid} />
      <View style={styles.bottom} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'space-between',
  },
  top: {
    height: '28%',
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  mid: {
    flex: 1,
  },
  bottom: {
    height: '42%',
    backgroundColor: 'rgba(0,0,0,0.55)',
  },
});
