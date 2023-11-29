import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import Styledtext from './Styledtext';
import {useNavigation} from '@react-navigation/native';

interface ScreenHeaderProps {
  title: string;
  leftComponent?: JSX.Element;
  rightComponent?: JSX.Element;
}

export default function ScreenHeader({
  title,
  leftComponent,
  rightComponent,
}: ScreenHeaderProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {leftComponent && (
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.leftComponent}>
          {leftComponent}
        </Pressable>
      )}
      <View style={styles.centerComponent}>
        <Styledtext align="center" weight="extraBold" size={20}>
          {title}
        </Styledtext>
      </View>
      {rightComponent && (
        <View style={styles.rightComponent}>{rightComponent}</View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    padding: 10,
  },
  leftComponent: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    zIndex: 3,
  },
  rightComponent: {
    position: 'absolute',
    alignSelf: 'center',
    top: 0,
    bottom: 0,
    right: 0,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
  },
  centerComponent: {
    flex: 1,
    justifyContent: 'center',
  },
});
