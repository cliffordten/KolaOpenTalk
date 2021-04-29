import React from 'react';
import {FlatList as RNFlatList, View} from 'react-native';
import Loader from '../loader';

const FlatList = ({onEndReached, loadMore, onRefresh, reload, ...props}) => {
  return (
    <RNFlatList
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      {...props}
      ListFooterComponent={() =>
        loadMore ? <Loader nofloat small /> : <View />
      }
      onRefresh={onRefresh}
      refreshing={reload}
    />
  );
};

export default FlatList;
