import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from '../screens/OnBoarding';
import TabNavigator from './TabNavigator';
import CoffeDetails from '../screens/CoffeeDetails';
import CoffeeOrder from '../screens/CoffeeOrder';
import CoffeeDelivery from '../screens/CoffeeDelivery';

export type StackParamList = {
  onboarding: undefined;
  'coffee-details': {id: string};
  'coffee-order': {id: string};
  'coffee-delivery': {id: string};
  app: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="onboarding"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="onboarding" component={OnBoarding} />
      <Stack.Screen name="coffee-details" component={CoffeDetails} />
      <Stack.Screen name="coffee-order" component={CoffeeOrder} />
      <Stack.Screen name="coffee-delivery" component={CoffeeDelivery} />

      <Stack.Screen name="app" component={TabNavigator} />
    </Stack.Navigator>
  );
}
