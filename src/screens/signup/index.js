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
import {showShortToast} from '../../utils/methods';

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
    console.log(isError);

    if (isError.length === 0) {
      showShortToast('Please fill the form to create an account');
      return;
    }

    if (password !== confirmPassword) {
      showShortToast('Password missmatch');
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

  const onSubmit = formData => {
    // if (isValidate(formData)) {
    //   formData.profilePic = url;

    //   console.log(formData);
    // }
    goToIndex.scrollToIndex({animated: true, index: 1});
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
