import React, {useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
import {View} from 'react-native';
import PostTalk from '../../views/postTalk';
import styles from './styles';
import {createUComment} from '../../utils/graphql/mutations';
import {listPostComments, getClickedPost} from '../../utils/graphql/query';
import {showShortToast} from '../../utils/methods';
import Loader from '../../components/loader';

const Talk = ({route, ...rest}) => {
  const id = route?.params?._id;

  const [data, setData] = useState([{}]);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  // const result = useSubCreatePost();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      if (id) {
        const result = await getClickedPost(id);
        setPost(result);
      }
      setLoading(false);
    };
    const fetchComments = async () => {
      setLoading(true);
      const {items} = await listPostComments(id);
      setData(items);
      setLoading(false);
    };
    fetchComments();
    fetch();
    return () => {
      setLoading(false);
    };
  }, [id]);

  const createUserComment = async (value, imageUrl, blob, time) => {
    if (value) {
      setLoading(true);
      const res = await createUComment(value, imageUrl, blob, time, id);
      if (res) {
        setData(prev => [res, ...prev]);
        setLoading(false);
        showShortToast('Comment Added');
      }
      setLoading(false);
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
      {loading && <Loader />}
    </View>
  );
};
Talk.propTypes = {};

export default Talk;
