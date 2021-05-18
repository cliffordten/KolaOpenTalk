import React, {useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
import {View} from 'react-native';
import CommentTalk from '../../views/commentTalk';
import styles from './styles';
import {createUComment} from '../../utils/graphql/mutations';
import {listChildComments, getClickedComment} from '../../utils/graphql/query';
import {showShortToast} from '../../utils/methods';
import Loader from '../../components/loader';

const ChildTalk = ({route, ...rest}) => {
  const {id, parentComentId, postId} = route?.params;
  const [data, setData] = useState([{}]);
  const [comment, setComment] = useState(null);
  const [loading, setLoading] = useState(false);
  // const result = useSubCreatePost();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      if (id) {
        const result = await getClickedComment(id);
        setComment(result);
      }
      setLoading(false);
    };
    const fetchComments = async () => {
      setLoading(true);
      const {items} = await listChildComments(parentComentId);
      setData(items);
      setLoading(false);
    };
    fetchComments();
    fetch();
    return () => {
      setLoading(false);
    };
  }, [id, parentComentId]);

  const createUserComment = async (value, imageUrl, blob, time) => {
    if (value) {
      setLoading(true);
      const res = await createUComment(
        value,
        imageUrl,
        blob,
        time,
        postId,
        parentComentId,
      );
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
      {comment && (
        <CommentTalk
          {...rest}
          comment={comment}
          data={data}
          createUserComment={createUserComment}
        />
      )}
      {loading && <Loader />}
    </View>
  );
};
ChildTalk.propTypes = {};

export default ChildTalk;
