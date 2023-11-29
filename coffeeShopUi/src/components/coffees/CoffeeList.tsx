import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Coffee} from '../../data/coffee';
import CoffeeListItem from './CoffeeListItem';

export interface CoffeeListProps {
  coffees: Coffee[];
}

export default function CoffeeList({coffees}: CoffeeListProps) {
  return (
    <View style={styles.container}>
      {coffees.map(coffee => (
        <CoffeeListItem key={coffee.id} coffee={coffee} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
