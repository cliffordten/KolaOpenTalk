import React, {useState, useEffect, useCallback} from 'react';
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
  BackHandler,
  Alert,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Ripple from 'react-native-material-ripple';
import EmojiBoard from 'react-native-emoji-board';
import ScrollView from '../../views/scroll';
import {Picker} from '@react-native-picker/picker';
import {Colors} from '../../config';
import Icon from '../../components/icon';
import {getCurrentTime, showShortToast} from '../../utils/methods';
import Loader from '../../components/loader';
import {createPost} from '../../redux/actions/post';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../../redux/actions/category';

const CreatePost = ({navigation}) => {
  const [value, setValue] = useState('');
  const [blob, setBlob] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [show, setShow] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState(null);
  const [load, setLoad] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.category);
  const {loading} = useSelector(state => state.post);

  const onClick = emoji => {
    if (value.length < 300) {
      setValue(prev => prev + emoji?.code);
    }
  };

  const handleChange = val => {
    if (val.length < 300) {
      setValue(val);
    }
  };

  const keyboardDidShow = () => {
    setShow(false);
  };

  const handleBackButton = useCallback(() => {
    if (show) {
      setShow(false);
      return true;
    }
    if (selectedInterest || value) {
      Alert.alert('Do you want to exit?', 'Your changes will not be saved!', [
        {
          text: 'Cancel',
          onPress: () => true,
          style: 'cancel',
        },
        {text: 'OK', onPress: () => navigation.goBack()},
      ]);
      return true;
    }
  }, [navigation, selectedInterest, show, value]);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategories(0, true));
    }

    RNKeyboard.addListener('keyboardDidShow', keyboardDidShow);
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      RNKeyboard.removeListener('keyboardDidShow', keyboardDidShow);
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [categories, dispatch, handleBackButton]);

  const createUserPost = async () => {
    if (selectedInterest && value) {
      setLoad(true);
      dispatch(
        createPost(
          value,
          selectedInterest,
          blob,
          imageUrl,
          getCurrentTime(),
          isPrivate,
        ),
      );
      if (!loading) {
        setTimeout(() => {
          setLoad(false);
          navigation.navigate('Home');
          showShortToast('Successfuly Created post');
        }, 500);
      }
    } else {
      showShortToast('Make sure you selected a category and written something');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <Picker
              selectedValue={selectedInterest}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedInterest(itemValue)
              }>
              <Picker.Item label={labels.category} value="" />
              {categories?.map(({name, id}) => (
                <Picker.Item label={name} value={name} key={id} />
              ))}
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
            <View style={styles.wrapperCheck}>
              <CheckBox
                disabled={false}
                value={isPrivate}
                onValueChange={newValue => setIsPrivate(newValue)}
                style={styles.checkbox}
                tintColors={{true: Colors.secondary, false: Colors.secondary}}
                widt
              />
              <Text>{labels.private}</Text>
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
              onPress={createUserPost}
            />
          </View>
          {load && <Loader />}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreatePost;
