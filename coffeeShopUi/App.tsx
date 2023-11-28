import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {enableLatestRenderer} from 'react-native-maps';

import StackNavigator from './navigators/StackNavigator';

enableLatestRenderer();

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
}

export default App;
