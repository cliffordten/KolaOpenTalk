import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../config';
import styles from './styles';
import Icon from '../icon';

const data = [
  {
    id: 0,
    uri:
      'https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg',
    catergory: 'Love',
  },
  {
    id: 1,
    uri:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
    catergory: 'Nature',
  },
  {
    id: 2,
    uri:
      'https://media.istockphoto.com/photos/happy-boy-on-the-zipline-picture-id594481094?s=612x612',
    catergory: 'Adventure',
  },
  {
    id: 4,
    uri:
      'https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg',
    catergory: 'Love',
  },
  {
    id: 5,
    uri:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
    catergory: 'Nature',
  },
  {
    id: 6,
    uri:
      'https://media.istockphoto.com/photos/happy-boy-on-the-zipline-picture-id594481094?s=612x612',
    catergory: 'Adventure',
  },
  {
    id: 8,
    uri:
      'https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg',
    catergory: 'Love',
  },
  {
    id: 9,
    uri:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
    catergory: 'Nature',
  },
  {
    id: 10,
    uri:
      'https://media.istockphoto.com/photos/happy-boy-on-the-zipline-picture-id594481094?s=612x612',
    catergory: 'Adventure',
  },
  {
    id: 11,
    uri:
      'https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg',
    catergory: 'Love',
  },
  {
    id: 12,
    uri:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
    catergory: 'Nature',
  },
  {
    id: 13,
    uri:
      'https://media.istockphoto.com/photos/happy-boy-on-the-zipline-picture-id594481094?s=612x612',
    catergory: 'Adventure',
  },
  {
    id: 14,
    uri:
      'https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg',
    catergory: 'Love',
  },
  {
    id: 15,
    uri:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
    catergory: 'Nature',
  },
  {
    id: 15,
    uri:
      'https://media.istockphoto.com/photos/happy-boy-on-the-zipline-picture-id594481094?s=612x612',
    catergory: 'Adventure',
  },
];

const RenderImage = ({uri, catergory, id, onPress}) => {
  const [select, setSelect] = useState(false);

  const handleSelect = _id => {
    if (select) {
      setSelect(false);
      return;
    }
    if (onPress) {
      onPress(_id);
    }
    setSelect(true);
  };
  return (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => handleSelect(id)}>
      <Image source={{uri}} style={styles.image} />
      {select ? (
        <>
          <View style={[styles.image, styles.imageSelect]} />
          <View
            style={[
              styles.image,
              catergory.length <= 9 ? styles.textSelect : styles.textSelectAlt,
            ]}>
            {catergory.length > 9 ? (
              <Icon
                name="check"
                color={Colors.white}
                family={'MaterialCommunityIcons'}
              />
            ) : null}
            <Text style={styles.text} numberOfLines={1}>
              {catergory}
            </Text>
            {catergory.length <= 9 ? (
              <Icon
                name="check"
                color={Colors.white}
                style={styles.icon}
                family={'MaterialCommunityIcons'}
              />
            ) : null}
          </View>
        </>
      ) : null}
    </TouchableOpacity>
  );
};

const SelectImageCatergory = ({onPress}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <RenderImage {...item} key={({id}) => id} onPress={onPress} />
      )}
      keyExtractor={item => item.id}
      numColumns={3}
      style={styles.flatList}
      showsVerticalScrollIndicator={false}
      bounces={false}
    />
  );
};

export default SelectImageCatergory;
