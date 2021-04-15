import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from '../../config';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  imageContainer: {
    margin: 5,
    position: 'relative',
    marginBottom: 15,
  },
  image: {
    height: 60,
    width: width * 0.27,
    borderRadius: 15,
  },
  imageSelect: {
    backgroundColor: Colors.secondary,
    position: 'absolute',
    opacity: 0.5,
  },
  textSelect: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    maxWidth: '68%',
    alignSelf: 'center',
  },
  textSelectAlt: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '70%',
    alignSelf: 'center',
  },
  icon: {
    marginLeft: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: Fonts.text,
    color: Colors.white,
  },
  flatList: {
    height: height * 0.4,
    alignSelf: 'center',
  },
  flatContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width,
    alignSelf: 'center',
  },
  flat: {
    justifyContent: 'space-around',
    width,
    alignSelf: 'center',
    paddingHorizontal: 5,
    alignItems: 'flex-start',
  },
});

export default styles;
