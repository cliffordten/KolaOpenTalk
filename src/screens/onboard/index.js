import React from 'react';
// import PropTypes from 'prop-types';
import {View} from 'react-native';
import labels from '../../assets/labels';
import Button from '../../components/button';
import Logo from '../../components/logo';
import Text from '../../components/text';
import LinearGradient from '../../views/gradient';
import styles from './styles';
import SafeAreaView from 'react-native-safe-area-view';

const Onboard = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <LinearGradient style={styles.safeAreaView}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Logo />
          </View>
          <View style={styles.textContainer}>
            <Text
              label={labels.onboardWelcomeText}
              style={styles.text}
              lines={0}
            />
          </View>
          <View styles={styles.btnContainer}>
            <Button
              label={labels.loginText}
              onPress={() => navigation.navigate('Login')}
              color="white"
            />
            <Button
              label={labels.signupText}
              onPress={() => navigation.navigate('AccountOnboarding')}
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
