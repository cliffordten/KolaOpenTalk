import {StyleSheet, Dimensions} from 'react-native';
import {Fonts} from '../../config';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 20,
    height: height * 0.67,
    marginTop: 30,
  },
  input: {
    marginTop: 0,
  },
  fpContainer: {
    paddingRight: 0,
  },
  text: {
    fontSize: Fonts.text,
  },
  lgText: {
    alignSelf: 'center',
    textAlign: 'center',
  },
  icon: {
    marginLeft: 18,
  },
  textContainer: {
    // width: width * 0.7,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default styles;
