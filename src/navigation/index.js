import React from 'react';
// import PropTypes from 'prop-types';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Onboard from '../screens/onboard';
import Login from '../screens/login';
import AccountOnBoarding from '../screens/accountOnbording';
import TabNav from './tab/tab';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Onboard">
        <Stack.Screen name="Onboard" component={Onboard} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="AccountOnboarding" component={AccountOnBoarding} />
        <Stack.Screen name="Home" component={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
AppNavigation.propTypes = {};

export default AppNavigation;
