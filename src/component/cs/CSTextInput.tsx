import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {toSize} from '../../styles/global';

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const CSTextInput = ({value, setValue}: Props) => {
  return (
    <TextInput
      onChangeText={text => setValue(text)}
      value={value}
      style={styles.input}
      underlineColorAndroid="transparent"
      placeholder="제목을 입력해주세요"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: toSize(40),
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
  },
});

export default CSTextInput;
