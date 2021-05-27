import React, {useEffect, useState} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import Button from '../../components/button';
import Icon from '../../components/icon';
import Text from '../../components/text';
import {Colors} from '../../config';
import Keyboard from '../keyboard';
import styles from './styles';
import {getFomatedTime} from '../../utils/methods';
import Loader from '../../components/loader';
import {getNComments, getNChildComments} from '../../redux/actions/comment';
import {getLikeInfo, performLike} from '../../redux/actions/like';

const RenderPostTalk = ({
  user,
  time,
  navigation,
  commentImage,
  onPress,
  content,
  postId,
  parentComentId,
  id,
}) => {
  const [isLike, setIsLike] = useState(false);
  const [nLikes, setnLikes] = useState(0);

  const [nComments, setNcomments] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      setIsLike((await getLikeInfo(id, false)).isLike);
      setnLikes((await getLikeInfo(id, false)).nLikes);
      setNcomments(await getNChildComments(parentComentId));
    };
    fetch();
    return () => {};
  }, [id, parentComentId]);

  const handlePress = ({...rest}) => {
    if (onPress) {
      onPress({...rest});
    }
    navigation.navigate('ChildTalk', {...rest});
  };

  return (
    <TouchableOpacity
      style={styles.postContainer}
      onPress={() => handlePress({id, parentComentId, postId})}>
      <Image source={{uri: user?.picture}} style={styles.imageProfile} />
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text label={user?.name} style={styles.text} />
          <Text
            label={`@${user?.username?.toLowerCase()}`}
            style={[styles.text, styles.username]}
          />
          <Button
            label={getFomatedTime(time)}
            flat="placeholder"
            onPress={() => console.log('object')}
            style={styles.flatBtn}
            textStyles={[styles.textBtn, styles.time]}
            icon={
              <Icon
                name={'dot-single'}
                color={Colors.placeholder}
                style={styles.icon}
                family={'Entypo'}
              />
            }
            left
          />
        </View>
        <Text label={content} style={styles.normal} lines={3} />
        {commentImage && (
          <Image source={{uri: commentImage}} style={styles.imagePost} />
        )}
        <View style={styles.btnContainer}>
          <Button
            label={nComments}
            flat="placeholder"
            onPress={() => handlePress({id, parentComentId, postId})}
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
            label={isLike}
            flat="placeholder"
            onPress={() => {
              performLike(id, !isLike, false);
              setIsLike(!isLike);
              !isLike ? setnLikes(nLikes + 1) : setnLikes(nLikes - 1);
            }}
            style={styles.flatBtn}
            textStyles={styles.textBtn}
            icon={
              <Icon
                name={!isLike ? 'thumbs-o-up' : 'thumbs-up'}
                color={!isLike ? Colors.placeholder : Colors.secondary}
                style={styles.icon}
                family={'FontAwesome'}
              />
            }
            left
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const RenderPostHeader = ({headerData}) => {
  const {user, id, time, postImage, desc} = headerData;

  const [isLike, setIsLike] = useState(false);
  const [nLikes, setnLikes] = useState(0);

  const [nComments, setNcomments] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      setIsLike((await getLikeInfo(id)).isLike);
      setnLikes((await getLikeInfo(id)).nLikes);
      setNcomments(await getNComments(id));
    };
    fetch();
    return () => {};
  }, [id]);

  return (
    <View style={styles.postHeaderContainer}>
      <View style={styles.imgContainer}>
        <Image source={{uri: user?.picture}} style={styles.imageProfile} />
        <View style={styles.textHeaderContainer}>
          <Text label={user?.name} style={styles.text} />
          <Text
            label={`@${user?.username?.toLowerCase()}`}
            style={[styles.text, styles.username, styles.postHeaderUserName]}
          />
        </View>
      </View>
      <View style={styles.infoHeaderContainer}>
        <Text
          label={desc}
          style={[styles.normal, styles.headerText]}
          lines={3}
        />
        {postImage && (
          <Image source={{uri: postImage}} style={styles.imageHeaderPost} />
        )}
        <View style={styles.btnWrapper}>
          <View style={[styles.btnContainer, styles.btnHeaderC]}>
            <Button
              label={nComments}
              flat="placeholder"
              onPress={() => console.log('object')}
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
                  name={!isLike ? 'thumbs-o-up' : 'thumbs-up'}
                  color={!isLike ? Colors.placeholder : Colors.secondary}
                  style={styles.icon}
                  family={'FontAwesome'}
                />
              }
              left
            />
            <Button
              label={getFomatedTime(time)}
              flat="placeholder"
              onPress={() => console.log('object')}
              style={styles.flatBtn}
              textStyles={[styles.textBtn, styles.time]}
              icon={
                <Icon
                  name={'dot-single'}
                  color={Colors.placeholder}
                  style={styles.icon}
                  family={'Entypo'}
                />
              }
              left
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const PostTalk = ({
  onPress,
  navigation,
  data,
  loadMore,
  load,
  post,
  createUserComment,
}) => {
  return (
    <View style={styles.flatContainer}>
      <FlatList
        data={data}
        ListHeaderComponent={() => <RenderPostHeader headerData={post} />}
        ListFooterComponent={() => (load ? <Loader nofloat small /> : <View />)}
        renderItem={({item}) => (
          <RenderPostTalk
            postId={post.id}
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
        onEndReached={loadMore}
        contentContainerStyle={styles.pad}
      />
      <Keyboard createUserComment={createUserComment} />
    </View>
  );
};

export default PostTalk;
