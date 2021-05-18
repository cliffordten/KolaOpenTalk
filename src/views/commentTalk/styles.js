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
    flex: 1,
  },
  pad: {
    paddingBottom: 150,
  },
  content: {
    paddingBottom: height * 0.2,
  },
  text: {
    fontWeight: 'bold',
    color: Colors.black,
    maxWidth: (width * 0.92 - 62) * 0.38,
  },
  normal: {
    fontSize: Fonts.normal,
    lineHeight: 23,
  },
  postHeaderUserName: {
    maxWidth: width * 0.92,
    marginLeft: 0,
  },
  username: {
    color: Colors.placeholder,
    fontWeight: '100',
    marginLeft: 10,
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
  postHeaderContainer: {
    width: width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginVertical: 12,
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
  infoHeaderContainer: {
    width: width * 0.9,
    marginTop: 5,
  },
  textContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  btnContainer: {
    flexDirection: 'row',
    width: width * 0.4,
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
  headerText: {
    marginBottom: 10,
  },
  btnHeaderC: {
    width: width * 0.6,
    marginTop: 15,
  },
  btnWrapper: {
    borderColor: Colors.placeholder,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    paddingBottom: 15,
    marginBottom: 10,
  },
  imageHeaderPost: {
    width: width * 0.9,
    height: 200,
    borderRadius: 15,
    marginTop: 5,
    marginBottom: 15,
  },
});

export default styles;
