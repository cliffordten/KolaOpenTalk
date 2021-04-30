import React, {useCallback, useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
import {View} from 'react-native';
import Posts from '../../views/posts';
import styles from './styles';
import {listAllPosts} from '../../utils/graphql/query';
import {showShortToast} from '../../utils/methods';
import {subscribeCreatePost} from '../../utils/graphql/subscriptions';
import Loader from '../../components/loader';

const Home = ({...rest}) => {
  const [data, setData] = useState([]);
  const [next, setNext] = useState(null);
  const [load, setLoad] = useState(false);
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(false);

  const subscribe = useCallback(() => {
    const subscribtion = subscribeCreatePost().subscribe({
      next: ({
        value: {
          data: {onCreatePost: post},
        },
      }) => {
        setData(prev => [post, ...prev]);
      },
    });
    return () => {
      subscribtion.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const {items, nextToken} = await listAllPosts();
      setData(items);
      setNext(nextToken);
      setLoading(false);
    };
    fetch();
    subscribe();
    return () => {};
  }, [subscribe]);

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
      {loading && <Loader />}
    </View>
  );
};
Home.propTypes = {};

export default Home;
