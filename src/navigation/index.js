import React from 'react';
// import PropTypes from 'prop-types';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Onboard from '../screens/onboard';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
AppNavigation.propTypes = {};

export default AppNavigation;
