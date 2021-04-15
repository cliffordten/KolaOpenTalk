import React, {useRef, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import RNImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modalbox';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../config';
import Button from '../button';
import labels from '../../assets/labels';
import {showShortToast} from '../../utils/methods';

const ImagePicker = ({style}) => {
  const ref = useRef();
  const [imageUrl, setImageUrl] = useState(null);

  const openPicker = async () => {
    try {
      const {path} = await RNImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        cropperCircleOverlay: true,
      });

      setImageUrl(path);
    } catch (error) {
      showShortToast('Image was not picked');
    }
    ref.current.close();
  };

  const openCamera = async () => {
    try {
      const {path} = await RNImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
        useFrontCamera: true,
        cropperCircleOverlay: true,
      });

      setImageUrl(path);
    } catch (error) {
      showShortToast('Image was not picked');
    }
    ref.current.close();
  };

  return (
    <View style={[styles.container, style]}>
      {!imageUrl ? (
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => ref.current.open()}>
          <Icon
            name="camera"
            size={16}
            color={Colors.secondary}
            style={styles.image}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => ref.current.open()}>
          <Image
            style={[styles.imageContainer, styles.image]}
            source={{
              uri: imageUrl,
            }}
          />
        </TouchableOpacity>
      )}
      <Modal style={[styles.modal]} position={'center'} coverScreen ref={ref}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{labels.pickImageText}</Text>
        </View>
        <Button
          label={labels.takePhoto}
          flat="black"
          bold
          style={styles.button}
          textStyles={styles.text}
          onPress={openCamera}
        />
        <Button
          label={labels.chooseLibrary}
          flat="black"
          bold
          style={styles.button}
          textStyles={styles.text}
          onPress={openPicker}
        />
      </Modal>
    </View>
  );
};

export default ImagePicker;
