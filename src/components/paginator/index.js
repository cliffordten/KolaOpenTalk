import React from 'react';
import {Text, View, Animated, useWindowDimensions} from 'react-native';
import labels from '../../assets/labels';
import styles from './styles';

const Pagination = ({data, scrollX}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{labels.steps}</Text>
      {data.map(({key}, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [7, 14, 7],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View style={[styles.border, {width: dotWidth}]} key={key}>
            <Animated.View
              style={[styles.dot, {width: dotWidth, opacity}]}
              key={key}
            />
          </Animated.View>
        );
      })}
    </View>
  );
};

export default Pagination;
