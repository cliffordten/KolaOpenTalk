import React from 'react';
import {Text as RNText} from 'react-native';
import styles from './styles';

const Text = ({style, label, lines}) => {
  return (
    <RNText style={[styles.text, style]} numberOfLines={lines >= 0 ? lines : 1}>
      {label}
    </RNText>
  );
};

export default Text;
