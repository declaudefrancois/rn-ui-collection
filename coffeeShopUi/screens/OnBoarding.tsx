import {ImageBackground, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';

import Styledtext from '../components/Styledtext';
import Button from '../components/Button';
import theme from '../constants/theme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../navigators/StackNavigator';
const obImage = require('../assets/images/onboarding.png');

export default function OnBoarding({
  navigation,
}: NativeStackScreenProps<StackParamList, 'onboarding'>) {
  return (
    <View style={styles.container}>
      <View style={styles.obImageContainer}>
        <ImageBackground source={obImage} style={styles.obImage} />
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={[
            '#00000000',
            '#00000000',
            '#00000000',
            '#00000000',
            '#00000090',
          ]}
          style={styles.obImageMask}
        />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Styledtext weight="bold" size={38} color="#fff" align="center">
            Coffee so good, your taste buds will love it.
          </Styledtext>

          <Styledtext
            align="center"
            color={theme.colors.textMuted}
            size={16}
            style={styles.subTitle}>
            The best grain, the finest roast, the powerful flavor.
          </Styledtext>

          <Button size="lg" onPress={() => navigation.navigate('app')}>
            <Styledtext weight="bold" color="#fff">
              Get Started
            </Styledtext>
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  obImageContainer: {
    position: 'relative',
    flex: 1,
  },
  obImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  obImageMask: {
    ...StyleSheet.absoluteFillObject,
  },
  contentContainer: {
    backgroundColor: '#000',
  },
  content: {
    position: 'relative',
    top: -20,
    bottom: 0,
    gap: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
  },
  subTitle: {
    paddingHorizontal: 30,
  },
});
