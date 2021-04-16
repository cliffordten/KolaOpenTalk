import React from 'react';
// import PropTypes from 'prop-types';
import {View} from 'react-native';
import Title from '../../components/title';
import styles from './styles';

const Search = () => {
  return (
    <View style={styles.safeAreaView}>
      <Title label={'Search'} style={styles.lgText} black large bold />
    </View>
  );
};
Search.propTypes = {};

export default Search;
