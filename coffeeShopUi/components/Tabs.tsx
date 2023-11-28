import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Button from './Button';
import Styledtext from './Styledtext';
import theme from '../constants/theme';

interface TabsProps {
  activeTab?: number;
  items: {
    id: number;
    title: string;
  }[];
  onTabPress: (id: number) => void;
}
export default function Tabs({items, onTabPress, activeTab}: TabsProps) {
  return (
    <ScrollView
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.containerScroll}>
      <View style={styles.container}>
        {items.map(item => {
          const isActive = activeTab === item.id;
          return (
            <Button
              onPress={() => onTabPress(item.id)}
              key={item.title}
              size="md"
              bg={isActive ? theme.colors.main : '#fff'}>
              <Styledtext color={isActive ? '#fff' : undefined}>
                {item.title}
              </Styledtext>
            </Button>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
  containerScroll: {paddingRight: 20, paddingLeft: 25},
});
