import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../config';

// const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pad: {
    paddingVertical: 13,
  },
  flat: {
    padding: 5,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: Colors.transparent,
    borderWidth: 1,
    borderColor: Colors.grey,
  },
  default: {
    backgroundColor: Colors.transparent,
    borderWidth: 1,
    borderColor: Colors.secondary,
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
  black: {
    fontSize: Fonts.btnTitle,
    color: Colors.black,
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
