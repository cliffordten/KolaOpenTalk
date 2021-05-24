import React, {useCallback, useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
import {View} from 'react-native';
import Posts from '../../views/posts';
import styles from './styles';
import {showShortToast} from '../../utils/methods';
import {subscribeCreatePost} from '../../utils/graphql/subscriptions';
import Loader from '../../components/loader';
import {useSelector, useDispatch} from 'react-redux';
import {getPosts} from '../../redux/actions/post';

const Home = ({...rest}) => {
  const [next, setNext] = useState(0);
  const [load, setLoad] = useState(false);
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(false);
  const {posts, isNext} = useSelector(state => state.post);
  const dispatch = useDispatch();

  const subscribe = useCallback(() => {
    const subscribtion = subscribeCreatePost().subscribe({
      next: ({
        value: {
          data: {onCreatePost: post},
        },
      }) => {
        // setData(prev => [post, ...prev]);
        console.log(post);
      },
    });
    return () => {
      subscribtion.unsubscribe();
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    dispatch(getPosts());
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    subscribe();
    return () => {};
  }, [dispatch, subscribe]);

  const loadMore = async () => {
    if (isNext) {
      setLoad(true);
      dispatch(getPosts(next));
      setNext(next + 1);
      setTimeout(() => {
        setLoad(false);
      }, 500);
    } else {
      setNext(0);
      showShortToast('End of list');
    }
  };

  const onRefresh = async () => {
    setReload(true);
    dispatch(getPosts());
    setTimeout(() => {
      setLoad(false);
    }, 500);
  };

  return (
    <View style={styles.safeAreaView}>
      <Posts
        {...rest}
        data={posts}
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
