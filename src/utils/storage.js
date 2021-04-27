import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Sentry from '@sentry/react-native';

class Storage {
  signedUp = false;

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
  }

  readUserSignedup = () => this.signedUp;

  setUserSignedup = value => {
    try {
      AsyncStorage.setItem('signedUp', JSON.stringify(value)).then(() => {
        this.signedUp = value;
      });
    } catch (e) {
      Sentry.captureException(e);
    }
  };
}

export default new Storage();
