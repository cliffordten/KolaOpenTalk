import React from 'react';
// import PropTypes from 'prop-types';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';

const Login = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text> Login</Text>
      </View>
    </SafeAreaView>
  );
};
Login.propTypes = {};

export default Login;
