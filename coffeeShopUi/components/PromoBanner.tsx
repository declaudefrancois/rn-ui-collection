import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import Button from './Button';
import Styledtext from './Styledtext';
import FancyText from './FancyText';
import theme from '../constants/theme';

const coffeHeader = require('../assets/images/coffee-home.png');

export default function PromoBanner() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={coffeHeader}
        style={styles.image}
        imageStyle={styles.image}>
        <View style={styles.imageContainer}>
          <View style={styles.promoBtn}>
            <Button size="sm" bg={theme.colors.red}>
              <Styledtext size={14} color="#fff" weight="bold">
                Promo
              </Styledtext>
            </Button>
          </View>

          <View style={styles.imageText}>
            <FancyText title="Buy one get" />
            <FancyText title="one FREE" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {width: '100%', paddingHorizontal: 25},
  image: {
    flex: 1,
    width: '100%',
    height: 140,
    borderRadius: 16,
    resizeMode: 'cover',
  },
  imageContainer: {
    height: '100%',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  imageText: {},
  promoBtn: {
    width: 70,
  },
});
