import React from 'react';
// import PropTypes from 'prop-types';
import {View} from 'react-native';
import labels from '../../assets/labels';
import Button from '../../components/button';
import Icon from '../../components/icon';
import Title from '../../components/title';
import {Colors} from '../../config';
import SelectFollows from '../../views/selectFollows';
import styles from './styles';

const FollowFriends = ({navigation}) => {
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
          <SelectFollows />
        </View>
        <View style={styles.confirm}>
          <Button
            label={labels.nextStep}
            color={'secondary'}
            onPress={() => navigation.navigate('Home')}
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
    </View>
  );
};
FollowFriends.propTypes = {};

export default FollowFriends;
