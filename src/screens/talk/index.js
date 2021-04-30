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
  const [post, setPost] = useState(null);
  // const result = useSubCreatePost();

  useEffect(() => {
    const fetch = async () => {
      if (id) {
        const result = await getClickedPost(id);
        setPost(result);
      }
    };
    const fetchComments = async () => {
      const {items} = await listComments(id);
      setData(items);
    };
    fetchComments();
    fetch();
    return () => {};
  }, [id]);

  const createUserComment = async (value, imageUrl, blob, time) => {
    if (value) {
      const res = await createUComment(value, imageUrl, blob, time, id);
      if (res) {
        setData(prev => [res, ...prev]);
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
