import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from '../../config';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  flatContainer: {
    alignItems: 'center',
    width: width * 0.92,
    alignSelf: 'center',
    marginVertical: 10,
    position: 'relative',
  },
  pad: {
    paddingBottom: 35,
  },
  content: {
    paddingBottom: height * 0.2,
  },
  text: {
    fontWeight: 'bold',
    color: Colors.black,
  },
  normal: {
    fontSize: Fonts.normal,
    lineHeight: 22,
  },
  username: {
    color: Colors.placeholder,
    fontWeight: '100',
    marginLeft: 15,
  },
  flatBtn: {
    margin: 0,
    padding: 0,
    marginLeft: 'auto',
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textBtn: {
    marginLeft: 10,
  },
  time: {
    fontSize: Fonts.normal,
    marginLeft: 0,
  },
  postContainer: {
    flexDirection: 'row',
    paddingBottom: 15,
    marginBottom: 10,
    borderBottomColor: Colors.grey,
    borderBottomWidth: 0.5,
  },
  imageProfile: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  infoContainer: {
    width: width * 0.92 - 62,
    marginTop: 5,
  },
  textContainer: {
    flexDirection: 'row',
  },
  btnContainer: {
    flexDirection: 'row',
    width: width * 0.6,
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  imagePost: {
    width: width * 0.92 - 62,
    height: 130,
    borderRadius: 15,
    marginTop: 8,
    marginBottom: 4,
  },
  floatingBtn: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: Colors.secondary,
    padding: 17,
    borderRadius: 50,
    elevation: 5,
  },
});

export default styles;
