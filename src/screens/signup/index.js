import React from 'react';
// import PropTypes from 'prop-types';
import {SafeAreaView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import labels from '../../assets/labels';
import Button from '../../components/button';
import Logo from '../../components/logo';
import {Colors} from '../../config';
import styles from './styles';

const Signup = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <LinearGradient
        colors={[Colors.primary, Colors.secondary]}
        style={styles.gradient}>
        <View style={styles.flatBtn}>
          <Button
            label={labels.signupTextAlt}
            flat="white"
            onPress={() => navigation.navigate('Signup')}
          />
        </View>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
      </LinearGradient>
      <View style={styles.container}>
        <Text> Login</Text>
      </View>
    </SafeAreaView>
  );
};
Signup.propTypes = {};

export default Signup;
