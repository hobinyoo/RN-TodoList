import {Dimensions, StyleSheet} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;

export const toSize = (input: number) => {
  const scaleVertical = screenHeight / 812;
  const scaleHorizontal = screenWidth / 375;
  const ratio = screenWidth / screenHeight;
  const scale = ratio < 0.6 ? scaleHorizontal : scaleVertical;
  return Math.trunc(scale * input);
};

export const images = {
  btnAdd: require('../assets/btn_add.png'),
  icDate: require('../assets/ic_date.png'),
  icDelete: require('../assets/ic_delete.png'),
  backArrow: require('../assets/back_arrow.png'),
};

export const globalStyles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  flexDirection: {
    flexDirection: 'row',
  },
});
