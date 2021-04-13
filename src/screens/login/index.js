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

const Login = ({navigation}) => {
  return (
    <ScrollView style={styles.safeAreaView}>
      <LinearGradient
        colors={[Colors.primary, Colors.secondary]}
        style={styles.gradient}>
        <View style={styles.flatBtn}>
          <Button
            label={labels.signupTextAlt}
            flat="white"
            bold
            onPress={() => navigation.navigate('AccountOnboarding')}
          />
        </View>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
      </LinearGradient>
      <View style={styles.container}>
        <Title
          black
          label={labels.loginTitle}
          large
          bold
          style={styles.lgText}
        />
        <View style={styles.inputContainer}>
          <Input placeholder={labels.emailText} type={'email'} />
          <Input placeholder={labels.passwordText} type="password" />
          <View style={styles.flatBtn}>
            <Button
              label={labels.passwordForgot}
              flat="placeholder"
              onPress={() => navigation.navigate('ForgotPassword')}
              textStyles={styles.text}
              style={styles.fpContainer}
            />
          </View>
        </View>
        <View style={styles.confirm}>
          <Button
            label={labels.confirmText}
            color={'secondary'}
            onPress={() => navigation.navigate('AccountOnboarding')}
          />
        </View>
      </View>
    </ScrollView>
  );
};
Login.propTypes = {};

export default Login;
