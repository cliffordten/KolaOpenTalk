import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import labels from '../../assets/labels';

const NoInternetText = () => {
  return <Text style={styles.text}>{labels.isOffline}</Text>;
};

export default NoInternetText;
