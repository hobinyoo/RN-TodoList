import React, {ReactNode} from 'react';
import {Text} from 'react-native';

interface Props {
  children: ReactNode;
  size: number;
  color?: string;
  complete?: boolean;
  weight: 'bold' | 'normal';
}
const CSText = ({children, size, color, complete, weight}: Props) => {
  return (
    <Text
      style={[
        {
          fontWeight: weight,
          fontSize: size,
          color: color,
          textDecorationLine: complete ? 'line-through' : 'none',
        },
      ]}>
      {children}
    </Text>
  );
};

export default CSText;
