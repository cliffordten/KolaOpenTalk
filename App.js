import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {
  Keyboard,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Colors} from './src/config';
import AppNavigation from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 500);
    return () => {};
  }, []);
  return (
    <Provider store={store}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaProvider>
          <View style={styles.appBackground}>
            <StatusBar barStyle="default" backgroundColor={Colors.primary} />
            <AppNavigation />
          </View>
        </SafeAreaProvider>
      </TouchableWithoutFeedback>
    </Provider>
  );
};

const styles = StyleSheet.create({
  appBackground: {
    backgroundColor: Colors.white,
    flex: 1,
    width,
  },
});

export default App;
