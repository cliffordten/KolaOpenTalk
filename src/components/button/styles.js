import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../config';

// const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  flat: {
    paddingHorizontal: 20,
    padding: 5,
    borderRadius: 50,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: Colors.transparent,
    borderWidth: 1,
    borderColor: Colors.grey,
  },
  whiteBtn: {
    backgroundColor: Colors.white,
  },
  secondary: {
    backgroundColor: Colors.secondary,
  },
  primary: {
    color: Colors.secondary,
    fontSize: Fonts.btnTitle,
  },
  white: {
    fontSize: Fonts.btnTitle,
    color: Colors.grey,
  },
  flatText: {
    fontSize: Fonts.text,
    color: Colors.white,
  },
  secondTxt: {
    fontSize: Fonts.text,
    color: Colors.secondary,
  },
  bold: {
    fontWeight: '700',
  },
});

export default styles;
