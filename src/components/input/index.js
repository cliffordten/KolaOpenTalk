import React, {useState} from 'react';
import {TextInput, Platform, Text, KeyboardAvoidingView} from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors, Fonts} from '../../config';
import Ripple from 'react-native-material-ripple';

const Input = ({style, placeholder, type, containerStyle}) => {
  const typePassword = type === 'password';
  const Icon = typePassword ? Entypo : Feather;

  const [isFocused, setisFocused] = useState(false);
  const [toggleEye, setToggleEye] = useState(false);
  const [value, setValue] = useState(null);
  const [isValid, setIsValid] = useState(true);
  const [isError, setIsError] = useState(false);

  const labelStyle = {
    position: 'absolute',
    left: 3,
    top: !isFocused && !value ? 8 : -15,
    fontSize: Fonts.text,
    color: !isFocused ? Colors.placeholder : Colors.secondary,
  };

  const color = {
    borderBottomColor: !isFocused ? Colors.placeholder : Colors.secondary,
    color: !value ? Colors.placeholder : Colors.secondary,
  };

  const error = {
    borderBottomColor: Colors.error,
    color: Colors.error,
  };

  const validateField = val => {
    if (type === 'email') {
      const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      setIsValid(reg.test(val));
      setIsError(reg.test(val));
      return;
    }

    if (type === 'name') {
      setIsValid(val.length > 5);
      setIsError(val.length > 5);
      return;
    }

    setIsValid(true);
  };

  const handleChange = val => {
    setValue(val);
    validateField(val);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container, containerStyle]}>
      <Text style={[labelStyle]}>{placeholder}</Text>
      <TextInput
        style={[styles.input, color, !isValid && error, style]}
        onFocus={() => setisFocused(true)}
        onChangeText={val => handleChange(val)}
        onBlur={() => setisFocused(false)}
        value={value}
        autoCompleteType={type}
        secureTextEntry={typePassword ? !toggleEye : false}
      />
      <Ripple
        style={styles.icon}
        onPress={() => {
          typePassword ? setToggleEye(!toggleEye) : null;
        }}>
        {(typePassword || isError) && (
          <Icon
            name={
              typePassword ? (toggleEye ? 'eye-with-line' : 'eye') : 'check'
            }
            size={20}
            color={
              value && isValid
                ? Colors.secondary
                : !isFocused
                ? Colors.placeholder
                : Colors.secondary
            }
          />
        )}
      </Ripple>
    </KeyboardAvoidingView>
  );
};

export default Input;
