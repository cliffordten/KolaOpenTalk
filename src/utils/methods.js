import {ToastAndroid, Platform, AlertIOS} from 'react-native';
import awsmobile from '../aws-exports';
import {RNS3} from 'react-native-aws3';
import moment from 'moment';

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

  const response = await RNS3.put(file, options);

  const {
    status,
    body: {
      postResponse: {location},
    },
  } = response;

  if (status !== 201) {
    console.log('Failed to upload image to S3', response);
  }

  return location;
};

export const getCurrentTime = () => {
  return moment().startOf(moment().format()).fromNow(true);
};

export const getFomatedTime = time => {
  return moment().startOf(time).fromNow(true);
};
