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
import {listCategories} from '../../utils/graphql/query';
import {createUserPost} from '../../utils/graphql/mutations';
import {getCurrentTime, showShortToast} from '../../utils/methods';
import Loader from '../../components/loader';

const CreatePost = ({navigation}) => {
  const [value, setValue] = useState('');
  const [blob, setBlob] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [show, setShow] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState(null);
  const [category, setCategory] = useState([]);
  const [load, setLoad] = useState(false);

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

  useEffect(() => {
    const fetch = async () => {
      const {items} = await listCategories(null, true);
      setCategory(items);
    };
    fetch();

    RNKeyboard.addListener('keyboardDidShow', keyboardDidShow);
    return () => {
      RNKeyboard.removeListener('keyboardDidShow', keyboardDidShow);
    };
  }, []);

  const createPost = async () => {
    if (selectedInterest && value) {
      setLoad(true);
      const res = await createUserPost(
        value,
        selectedInterest,
        blob,
        imageUrl,
        getCurrentTime(),
      );
      if (res) {
        setTimeout(() => {
          setLoad(false);
          navigation.navigate('Home');
          showShortToast('Successfuly Created post');
        }, 2000);
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
              {category?.map(({name, id}) => (
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
              onPress={createPost}
            />
          </View>
          {load && <Loader />}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
CreatePost.propTypes = {};

export default CreatePost;
