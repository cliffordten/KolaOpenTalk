import React, {useEffect, useState} from 'react';
import {FlatList, Image, View} from 'react-native';
import Button from '../../components/button';
import Icon from '../../components/icon';
import Text from '../../components/text';
import {Colors} from '../../config';
import Keyboard from '../keyboard';
import styles from './styles';
import {getFomatedTime} from '../../utils/methods';
import Loader from '../../components/loader';
import {getNChildComments} from '../../redux/actions/comment';

const RenderCommentTalk = ({
  user,
  nComments,
  nLikes,
  time,
  isLiked,
  commentImage,
  content,
}) => {
  const [isCommentLiked, setIsCommentLiked] = useState(isLiked);
  const [nPostLikes, setNPostLikes] = useState(nLikes);

  return (
    <View style={styles.postContainer}>
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
            label={nPostLikes || 0}
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
    </View>
  );
};

const RenderCommentHeader = ({headerData}) => {
  const {
    user,
    nLikes,
    time,
    isLiked,
    commentImage,
    content,
    parentComentId,
  } = headerData;

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
          label={content}
          style={[styles.normal, styles.headerText]}
          lines={3}
        />
        {commentImage && (
          <Image source={{uri: commentImage}} style={styles.imageHeaderPost} />
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

const CommentTalk = ({
  onPress,
  navigation,
  data,
  loadMore,
  load,
  nChildComments,
  comment,
  createUserComment,
}) => {
  return (
    <View style={styles.flatContainer}>
      <FlatList
        data={data}
        ListHeaderComponent={() => (
          <RenderCommentHeader
            headerData={comment}
            nChildComments={nChildComments}
          />
        )}
        ListFooterComponent={() => (load ? <Loader nofloat small /> : <View />)}
        renderItem={({item}) => (
          <RenderCommentTalk
            {...item}
            key={({id}) => id}
            onPress={onPress}
            navigation={navigation}
          />
        )}
        keyExtractor={item => item.id}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        onEndReached={loadMore}
        bounces={false}
        contentContainerStyle={styles.pad}
      />
      <Keyboard createUserComment={createUserComment} />
    </View>
  );
};

export default CommentTalk;
