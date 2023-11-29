import {Image, StyleSheet, View} from 'react-native';
import React, {Ref, useMemo} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import Styledtext from '../Styledtext';
import DeliverySteps from './DeliverySteps';

export default function OrderDeliveryBottomSheet({
  sheetRef,
}: {
  sheetRef: Ref<BottomSheetMethods> | undefined;
}) {
  const snapPoints = useMemo(() => ['25%', '40%', '75%'], []);
  return (
    <BottomSheet ref={sheetRef} index={1} snapPoints={snapPoints}>
      <View style={styles.container}>
        <View style={styles.details}>
          <Styledtext weight="extraBold">10 minutes left</Styledtext>
          <Styledtext weight="regular">
            Delivery to{' '}
            <Styledtext weight="extraBold">Jl. Kpg Sutoyo</Styledtext>
          </Styledtext>
        </View>
        <DeliverySteps step={2} stepCount={4} />

        <View style={[styles.row, styles.border, styles.stepContainer]}>
          <View style={[styles.icon, styles.border]}>
            <Image
              style={styles.iconImg}
              source={require('../../../assets/images/bike.png')}
            />
          </View>

          <View style={styles.stepDetail}>
            <Styledtext weight="extraBold">Delivered your order</Styledtext>
            <Styledtext
              weight="regular"
              color="rgba(128, 128, 128, 1)"
              size={13}>
              We deliver your goods to you in the shortes possible time.
            </Styledtext>
          </View>
        </View>

        <View style={[styles.row]}>
          <Image
            style={styles.avatar}
            source={{uri: 'https://picsum.photos/200/300'}}
          />

          <View style={styles.stepDetail}>
            <Styledtext weight="extraBold">Johan Hawn</Styledtext>
            <Styledtext
              weight="regular"
              color="rgba(128, 128, 128, 1)"
              size={13}>
              Personal Courier
            </Styledtext>
          </View>

          <View style={[styles.icon, styles.border]}>
            <Image
              style={styles.iconImg}
              source={require('../../../assets/images/phone.png')}
            />
          </View>
        </View>
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    gap: 20,
  },
  details: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  border: {
    borderWidth: 1,
    borderColor: 'rgba(222, 222, 222, 1)',
    borderRadius: 10,
  },
  stepContainer: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  icon: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImg: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  stepDetail: {
    flex: 1,
    gap: 5,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 14,
  },
});
