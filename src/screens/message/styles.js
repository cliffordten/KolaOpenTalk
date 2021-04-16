import {StyleSheet, Dimensions} from 'react-native';
import {Fonts} from '../../config';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  lgText: {
    alignSelf: 'center',
  },
});

export default styles;
