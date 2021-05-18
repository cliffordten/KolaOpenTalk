import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import Text from '../../components/text';
import LinearGradient from '../../views/gradient';
import styles from './styles';
import {getUserInfo} from '../../utils/graphql/query';
import {TouchableOpacity} from 'react-native-gesture-handler';
import storage from '../../utils/storage';
import Loader from '../../components/loader';

const CustomDrawer = ({navigation}) => {
  const [user, setUser] = useState(null);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      const {
        followers: {items: followers},
        following: {items: following},
        ...rest
      } = await getUserInfo();

      setUser({followers, following, ...rest});
    };

    fetch();
    return () => {};
  }, []);

  const logout = () => {
    setLoad(true);
    storage.setUserisLogedOut(true);
    storage.setUserSignedup(false);
    setTimeout(() => {
      setLoad(false);
      navigation.navigate('Login');
    }, 2000);
  };
  return (
    <View style={styles.cont}>
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
      <TouchableOpacity onPress={logout} style={styles.btn}>
        <Text label={'Logout'} style={[styles.text, styles.btnText]} />
      </TouchableOpacity>
      {load && <Loader />}
    </View>
  );
};

export default CustomDrawer;
