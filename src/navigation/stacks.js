import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Header from '../views/header';
import Home from '../screens/home';
import Search from '../screens/search';
import Notification from '../screens/notification';
import Message from '../screens/message';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: ({scene}) => {
          return <Header scene={scene} showMenu showTitle />;
        },
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        options={{
          headerTitle: 'Home',
        }}
        component={Home}
      />
    </Stack.Navigator>
  );
};

export const SearchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: ({scene}) => {
          return <Header scene={scene} showMenu showTitle />;
        },
      }}
      initialRouteName="Search">
      <Stack.Screen
        name="Search"
        options={{
          headerTitle: 'Search',
        }}
        component={Search}
      />
    </Stack.Navigator>
  );
};

export const NotificationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: ({scene}) => {
          return <Header scene={scene} showMenu showTitle />;
        },
      }}
      initialRouteName="Notification">
      <Stack.Screen
        name="Notification"
        options={{
          headerTitle: 'Notification',
        }}
        component={Notification}
      />
    </Stack.Navigator>
  );
};

export const MessageStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: ({scene}) => {
          return <Header scene={scene} showMenu showTitle />;
        },
      }}
      initialRouteName="Message">
      <Stack.Screen
        name="Message"
        options={{
          headerTitle: 'Message',
        }}
        component={Message}
      />
    </Stack.Navigator>
  );
};
