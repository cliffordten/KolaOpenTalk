import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import Text from '../../components/text';
import LinearGradient from '../../views/gradient';
import styles from './styles';
import {getUserInfoFollower} from '../../utils/graphql/query';

const CustomDrawer = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      const data = await getUserInfoFollower();
      setUser(data);
    };

    fetch();
    return () => {};
  }, []);
  return (
    <View>
      <LinearGradient style={styles.drawerWrapper}>
        <View style={styles.imageWrapper}>
          <Image source={{uri: user?.picture}} style={styles.image} />
          <View>
            <Text label={user?.name} style={styles.text} />
            <Text
              label={`@${user?.username}`}
              style={[styles.text, styles.username]}
            />
          </View>
        </View>
        <View style={[styles.imageWrapper, styles.textWrapper]}>
          <Text
            label={user?.following?.length + ' Following'}
            style={styles.text}
          />
          <Text
            label={user?.followers?.length + ' Followers'}
            style={[styles.text, styles.left]}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default CustomDrawer;
