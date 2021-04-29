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
import {listUserFollow} from '../../utils/graphql/query';
import Loader from '../../components/loader';
import storage from '../../utils/storage';
import {followUser} from '../../utils/graphql/mutations';

const FollowFriends = ({navigation}) => {
  const [data, setData] = useState(null);
  const [following, setFollowing] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const {items} = await listUserFollow();
      setData(items);
    };
    fetch();
    return () => {};
  }, []);

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

  const saveFollowing = () => {
    if (following.length > 0) {
      setLoad(true);
      following.forEach(async id => {
        followUser(id);
      });
      setTimeout(() => {
        setLoad(false);
      }, 2000);
    }

    navigation.navigate('Home');
    storage.setonBoardComplete(true);
  };

  return (
    <View style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Title
            label={labels.followFriendsText}
            style={styles.lgText}
            black
            large
            bold
          />
        </View>
        <View style={styles.inputContainer}>
          <SelectFollows data={data} onPress={handleFollow} />
        </View>
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
      </View>
      {load && <Loader />}
    </View>
  );
};
FollowFriends.propTypes = {};

export default FollowFriends;
