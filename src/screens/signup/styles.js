import {StyleSheet, Dimensions} from 'react-native';
import {Fonts} from '../../config';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 20,
    height: height * 0.62,
    marginTop: 30,
  },
  input: {
    marginTop: 0,
  },
  fpContainer: {
    paddingRight: 0,
  },
  text: {
    fontSize: Fonts.text,
  },
  lgText: {
    alignSelf: 'center',
  },
  modal: {
    elevation: 5,
    height: 190,
    width: width * 0.9,
    padding: 18,
  },
  titleContainer: {
    marginBottom: 15,
  },
  title: {
    fontSize: Fonts.title,
  },
  button: {
    marginTop: 15,
    alignItems: 'flex-end',
  },
});

export default styles;
