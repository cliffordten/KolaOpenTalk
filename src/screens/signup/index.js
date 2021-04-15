import React from 'react';
// import PropTypes from 'prop-types';
import {View} from 'react-native';
import labels from '../../assets/labels';
import Button from '../../components/button';
import ImagePicker from '../../views/imagePicker';
import Input from '../../components/input';
import Title from '../../components/title';
import styles from './styles';

const Signup = ({goToIndex}) => {
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
        <ImagePicker />
        <View style={styles.inputContainer}>
          <Input
            placeholder={labels.nameText}
            type={'name'}
            containerStyle={styles.input}
          />
          <Input placeholder={labels.yourEmail} type={'email'} />
          <Input placeholder={labels.passwordText} type="password" />
          <Input placeholder={labels.passwordConfirmText} type="password" />
        </View>
        <View style={styles.confirm}>
          <Button
            label={labels.confirmText}
            color={'secondary'}
            onPress={() => goToIndex.scrollToIndex({animated: true, index: 1})}
          />
        </View>
      </View>
    </View>
  );
};
Signup.propTypes = {};

export default Signup;
