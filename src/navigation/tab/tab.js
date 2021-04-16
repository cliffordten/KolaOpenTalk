import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home';
import Notification from '../../screens/notification';
import Search from '../../screens/search';
import Email from '../../screens/email';
import {Colors} from '../../config';
import styles from './styles';
import Icon from '../../components/icon';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;
          let family;

          if (route.name === 'HomeScreen') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          switch (route.name) {
            case 'HomeScreen':
              iconName = 'house-user';
              family = 'FontAwesome5';
              break;

            case 'Search':
              iconName = 'search';
              family = 'Feather';
              break;

            case 'Notification':
              iconName = focused ? 'bell' : 'bell-o';
              family = 'FontAwesome';
              break;

            case 'Email':
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
          <LinearGradient
            colors={[Colors.primary, Colors.secondary]}
            style={styles.gradient}>
            <BottomTabBar {...props} style={styles.bottomNav} />
          </LinearGradient>
        );
      }}
      tabBarOptions={{
        activeTintColor: Colors.white,
        inactiveTintColor: Colors.gray,
        showLabel: false,
        showIcon: true,
        style: styles.container,
        tabStyle: styles.tabStyle,
        iconStyle: styles.tabStyle,
      }}>
      <Tab.Screen name="HomeScreen" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Email" component={Email} />
    </Tab.Navigator>
  );
};

export default TabNav;
