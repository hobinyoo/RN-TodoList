import React, {Dispatch, SetStateAction} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import firestore from '@react-native-firebase/firestore';

interface Props {
  checked: boolean;
  setCheckedStatus: Dispatch<SetStateAction<boolean>>;
  setId: Dispatch<SetStateAction<string>>;
  id: string;
}
const updateTodo = async (id: string, checkedStatus: boolean) => {
  try {
    await firestore().collection('todo').doc(id).update({
      checked: checkedStatus,
    });
  } catch (error) {
    // console.error(error);
  }
};

const CSCheckBox = ({checked, setCheckedStatus, setId, id}: Props) => {
  return (
    <BouncyCheckbox
      size={25}
      fillColor="black"
      unfillColor="#FFFFFF"
      iconStyle={{borderColor: 'black'}}
      isChecked={checked}
      onPress={(isChecked: boolean) => {
        setCheckedStatus(isChecked);
        setId(id);
        updateTodo(id, isChecked);
      }}
    />
  );
};

export default CSCheckBox;
