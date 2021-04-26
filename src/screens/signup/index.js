import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import {View} from 'react-native';
import labels from '../../assets/labels';
import Button from '../../components/button';
import ImagePicker from '../../views/imagePicker';
import Input from '../../components/input';
import Title from '../../components/title';
import styles from './styles';
import {useForm, FormProvider} from 'react-hook-form';

const Signup = ({goToIndex}) => {
  const [url, setUrl] = useState(null);
  const formMethods = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = model => {
    console.log('form submitted', model, url);
    // goToIndex.scrollToIndex({animated: true, index: 1})
  };
  return (
    <View style={styles.safeAreaView}>
      <FormProvider {...formMethods} style={styles.container}>
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
            containerStyle={styles.input}
          />
          <Input placeholder={labels.yourEmail} type={'email'} name={'email'} />
          <Input
            placeholder={labels.passwordText}
            type="password"
            name={'password'}
          />
          <Input
            placeholder={labels.passwordConfirmText}
            type="password"
            name={'confirmPassword'}
          />
        </View>
        <View style={styles.confirm}>
          <Button
            label={labels.confirmText}
            color={'secondary'}
            onPress={() => formMethods.handleSubmit(onSubmit)}
          />
        </View>
      </FormProvider>
    </View>
  );
};
Signup.propTypes = {};

export default Signup;
