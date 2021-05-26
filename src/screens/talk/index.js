import React, {useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
import {View} from 'react-native';
import PostTalk from '../../views/postTalk';
import styles from './styles';
import {showShortToast} from '../../utils/methods';
import Loader from '../../components/loader';
import {useSelector, useDispatch} from 'react-redux';
import {getClickedPost} from '../../redux/actions/post';
import {createComment, getComments} from '../../redux/actions/comment';

const Talk = ({route, ...rest}) => {
  const id = route?.params?._id;
  const [next, setNext] = useState(0);
  const [loads, setLoad] = useState(false);
  const [loading, setLoading] = useState(true);
  const {cickedPost} = useSelector(state => state.post);
  const {comments, loading: load, isNext} = useSelector(state => state.comment);
  const dispatch = useDispatch();
  const [cLoad, setCLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (id) {
      dispatch(getClickedPost(id));
      dispatch(getComments(id));
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      setLoading(false);
    };
  }, [dispatch, id]);

  const createUserComment = async (value, imageUrl, blob, time) => {
    if (value) {
      setCLoading(true);
      dispatch(createComment(value, imageUrl, blob, time, id));
      setTimeout(() => {
        setCLoading(false);
        showShortToast('Comment Added');
      }, 500);
      return true;
    } else {
      showShortToast('Please write something');
    }
  };

  const loadMore = async () => {
    if (comments?.length > 10) {
      if (isNext) {
        setLoad(true);
        dispatch(getComments(id, null, next));
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
      {cLoad && <Loader />}
      {loading || load ? (
        <Loader />
      ) : (
        cickedPost && (
          <PostTalk
            {...rest}
            post={cickedPost}
            loadMore={loadMore}
            load={loads}
            data={comments}
            createUserComment={createUserComment}
          />
        )
      )}
    </View>
  );
};
Talk.propTypes = {};

export default Talk;
