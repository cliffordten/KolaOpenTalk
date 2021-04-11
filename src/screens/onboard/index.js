import React from 'react';
// import PropTypes from 'prop-types';
import {SafeAreaView, View} from 'react-native';
import labels from '../../assets/labels';
import Logo from '../../components/logo';
import Text from '../../components/text';
import styles from './styles';

const Onboard = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Logo />
        <Text label={labels.onboardWelcomeText} />
      </View>
    </SafeAreaView>
  );
};
Onboard.propTypes = {};

export default Onboard;
