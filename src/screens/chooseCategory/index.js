import React, {useState, useEffect} from 'react';

// import PropTypes from 'prop-types';
import {View} from 'react-native';

import labels from '../../assets/labels';
import Button from '../../components/button';
import Icon from '../../components/icon';
import Title from '../../components/title';
import {Colors} from '../../config';
import SelectImageCatergory from '../../views/selectImageCatergory';
import styles from './styles';
import Loader from '../../components/loader';
import {showShortToast} from '../../utils/methods';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories, saveUserCategories} from '../../redux/actions/category';

const ChooseCategory = ({goToIndex}) => {
  const [next, setNext] = useState(0);
  const [load, setLoad] = useState(false);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const {categories: category, isNext} = useSelector(state => state.category);

  useEffect(() => {
    dispatch(getCategories());
    return () => {};
  }, [dispatch]);

  const loadMore = async () => {
    if (isNext) {
      setLoad(true);
      dispatch(getCategories(next + 1));
      setNext(next + 1);
      setTimeout(() => {
        setLoad(false);
      }, 500);
    } else {
      setNext(0);
      showShortToast('End of list');
    }
  };

  const getSelected = (isSelected, selection) => {
    if (selection) {
      if (isSelected) {
        setCategories([...categories, selection]);
      } else {
        const filter = categories.filter(obj => obj.name !== selection.name);
        setCategories(filter);
      }
    }
  };

  const saveSelection = () => {
    if (categories.length > 0) {
      setLoad(true);
      dispatch(saveUserCategories(categories));
      setTimeout(() => {
        setLoad(false);
        goToIndex.scrollToIndex({animated: true, index: 2});
      }, 500);
    }
  };

  return (
    <View style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Title
            label={labels.chooseCategoryText}
            style={styles.lgText}
            black
            large
            bold
            lines={0}
          />
        </View>
        <View style={styles.inputContainer}>
          <SelectImageCatergory data={category} onPress={getSelected} />
        </View>
        <View style={styles.confirm}>
          <Button label={labels.seeMore} color={'default'} onPress={loadMore} />
          <Button
            label={labels.nextStep}
            color={'secondary'}
            onPress={saveSelection}
            icon={
              <Icon
                name="greater-than"
                color={Colors.white}
                style={styles.icon}
                family={'MaterialCommunityIcons'}
              />
            }
          />
        </View>
      </View>
      {load && <Loader />}
    </View>
  );
};
ChooseCategory.propTypes = {};

export default ChooseCategory;
