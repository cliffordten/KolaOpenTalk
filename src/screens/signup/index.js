import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import {View} from 'react-native';
import labels from '../../assets/labels';
import Button from '../../components/button';
import ImagePicker from '../../views/imagePicker';
import Input from '../../components/input';
import Title from '../../components/title';
import styles from './styles';
import {useForm} from '../../utils/hooks';
import {showLongToast, showShortToast} from '../../utils/methods';
import {Auth} from 'aws-amplify';

const Signup = ({goToIndex}) => {
  const [url, setUrl] = useState(null);
  const [isError, setIsError] = useState([]);
  const formInit = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleError = (name, error) => {
    setIsError({...isError, [name]: error});
  };

  const isValidate = formData => {
    const {password, confirmPassword} = formData;

    if (isError.length === 0) {
      showShortToast('Please fill the form to create an account');
      return;
    }

    if (password !== confirmPassword) {
      showShortToast('Password missmatch');
      return;
    }

    if (password.length < 8) {
      showShortToast('Password must be greater than 8 characters');
      return;
    }

    if (!url) {
      showShortToast('Profile Picture is required');
      return;
    }

    if (Object.values(isError).includes(false)) {
      showShortToast('Form contains invalid fields');
      return;
    }

    return true;
  };

  const onSubmit = async formData => {
    if (isValidate(formData)) {
      const {password, email, name} = formData;
      try {
        const {user} = await Auth.signUp({
          username: email,
          email,
          password,
          attributes: {
            name,
            profile: url,
          },
        });
        if (user) {
          goToIndex.scrollToIndex({animated: true, index: 1});
        }
      } catch ({code, message}) {
        if (code === 'UsernameExistsException') {
          showLongToast(message);
        }
        console.log(code, 'msg', message);
      }
    }
  };

  const {handleInputChange, handleSubmit} = useForm(formInit, onSubmit);

  return (
    <View style={styles.safeAreaView}>
      <View style={styles.container}>
        <Title
          label={labels.signupText}
          style={styles.lgText}
          black
          large
          bold
        />
        <ImagePicker setImageExternalUrl={setUrl} />
        <View style={styles.inputContainer}>
          <Input
            placeholder={labels.nameText}
            type={'name'}
            name={'name'}
            setError={handleError}
            handleInputChange={handleInputChange}
            containerStyle={styles.input}
          />
          <Input
            placeholder={labels.yourEmail}
            handleInputChange={handleInputChange}
            type={'email'}
            name={'email'}
            setError={handleError}
          />
          <Input
            placeholder={labels.passwordText}
            handleInputChange={handleInputChange}
            type="password"
            name={'password'}
            setError={handleError}
          />
          <Input
            placeholder={labels.passwordConfirmText}
            handleInputChange={handleInputChange}
            type="password"
            name={'confirmPassword'}
            setError={handleError}
          />
        </View>
        <View style={styles.confirm}>
          <Button
            label={labels.confirmText}
            color={'secondary'}
            onPress={handleSubmit}
          />
        </View>
      </View>
    </View>
  );
};
Signup.propTypes = {};

export default Signup;
