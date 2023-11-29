import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import ScreenHeader from '../components/ScreenHeader';
import ArrowLeftIcon from '../components/icons/ArrowLeft';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../navigators/StackNavigator';
import {COFFEES} from '../data/coffee';
import Styledtext from '../components/Styledtext';
import Button from '../components/Button';
import BottomScreenActions from '../components/BottomScreenActions';

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
                <View style={styles.sectionGap}>
                  <Styledtext weight="extraBold" size={18}>
                    Size
                  </Styledtext>
                </View>

                <View style={styles.lineSeparator} />
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
          <Button onPress={onOrderPress} size="lg" style={styles.actionBtn}>
            <Styledtext color="#fff" weight="extraBold" size={18}>
              Order
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
