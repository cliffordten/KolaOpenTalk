import React from 'react';
// import PropTypes from 'prop-types';
import {View} from 'react-native';
import PostTalk from '../../views/postTalk';
import styles from './styles';

const Talk = ({...rest}) => {
  return (
    <View style={styles.safeAreaView}>
      <PostTalk {...rest} />
    </View>
  );
};
Talk.propTypes = {};

export default Talk;
