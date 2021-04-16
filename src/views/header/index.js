import React from 'react';
// import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import LinearGradient from '../gradient';

const Header = props => {
  return (
    <LinearGradient>
      <Text>app bar</Text>
    </LinearGradient>
  );
};

Header.propTypes = {};

export default Header;
