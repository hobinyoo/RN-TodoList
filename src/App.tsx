import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoScreen from './component/screen/TodoScreen';
import WriteScreen from './component/screen/WriteScreen';
import {navigationRef} from './RootNavigation';

export type RootStackParamList = {
  Todo: undefined;
  Write: {title: string; date: string; checked: boolean; id: string};
};

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Todo"
          component={TodoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Write"
          component={WriteScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
