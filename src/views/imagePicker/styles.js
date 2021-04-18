import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from '../../config';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: Colors.secondaryLight,
    borderWidth: 1,
    borderColor: Colors.secondaryLightBorder,
    width: 75,
    height: 75,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: Fonts.btnTitle,
  },
  button: {
    paddingVertical: 10,
  },
  image: {
    borderWidth: 0,
  },
  text: {
    marginRight: 'auto',
    fontWeight: '300',
  },
  titleContainer: {
    marginVertical: 20,
    marginLeft: 15,
  },
  modal: {
    elevation: 5,
    height: 160,
    width: width * 0.9,
  },
  imageContainerExternal: {
    marginLeft: 10,
  },
});

export default styles;
