import React from 'react';
import {Image} from 'react-native';

const Logo = ({style}) => {
  return <Image style={style} source={require('../../assets/img/logo.png')} />;
};

export default Logo;
