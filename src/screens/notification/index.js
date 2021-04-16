import React from 'react';
// import PropTypes from 'prop-types';
import {View} from 'react-native';
import Title from '../../components/title';
import styles from './styles';

const Notification = () => {
  return (
    <View style={styles.safeAreaView}>
      <Title label={'Notification'} style={styles.lgText} black large bold />
    </View>
  );
};
Notification.propTypes = {};

export default Notification;
