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
  btn: {
    backgroundColor: Colors.transparent,
    borderWidth: 1,
    borderColor: Colors.grey,
  },
  whiteBtn: {
    backgroundColor: Colors.white,
  },
  primary: {
    color: Colors.secondary,
    fontSize: Fonts.btnTitle,
    fontWeight: '700',
  },
  white: {
    fontSize: Fonts.btnTitle,
    fontWeight: '700',
    color: Colors.grey,
  },
});

export default styles;
