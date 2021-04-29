import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../config';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
  },
  confirm: {
    width: width * 0.92,
    alignSelf: 'center',
    marginTop: 20,
  },
  container: {
    justifyContent: 'space-around',
    height: height * 0.9,
  },
  btn: {
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
    bottom: 5,
    color: Colors.secondaryLightBorder,
  },
  img: {
    width: width * 0.9,
    height: height * 0.3,
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 13,
  },
  wrapperPicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 15,
    borderBottomColor: Colors.black,
    borderBottomWidth: 0.5,
  },
  emoji: {
    backgroundColor: Colors.secondaryLight,
    position: 'absolute',
  },
  picker: {
    height: 50,
    width: width * 0.97,
    alignSelf: 'center',
  },
  noImageContainer: {
    height: height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noImage: {
    color: Colors.secondaryLightBorder,
  },
});

export default styles;
