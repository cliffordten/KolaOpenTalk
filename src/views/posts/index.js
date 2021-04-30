import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Ripple from 'react-native-material-ripple';
import Button from '../../components/button';
import Icon from '../../components/icon';
import Text from '../../components/text';
import {Colors} from '../../config';
import styles from './styles';
import FlatList from '../../components/flatlist';
import {getFomatedTime} from '../../utils/methods';

const RenderPost = ({
  id,
  onPress,
  nComments,
  nLikes,
  time,
  navigation,
  isLiked,
  postImage,
  desc,
  user,
}) => {
  const [isCommentLiked, setIsCommentLiked] = useState(isLiked || false);
  const [nPostLikes, setNPostLikes] = useState(nLikes || 0);

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
            label={nComments}
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
            label={nPostLikes}
            flat="placeholder"
            onPress={() => {
              setIsCommentLiked(!isCommentLiked);
              !isCommentLiked
                ? setNPostLikes(nPostLikes + 1)
                : setNPostLikes(nPostLikes - 1);
            }}
            style={styles.flatBtn}
            textStyles={styles.textBtn}
            icon={
              <Icon
                name={!isCommentLiked ? 'thumb-up-outline' : 'thumb-up'}
                color={!isCommentLiked ? Colors.placeholder : Colors.secondary}
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
}) => {
  return (
    <View style={styles.flatContainer}>
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
