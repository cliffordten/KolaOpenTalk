import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from '../../config';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  gradient: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    maxHeight: 43,
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

  searchInput: {
    backgroundColor: Colors.white,
    width: width * 0.65,
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 5,
    height: 30,
  },
});

export default styles;
