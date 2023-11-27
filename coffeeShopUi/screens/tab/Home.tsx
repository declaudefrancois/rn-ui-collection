import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../../navigators/TabNavigator';

export default function Home({}: BottomTabScreenProps<
  BottomTabParamList,
  'home'
>) {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
