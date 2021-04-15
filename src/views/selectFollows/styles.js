import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from '../../config';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    width: width * 0.43,
    marginBottom: 20,
    elevation: 3,
    borderRadius: 15,
    paddingTop: 6,
  },
  flatContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width,
    alignSelf: 'center',
    marginTop: 25,
    // paddingBottom: height * 0.5,
  },
  iconContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  content: {
    paddingBottom: height * 0.2,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: Fonts.normal,
  },
  username: {
    color: Colors.placeholder,
  },
  btn: {
    paddingVertical: 6,
  },
  btnContainer: {
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: Colors.lightGrey,
    paddingHorizontal: 20,
  },
  flat: {
    justifyContent: 'space-around',
    width,
    alignSelf: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 5,
  },
  flatList: {
    height: height * 0.7,
    alignSelf: 'center',
  },
  isFollow: {
    backgroundColor: Colors.secondaryLight,
  },
  textStyles: {
    color: Colors.secondary,
  },
});

export default styles;
