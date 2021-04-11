import React from 'react';
import {Text as RNText} from 'react-native';
import styles from './styles';

const Text = ({style, label}) => {
  return <RNText style={[styles.text, style]}>{label}</RNText>;
};

export default Text;
