import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../config';

// const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    padding: 15,
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
  primary: {
    color: Colors.primary,
    fontSize: Fonts.btnTitle,
    fontWeight: '700',
  },
  white: {
    fontSize: Fonts.btnTitle,
    fontWeight: '700',
    color: Colors.grey,
  },
  ripple: {
    marginVertical: 10,
    borderRadius: 50,
  },
});

export default styles;
