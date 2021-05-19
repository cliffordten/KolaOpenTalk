import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import {View} from 'react-native';
import labels from '../../assets/labels';
import Button from '../../components/button';
import Input from '../../components/input';
import Logo from '../../components/logo';
import Title from '../../components/title';
import LinearGradient from '../../views/gradient';
import ScrollView from '../../views/scroll';
import styles from './styles';
import {useForm} from '../../utils/hooks';
import {Auth} from 'aws-amplify';
import {showShortToast} from '../../utils/methods';
import Loader from '../../components/loader';
import storage from '../../utils/storage';
import {getCurrentUser} from '../../utils/graphql/query';

const Login = ({navigation}) => {
  const formInit = {
    email: '',
    password: '',
  };

  const [load, setLoad] = useState(false);

  const onSubmit = async formData => {
    setLoad(true);
    const {password, email} = formData;
    if (password === '' || email === '' || !password || !email) {
      showShortToast('Please provide login credentials');
      return;
    }
    try {
      Auth.signIn(email, password);
      const {id} = await getCurrentUser(email);
      storage.setUserisLogedOut(false);
      storage.setUserSignedup(false);
      storage.setUserId(id);
      navigation.replace('Home');
      setLoad(false);
    } catch ({code, message}) {
      if (code === 'InvalidParameterException') {
        showShortToast('An error occured');
      }
      if (code === 'NotAuthorizedException') {
        showShortToast('Invalid Credentials');
      }

      if (code === 'NetworkError') {
        showShortToast(
          'Something is wrong with your network, \n Check your connections',
        );
      }
      console.log('onSubmit', code, 'msg', message);
      setLoad(false);
    }
    setLoad(false);
  };

  const {handleInputChange, handleSubmit} = useForm(formInit, onSubmit);

  return (
    <ScrollView style={styles.safeAreaView}>
      <LinearGradient style={styles.gradient}>
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
          <Input
            placeholder={labels.emailText}
            handleInputChange={handleInputChange}
            type={'email'}
            name={'email'}
          />
          <Input
            placeholder={labels.passwordText}
            handleInputChange={handleInputChange}
            type="password"
            name={'password'}
          />
          <View style={styles.flatBtn}>
            <Button
              label={labels.passwordForgot}
              flat="placeholder"
              onPress={() => showShortToast('not implemented')}
              textStyles={styles.text}
              style={styles.fpContainer}
            />
          </View>
        </View>
        <View style={styles.confirm}>
          <Button
            label={labels.confirmText}
            color={'secondary'}
            onPress={handleSubmit}
          />
        </View>
        {load && <Loader />}
      </View>
    </ScrollView>
  );
};
Login.propTypes = {};

export default Login;
