import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import Ripple from 'react-native-material-ripple';

const Button = ({
  style,
  onPress,
  label,
  color,
  textStyles,
  flat,
  bold,
  icon,
}) => {
  if (flat) {
    return (
      <Ripple style={[styles.flat, style]} onPress={onPress}>
        <Text
          style={[
            flat === 'white'
              ? styles.flatText
              : flat === 'placeholder'
              ? styles.white
              : flat === 'black'
              ? styles.black
              : styles.secondTxt,
            bold && styles.bold,
            textStyles,
          ]}>
          {label}
        </Text>
        {icon}
      </Ripple>
    );
  }
  return (
    <Ripple
      style={[
        color === 'white'
          ? styles.whiteBtn
          : color === 'secondary'
          ? styles.secondary
          : styles.btn,
        style,
        styles.button,
      ]}
      onPress={onPress}>
      <Text
        style={[
          color === 'white'
            ? styles.primary
            : color === 'secondary'
            ? styles.flatText
            : styles.white,
          bold && styles.bold,
          textStyles,
        ]}>
        {label}
      </Text>
    </Ripple>
  );
};

export default Button;
