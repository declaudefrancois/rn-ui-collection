import {StyleSheet, View} from 'react-native';
import React from 'react';
import Styledtext from '../Styledtext';

export default function DeliverySteps({
  step,
  stepCount,
}: {
  step: number;
  stepCount: number;
}) {
  return (
    <View style={styles.container}>
      {[...Array(stepCount)].map((s, i) => (
        <View key={i} style={[styles.step, i <= step ? styles.activeStep : {}]}>
          <Styledtext>{s}</Styledtext>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  step: {
    flex: 1,
    height: 4,
    backgroundColor: 'rgba(223, 223, 223, 1)',
    borderRadius: 5,
  },
  activeStep: {
    backgroundColor: 'rgba(54, 192, 126, 1)',
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
