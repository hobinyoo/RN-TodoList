import React from 'react';
import TodoList from '../item/TodoList';
import {images} from '../../styles/global';
import CSLayout from '../cs/CSScreen';
import {navigate} from '../../RootNavigation';
import CSImage from '../cs/CSImage';

const TodoScreen = () => {
  return (
    <CSLayout>
      <TodoList />
      <CSImage
        source={images.btnAdd}
        addBtn
        onPress={() => navigate('Write')}
      />
    </CSLayout>
  );
};

export default TodoScreen;
