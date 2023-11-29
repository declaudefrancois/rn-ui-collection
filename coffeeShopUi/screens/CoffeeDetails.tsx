import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import ScreenHeader from '../components/ScreenHeader';
import ArrowLeftIcon from '../components/icons/ArrowLeft';
import HeartFullIcon from '../components/icons/HeartFullIcon';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../navigators/StackNavigator';
import {COFFEES} from '../data/coffee';
import Styledtext from '../components/Styledtext';
import StarIcon from '../components/icons/StartIcon';
import Button from '../components/Button';
import ExpandableText from '../components/ExpandableText';
import CoffeeSizeTabs from '../components/coffees/CoffeeSizeTabs';
import BottomScreenActions from '../components/BottomScreenActions';

export default function CoffeDetails({
  route,
  navigation,
}: NativeStackScreenProps<StackParamList, 'coffee-details'>) {
  const coffee = COFFEES.find(_coffee => _coffee.id === route.params.id);

  const onBuyPress = () => {
    if (!coffee) {
      return;
    }

    navigation.navigate('coffee-order', {
      id: coffee?.id,
    });
  };

  return (
    <View style={styles.container}>
      <ScreenHeader
        title="Detail"
        rightComponent={<HeartFullIcon />}
        leftComponent={<ArrowLeftIcon width={26} height={26} />}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.main}>
            {coffee ? (
              <>
                <Image
                  source={
                    typeof coffee.image === 'string'
                      ? {uri: coffee.image}
                      : coffee.image
                  }
                  style={styles.image}
                />

                <View>
                  <View style={styles.sectionGap}>
                    <Styledtext weight="extraBold" size={20}>
                      {coffee.name}
                    </Styledtext>
                    <Styledtext
                      weight="light"
                      size={13}
                      color="rgba(155, 155, 155, 1)">
                      {coffee.supplement}
                    </Styledtext>
                  </View>

                  <View
                    style={[styles.row, styles.spaceBetween, styles.itemsEnd]}>
                    <View style={[styles.row, styles.itemsCenter]}>
                      <StarIcon />
                      <Styledtext weight="bold" size={16}>
                        {coffee.rating}{' '}
                        <Styledtext
                          weight="light"
                          size={12}
                          color="rgba(155, 155, 155, 1)">
                          (320)
                        </Styledtext>
                      </Styledtext>
                    </View>

                    <View style={[styles.hGap, styles.row]}>
                      <Button size="sm" bg="rgba(249, 249, 249, 1)">
                        <Image
                          source={require('../assets/images/bean.png')}
                          style={styles.icon}
                        />
                      </Button>
                      <Button size="sm" bg="rgba(249, 249, 249, 1)">
                        <Image
                          source={require('../assets/images/milk.png')}
                          style={styles.icon}
                        />
                      </Button>
                    </View>
                  </View>
                </View>

                <View style={styles.lineSeparator} />

                <View style={[styles.sectionGap]}>
                  <Styledtext weight="extraBold" size={18}>
                    Description
                  </Styledtext>
                  <ExpandableText
                    text={coffee.description}
                    maxLength={150}
                    textProps={{
                      size: 16,
                      weight: 'light',
                      color: 'rgba(155, 155, 155, 1)',
                    }}
                    showMoreTextProps={{
                      size: 16,
                      weight: 'extraBold',
                      color: 'rgba(198, 124, 78, 1)',
                    }}
                  />
                </View>

                <View style={styles.sectionGap}>
                  <Styledtext weight="extraBold" size={18}>
                    Size
                  </Styledtext>
                  <CoffeeSizeTabs />
                </View>
              </>
            ) : (
              <Styledtext weight="bold" size={42}>
                Coffe not found
              </Styledtext>
            )}
          </View>
        </View>
      </ScrollView>
      <BottomScreenActions>
        <View style={[styles.actions]}>
          <View>
            <Styledtext color="rgba(155, 155, 155, 1)" weight="light">
              Price
            </Styledtext>
            <Styledtext
              weight="extraBold"
              size={20}
              color="rgba(198, 124, 78, 1)">
              $ {coffee?.price.toPrecision(3)}
            </Styledtext>
          </View>
          <Button onPress={onBuyPress} size="lg" style={styles.actionBtn}>
            <Styledtext color="#fff" weight="extraBold" size={18}>
              Buy now
            </Styledtext>
          </Button>
        </View>
      </BottomScreenActions>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
  },
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 10,
    gap: 15,
  },
  main: {
    paddingHorizontal: 25,
    flex: 1,
    gap: 15,
  },
  scrollContainer: {backgroundColor: '#fff', paddingBottom: 200},
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 30,
  },
  hGap: {
    gap: 10,
  },
  sectionGap: {
    gap: 5,
  },
  row: {
    flexDirection: 'row',
  },
  itemsEnd: {
    alignItems: 'flex-end',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  itemsCenter: {
    alignItems: 'center',
  },
  lineSeparator: {
    height: 1,
    backgroundColor: 'rgba(234, 234, 234, 1)',
  },
  icon: {width: 30, height: 30, resizeMode: 'contain'},
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
  actionBtn: {
    flex: 1,
  },
});
