import React from 'react';
// import PropTypes from 'prop-types';
import {Text, SafeAreaView, View} from 'react-native';
import styles from './styles';

const Onboard = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text> Onboard</Text>
      </View>
    </SafeAreaView>
  );
};
Onboard.propTypes = {};

export default Onboard;
