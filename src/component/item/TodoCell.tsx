import React, {Dispatch, SetStateAction} from 'react';
import {SCREEN_WIDTH, globalStyles} from '../../styles/global';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import CSCheckBox from '../cs/CSCheckBox';
import CSText from '../cs/CSText';
import {getDaysRemaining, getMonthDays} from '../../function/getDays';
import {navigate} from '../../RootNavigation';

interface DataProps {
  title: string;
  date: string;
  checked: boolean;
  id: string;
}

interface Props {
  setCheckedStatus: Dispatch<SetStateAction<boolean>>;
  setId: Dispatch<SetStateAction<string>>;
  item: DataProps;
}

const TodoCell = ({setCheckedStatus, setId, item}: Props) => {
  return (
    <TouchableOpacity onPress={() => navigate('Write', item)}>
      <View style={styles.container}>
        <View style={globalStyles.flexDirection}>
          <CSCheckBox
            checked={item.checked}
            id={item.id}
            setCheckedStatus={setCheckedStatus}
            setId={setId}
          />
          <CSText size={20} weight="bold" color="black" complete={item.checked}>
            {item.title}
          </CSText>
        </View>
        <View>
          {getDaysRemaining(item.date) > 0 ? (
            <CSText size={20} weight="bold" color={'black'}>{`${
              getDaysRemaining(item.date) > 7
                ? getMonthDays(item.date)
                : getDaysRemaining(item.date) + '일 남음'
            }`}</CSText>
          ) : (
            <CSText size={20} weight="bold" color={'red'}>
              {`${-getDaysRemaining(item.date)}일 연체`}
            </CSText>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
});

export default TodoCell;
