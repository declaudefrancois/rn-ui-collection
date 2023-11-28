import {Image, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {Coffee} from '../../data/coffee';
import Styledtext from '../Styledtext';
import Button from '../Button';
import PlusIcon from '../icons/PlusIcon';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StackParamList} from '../../navigators/StackNavigator';

export default function CoffeeListItem({coffee}: {coffee: Coffee}) {
  const navigation =
    useNavigation<NavigationProp<StackParamList, 'app', undefined>>();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('coffee-details', {
          id: coffee.id,
        })
      }
      style={[styles.container]}>
      <Image
        source={
          typeof coffee.image === 'string' ? {uri: coffee.image} : coffee.image
        }
        style={styles.image}
      />

      <View style={styles.content}>
        <View style={styles.contentTop}>
          <Styledtext weight="extraBold" size={18}>
            {coffee.name}
          </Styledtext>
          <Styledtext weight="light" color="rgba(155, 155, 155, 1)">
            {coffee.supplement}
          </Styledtext>
        </View>

        <View style={styles.contentBottom}>
          <Styledtext weight="extraBold" size={20} color="rgba(47, 75, 78, 1)">
            $ {coffee.price.toPrecision(3)}
          </Styledtext>
          <Button size="smIcon" onPress={() => console.log('add to cart')}>
            <PlusIcon />
          </Button>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 5,
    width: '47%',
  },
  image: {
    width: '100%',
    objectFit: 'cover',
    resizeMode: 'cover',
    height: 142,
    borderRadius: 14,
  },
  content: {
    gap: 10,
    padding: 10,
  },
  contentTop: {
    gap: 2,
  },
  contentBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
