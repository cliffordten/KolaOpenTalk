import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../config';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    justifyContent: 'space-between',
    height: height * 0.7,
    marginTop: 'auto',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.8,
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    lineHeight: 25,
    color: Colors.grey,
    opacity: 0.7,
  },
  hostText: {
    alignItems: 'center',
  },
  host: {
    fontWeight: 'bold',
    color: Colors.grey,
    opacity: 0.4,
  },
  logoContainer: {
    alignItems: 'center',
  },
});

export default styles;
