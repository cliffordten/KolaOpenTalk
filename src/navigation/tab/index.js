import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {Colors} from '../../config';
import styles from './styles';
import Icon from '../../components/icon';
import Header from '../../views/header';
import {
  HomeStack,
  MessageStack,
  NotificationStack,
  SearchStack,
} from '../stacks';
import LinearGradient from '../../views/gradient';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;
          let family;

          if (route.name === 'HomeStack') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          switch (route.name) {
            case 'HomeStack':
              iconName = 'house-user';
              family = 'FontAwesome5';
              break;

            case 'SearchStack':
              iconName = 'search';
              family = 'Feather';
              break;

            case 'NotificationStack':
              iconName = focused ? 'bell' : 'bell-o';
              family = 'FontAwesome';
              break;

            case 'MessageStack':
              iconName = focused ? 'envelope' : 'envelope-o';
              family = 'FontAwesome';
              break;

            default:
              break;
          }

          // You can return any component that you like here!
          return (
            <Icon
              name={iconName}
              size={22}
              color={color}
              family={family}
              style={styles.icon}
            />
          );
        },
      })}
      tabBar={props => {
        return (
          <LinearGradient style={styles.gradient}>
            <BottomTabBar {...props} style={styles.bottomNav} />
          </LinearGradient>
        );
      }}
      initialRouteName={'HomeStack'}
      tabBarOptions={{
        activeTintColor: Colors.white,
        inactiveTintColor: Colors.gray,
        showLabel: false,
        showIcon: true,
        style: styles.container,
        tabStyle: styles.tabStyle,
        iconStyle: styles.tabStyle,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: true,
          // headerTitle: t('search.label'),
          header: ({scene}) => {
            return <Header scene={scene} showBack showExpandedSearch />;
          },
        }}
      />
      <Tab.Screen name="SearchStack" component={SearchStack} />
      <Tab.Screen name="NotificationStack" component={NotificationStack} />
      <Tab.Screen name="MessageStack" component={MessageStack} />
    </Tab.Navigator>
  );
};

export default TabNav;
