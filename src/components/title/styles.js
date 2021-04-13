import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../config';

// const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  title: {
    fontSize: Fonts.title,
  },
  large: {
    fontSize: Fonts.largeTitle,
  },
  bold: {
    fontWeight: 'bold',
  },
  black: {
    color: Colors.black,
  },
});

export default styles;
