import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import Ripple from 'react-native-material-ripple';

const Button = ({style, onPress, label, color, textStyles}) => {
  return (
    <Ripple
      style={[
        color === 'white' ? styles.whiteBtn : styles.btn,
        style,
        styles.button,
      ]}
      onPress={onPress}>
      <Text
        style={[color === 'white' ? styles.primary : styles.white, textStyles]}>
        {label}
      </Text>
    </Ripple>
  );
};

export default Button;
