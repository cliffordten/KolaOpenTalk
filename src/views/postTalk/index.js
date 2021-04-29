import React, {useState} from 'react';
import {FlatList, Image, View} from 'react-native';
import Button from '../../components/button';
import Icon from '../../components/icon';
import Text from '../../components/text';
import {Colors} from '../../config';
import Keyboard from '../keyboard';
import styles from './styles';

const data = [
  {
    id: 0,
    profile:
      'https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg',
    name: 'Teneng Clifford',
    username: 'cliffordten',
    nComments: 43,
    nLikes: 60,
    time: '30 mins',
    isRead: false,
    isLiked: false,
    postImage: null,
    description:
      'This is a Description of a very very long post which could be read in more than an hour time but most of the people who love reading such as Giselle and sister can handle the reading of this text in just some few minutes',
  },
  {
    id: 1,
    profile:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
    name: 'Teneng Clifford',
    username: 'cliffordten',
    nComments: 43,
    nLikes: 60,
    time: '30 mins',
    isRead: false,
    isLiked: false,
    postImage: null,
    description:
      'This is a Description of a very very long post which could be read in more than an hour time but most of the people who love reading such as Giselle and sister can handle the reading of this text in just some few minutes',
  },
  {
    id: 2,
    profile:
      'https://media.istockphoto.com/photos/happy-boy-on-the-zipline-picture-id594481094?s=612x612',
    name: 'Teneng Clifford',
    username: 'cliffordten',
    nComments: 43,
    nLikes: 60,
    time: '30 mins',
    isRead: false,
    isLiked: false,
    postImage:
      'https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg',
    description:
      'This is a Description of a very very long post which could be read in more than an hour time but most of the people who love reading such as Giselle and sister can handle the reading of this text in just some few minutes',
  },
  {
    id: 4,
    profile:
      'https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg',
    name: 'Teneng Clifford',
    username: 'cliffordten',
    nComments: 43,
    nLikes: 60,
    time: '30 mins',
    isRead: false,
    isLiked: false,
    postImage:
      'https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg',
    description:
      'This is a Description of a very very long post which could be read in more than an hour time but most of the people who love reading such as Giselle and sister can handle the reading of this text in just some few minutes',
  },
  {
    id: 5,
    profile:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
    name: 'Teneng Clifford',
    username: 'cliffordten',
    nComments: 43,
    nLikes: 60,
    time: '30 mins',
    isRead: true,
    isLiked: false,
    postImage: null,
    description:
      'This is a Description of a very very long post which could be read in more than an hour time but most of the people who love reading such as Giselle and sister can handle the reading of this text in just some few minutes',
  },
  {
    id: 6,
    profile:
      'https://media.istockphoto.com/photos/happy-boy-on-the-zipline-picture-id594481094?s=612x612',
    name: 'Teneng Clifford',
    username: 'cliffordten',
    nComments: 43,
    nLikes: 60,
    time: '30 mins',
    isRead: false,
    isLiked: false,
    postImage: null,
    description:
      'This is a Description of a very very long post which could be read in more than an hour time but most of the people who love reading such as Giselle and sister can handle the reading of this text in just some few minutes',
  },
  {
    id: 8,
    profile:
      'https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg',
    name: 'Teneng Clifford',
    username: 'cliffordten',
    nComments: 43,
    nLikes: 60,
    time: '30 mins',
    isRead: false,
    isLiked: false,
    postImage:
      'https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg',
    description:
      'This is a Description of a very very long post which could be read in more than an hour time but most of the people who love reading such as Giselle and sister can handle the reading of this text in just some few minutes',
  },
  {
    id: 9,
    profile:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
    name: 'Teneng Clifford',
    username: 'cliffordten',
    nComments: 43,
    nLikes: 60,
    time: '30 mins',
    isRead: false,
    isLiked: true,
    postImage:
      'https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg',
    description:
      'This is a Description of a very very long post which could be read in more than an hour time but most of the people who love reading such as Giselle and sister can handle the reading of this text in just some few minutes',
  },
  {
    id: 10,
    profile:
      'https://media.istockphoto.com/photos/happy-boy-on-the-zipline-picture-id594481094?s=612x612',
    name: 'Teneng Clifford',
    username: 'cliffordten',
    nComments: 43,
    nLikes: 60,
    time: '30 mins',
    isRead: true,
    isLiked: false,
    postImage: null,
    description:
      'This is a Description of a very very long post which could be read in more than an hour time but most of the people who love reading such as Giselle and sister can handle the reading of this text in just some few minutes',
  },
  {
    id: 11,
    profile:
      'https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg',
    name: 'Teneng Clifford',
    username: 'cliffordten',
    nComments: 43,
    nLikes: 60,
    time: '30 mins',
    isRead: false,
    isLiked: false,
    postImage: null,
    description:
      'This is a Description of a very very long post which could be read in more than an hour time but most of the people who love reading such as Giselle and sister can handle the reading of this text in just some few minutes',
  },
  {
    id: 12,
    profile:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
    name: 'Teneng Clifford',
    username: 'cliffordten',
    nComments: 43,
    nLikes: 60,
    time: '30 mins',
    isRead: false,
    isLiked: true,
    postImage:
      'https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg',
    description:
      'This is a Description of a very very long post which could be read in more than an hour time but most of the people who love reading such as Giselle and sister can handle the reading of this text in just some few minutes',
  },
  {
    id: 13,
    profile:
      'https://media.istockphoto.com/photos/happy-boy-on-the-zipline-picture-id594481094?s=612x612',
    name: 'Teneng Clifford',
    username: 'cliffordten',
    nComments: 43,
    nLikes: 60,
    time: '30 mins',
    isRead: true,
    isLiked: false,
    postImage: null,
    description:
      'This is a Description of a very very long post which could be read in more than an hour time but most of the people who love reading such as Giselle and sister can handle the reading of this text in just some few minutes',
  },
  {
    id: 14,
    profile:
      'https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg',
    name: 'Teneng Clifford',
    username: 'cliffordten',
    nComments: 43,
    nLikes: 60,
    time: '30 mins',
    isRead: true,
    isLiked: false,
    postImage: null,
    description:
      'This is a Description of a very very long post which could be read in more than an hour time but most of the people who love reading such as Giselle and sister can handle the reading of this text in just some few minutes',
  },
  {
    id: 15,
    profile:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
    name: 'Teneng Clifford',
    username: 'cliffordten',
    nComments: 43,
    nLikes: 60,
    time: '30 mins',
    isRead: false,
    isLiked: false,
    postImage: null,
    description:
      'This is a Description of a very very long post which could be read in more than an hour time but most of the people who love reading such as Giselle and sister can handle the reading of this text in just some few minutes',
  },
  {
    id: 7,
    profile:
      'https://media.istockphoto.com/photos/happy-boy-on-the-zipline-picture-id594481094?s=612x612',
    name: 'Tenenafadfasdfg Clifadfadfadfaford',
    username: 'clifforadfafasdfdten',
    nComments: 43,
    nLikes: 60,
    time: '30 mins',
    isRead: false,
    isLiked: false,
    postImage:
      'https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg',
    description:
      'This is a Description of a very very long post which could be read in more than an hour time but most of the people who love reading such as Giselle and sister can handle the reading of this text in just some few minutes',
  },
];

const RenderPostTalk = ({
  profile,
  name,
  username,
  nComments,
  nLikes,
  time,
  isLiked,
  postImage,
  description,
}) => {
  const [isCommentLiked, setIsCommentLiked] = useState(isLiked);
  const [nPostLikes, setNPostLikes] = useState(nLikes);

  return (
    <View style={styles.postContainer}>
      <Image source={{uri: profile}} style={styles.imageProfile} />
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text label={name} style={styles.text} />
          <Text
            label={`@${username.toLowerCase()}`}
            style={[styles.text, styles.username]}
          />
          <Button
            label={time}
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
        <Text label={description} style={styles.normal} lines={3} />
        {postImage && (
          <Image source={{uri: postImage}} style={styles.imagePost} />
        )}
        <View style={styles.btnContainer}>
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

const RenderPostHeader = ({headerData}) => {
  const {
    profile,
    name,
    username,
    nComments,
    nLikes,
    time,
    isLiked,
    postImage,
    description,
  } = headerData;

  const [isCommentLiked, setIsCommentLiked] = useState(isLiked);
  const [nPostLikes, setNPostLikes] = useState(nLikes);

  return (
    <View style={styles.postHeaderContainer}>
      <View style={styles.imgContainer}>
        <Image source={{uri: profile}} style={styles.imageProfile} />
        <View style={styles.textHeaderContainer}>
          <Text label={name} style={styles.text} />
          <Text
            label={`@${username?.toLowerCase()}`}
            style={[styles.text, styles.username]}
          />
        </View>
      </View>
      <View style={styles.infoHeaderContainer}>
        <Text
          label={description}
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
              label={time}
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

const PostTalk = ({onPress, navigation, route}) => {
  return (
    <View style={styles.flatContainer}>
      <FlatList
        data={data}
        ListHeaderComponent={() => (
          <RenderPostHeader headerData={route?.params?.post} />
        )}
        renderItem={({item}) => (
          <RenderPostTalk
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
      />
      <Keyboard />
    </View>
  );
};

export default PostTalk;