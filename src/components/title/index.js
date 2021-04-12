import React from 'react';
import {Text as RNText} from 'react-native';
import styles from './styles';

const Title = ({style, label, large, bold, lines}) => {
  return (
    <RNText
      style={[
        large ? styles.large : styles.title,
        style,
        bold ? styles.bold : '',
      ]}
      numberOfLines={lines >= 0 ? lines : 1}>
      {label}
    </RNText>
  );
};

export default Title;
