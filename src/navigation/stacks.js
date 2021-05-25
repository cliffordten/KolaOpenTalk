import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Header from '../views/header';
import Home from '../screens/home';
import Search from '../screens/search';
import Notification from '../screens/notification';
import Message from '../screens/message';
import labels from '../assets/labels';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: ({scene}) => {
          return <Header scene={scene} isHome />;
        },
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        options={{
          headerTitle: labels.navTitle.home,
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
          return <Header scene={scene} isHome isSearch />;
        },
      }}
      initialRouteName="Search">
      <Stack.Screen
        name="Search"
        options={{
          headerTitle: labels.navTitle.search,
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
          return <Header scene={scene} isHome />;
        },
      }}
      initialRouteName="Notification">
      <Stack.Screen
        name="Notification"
        options={{
          headerTitle: labels.navTitle.notification,
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
          return <Header scene={scene} isHome />;
        },
      }}
      initialRouteName="Message">
      <Stack.Screen
        name="Message"
        options={{
          headerTitle: labels.navTitle.message,
        }}
        component={Message}
      />
    </Stack.Navigator>
  );
};
