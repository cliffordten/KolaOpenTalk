import React from 'react';
// import PropTypes from 'prop-types';
import {Text, SafeAreaView, View} from 'react-native';
import styles from './styles';

const Signup = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text> signup</Text>
      </View>
    </SafeAreaView>
  );
};
Signup.propTypes = {};

export default Signup;
