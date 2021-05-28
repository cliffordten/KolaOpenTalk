import React, {useCallback, useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
import {View, BackHandler, Alert} from 'react-native';
import labels from '../../assets/labels';
import Button from '../../components/button';
import Icon from '../../components/icon';
import Title from '../../components/title';
import {Colors} from '../../config';
import SelectFollows from '../../views/selectFollows';
import styles from './styles';
import Loader from '../../components/loader';
import storage from '../../utils/storage';
import {useDispatch, useSelector} from 'react-redux';
import {setUserList, blackListUser} from '../../redux/actions/user';
import {saveUserFollowing, saveUserUnFollow} from '../../redux/actions/follow';
import {showShortToast} from '../../utils/methods';

const FollowFriends = ({navigation, external}) => {
  const [following, setFollowing] = useState([]);
  const [unFollowing, setUnFollowing] = useState([]);
  const dispatch = useDispatch();
  const {userList, userSearch, searching} = useSelector(state => state.user);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    dispatch(setUserList());
    setTimeout(() => {
      setLoad(false);
    }, 500);
  }, [dispatch]);

  const handleFollow = (userId, isFollow) => {
    if (userId) {
      if (isFollow) {
        setFollowing([...following, userId]);
        const filter = unFollowing.filter(id => userId !== id);
        setUnFollowing(filter);
      } else {
        setUnFollowing([...unFollowing, userId]);
        const filter = following.filter(id => userId !== id);
        setFollowing(filter);
      }
    }
  };

  const handleBackButton = useCallback(() => {
    if (following.length > 0 || unFollowing.length > 0) {
      Alert.alert('Do you want to exit?', 'Your changes will not be saved!', [
        {
          text: 'Cancel',
          onPress: () => true,
          style: 'cancel',
        },
        {text: 'OK', onPress: () => navigation.goBack()},
      ]);
      return true;
    }
  }, [following.length, navigation, unFollowing.length]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [dispatch, handleBackButton]);

  const handleBlackList = async userId => {
    if (userId) {
      dispatch(blackListUser(userId, userList));
    }
  };

  const saveFollowing = () => {
    if (following.length > 0 || unFollowing.length > 0) {
      setLoad(true);
      if (following.length > 0) {
        dispatch(saveUserFollowing(following));
      }
      if (unFollowing.length > 0) {
        dispatch(saveUserUnFollow(unFollowing));
      }

      setTimeout(() => {
        setLoad(false);
        if (external) {
          showShortToast('updated following info');
          setFollowing([]);
          setUnFollowing([]);
        } else {
          navigation.replace('Home');
          storage.setonBoardComplete(true);
          setFollowing([]);
          setUnFollowing([]);
        }
      }, 500);
    }
  };

  return (
    <View style={styles.safeAreaView}>
      <View style={external ? styles.containerExternal : styles.container}>
        <View style={styles.textContainer}>
          {!external && (
            <Title
              label={labels.followFriendsText}
              style={styles.lgText}
              black
              large
              bold
            />
          )}
        </View>
        <View style={styles.inputContainer}>
          <SelectFollows
            data={userSearch.length > 0 ? userSearch : userList}
            onPress={handleFollow}
            blackList={handleBlackList}
          />
        </View>

        <View style={styles.confirm}>
          <Button
            label={external ? labels.save : labels.nextStep}
            color={'secondary'}
            onPress={saveFollowing}
            icon={
              !external && (
                <Icon
                  name="greater-than"
                  color={Colors.white}
                  style={styles.icon}
                  family={'MaterialCommunityIcons'}
                />
              )
            }
            style={styles.btn}
          />
        </View>
      </View>
      {load && <Loader />}
      {searching && <Loader />}
    </View>
  );
};
FollowFriends.propTypes = {};

export default FollowFriends;
