import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import React from 'react';

import Home from '../screens/tab/Home';
import Shop from '../screens/tab/Shop';
import Notifications from '../screens/tab/Notifications';
import Favorites from '../screens/tab/Favorites';
import HomeIcon from '../components/icons/HomeIcon';
import HeartIcon from '../components/icons/HeartIcon';
import NotificationIcons from '../components/icons/NotificationIcons';
import Bag3Icon from '../components/icons/Bag3Icon';

function TabNavigatorIcon({
  color,
  focused,
  size,
  route,
}: {
  focused: boolean;
  color: string;
  size: number;
  route: RouteProp<BottomTabParamList, keyof BottomTabParamList>;
}) {
  let icon: JSX.Element;

  if (route.name === 'home') {
    icon = <HomeIcon fill={color} width={size} height={size} />;
  } else if (route.name === 'favorites') {
    icon = <HeartIcon fill={color} width={size} height={size} />;
  } else if (route.name === 'notifications') {
    icon = <NotificationIcons fill={color} width={size} height={size} />;
  } else {
    icon = <Bag3Icon fill={color} width={size} height={size} />;
  }

  return (
    <>
      {icon}

      {focused ? <View style={styles.tabBarIconIndicator} /> : null}
    </>
  );
}

export type BottomTabParamList = {
  home: undefined;
  shop: undefined;
  notifications: undefined;
  favorites: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        headerTitle: '',
        tabBarIcon: iconProps => TabNavigatorIcon({...iconProps, route}),
        tabBarLabel: () => null,
        tabBarActiveTintColor: 'rgba(198, 124, 78, 1)',
        tabBarInactiveTintColor: '#8D8D8D',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopColor: 'transparent',
          height: 70,
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          border: 0,
          justifyContent: 'center',
          paddingHorizontal: 20,
        },
      })}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="favorites" component={Favorites} />
      <Tab.Screen name="shop" component={Shop} />
      <Tab.Screen name="notifications" component={Notifications} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarIconIndicator: {
    width: 10,
    height: 5,
    backgroundColor: 'rgba(198, 124, 78, 1)',
    marginTop: 2,
    borderRadius: 10,
  },
});
