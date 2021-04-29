import React from 'react';
import {ActivityIndicator} from 'react-native';
import styles from './styles';
import {Colors} from '../../config';

const Loader = ({nofloat, small}) => {
  return (
    <ActivityIndicator
      size={small ? 'small' : 'large'}
      color={Colors.secondary}
      style={!nofloat && styles.loader}
    />
  );
};

export default Loader;
