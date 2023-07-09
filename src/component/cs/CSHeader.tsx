import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet, View} from 'react-native';
import CSImage from './CSImage';
import CSText from './CSText';
import {globalStyles, images, toSize} from '../../styles/global';
import {goBack} from '../../RootNavigation';
import {isEmpty} from 'lodash';
import {getDaysRemaining, getMonthDays} from '../../function/getDays';

interface Props {
  onPress: () => void;
  selectedDate: string;
  setDeleteVisible: Dispatch<SetStateAction<boolean>>;
  title: string;
}

const CSHeader = ({onPress, selectedDate, setDeleteVisible, title}: Props) => {
  return (
    <View style={styles.container}>
      <CSImage source={images.backArrow} onPress={() => goBack()} />

      <View style={globalStyles.flexDirection}>
        <CSImage source={images.icDate} onPress={onPress} />
        <CSText size={toSize(15)} weight="bold">
          {isEmpty(selectedDate)
            ? '날짜추가'
            : getDaysRemaining(selectedDate) > 7
            ? getMonthDays(selectedDate)
            : getDaysRemaining(selectedDate) > 0
            ? `${getDaysRemaining(selectedDate)}일 남음`
            : `${-getDaysRemaining(selectedDate)}일 연체`}
        </CSText>
      </View>

      <CSImage
        source={images.icDelete}
        onPress={() => (isEmpty(title) ? goBack() : setDeleteVisible(true))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: toSize(16),
    paddingHorizontal: toSize(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: toSize(1),
  },
});

export default CSHeader;
