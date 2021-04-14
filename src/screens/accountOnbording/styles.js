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
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width,
    paddingHorizontal: 20,
  },
  flat: {
    margin: 0,
    padding: 0,
    marginLeft: 'auto',
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    marginVertical: 20,
  },
  icon: {
    marginLeft: 10,
  },
  text: {
    marginBottom: 4,
  },
});

export default styles;
