import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import CSSwiper from '../cs/CSSwiper';
import TodoCell from './TodoCell';

interface DataProps {
  title: string;
  date: string;
  checked: boolean;
  id: string;
}

const TodoList = () => {
  const [data, setData] = useState<DataProps[]>([]);
  const [id, setId] = useState<string>('');
  const [checkedStatus, setCheckedStatus] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataCollection = firestore().collection('todo');
        const snapshot = await dataCollection
          .orderBy('timestamp', 'desc')
          .get();
        const newData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as DataProps[];
        setData(newData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [checkedStatus, id]);

  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => (
        <GestureHandlerRootView>
          <Swipeable
            renderRightActions={dragX => CSSwiper(dragX, index, item.id)}>
            <TodoCell
              item={item}
              setId={setId}
              setCheckedStatus={setCheckedStatus}
            />
          </Swipeable>
        </GestureHandlerRootView>
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default TodoList;
