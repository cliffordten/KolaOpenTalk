import React from 'react';
import {Text as RNText} from 'react-native';
import styles from './styles';

const Title = ({style, label, large, bold, lines, black}) => {
  return (
    <RNText
      style={[
        large ? styles.large : styles.title,
        style,
        bold ? styles.bold : '',
        black ? styles.black : '',
      ]}
      numberOfLines={lines >= 0 ? lines : 1}>
      {label}
    </RNText>
  );
};

export default Title;
