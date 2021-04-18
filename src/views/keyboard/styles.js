import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../config';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -10,
    left: -15,
    width,
    backgroundColor: Colors.white,
  },
  btn: {
    // padding: 0,
    // paddingLeft: 0,
    // paddingRight: 0,
    paddingVertical: 10,
  },
  iconWrapper: {
    flexDirection: 'row',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 10,
    alignItems: 'center',
  },
  icon: {
    padding: 10,
  },
  iconBtn: {
    paddingLeft: 10,
  },
  input: {
    color: Colors.secondary,
    borderBottomColor: Colors.placeholder,
    borderBottomWidth: 0.5,
    marginHorizontal: 20,
  },
  inputContainer: {
    position: 'relative',
  },
  text: {
    position: 'absolute',
    right: 20,
    bottom: 15,
    color: Colors.secondaryLightBorder,
  },
  img: {
    width: width * 0.9,
    height: 150,
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 13,
  },
  wrapper: {},
  emoji: {
    backgroundColor: Colors.secondaryLight,
    position: 'relative',
  },
});

export default styles;
