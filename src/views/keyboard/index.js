import React, {useState, useEffect} from 'react';
import {
  TextInput,
  Platform,
  Text,
  KeyboardAvoidingView,
  View,
  Keyboard as RNKeyboard,
  Image,
} from 'react-native';
import styles from './styles';
import {Colors} from '../../config';
import Ripple from 'react-native-material-ripple';
import labels from '../../assets/labels';
import Icon from '../../components/icon';
import Button from '../../components/button';
import EmojiBoard from 'react-native-emoji-board';
import ImagePicker from '../imagePicker';
import ScrollView from '../scroll';

const Keyboard = () => {
  const [value, setValue] = useState(null);
  const [count, setCount] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);
  const [show, setShow] = useState(false);

  const onClick = emoji => {
    console.log(emoji);
    setValue(prev => prev + emoji?.code);
  };

  const handleChange = val => {
    if (val.length <= 100) {
      setValue(val);
      setCount(count + 1);
    }
  };

  const keyboardDidShow = () => {
    setShow(false);
  };

  useEffect(() => {
    RNKeyboard.addListener('keyboardDidShow', keyboardDidShow);
    return () => {
      RNKeyboard.removeListener('keyboardDidShow', keyboardDidShow);
    };
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input]}
              onChangeText={val => handleChange(val)}
              value={value}
              placeholder={labels.comment}
              placeholderTextColor={Colors.placeholder}
              selectionColor={Colors.secondary}
            />
            <Text style={styles.text}>{`${count}/100`}</Text>
          </View>
          <View style={styles.iconContainer}>
            <View style={styles.iconWrapper}>
              <Ripple
                style={[styles.icon, styles.marg]}
                onPress={() => {
                  setShow(!show);
                }}>
                <Icon
                  name={'smile'}
                  size={20}
                  color={Colors.secondary}
                  family={'Feather'}
                />
              </Ripple>
              <ImagePicker external setImageExternalUrl={setImageUrl} />
            </View>
            <View style={styles.btnContainer}>
              <Button
                label={labels.navTitle.talk}
                color={'secondary'}
                style={styles.btn}
                onPress={() => console.log('object')}
                icon={
                  <Icon
                    name={'send'}
                    size={18}
                    color={Colors.white}
                    style={styles.iconBtn}
                  />
                }
              />
            </View>
          </View>
          {imageUrl && (
            <View>
              <Image source={{uri: imageUrl}} style={styles.img} />
            </View>
          )}
        </View>
        {show && (
          <EmojiBoard
            showBoard={show}
            onClick={onClick}
            onRemove={() => setValue(value.slice(0, -1))}
            containerStyle={styles.emoji}
          />
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

Keyboard.propTypes = {};

export default Keyboard;
