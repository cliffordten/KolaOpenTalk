import React from 'react';
// import PropTypes from 'prop-types';
import {View} from 'react-native';
import labels from '../../assets/labels';
import Button from '../../components/button';
import Icon from '../../components/icon';
import SelectImageCatergory from '../../views/selectImageCatergory';
import Title from '../../components/title';
import {Colors} from '../../config';
import styles from './styles';

const ChooseCategory = ({navigation}) => {
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
          <SelectImageCatergory />
        </View>
        <View style={styles.confirm}>
          <Button
            label={labels.seeMore}
            color={'default'}
            onPress={() => navigation.navigate('AccountOnboarding')}
          />
          <Button
            label={labels.nextStep}
            color={'secondary'}
            onPress={() => navigation.navigate('ChooseCategory')}
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
    </View>
  );
};
ChooseCategory.propTypes = {};

export default ChooseCategory;
