import React from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import labels from '../../assets/labels';
import Button from '../../components/button';
import Icon from '../../components/icon';
import Text from '../../components/text';
import {Colors} from '../../config';
import styles from './styles';

const data = [
  {
    id: 0,
    uri:
      'https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg',
    name: 'Friend Name',
    username: 'User Name',
  },
  {
    id: 1,
    uri:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
    name: 'Friend Name',
    username: 'User Name',
  },
  {
    id: 2,
    uri:
      'https://media.istockphoto.com/photos/happy-boy-on-the-zipline-picture-id594481094?s=612x612',
    name: 'Friend Name',
    username: 'User Name',
  },
  {
    id: 4,
    uri:
      'https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg',
    name: 'Friend Name',
    username: 'User Name',
  },
  {
    id: 5,
    uri:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
    name: 'Friend Name',
    username: 'User Name',
  },
  {
    id: 6,
    uri:
      'https://media.istockphoto.com/photos/happy-boy-on-the-zipline-picture-id594481094?s=612x612',
    name: 'Friend Name',
    username: 'User Name',
  },
  {
    id: 8,
    uri:
      'https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg',
    name: 'Friend Name',
    username: 'User Name',
  },
  {
    id: 9,
    uri:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
    name: 'Friend Name',
    username: 'User Name',
  },
  {
    id: 10,
    uri:
      'https://media.istockphoto.com/photos/happy-boy-on-the-zipline-picture-id594481094?s=612x612',
    name: 'Friend Name',
    username: 'User Name',
  },
  {
    id: 11,
    uri:
      'https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg',
    name: 'Friend Name',
    username: 'User Name',
  },
  {
    id: 12,
    uri:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
    name: 'Friend Name',
    username: 'User Name',
  },
  {
    id: 13,
    uri:
      'https://media.istockphoto.com/photos/happy-boy-on-the-zipline-picture-id594481094?s=612x612',
    name: 'Friend Name',
    username: 'User Name',
  },
  {
    id: 14,
    uri:
      'https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg',
    name: 'Friend Name',
    username: 'User Name',
  },
  {
    id: 15,
    uri:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
    name: 'Friend Name',
    username: 'User Name',
  },
  {
    id: 15,
    uri:
      'https://media.istockphoto.com/photos/happy-boy-on-the-zipline-picture-id594481094?s=612x612',
    name: 'Friend Name',
    username: 'User Name',
  },
];

const RenderFriends = ({uri, name, username, id, onPress}) => {
  const handleFollow = _id => {
    if (onPress) {
      onPress(_id);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon
          name="circle-with-cross"
          color={Colors.error}
          style={styles.icon}
          family={'Entypo'}
        />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Image source={{uri}} style={styles.image} />
        <Text label={name} style={styles.text} />
        <Text
          label={`@${username.toLowerCase()}`}
          style={[styles.text, styles.username]}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button
          label={labels.follow}
          color={'secondary'}
          onPress={() => handleFollow(id)}
          style={styles.btn}
        />
      </View>
    </View>
  );
};

const SelectFollows = ({onPress}) => {
  return (
    <View style={styles.flatContainer}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <RenderFriends {...item} key={({id}) => id} onPress={onPress} />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        bounces={false}
        columnWrapperStyle={styles.flat}
        contentContainerStyle={styles.content}
      />
    </View>
  );
};

export default SelectFollows;
