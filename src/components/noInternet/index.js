import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import labels from '../../assets/labels';

const NoInternetText = ({error}) => {
  return (
    <Text style={error ? styles.err : styles.text}>{labels.noCategory}</Text>
  );
};

export default NoInternetText;
