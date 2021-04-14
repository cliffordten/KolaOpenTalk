import {StyleSheet} from 'react-native';
import {Colors} from '../../config';

// const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    height: 7,
    borderRadius: 50,
    backgroundColor: Colors.white,
  },
  border: {
    borderWidth: 1,
    marginHorizontal: 5,
    borderColor: Colors.white,
    height: 7,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.white,
    marginBottom: 4,
    marginRight: 5,
  },
});

export default styles;
