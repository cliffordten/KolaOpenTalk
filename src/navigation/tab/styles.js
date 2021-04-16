import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../config';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.transparent,
    height: 50,
  },
  tabStyle: {
    backgroundColor: Colors.transparent,
  },
  bottomNav: {
    backgroundColor: Colors.transparent,
    height: 50,
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
