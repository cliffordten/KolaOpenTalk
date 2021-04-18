import React from 'react';
// import PropTypes from 'prop-types';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Onboard from '../screens/onboard';
import Login from '../screens/login';
import AccountOnBoarding from '../screens/accountOnbording';
import SideBar from './sideBar';
import Talk from '../screens/talk';
import Header from '../views/header';
import labels from '../assets/labels';
import CreatePost from '../screens/createPost';

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
        <Stack.Screen
          name="CreatePost"
          component={CreatePost}
          options={{
            headerShown: true,
            header: ({scene}) => {
              return <Header scene={scene} noImage />;
            },
            headerTitle: labels.navTitle.createPost,
          }}
        />
        <Stack.Screen
          name="PostTalk"
          component={Talk}
          options={{
            headerShown: true,
            header: ({scene}) => {
              return <Header scene={scene} noImage />;
            },
            headerTitle: labels.navTitle.talk,
          }}
        />
        <Stack.Screen name="Home" component={SideBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
AppNavigation.propTypes = {};

export default AppNavigation;
