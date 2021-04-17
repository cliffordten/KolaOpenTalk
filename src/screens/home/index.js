import React from 'react';
// import PropTypes from 'prop-types';
import {View} from 'react-native';
import Posts from '../../views/posts';
import styles from './styles';

const Home = ({...rest}) => {
  return (
    <View style={styles.safeAreaView}>
      <Posts {...rest} />
    </View>
  );
};
Home.propTypes = {};

export default Home;
