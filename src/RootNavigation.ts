import {createNavigationContainerRef} from '@react-navigation/native';
import {RootStackParamList} from './App';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const navigate = (name: any, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

export const goBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};

export const reset = () => {
  if (navigationRef.isReady()) {
    navigationRef.reset({routes: [{name: 'Todo'}]});
  }
};
