import {StyleSheet} from 'react-native';

// const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  flatBtn: {
    alignSelf: 'flex-end',
  },
  container: {
    justifyContent: 'center',
  },
  logoContainer: {
    marginVertical: 15,
    marginBottom: 20,
  },
});

export default styles;
