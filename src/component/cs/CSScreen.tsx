import React, {ReactNode} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {globalStyles} from '../../styles/global';

interface Props {
  children: ReactNode;
}

const CSScreen = ({children}: Props) => {
  return (
    <SafeAreaView style={[styles.container, globalStyles.flexOne]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.lighter} />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export default CSScreen;
