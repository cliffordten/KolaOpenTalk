import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './customDrawer';
import {useWindowDimensions} from 'react-native';
import TabNav from '../tab';
const Drawer = createDrawerNavigator();

const SideBar = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      initialRouteName="Tab"
      drawerContent={props => <CustomDrawer {...props} />}
      drawerStyle={{
        width: width * 0.75,
      }}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Tab" component={TabNav} />
    </Drawer.Navigator>
  );
};

export default SideBar;
