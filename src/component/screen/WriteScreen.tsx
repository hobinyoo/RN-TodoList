import React, {useState} from 'react';
import CSLayout from '../cs/CSScreen';
import CSTextInput from '../cs/CSTextInput';
import CSHeader from '../cs/CSHeader';
import {Button, View} from 'react-native';
import {globalStyles, toSize} from '../../styles/global';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CalendarView from '../calendar/CalendarView';
import firestore from '@react-native-firebase/firestore';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import CSModal from '../modal/CSModal';
import {reset} from '../../RootNavigation';
import {isEmpty} from 'lodash';
import {RootStackParamList} from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Write'>;

const WriteScreen = ({route}: Props) => {
  const [title, setTitle] = useState<string>(route?.params?.title ?? '');
  const [selectedDate, setSelectedDate] = useState<string>(
    route?.params?.date ?? '',
  );
  const [checkedStatus, setCheckedStatus] = useState<boolean>(false);
  const [calendarClicked, setCalendarClicked] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [deleteVisible, setDeleteVisible] = useState<boolean>(false);

  const addCollection = firestore().collection('todo');

  const addTodo = async () => {
    try {
      await addCollection.add({
        title: title,
        date: selectedDate,
        checked: checkedStatus,
        timestamp: new Date(),
      });
      setModalVisible(false);
      reset();
    } catch (error) {
      // console.log(error.message);
    }
  };

  const updateTodo = async () => {
    try {
      await firestore().collection('todo').doc(route?.params?.id).update({
        title: title,
        date: selectedDate,
        checked: checkedStatus,
      });
      setModalVisible(false);
      reset();
    } catch (error) {
      // console.error(error);
    }
  };

  const deleteTodo = async () => {
    try {
      await firestore().collection('todo').doc(route?.params.id).delete();
      reset();
    } catch (error) {
      // console.error(error);
    }
  };

  return (
    <CSLayout>
      <CSHeader
        onPress={() => setCalendarClicked(!calendarClicked)}
        selectedDate={selectedDate}
        setDeleteVisible={setDeleteVisible}
        title={route?.params?.id}
      />
      <View style={globalStyles.flexDirection}>
        <BouncyCheckbox
          size={25}
          style={{marginLeft: toSize(16)}}
          fillColor="black"
          unfillColor="#FFFFFF"
          iconStyle={{borderColor: 'black'}}
          onPress={(isChecked: boolean) => {
            setCheckedStatus(isChecked);
          }}
          isChecked={route?.params?.checked ?? false}
        />
        <CSTextInput value={title} setValue={setTitle} />
      </View>
      {calendarClicked && (
        <CalendarView
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      )}
      <Button
        title={isEmpty(route?.params?.title) ? '생성하기' : '수정하기'}
        color={'black'}
        onPress={() => setModalVisible(!modalVisible)}
      />

      {modalVisible && (
        <CSModal
          onPress={isEmpty(route?.params?.title) ? addTodo : updateTodo}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          text={
            isEmpty(route?.params?.title)
              ? '일정을 생성하시겠습니까?'
              : '일정을 수정하시겠습니까?'
          }
        />
      )}

      {deleteVisible && (
        <CSModal
          onPress={deleteTodo}
          modalVisible={deleteVisible}
          setModalVisible={setDeleteVisible}
          text={'일정을 삭제하시겠습니까?'}
        />
      )}
    </CSLayout>
  );
};

export default WriteScreen;
