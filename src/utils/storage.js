import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Sentry from '@sentry/react-native';

class Storage {
  signedUp = false;
  userId = null;

  constructor() {
    AsyncStorage.getItem('signedUp')
      .then(value => {
        if (value) {
          this.signedUp = JSON.parse(value);
        }
      })
      .catch(e => {
        Sentry.captureException(e);
      });

    AsyncStorage.getItem('userId')
      .then(value => {
        if (value) {
          this.userId = JSON.parse(value);
        }
      })
      .catch(e => {
        Sentry.captureException(e);
      });
  }

  readUserSignedup = () => this.signedUp;
  readUserId = () => this.userId;

  setUserSignedup = value => {
    try {
      AsyncStorage.setItem('signedUp', JSON.stringify(value)).then(() => {
        this.signedUp = value;
      });
    } catch (e) {
      Sentry.captureException(e);
    }
  };

  setUserId = value => {
    try {
      AsyncStorage.setItem('userId', JSON.stringify(value)).then(() => {
        this.userId = value;
      });
    } catch (e) {
      Sentry.captureException(e);
    }
  };
}

export default new Storage();
