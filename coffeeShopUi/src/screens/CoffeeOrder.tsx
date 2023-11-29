import {Image, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import ScreenHeader from '../components/ScreenHeader';
import ArrowLeftIcon from '../components/icons/ArrowLeft';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../navigators/StackNavigator';
import {COFFEES} from '../data/coffee';
import Styledtext from '../components/Styledtext';
import Button from '../components/Button';
import BottomScreenActions from '../components/BottomScreenActions';
import OrderOptionsTabs from '../components/OrderOptionsTabs';
import EditIcon from '../components/icons/EditIcon';
import NoteIcon from '../components/icons/NoteIcon';
import Counter from '../components/Counter';
import DiscountIcon from '../components/icons/DiscountIcon';
import ArrowRight from '../components/icons/ArrowRight';
import MoneysIcon from '../components/icons/MoneysIcon';
import DotsIcon from '../components/icons/DotsIcon';

export default function CoffeeOrder({
  route,
  navigation,
}: NativeStackScreenProps<StackParamList, 'coffee-order'>) {
  const coffee = COFFEES.find(_coffee => _coffee.id === route.params.id);

  const onOrderPress = () => {
    if (!coffee) {
      return;
    }

    navigation.navigate('coffee-delivery', {
      id: coffee?.id,
    });
  };

  return (
    <View style={styles.container}>
      <ScreenHeader
        title="Order"
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
                <View style={[styles.sectionGap, styles.containerHPadding]}>
                  <OrderOptionsTabs />

                  <Styledtext weight="extraBold" size={18}>
                    Delevery Address
                  </Styledtext>

                  <View style={styles.contentGap}>
                    <Styledtext weight="extraBold" size={16}>
                      Jl. Kpg Sutoyo
                    </Styledtext>
                    <Styledtext
                      weight="light"
                      size={13}
                      color="rgba(128, 128, 128, 1)">
                      Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
                    </Styledtext>
                    <View style={[styles.row, styles.hGap]}>
                      <Pressable style={styles.actionBtn}>
                        <View
                          style={[styles.row, styles.itemsCenter, styles.hGap]}>
                          <EditIcon />
                          <Styledtext size={13} color="rgba(48, 51, 54, 1)">
                            Edit Address
                          </Styledtext>
                        </View>
                      </Pressable>
                      <Pressable style={styles.actionBtn}>
                        <View
                          style={[styles.row, styles.itemsCenter, styles.hGap]}>
                          <NoteIcon />
                          <Styledtext size={13} color="rgba(48, 51, 54, 1)">
                            Add note
                          </Styledtext>
                        </View>
                      </Pressable>
                    </View>
                  </View>

                  <View style={styles.lineSeparator} />
                </View>

                <View style={[styles.sectionGap, styles.containerHPadding]}>
                  <View style={[styles.row, styles.hGap, styles.itemsCenter]}>
                    <Image
                      style={styles.avatar}
                      // @ts-ignore
                      source={
                        coffee.image === 'string'
                          ? {uri: coffee.image}
                          : coffee.image
                      }
                    />

                    <View style={styles.coffeDesc}>
                      <Styledtext weight="extraBold" size={18}>
                        {coffee.name}
                      </Styledtext>
                      <Styledtext
                        weight="light"
                        size={13}
                        color="rgba(128, 128, 128, 1)">
                        {coffee.supplement}
                      </Styledtext>
                    </View>

                    <Counter />
                  </View>
                </View>

                <View style={styles.lineSeparator1} />

                <View style={[styles.sectionGap, styles.containerHPadding]}>
                  <View
                    style={[
                      styles.row,
                      styles.itemsCenter,
                      styles.spaceBetween,
                      styles.hGap,
                      styles.discoutBtn,
                    ]}>
                    <DiscountIcon />

                    {/* eslint-disable-next-line react-native/no-inline-styles */}
                    <Styledtext weight="extraBold" size={15} style={{flex: 1}}>
                      1 Discount Applied
                    </Styledtext>
                    <ArrowRight />
                  </View>

                  <View style={styles.contentGap}>
                    <Styledtext weight="extraBold" size={18}>
                      Payment Summary
                    </Styledtext>

                    <View
                      style={[
                        styles.row,
                        styles.spaceBetween,
                        styles.itemsCenter,
                      ]}>
                      <Styledtext size={15}>Price</Styledtext>
                      <Styledtext weight="extraBold">
                        $ {coffee.price.toPrecision(3)}
                      </Styledtext>
                    </View>

                    <View
                      style={[
                        styles.row,
                        styles.spaceBetween,
                        styles.itemsCenter,
                      ]}>
                      <Styledtext size={15}>Delivery fees</Styledtext>
                      <Styledtext weight="extraBold">
                        <Styledtext style={styles.prevPrice} weight="regular">
                          $ 2.0{' '}
                        </Styledtext>{' '}
                        $ 1.0
                      </Styledtext>
                    </View>

                    <View style={styles.lineSeparator} />

                    <View
                      style={[
                        styles.row,
                        styles.spaceBetween,
                        styles.itemsCenter,
                      ]}>
                      <Styledtext size={15}>Total Payment</Styledtext>
                      <Styledtext weight="extraBold">
                        $ {(coffee.price + 1).toPrecision(3)}
                      </Styledtext>
                    </View>
                  </View>
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
      {coffee && (
        <BottomScreenActions>
          <View
            style={[
              styles.row,
              styles.itemsCenter,
              styles.hGap,
              styles.spaceBetween,
            ]}>
            <MoneysIcon />

            <View style={styles.cash}>
              <View style={styles.cashBadge}>
                <Styledtext color="#fff" size={14}>
                  Cash
                </Styledtext>
              </View>
              <Styledtext weight="light" size={13}>
                $ {(coffee.price + 1).toPrecision(3)}
              </Styledtext>
            </View>

            {/* eslint-disable-next-line react-native/no-inline-styles */}
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <DotsIcon />
            </View>
          </View>
          <Button onPress={onOrderPress} size="lg" style={styles.actionBtn}>
            <Styledtext color="#fff" weight="extraBold" size={20}>
              Order
            </Styledtext>
          </Button>
        </BottomScreenActions>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
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
  containerHPadding: {
    paddingHorizontal: 25,
  },
  main: {
    flex: 1,
    gap: 15,
  },
  scrollContainer: {backgroundColor: '#fff', paddingBottom: 200},
  hGap: {
    gap: 10,
  },
  sectionGap: {
    gap: 20,
  },
  contentGap: {
    gap: 10,
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

  lineSeparator1: {
    height: 5,
    backgroundColor: 'rgba(234, 234, 234, 1)',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    padding: 3,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'rgba(222, 222, 222, 1)',
    borderRadius: 20,
  },

  coffeDesc: {
    flex: 1,
    gap: 5,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 14,
  },
  discoutBtn: {
    padding: 20,
    borderWidth: 1.5,
    borderColor: 'rgba(222, 222, 222, 1)',
    borderRadius: 20,
  },
  prevPrice: {
    textDecorationLine: 'line-through',
  },
  cash: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    backgroundColor: 'rgba(242, 242, 242, 1)',
    padding: 2,
    paddingRight: 10,
    borderRadius: 30,
  },
  cashBadge: {
    backgroundColor: 'rgba(198, 124, 78, 1)',
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 30,
  },
});
