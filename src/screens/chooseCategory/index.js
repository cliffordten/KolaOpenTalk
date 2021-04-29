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
import {listCategories} from '../../utils/graphql/query';
import Loader from '../../components/loader';
import {createUserInterest} from '../../utils/graphql/mutations';
import {showShortToast} from '../../utils/methods';

const ChooseCategory = ({goToIndex}) => {
  const [data, setData] = useState([]);
  const [next, setNext] = useState(null);
  const [load, setLoad] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const {items, nextToken} = await listCategories();
      setData(items);
      setNext(nextToken);
    };
    fetch();
    return () => {};
  }, []);

  const loadMore = async () => {
    if (next) {
      setLoad(true);
      const {items, nextToken} = await listCategories(next);
      setData([...data, ...items]);
      setNext(nextToken);
      setLoad(false);
    } else {
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
      categories.forEach(({categoryID, name, profile}) => {
        createUserInterest(categoryID, name, profile);
      });
      goToIndex.scrollToIndex({animated: true, index: 2});
      setLoad(false);
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
          <SelectImageCatergory data={data} onPress={getSelected} />
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
