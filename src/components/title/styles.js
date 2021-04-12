import {StyleSheet} from 'react-native';
import {Fonts} from '../../config';

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
});

export default styles;
