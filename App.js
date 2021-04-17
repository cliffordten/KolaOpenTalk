import 'react-native-gesture-handler';
import React from 'react';
import {
  Keyboard,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {Colors} from './src/config';
import AppNavigation from './src/navigation';

const App = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.appBackground}>
        <StatusBar barStyle="default" backgroundColor={Colors.primary} />
        <AppNavigation />
      </SafeAreaView>
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
