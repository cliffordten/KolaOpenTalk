import React from 'react';
// import PropTypes from 'prop-types';
import {View} from 'react-native';
import Title from '../../components/title';
import styles from './styles';

const Message = () => {
  return (
    <View style={styles.safeAreaView}>
      <Title label={'Message'} style={styles.lgText} black large bold />
    </View>
  );
};
Message.propTypes = {};

export default Message;
