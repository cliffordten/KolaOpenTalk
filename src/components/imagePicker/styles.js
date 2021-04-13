import {StyleSheet} from 'react-native';
import {Colors} from '../../config';

// const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: Colors.secondaryLight,
    borderWidth: 1,
    borderColor: Colors.secondaryLightBorder,
    width: 75,
    height: 75,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgage: {},
});

export default styles;
