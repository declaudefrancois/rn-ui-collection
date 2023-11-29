import {Image, Pressable, StyleSheet, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import MapView, {
  LatLng,
  Marker,
  PROVIDER_GOOGLE,
  Polyline,
} from 'react-native-maps';
import ArrowLeft from '../components/icons/ArrowLeft';
import {StackParamList} from '../navigators/StackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import GPSIcon from '../components/icons/GPSIcon';
import OrderDeliveryBottomSheet from '../components/orderDelivery/OrderDeliveryBottomSheet';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import theme from '../constants/theme';

/**
 * Generates 3 pairs coordinates
 * goind from
 */
const coordinates: LatLng[] = [
  {
    latitude: -4.289261472392779,
    longitude: 15.245037947343087,
  },
  {
    latitude: -4.287333838239628,
    longitude: 15.247904421433184,
  },
  {
    latitude: -4.285430530049828,
    longitude: 15.246487693831254,
  },
  {
    latitude: -4.285273555966987,
    longitude: 15.240938844057027,
  },
];

export default function CoffeeDelivery({
  navigation,
}: NativeStackScreenProps<StackParamList, 'coffee-delivery'>) {
  const sheetRef = useRef<BottomSheetMethods>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      sheetRef.current?.snapToIndex(1);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.btn} onPress={() => navigation.goBack()}>
          <ArrowLeft width={23} height={23} />
        </Pressable>

        <Pressable style={styles.btn}>
          <GPSIcon width={23} height={23} />
        </Pressable>
      </View>
      <MapView
        camera={{
          center: coordinates[0],
          pitch: 0,
          heading: 0,
          altitude: 1000,
          zoom: 16,
        }}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          ...coordinates[0],
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          centerOffset={{x: -40, y: -40}}
          anchor={{x: 0.5, y: 0}}
          style={styles.marker}
          coordinate={coordinates[0]}>
          <Pressable style={styles.btnCircle}>
            <Image
              source={require('../assets/images/bike.png')}
              style={styles.markerImage}
            />
          </Pressable>
        </Marker>

        <Polyline
          coordinates={coordinates}
          strokeColor={theme.colors.main}
          strokeWidth={6}
        />

        <Marker coordinate={coordinates[coordinates.length - 1]}>
          <Image
            source={require('../assets/images/pin.png')}
            style={styles.markerImage}
          />
        </Marker>
      </MapView>
      <OrderDeliveryBottomSheet sheetRef={sheetRef} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: 10,
  },
  btn: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 10,
  },
  btnCircle: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: '#fff',
    borderRadius: 22.5,
    padding: 10,
  },
  marker: {
    // width: '100%',
    // height: '100%',
  },
  markerImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});
