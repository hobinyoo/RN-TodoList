import React from 'react';
import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import {images, toSize} from '../../styles/global';
import firestore from '@react-native-firebase/firestore';
import {reset} from '../../RootNavigation';

const CSSwiper = (
  dragX: Animated.AnimatedInterpolation<string | number>,
  index: number,
  id: string,
) => {
  const deleteTodo = async () => {
    try {
      await firestore().collection('todo').doc(id).delete();
      reset();
    } catch (error) {
      console.error('아이템 삭제 에러:', error);
    }
  };

  const scale = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  return (
    <TouchableOpacity onPress={deleteTodo}>
      <View style={styles.deleteBox}>
        <Animated.Image
          source={images.icDelete}
          style={[
            {
              width: toSize(30),
              height: toSize(30),
              transform: [{translateX: scale}],
            },
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  deleteBox: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
  },
});

export default CSSwiper;
