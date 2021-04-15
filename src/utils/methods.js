import {ToastAndroid} from 'react-native';

export const showShortToast = message => {
  ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM,
    25,
    50,
  );
};

export const showLongToast = message => {
  ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50,
  );
};
