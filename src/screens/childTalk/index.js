import React, {useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
import {View} from 'react-native';
import CommentTalk from '../../views/commentTalk';
import styles from './styles';
import {showShortToast} from '../../utils/methods';
import Loader from '../../components/loader';
import {
  createComment,
  getClickedComment,
  getComments,
} from '../../redux/actions/comment';
import {useSelector, useDispatch} from 'react-redux';

const ChildTalk = ({route, ...rest}) => {
  const {parentComentId, postId} = route?.params;
  const [loading, setLoading] = useState(true);
  const [next, setNext] = useState(0);
  const [loads, setLoad] = useState(false);
  const {cickedComment, loading: load, childComments, isNext} = useSelector(
    state => state.comment,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    if (parentComentId) {
      dispatch(getClickedComment(parentComentId));
      dispatch(getComments(null, parentComentId));
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      setLoading(false);
    };
  }, [dispatch, parentComentId]);

  const createUserComment = async (value, imageUrl, blob, time) => {
    if (value) {
      setLoading(true);
      createComment(value, imageUrl, blob, time, postId, parentComentId);
      if (!load) {
        setTimeout(() => {
          setLoading(false);
          showShortToast('Comment Added');
        }, 500);
      }
      setLoading(false);
      return true;
    } else {
      showShortToast('Please write something');
    }
  };

  const loadMore = async () => {
    if (childComments?.length > 10) {
      if (isNext) {
        setLoad(true);
        dispatch(getComments(null, parentComentId, next));
        setNext(next + 1);
        setTimeout(() => {
          setLoad(false);
        }, 500);
      } else {
        setNext(0);
        showShortToast('End of list');
      }
    }
  };

  return (
    <View style={styles.safeAreaView}>
      {loading || load ? (
        <Loader />
      ) : (
        cickedComment && (
          <CommentTalk
            {...rest}
            comment={cickedComment}
            data={childComments}
            loadMore={loadMore}
            load={loads}
            createUserComment={createUserComment}
          />
        )
      )}
    </View>
  );
};
ChildTalk.propTypes = {};

export default ChildTalk;
