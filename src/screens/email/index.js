import React from 'react';
// import PropTypes from 'prop-types';
import {View} from 'react-native';
import Title from '../../components/title';
import styles from './styles';

const Email = () => {
  return (
    <View style={styles.safeAreaView}>
      <Title label={'Email'} style={styles.lgText} black large bold />
    </View>
  );
};
Email.propTypes = {};

export default Email;
