import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../../config';

const Icon = ({family, name, color, size, ...rest}) => {
  switch (family) {
    case 'MaterialCommunityIcons':
      return (
        <MaterialCommunityIcons
          name={name}
          size={size || 18}
          color={color || Colors.secondary}
          {...rest}
        />
      );
    case 'Entypo':
      return (
        <Entypo
          name={name}
          size={size || 18}
          color={color || Colors.secondary}
          {...rest}
        />
      );

    default:
      break;
  }
};

export default Icon;
