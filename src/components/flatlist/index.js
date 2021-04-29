import React from 'react';
import {FlatList as RNFlatList, View} from 'react-native';
import Loader from '../loader';

const FlatList = ({onEndReached, loadMore, ...props}) => {
  return (
    <RNFlatList
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      {...props}
      ListFooterComponent={() =>
        loadMore ? <Loader nofloat small /> : <View />
      }
    />
  );
};

export default FlatList;
