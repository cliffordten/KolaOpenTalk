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
  left,
}) => {
  if (flat) {
    return (
      <Ripple style={[styles.flat, style]} onPress={onPress}>
        {left && icon}
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
        {!left && icon}
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
          : color === 'default'
          ? styles.default
          : styles.btn,
        style,
        color === 'default' || !color ? styles.pad : '',
        styles.button,
      ]}
      onPress={onPress}>
      <Text
        style={[
          color === 'white'
            ? styles.primary
            : color === 'secondary'
            ? styles.flatText
            : color === 'default'
            ? styles.primary
            : styles.white,
          bold && styles.bold,
          textStyles,
        ]}>
        {label}
      </Text>
      {icon}
    </Ripple>
  );
};

export default Button;
