import {StyleSheet, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

export default function BottomScreenActions({children}: PropsWithChildren) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: '#fff',
    elevation: 10,
    shadowColor: '#000',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    shadowOffset: {
      width: 0,
      height: -5,
    },
  },
});
