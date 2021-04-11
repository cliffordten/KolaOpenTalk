import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Colors} from './src/config';
import AppNavigation from './src/navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.appBackground}>
      <StatusBar barStyle="default" backgroundColor={Colors.primary} />
      <AppNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appBackground: {
    backgroundColor: Colors.white,
    flex: 1,
  },
});

export default App;
