import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../config';

// const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  gradient: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    // maxHeight: 48,
    paddingTop: 10,
  },
  icon: {
    padding: 3,
    borderRadius: 50,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  text: {
    fontSize: Fonts.btnTitle,
    color: Colors.white,
  },
});

export default styles;
