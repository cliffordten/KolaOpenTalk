import React, {useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
import {View} from 'react-native';
import Posts from '../../views/posts';
import styles from './styles';
import {listAllPosts} from '../../utils/graphql/query';
import {showShortToast} from '../../utils/methods';
import {useSubCreatePost} from '../../utils/graphql/subscriptions';

const Home = ({...rest}) => {
  const [data, setData] = useState([]);
  const [next, setNext] = useState(null);
  const [load, setLoad] = useState(false);
  // const result = useSubCreatePost();
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const {items, nextToken} = await listAllPosts();
      setData(items);
      setNext(nextToken);
    };
    fetch();
    // if (result) {
    //   console.log(result);
    // }
    return () => {};
  }, []);

  const loadMore = async () => {
    if (next) {
      setLoad(true);
      const {items, nextToken} = await listAllPosts(next);
      setData([...data, ...items]);
      setNext(nextToken);
      setLoad(false);
    } else {
      showShortToast('End of list');
    }
  };

  const onRefresh = async () => {
    setReload(true);
    const {items, nextToken} = await listAllPosts();
    setData(items);
    setNext(nextToken);
    setReload(false);
  };

  console.log('rendering');

  return (
    <View style={styles.safeAreaView}>
      <Posts
        {...rest}
        data={data}
        loadMore={loadMore}
        load={load}
        onRefresh={onRefresh}
        reload={reload}
      />
    </View>
  );
};
Home.propTypes = {};

export default Home;
