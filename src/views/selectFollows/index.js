import React, {useEffect, useState} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import labels from '../../assets/labels';
import Button from '../../components/button';
import Icon from '../../components/icon';
import Text from '../../components/text';
import {Colors} from '../../config';
import styles from './styles';
import {checkFollow} from '../../redux/actions/follow';

const RenderFriends = ({
  picture,
  name,
  username,
  id,
  onPress,
  blackList,
  ...rest
}) => {
  const [isFollow, setIsFollow] = useState(false);

  useEffect(() => {
    const check = async () => {
      setIsFollow(await checkFollow(id));
    };
    check();
    return () => {};
  }, [id]);

  const handleFollow = _id => {
    if (onPress) {
      onPress(_id, !isFollow);
    }
    setIsFollow(!isFollow);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => blackList(id)}>
        <Icon
          name="circle-with-cross"
          color={Colors.error}
          style={styles.icon}
          family={'Entypo'}
        />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Image source={{uri: picture}} style={styles.image} />
        <Text label={name} style={styles.text} />
        <Text
          label={`@${username?.toLowerCase()}`}
          style={[styles.text, styles.username]}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button
          label={!isFollow ? labels.follow : labels.following}
          color={'secondary'}
          textStyles={isFollow && styles.textStyles}
          onPress={() => handleFollow(id)}
          style={[styles.btn, isFollow && styles.isFollow]}
        />
      </View>
    </View>
  );
};

const SelectFollows = ({onPress, data, blackList}) => {
  return (
    <View style={styles.flatContainer}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <RenderFriends
            {...item}
            key={({id}) => id}
            onPress={onPress}
            blackList={blackList}
          />
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
