import React from 'react';
// import PropTypes from 'prop-types';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import labels from '../../assets/labels';
import Button from '../../components/button';
import Input from '../../components/input';
import Logo from '../../components/logo';
import Title from '../../components/title';
import {Colors} from '../../config';
import ScrollView from '../../views/scroll';
import styles from './styles';

const Signup = ({navigation}) => {
  return (
    <ScrollView style={styles.safeAreaView}>
      <LinearGradient
        colors={[Colors.primary, Colors.secondary]}
        style={styles.gradient}>
        <View style={styles.flatBtn}>
          <Button
            label={labels.signIn}
            flat="white"
            bold
            onPress={() => navigation.navigate('Login')}
          />
        </View>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
      </LinearGradient>
      <View style={styles.container}>
        <Title
          label={labels.signupText}
          style={styles.lgText}
          black
          large
          bold
        />
        <View style={styles.inputContainer}>
          <Input placeholder={labels.nameText} type={'name'} />
          <Input placeholder={labels.yourEmail} type={'email'} />
          <Input placeholder={labels.passwordText} type="password" />
          <Input placeholder={labels.passwordConfirmText} type="password" />
        </View>
        <View style={styles.confirm}>
          <Button
            label={labels.confirmText}
            color={'secondary'}
            onPress={() => navigation.navigate('Signup')}
          />
        </View>
      </View>
    </ScrollView>
  );
};
Signup.propTypes = {};

export default Signup;
