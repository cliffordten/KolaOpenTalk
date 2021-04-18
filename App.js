import 'react-native-gesture-handler';
import React from 'react';
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
