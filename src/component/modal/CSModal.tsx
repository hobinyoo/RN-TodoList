import React, {Dispatch, SetStateAction} from 'react';
import {Button, Modal, StyleSheet, View} from 'react-native';
import CSText from '../cs/CSText';

interface Props {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  onPress: () => void;
  text: string;
}

const CSModal = ({modalVisible, setModalVisible, onPress, text}: Props) => {
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <CSText size={20} weight="normal">
              {text}
            </CSText>
            <View style={styles.button}>
              <Button title="확인" onPress={onPress} />
              <Button title="취소" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    marginVertical: 10,
  },
});

export default CSModal;
