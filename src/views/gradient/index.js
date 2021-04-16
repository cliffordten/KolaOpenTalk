import React from 'react';

import PropTypes from 'prop-types';
import {Dimensions} from 'react-native';
import RNLinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../config';

const {height: deviceHeight} = Dimensions.get('window');

const LinearGradient = ({children, height, ...rest}) => {
  return (
    <RNLinearGradient colors={[Colors.primary, Colors.secondary]} {...rest}>
      {children}
    </RNLinearGradient>
  );
};

LinearGradient.propTypes = {
  height: PropTypes.number,
};
LinearGradient.defaultProps = {
  height: deviceHeight,
};
export default LinearGradient;
