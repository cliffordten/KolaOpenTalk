import React, {useEffect} from 'react';
// import PropTypes from 'prop-types';
import {Image, Text} from 'react-native';
import styles from './styles';
import Icon from '../../components/icon';
import {Colors} from '../../config';
import LinearGradient from '../gradient';
import Ripple from 'react-native-material-ripple';
import SearchBar from '../../components/search';
import {useSelector, useDispatch} from 'react-redux';
import {getUserInfo} from '../../redux/actions/user';

const Header = ({isHome, scene, isSearch, noImage}) => {
  const {options, navigation} = scene.descriptor;

  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  const {currentUser} = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) {
      dispatch(getUserInfo());
    }
  }, [navigation, currentUser, dispatch]);

  return (
    <LinearGradient style={noImage ? styles.noImage : styles.gradient}>
      <Ripple
        style={[styles.icon, noImage && styles.pad]}
        onPress={() =>
          isHome ? navigation.toggleDrawer() : navigation.goBack()
        }>
        {isHome ? (
          <Icon name="menu" color={Colors.white} family={'Feather'} size={24} />
        ) : (
          <Icon
            name="less-than"
            color={Colors.white}
            family={'MaterialCommunityIcons'}
            size={20}
          />
        )}
      </Ripple>
      {!isSearch ? <Text style={styles.text}>{title}</Text> : <SearchBar />}
      {!noImage ? (
        <Ripple>
          <Image source={{uri: currentUser?.picture}} style={styles.image} />
        </Ripple>
      ) : null}
    </LinearGradient>
  );
};

Header.propTypes = {};

export default Header;
