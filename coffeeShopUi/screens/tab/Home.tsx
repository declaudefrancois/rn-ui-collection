import {
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import {BottomTabParamList} from '../../navigators/TabNavigator';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../constants/theme';
import Styledtext from '../../components/Styledtext';
import ArrowDown from '../../components/icons/ArrowDown';
import SearchNormalIcon from '../../components/icons/SearchNormalIcon';
import Button from '../../components/Button';
import FilterIconts from '../../components/icons/FilterIcon';
import CoffeeKindTabs from '../../components/coffees/CoffeeKindTabs';
import CoffeeList from '../../components/coffees/CoffeeList';
import {COFFEES} from '../../data/coffee';
import PromoBanner from '../../components/PromoBanner';

export default function Home({}: BottomTabScreenProps<
  BottomTabParamList,
  'home'
>) {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'rgba(19, 19, 19, 1)'}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {/* HEADER */}
          <LinearGradient
            start={{x: 1, y: 0}}
            end={{x: 0.5, y: 1}}
            colors={['rgba(19, 19, 19, .1)', 'rgba(49, 49, 49, .1)']}
            shouldRasterizeIOS
            style={styles.headerContainer}>
            {/* USER INFOS */}
            <View style={styles.rowBetween}>
              <View style={{}}>
                <Styledtext color="rgba(183, 183, 183, 1)">Location</Styledtext>
                <Styledtext color="#fff" weight="bold">
                  Bilzen, Tanjungbalai <ArrowDown />
                </Styledtext>
              </View>

              <ImageBackground
                source={{uri: 'https://picsum.photos/200/300'}}
                style={styles.avatar}
                imageStyle={styles.avatar}
              />
            </View>
            {/* USER INFOS */}

            {/* SEARCH INPUT */}
            <View style={[styles.rowBetween, styles.searchContainer]}>
              <View style={styles.searchLeftIcon}>
                <SearchNormalIcon />
              </View>
              <TextInput
                placeholder="Search Coffee"
                style={styles.searchInput}
                placeholderTextColor="rgba(152, 152, 152, 1)"
              />
              <Button size="mdIcon">
                <FilterIconts />
              </Button>
            </View>
            {/* SEARCH INPUT */}
          </LinearGradient>
          {/* HEADER */}

          <View style={styles.main}>
            <PromoBanner />

            <CoffeeKindTabs />

            <CoffeeList coffees={COFFEES} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: theme.colors.lightGray,
  },
  main: {
    position: 'relative',
    alignItems: 'center',
    top: -70,
    flex: 1,
    gap: 20,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainer: {
    paddingTop: 25,
    paddingHorizontal: 25,
    height: 260,
    backgroundColor: 'rgba(19, 19, 19, 1)',
    gap: 30,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 14,
  },

  searchContainer: {
    backgroundColor: 'rgba(49, 49, 49, 1)',
    padding: 5,
    height: 60,
    borderRadius: 16,
  },
  searchInput: {
    flex: 1,
  },
  searchLeftIcon: {
    paddingHorizontal: 10,
  },

  containerPadding: {
    paddingHorizontal: 20,
  },
});
