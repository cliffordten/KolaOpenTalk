import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import labels from '../../assets/labels';

const NoInternetText = ({error}) => {
  return (
    <Text style={error ? styles.err : styles.text}>
      {error ? labels.isOffline : labels.noCategory}
    </Text>
  );
};

export default NoInternetText;
