import React from 'react';
import {Text as RNText} from 'react-native';
import styles from './styles';

const Title = ({style, label}) => {
  return <RNText style={[styles.title, style]}>{label}</RNText>;
};

export default Title;
