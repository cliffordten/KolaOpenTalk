import {ToastAndroid, Platform, AlertIOS} from 'react-native';
import awsmobile from '../aws-exports';
import {RNS3} from 'react-native-aws3';

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

export const uploadImage = async (folder, uri, name, type) => {
  const file = {
    uri,
    name,
    type,
  };

  const options = {
    keyPrefix: folder,
    bucket: awsmobile.aws_user_files_s3_bucket,
    region: awsmobile.aws_user_files_s3_bucket_region,
    accessKey: awsmobile.aws_user_acesskey,
    secretKey: awsmobile.aws_user_secretekey,
    successActionStatus: 201,
  };
  return RNS3.put(file, options);
};
