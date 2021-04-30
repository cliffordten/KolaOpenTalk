import React, {useEffect, useState} from 'react';

import PropTypes from 'prop-types';
import {Dimensions} from 'react-native';
import {ScrollView as RNScrollView} from 'react-native-gesture-handler';

const {height: deviceHeight} = Dimensions.get('window');

const ScrollView = ({children, height, style, ...rest}) => {
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const [screenHeight, setScreenHeight] = useState(height);

  useEffect(() => {
    setScrollEnabled(contentHeight - 200 > screenHeight);

    const _handleDimensionChange = e => {
      const {height: H} = e.window;
      setScreenHeight(H);
    };

    Dimensions.addEventListener('change', _handleDimensionChange);

    return () => {
      Dimensions.removeEventListener('change', _handleDimensionChange);
    };
  }, [contentHeight, screenHeight]);

  const onContentSizeChange = (contentWidth, cHeight) => {
    setContentHeight(cHeight);
  };

  return (
    <RNScrollView
      style={style}
      scrollEnabled={scrollEnabled}
      onContentSizeChange={onContentSizeChange}
      {...rest}>
      {children}
    </RNScrollView>
  );
};

ScrollView.propTypes = {
  height: PropTypes.number,
};
ScrollView.defaultProps = {
  height: deviceHeight,
};
export default ScrollView;
