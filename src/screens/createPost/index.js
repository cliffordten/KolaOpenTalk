import React, {useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
import labels from '../../assets/labels';
import Button from '../../components/button';
import ImagePicker from '../../views/imagePicker';
import styles from './styles';
import {
  TextInput,
  Platform,
  Text,
  KeyboardAvoidingView,
  View,
  Keyboard as RNKeyboard,
  Image,
} from 'react-native';
import Ripple from 'react-native-material-ripple';
import EmojiBoard from 'react-native-emoji-board';
import ScrollView from '../../views/scroll';
import {Picker} from '@react-native-picker/picker';
import {Colors} from '../../config';
import Icon from '../../components/icon';

const CreatePost = ({goToIndex}) => {
  const [value, setValue] = useState('');
  const [blob, setBlob] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [show, setShow] = useState(false);
  const [selectedValue, setSelectedValue] = useState(labels.category);

  const onClick = emoji => {
    console.log(emoji);
    if (value.length <= 300) {
      setValue(prev => prev + emoji?.code);
    }
  };

  const handleChange = val => {
    if (value.length <= 300) {
      setValue(val);
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
      style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <Picker
              selectedValue={selectedValue}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item label={labels.category} value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input]}
                onChangeText={val => handleChange(val)}
                value={value}
                placeholder={labels.post}
                placeholderTextColor={Colors.placeholder}
                selectionColor={Colors.secondaryLightBorder}
                multiline
              />
              <Text style={styles.text}>{`${value.length}/300`}</Text>
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
                <ImagePicker
                  external
                  setImageExternalUrl={setBlob}
                  setPath={setImageUrl}
                />
              </View>
            </View>
            {imageUrl ? (
              <View>
                <Image source={{uri: imageUrl}} style={styles.img} />
              </View>
            ) : (
              <View style={styles.noImageContainer}>
                <Text style={styles.noImage}>{labels.NoImage}</Text>
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
          <View style={styles.confirm}>
            <Button
              label={labels.postText}
              color={'secondary'}
              onPress={() =>
                goToIndex.scrollToIndex({animated: true, index: 1})
              }
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
CreatePost.propTypes = {};

export default CreatePost;
