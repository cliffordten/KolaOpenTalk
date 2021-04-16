import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
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
    case 'FontAwesome5':
      return (
        <FontAwesome5
          name={name}
          size={size || 18}
          color={color || Colors.secondary}
          {...rest}
        />
      );
    case 'Feather':
      return (
        <Feather
          name={name}
          size={size || 18}
          color={color || Colors.secondary}
          {...rest}
        />
      );

    case 'FontAwesome':
      return (
        <FontAwesome
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
