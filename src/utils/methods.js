import {ToastAndroid, Platform, AlertIOS} from 'react-native';

export const showShortToast = message => {
  if (Platform.OS === 'android') {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  } else {
    AlertIOS.alert(message);
  }
};

export const showLongToast = message => {
  if (Platform.OS === 'android') {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  } else {
    AlertIOS.alert(message);
  }
};
