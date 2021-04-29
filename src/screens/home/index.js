import React, {useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
import {View} from 'react-native';
import Posts from '../../views/posts';
import styles from './styles';
import {listAllPosts} from '../../utils/graphql/query';
import {showShortToast} from '../../utils/methods';

const Home = ({...rest}) => {
  const [data, setData] = useState([]);
  const [next, setNext] = useState(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const {items, nextToken} = await listAllPosts();
      setData(items);
      setNext(nextToken);
    };
    fetch();
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

  return (
    <View style={styles.safeAreaView}>
      <Posts {...rest} data={data} loadMore={loadMore} load={load} />
    </View>
  );
};
Home.propTypes = {};

export default Home;
