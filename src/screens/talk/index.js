import React, {useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
import {View} from 'react-native';
import PostTalk from '../../views/postTalk';
import styles from './styles';
import {getClickedPost, createUComment} from '../../utils/graphql/mutations';
import {listComments} from '../../utils/graphql/query';
import {showShortToast} from '../../utils/methods';

const Talk = ({route, ...rest}) => {
  const id = route?.params?._id;

  const [data, setData] = useState([]);
  const [next, setNext] = useState(null);
  const [load, setLoad] = useState(false);
  const [post, setPost] = useState(null);
  // const result = useSubCreatePost();
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      if (id) {
        const result = await getClickedPost(id);
        setPost(result);
      }
    };
    const fetchComments = async () => {
      const {items, nextToken} = await listComments(id);
      setData(items);
      setNext(nextToken);
    };
    fetchComments();
    fetch();
    return () => {};
  }, [id]);

  const loadMore = async () => {
    if (next) {
      setLoad(true);
      const {items, nextToken} = await listComments(next);
      setData([...data, ...items]);
      setNext(nextToken);
      setLoad(false);
    } else {
      showShortToast('End of list');
    }
  };

  const onRefresh = async () => {
    setReload(true);
    const {items, nextToken} = await listComments();
    setData(items);
    setNext(nextToken);
    setReload(false);
  };

  const createUserComment = async (value, imageUrl, blob, time) => {
    if (value) {
      setLoad(true);
      const res = await createUComment(value, imageUrl, blob, time, id);
      if (res) {
        setData(prev => [res, ...prev]);
        setTimeout(() => {
          setLoad(false);
        }, 1000);
      }
      return true;
    } else {
      showShortToast('Make sure you selected a category and written something');
    }
  };

  return (
    <View style={styles.safeAreaView}>
      {post && (
        <PostTalk
          {...rest}
          post={post}
          data={data}
          createUserComment={createUserComment}
        />
      )}
    </View>
  );
};
Talk.propTypes = {};

export default Talk;
