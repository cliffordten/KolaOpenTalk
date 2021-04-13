import React from 'react';
import {Alert, View} from 'react-native';
import styles from './styles';
import Ripple from 'react-native-material-ripple';
import RNImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../config';

const ImagePicker = ({style, onPress}) => {
  const selectImage = () => {
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      storageOptions: {
        skipBackup: true,
      },
    };

    RNImagePicker.showImagePicker(options, response => {
      console.log({response});

      if (response.didCancel) {
        console.log('User cancelled photo picker');
        Alert.alert('You did not select any image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};
        console.log({source});
      }
    });
  };
  return (
    <Ripple style={[styles.container, style]} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Icon
          name="camera"
          size={16}
          color={Colors.secondary}
          style={styles.image}
        />
      </View>
    </Ripple>
  );
};

export default ImagePicker;
