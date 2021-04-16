import React from 'react';
// import PropTypes from 'prop-types';
import {View} from 'react-native';
import Title from '../../components/title';
import styles from './styles';

const Home = () => {
  return (
    <View style={styles.safeAreaView}>
      <Title label={'Home'} style={styles.lgText} black large bold />
    </View>
  );
};
Home.propTypes = {};

export default Home;
