import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../config';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: Colors.white,
    width: width * 0.65,
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 5,
    height: 30,
  },
  container: {
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    right: 10,
    padding: 5,
  },
});

export default styles;
