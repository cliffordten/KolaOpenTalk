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

const RenderPostTalk = ({
  user,
  nLikes,
  time,
  isLiked,
  navigation,
  commentImage,
  onPress,
  content,
  postId,
  parentComentId,
  id,
}) => {
  const [isCommentLiked, setIsCommentLiked] = useState(isLiked);
  const [nPostLikes, setNPostLikes] = useState(nLikes);

  const [nComments, setNcomments] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      setNcomments(await getNChildComments(parentComentId));
    };
    fetch();
    return () => {};
  }, [parentComentId]);

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
                name={!isCommentLiked ? 'thumbs-o-up' : 'thumbs-up'}
                color={!isCommentLiked ? Colors.placeholder : Colors.secondary}
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
  const {user, nLikes, id, time, isLiked, postImage, desc} = headerData;

  const [isCommentLiked, setIsCommentLiked] = useState(isLiked);
  const [nPostLikes, setNPostLikes] = useState(nLikes);

  const [nComments, setNcomments] = useState(0);

  useEffect(() => {
    const fetch = async () => {
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
                  name={!isCommentLiked ? 'thumbs-o-up' : 'thumbs-up'}
                  color={
                    !isCommentLiked ? Colors.placeholder : Colors.secondary
                  }
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
