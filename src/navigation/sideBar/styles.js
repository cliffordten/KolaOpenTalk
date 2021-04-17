import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../config';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.transparent,
    height: 60,
  },
  tabStyle: {
    backgroundColor: Colors.transparent,
  },
  bottomNav: {
    backgroundColor: Colors.transparent,
    height: 60,
    elevation: 0,
  },
  gradient: {
    width,
  },
  icon: {
    padding: 10,
    paddingHorizontal: 15,
  },

  // styles concerning the drawer

  drawerWrapper: {
    height: height * 0.25,
    justifyContent: 'flex-end',
    paddingLeft: 20,
    paddingBottom: 20,
  },
  imageWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: Colors.white,
  },
  textWrapper: {
    marginTop: 7,
    marginLeft: 5,
  },
  username: {
    color: Colors.placeholder,
    // marginTop: 10
  },
  left: {
    marginLeft: 20,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 50,
    marginBottom: 10,
    marginRight: 20,
  },
});

export default styles;
