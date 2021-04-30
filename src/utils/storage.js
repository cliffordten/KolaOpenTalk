import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Sentry from '@sentry/react-native';

class Storage {
  signedUp = false;
  userId = null;
  onBoardComplete = false;
  isLogedOut = false;

  constructor() {
    const func = async () => {
      const val = await getItemFromStorage('signedUp');

      if (val) {
        this.signedUp = JSON.parse(val);
      }
    };

    const func1 = async () => {
      const val = await getItemFromStorage('userId');

      if (val) {
        this.userId = JSON.parse(val);
      }
    };

    const func2 = async () => {
      const val = await getItemFromStorage('onBoardComplete');

      if (val) {
        this.onBoardComplete = JSON.parse(val);
      }
    };

    const func3 = async () => {
      const val = await getItemFromStorage('isLogedOut');

      if (val) {
        this.isLogedOut = JSON.parse(val);
      }
    };

    func();
    func1();
    func2();
    func3();
  }

  readUserisLogedOut = () => this.isLogedOut;
  readUserSignedup = () => this.signedUp;
  readUserId = () => this.userId;
  readonBoardComplete = () => this.onBoardComplete;

  setonBoardComplete = value => {
    setItemFromStorage('onBoardComplete', JSON.stringify(value));
    this.onBoardComplete = value;
  };

  setUserSignedup = value => {
    setItemFromStorage('signedUp', JSON.stringify(value));
    this.signedUp = value;
  };

  setUserisLogedOut = value => {
    setItemFromStorage('isLogedOut', JSON.stringify(value));
    this.isLogedOut = value;
  };

  setUserId = value => {
    setItemFromStorage('userId', JSON.stringify(value));
    this.userId = value;
  };
}

const getItemFromStorage = async key => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    Sentry.captureException(e);
  }
};

const setItemFromStorage = async (key, val) => {
  try {
    return await AsyncStorage.setItem(key, val);
  } catch (e) {
    Sentry.captureException(e);
  }
};

export default new Storage();
