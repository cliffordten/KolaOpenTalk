import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from '../../components/icon';
import {Colors} from '../../config';
import styles from './styles';

const RenderImage = ({id, profile, name, onPress}) => {
  const [select, setSelect] = useState(false);

  const handleSelect = (n, p) => {
    if (onPress) {
      onPress(!select, {categoryID: id, name: n, profile: p});
    }
    setSelect(!select);
  };
  return (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => handleSelect(name, profile)}>
      <Image source={{uri: profile}} style={styles.image} />
      {select ? (
        <>
          <View style={[styles.image, styles.imageSelect]} />
          <View
            style={[
              styles.image,
              name.length <= 9 ? styles.textSelect : styles.textSelectAlt,
            ]}>
            {name.length > 9 ? (
              <Icon
                name="check"
                color={Colors.white}
                family={'MaterialCommunityIcons'}
              />
            ) : null}
            <Text style={styles.text} numberOfLines={1}>
              {name}
            </Text>
            {name.length <= 9 ? (
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

const SelectImageCatergory = ({onPress, data}) => {
  return (
    <View style={styles.flatContainer}>
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
        columnWrapperStyle={styles.flat}
      />
    </View>
  );
};

export default SelectImageCatergory;
