import React from 'react';
import PropTypes from 'prop-types';
import {View, SafeAreaView} from 'react-native';
import Header from '../header';

const AppLayout = ({children}) => {
  return (
    <SafeAreaView>
      <Header />
      <View>{children}</View>
    </SafeAreaView>
  );
};

AppLayout.propTypes = {};

export default AppLayout;
