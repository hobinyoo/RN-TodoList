import React from 'react';
import {
  Image,
  ImageProps,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {toSize} from '../../styles/global';

interface Props {
  onPress?: () => void;
  addBtn?: boolean;
}

const CSImage = ({source, onPress, addBtn = false}: Props & ImageProps) => {
  return (
    <View style={[addBtn ? styles.addBtnContainer : null]}>
      <TouchableOpacity onPress={onPress}>
        <Image source={source} style={addBtn ? styles.addBtn : styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addBtnContainer: {
    position: 'absolute',
    bottom: toSize(20),
    right: toSize(20),
    zIndex: 1,
  },
  addBtn: {
    width: 40,
    height: 40,
  },
  image: {
    width: 22,
    height: 22,
    marginRight: toSize(2),
  },
});

export default CSImage;
