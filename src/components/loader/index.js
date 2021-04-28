import React from 'react';
import {ActivityIndicator} from 'react-native';
import styles from './styles';
import {Colors} from '../../config';

const Loader = () => {
  return (
    <ActivityIndicator
      size="large"
      color={Colors.secondary}
      style={styles.loader}
    />
  );
};

export default Loader;
