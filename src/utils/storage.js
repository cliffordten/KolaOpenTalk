import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Sentry from '@sentry/react-native';

class Storage {
  signedUp = false;
  userId = null;
  onBoardComplete = false;

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

    func();
    func1();
    func2();
  }

  readUserSignedup = () => this.signedUp;
  readUserId = () => this.userId;
  readonBoardComplete = () => this.onBoardComplete;

  setonBoardComplete = value => {
    setItemFromStorage('onBoardComplete', JSON.stringify(value));
    this.signedUp = value;
  };

  setUserSignedup = value => {
    setItemFromStorage('signedUp', JSON.stringify(value));
    this.signedUp = value;
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
