import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import Text from '../../components/text';
import LinearGradient from '../../views/gradient';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import storage from '../../utils/storage';
import Loader from '../../components/loader';
import {useSelector, useDispatch} from 'react-redux';
import {getUserInfo} from '../../redux/actions/user';
import {DataStore} from 'aws-amplify';

const CustomDrawer = ({navigation}) => {
  const [load, setLoad] = useState(false);

  const {currentUser} = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) {
      dispatch(getUserInfo());
    }
  }, [navigation, currentUser, dispatch]);

  // console.log(currentUser);

  const logout = () => {
    setLoad(true);
    storage.setUserisLogedOut(true);
    storage.setUserSignedup(false);
    DataStore.clear();
    setTimeout(() => {
      setLoad(false);
      navigation.replace('Login');
    }, 500);
  };
  return (
    <View style={styles.cont}>
      <LinearGradient style={styles.drawerWrapper}>
        <View style={styles.imageWrapper}>
          <Image source={{uri: currentUser?.picture}} style={styles.image} />
          <View>
            <Text label={currentUser?.name} style={styles.text} />
            <Text
              label={`@${currentUser?.username}`}
              style={[styles.text, styles.username]}
            />
          </View>
        </View>
        <View style={[styles.imageWrapper, styles.textWrapper]}>
          <Text
            label={currentUser?.following?.length + ' Following'}
            style={styles.text}
          />
          <Text
            label={currentUser?.followers?.length + ' Followers'}
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
