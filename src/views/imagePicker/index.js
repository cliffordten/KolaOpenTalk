import React, {useRef, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import RNImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modalbox';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../config';
import Button from '../../components/button';
import labels from '../../assets/labels';
import {showShortToast} from '../../utils/methods';

const ImagePicker = ({style, external, setImageExternalUrl, setPath}) => {
  const ref = useRef();
  const [imageUrl, setImageUrl] = useState(null);

  const makeBlob = async img => {
    const photoResponse = await fetch(img);

    return await photoResponse.blob();
  };

  const openPicker = async () => {
    try {
      const {path} = await RNImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        cropperCircleOverlay: true,
      });

      setImageUrl(path);
      setPath(path);
      setImageExternalUrl(await makeBlob(path));
    } catch ({code, message}) {
      showShortToast('Image was not picked');
      console.log('open pick', code, message);
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
      setPath(path);
      setImageExternalUrl(await makeBlob(path));
    } catch ({code, message}) {
      showShortToast('Image was not picked');
      console.log('open Camera', code, message);
    }
    ref.current.close();
  };

  return (
    <View style={[styles.container, style]}>
      {!imageUrl
        ? !external && (
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
          )
        : !external && (
            <TouchableOpacity onPress={() => ref.current.open()}>
              <Image
                style={[styles.imageContainer, styles.image]}
                source={{
                  uri: imageUrl,
                }}
              />
            </TouchableOpacity>
          )}
      {external && (
        <TouchableOpacity
          style={styles.imageContainerExternal}
          onPress={() => ref.current.open()}>
          <Icon
            name="camera"
            size={16}
            color={Colors.secondary}
            style={styles.image}
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
