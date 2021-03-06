import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Ripple from 'react-native-material-ripple';
import Button from '../../components/button';
import Icon from '../../components/icon';
import Text from '../../components/text';
import {Colors} from '../../config';
import styles from './styles';
import FlatList from '../../components/flatlist';
import {getFomatedTime} from '../../utils/methods';
import labels from '../../assets/labels';
import {getNComments} from '../../redux/actions/comment';
import {getLikeInfo, performLike} from '../../redux/actions/like';

const RenderPost = ({id, onPress, time, navigation, postImage, desc, user}) => {
  const [ncomments, setNcomments] = useState(0);

  const [isLike, setIsLike] = useState(false);
  const [nLikes, setnLikes] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      setIsLike((await getLikeInfo(id)).isLike);
      setnLikes((await getLikeInfo(id)).nLikes);
      setNcomments(await getNComments(id));
    };
    fetch();
    return () => {};
  }, [id]);

  const handlePress = _id => {
    if (onPress) {
      onPress(_id);
    }
    navigation.navigate('PostTalk', {_id});
  };

  return (
    <TouchableOpacity
      style={styles.postContainer}
      onPress={() => handlePress(id)}>
      <Image source={{uri: user?.picture}} style={styles.imageProfile} />
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text label={user?.name} style={styles.text} />
          <Text
            label={`@${user?.username?.toLowerCase()}`}
            style={[styles.text, styles.username]}
          />
        </View>
        <Text label={desc} style={styles.normal} lines={3} />
        {postImage && (
          <Image source={{uri: postImage}} style={styles.imagePost} />
        )}
        <View style={styles.btnContainer}>
          <Button
            label={ncomments}
            flat="placeholder"
            onPress={() => handlePress(id)}
            style={styles.flatBtn}
            textStyles={styles.textBtn}
            icon={
              <Icon
                name="commenting-o"
                color={Colors.placeholder}
                style={styles.icon}
                family={'FontAwesome'}
              />
            }
            left
          />
          <Button
            label={nLikes}
            flat="placeholder"
            onPress={() => {
              performLike(id, !isLike);
              setIsLike(!isLike);
              !isLike ? setnLikes(nLikes + 1) : setnLikes(nLikes - 1);
            }}
            style={styles.flatBtn}
            textStyles={styles.textBtn}
            icon={
              <Icon
                name={!isLike ? 'thumb-up-outline' : 'thumb-up'}
                color={!isLike ? Colors.placeholder : Colors.secondary}
                style={styles.icon}
                family={'MaterialCommunityIcons'}
              />
            }
            left
          />
          <Button
            label={getFomatedTime(time)}
            flat="placeholder"
            onPress={() => console.log('object')}
            style={[styles.flatBtn, styles.dot]}
            textStyles={[styles.textBtn, styles.time]}
            icon={
              <Icon
                name={'dot-single'}
                color={Colors.placeholder}
                style={[styles.icon]}
                family={'Entypo'}
              />
            }
            left
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Posts = ({
  onPress,
  navigation,
  data,
  loadMore,
  load,
  onRefresh,
  reload,
  loading,
}) => {
  return (
    <View style={styles.flatContainer}>
      {!loading && data.length >= 0 ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <RenderPost
              {...item}
              key={({id}) => id}
              onPress={onPress}
              navigation={navigation}
            />
          )}
          keyExtractor={item => item.id}
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={styles.pad}
          onEndReached={loadMore}
          loadMore={load}
          reload={reload}
          onRefresh={onRefresh}
        />
      ) : (
        <Text label={labels.loading} style={styles.normal} />
      )}
      <Ripple
        style={styles.floatingBtn}
        onPress={() => navigation.navigate('CreatePost')}>
        <Icon
          name={'plus'}
          color={Colors.white}
          style={styles.icon}
          size={26}
          family={'Entypo'}
        />
      </Ripple>
    </View>
  );
};

export default Posts;
