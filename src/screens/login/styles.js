import {StyleSheet, Dimensions} from 'react-native';
import {Fonts} from '../../config';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    maxHeight: height * 0.24,
    borderBottomRightRadius: 15,
  },
  flatBtn: {
    alignSelf: 'flex-end',
    marginVertical: 5,
  },
  container: {
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 20,
    height: height * 0.5,
    marginTop: 45,
  },
  inputContainer: {
    marginTop: 15,
  },
  fpContainer: {
    paddingRight: 0,
  },
  logoContainer: {
    marginVertical: 20,
  },
  text: {
    fontSize: Fonts.text,
  },
  lgText: {
    alignSelf: 'center',
  },
});

export default styles;
