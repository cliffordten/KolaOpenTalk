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

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 2000);
    return () => {};
  }, []);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaProvider>
        <View style={styles.appBackground}>
          <StatusBar barStyle="default" backgroundColor={Colors.primary} />
          <AppNavigation />
        </View>
      </SafeAreaProvider>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  appBackground: {
    backgroundColor: Colors.white,
    flex: 1,
  },
});

export default App;
