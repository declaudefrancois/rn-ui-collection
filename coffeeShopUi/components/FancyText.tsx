import {StyleSheet, View} from 'react-native';
import React from 'react';
import Styledtext from './Styledtext';

interface FancyTextProps {
  title: string;
}

export default function FancyText({title}: FancyTextProps) {
  return (
    <View style={styles.container}>
      <Styledtext weight="extraBold" size={30} color="#fff" style={styles.text}>
        {title}
      </Styledtext>
      <View style={styles.textDeco} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    position: 'relative',
    zIndex: 2,
  },
  container: {
    position: 'relative',
    flexDirection: 'row',
  },
  textDeco: {
    backgroundColor: 'rgba(28, 28, 28, 1)',
    position: 'absolute',
    width: '100%',
    height: 20,
    bottom: 0,
    zIndex: 1,
  },
});
