import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import Ripple from 'react-native-material-ripple';
import {Colors} from '../../config';
import Icon from '../icon';
import {useDispatch} from 'react-redux';
import {performSearch} from '../../redux/actions/user';

const SearchBar = ({style, ...rest}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [val, setVal] = useState('');
  const dispatch = useDispatch();

  const handleOnChange = value => {
    setVal(value);
    dispatch(performSearch(val));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        style={styles.searchInput}
        placeholderTextColor={Colors.gray}
        onFocus={() => setIsFocus(true)}
        numberOfLines={1}
        onBlur={() => setIsFocus(false)}
        value={val}
        onChangeText={v => handleOnChange(v)}
        {...rest}
      />
      <Ripple
        style={styles.icon}
        onPress={() => (isFocus ? setVal('') : console.log(val))}>
        {isFocus ? (
          <Icon name="cross" family={'Entypo'} size={18} />
        ) : (
          <Icon name="search" family={'Feather'} size={18} />
        )}
      </Ripple>
    </View>
  );
};

export default SearchBar;
