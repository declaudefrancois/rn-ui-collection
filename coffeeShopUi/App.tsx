import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {enableLatestRenderer} from 'react-native-maps';

import StackNavigator from './src/navigators/StackNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

enableLatestRenderer();

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />

      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
}

export default App;
