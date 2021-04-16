import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../config';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.transparent,
    height: 60,
  },
  tabStyle: {
    backgroundColor: Colors.transparent,
  },
  bottomNav: {
    backgroundColor: Colors.transparent,
    height: 60,
    elevation: 0,
  },
  gradient: {
    width,
  },
  icon: {
    padding: 10,
    paddingHorizontal: 15,
  },
});

export default styles;
