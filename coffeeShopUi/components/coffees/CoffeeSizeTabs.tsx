import React, {useState} from 'react';
import Tabs from '../Tabs';
import {StyleSheet} from 'react-native';

const tabItems = [
  {
    id: 1,
    title: 'S',
    active: true,
  },
  {
    id: 2,
    title: 'M',
  },
  {
    id: 3,
    title: 'L',
  },
];

export default function CoffeeSizeTabs() {
  const [active, setactive] = useState(1);

  const onTabPress = (id: number) => {
    setactive(id);
  };

  return (
    <Tabs
      style={styles.tab}
      activeColor="rgba(255, 245, 238, 1)"
      inactiveColor="#fff"
      activeColorText="rgba(198, 124, 78, 1)"
      items={tabItems}
      activeTab={active}
      onTabPress={onTabPress}
      tabItemStyle={styles.tabItem}
      tabItemActiveStyle={styles.tabItemActive}
      containerScrollPadding={false}
    />
  );
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  tabItem: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgba(222, 222, 222, 1)',
  },
  tabItemActive: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgba(198, 124, 78, 1)',
  },
});
