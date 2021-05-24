import React, {useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
import {View} from 'react-native';
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
import {saveUserFollowing} from '../../redux/actions/follow';

const FollowFriends = ({navigation, external}) => {
  const [following, setFollowing] = useState([]);
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();
  const {userList} = useSelector(state => state.user);

  useEffect(() => {
    dispatch(setUserList());
  }, [dispatch]);

  const handleFollow = (userId, isFollow) => {
    if (userId) {
      if (isFollow) {
        setFollowing([...following, userId]);
      } else {
        const filter = following.filter(id => userId !== id);
        setFollowing(filter);
      }
    }
  };

  const handleBlackList = async userId => {
    if (userId) {
      dispatch(blackListUser(userId, userList));
    }
  };

  const saveFollowing = () => {
    if (following.length > 0) {
      setLoad(true);
      dispatch(saveUserFollowing(following));
      setTimeout(() => {
        setLoad(false);
        navigation.replace('Home');
        storage.setonBoardComplete(true);
      }, 500);
    }
  };

  return (
    <View style={styles.safeAreaView}>
      <View style={styles.container}>
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
            data={userList}
            onPress={handleFollow}
            blackList={handleBlackList}
          />
        </View>
        {!external && (
          <View style={styles.confirm}>
            <Button
              label={labels.nextStep}
              color={'secondary'}
              onPress={saveFollowing}
              icon={
                <Icon
                  name="greater-than"
                  color={Colors.white}
                  style={styles.icon}
                  family={'MaterialCommunityIcons'}
                />
              }
              style={styles.btn}
            />
          </View>
        )}
      </View>
      {load && <Loader />}
    </View>
  );
};
FollowFriends.propTypes = {};

export default FollowFriends;
