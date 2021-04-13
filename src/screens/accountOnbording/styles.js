import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  onboardingItem: {
    width,
    flex: 1,
  },
  listContainer: {
    flex: 3,
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    maxHeight: height * 0.24,
    borderBottomRightRadius: 15,
  },
  flatBtn: {
    alignSelf: 'flex-end',
    marginVertical: 5,
  },
  logoContainer: {
    marginVertical: 20,
  },
});

export default styles;
