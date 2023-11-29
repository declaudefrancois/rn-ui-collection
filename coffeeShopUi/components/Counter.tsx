import {Pressable, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import MinusIcon from './icons/MinusIcon';
import PlusIcon from './icons/PlusIcon';
import Styledtext from './Styledtext';

export default function Counter() {
  const [count, setCount] = useState<number>(1);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count <= 1) {
      return;
    }

    setCount(c => c - 1);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={decrease} style={styles.btn}>
        <MinusIcon />
      </Pressable>

      <Styledtext weight="extraBold">{count}</Styledtext>

      <Pressable onPress={increase} style={styles.btn}>
        <PlusIcon stroke={'#AAADB0'} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  btn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(222, 222, 222, 1)',
  },
});
