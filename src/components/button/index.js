import React from 'react';
import {Text, Pressable} from 'react-native';
import styles from './styles';
import Ripple from 'react-native-material-ripple';

const Button = ({style, onPress, label, color, textStyles}) => {
  return (
    <Ripple style={styles.ripple}>
      <Pressable
        onPress={onPress}
        style={[
          color === 'white' ? styles.whiteBtn : styles.btn,
          style,
          styles.button,
        ]}>
        <Text
          style={[
            color === 'white' ? styles.primary : styles.white,
            textStyles,
          ]}>
          {label}
        </Text>
      </Pressable>
    </Ripple>
  );
};

export default Button;