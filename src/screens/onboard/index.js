import React from 'react';
// import PropTypes from 'prop-types';
import {SafeAreaView, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import labels from '../../assets/labels';
import Button from '../../components/button';
import Logo from '../../components/logo';
import Text from '../../components/text';
import {Colors} from '../../config';
import styles from './styles';

const Onboard = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <LinearGradient
        colors={[Colors.primary, Colors.secondary]}
        style={styles.safeAreaView}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Logo />
          </View>
          <View style={styles.textContainer}>
            <Text label={labels.onboardWelcomeText} style={styles.text} />
          </View>
          <View styles={styles.btnContainer}>
            <Button
              label={labels.loginText}
              onPress={() => console.log('object')}
              color="white"
            />
            <Button
              label={labels.signupText}
              onPress={() => console.log('object')}
            />
          </View>
          <View style={styles.hostText}>
            <Text label={labels.hostText} style={styles.host} />
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
Onboard.propTypes = {};

export default Onboard;