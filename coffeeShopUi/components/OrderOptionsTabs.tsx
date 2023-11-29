import React, {useState} from 'react';
import Tabs from './Tabs';
import {StyleSheet} from 'react-native';

const tabItems = [
  {
    id: 1,
    title: 'Deliver',
    active: true,
  },
  {
    id: 2,
    title: 'Pick Up',
  },
];

export default function OrderOptionsTabs() {
  const [active, setactive] = useState(1);

  const onTabPress = (id: number) => {
    setactive(id);
  };

  return (
    <Tabs
      style={styles.tab}
      activeColor="rgba(198, 124, 78, 1)"
      inactiveColor="rgba(242, 242, 242, 1)"
      activeColorText="#fff"
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
    backgroundColor: 'rgba(242, 242, 242, 1)',
    padding: 5,
    borderRadius: 15,
  },
  tabItem: {
    flex: 1,
  },
  tabItemActive: {
    flex: 1,
    backgroundColor: 'rgba(198, 124, 78, 1)',
  },
});
