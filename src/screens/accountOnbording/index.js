import React, {useRef, useState, useEffect} from 'react';
import {FlatList, View, Animated, useWindowDimensions} from 'react-native';
import labels from '../../assets/labels';
import Button from '../../components/button';
import Logo from '../../components/logo';
import {Colors} from '../../config';
import Signup from '../signup';
import styles from './styles';
import ScrollView from '../../views/scroll';
import Pagination from '../../components/paginator';
import ChooseCategory from '../chooseCategory';
import FollowFriends from '../followFriends';
import Icon from '../../components/icon';
import LinearGradient from '../../views/gradient';

const data = [
  {
    key: 0,
    component: Signup,
  },
  {
    key: 1,
    component: ChooseCategory,
  },
  {
    key: 2,
    component: FollowFriends,
  },
];

const RenderOnBoardingItem = ({
  component: Component,
  goToIndex,
  navigation,
}) => (
  <View style={styles.onboardingItem}>
    {<Component goToIndex={goToIndex} navigation={navigation} />}
  </View>
);

const AccountOnBoarding = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const [goToIndex, setGoToIndex] = useState(null);

  const {width} = useWindowDimensions();

  const handleViewableItemChanged = useRef(({viewableItems}) =>
    setCurrentIndex(viewableItems[0].index),
  ).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  useEffect(() => {
    setGoToIndex(flatListRef.current);
    return () => {};
  }, []);

  return (
    <ScrollView style={styles.container}>
      <LinearGradient style={styles.gradient}>
        <View style={styles.flatBtn}>
          <Pagination data={data} scrollX={scrollX} />
          {currentIndex === 0 ? (
            <Button
              label={labels.signIn}
              flat="white"
              onPress={() => navigation.navigate('Login')}
              style={styles.flat}
              textStyles={styles.text}
              bold
            />
          ) : (
            <Button
              label={labels.skip}
              flat="white"
              onPress={() => {
                if (currentIndex === 1) {
                  flatListRef.current.scrollToIndex({animated: true, index: 2});
                } else {
                  navigation.navigate('Home');
                }
              }}
              style={styles.flat}
              textStyles={styles.text}
              icon={
                <Icon
                  name="greater-than"
                  color={Colors.white}
                  family={'MaterialCommunityIcons'}
                  style={styles.icon}
                />
              }
              bold
            />
          )}
        </View>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
      </LinearGradient>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          ref={flatListRef}
          renderItem={({item}) => (
            <RenderOnBoardingItem
              {...item}
              goToIndex={goToIndex}
              navigation={navigation}
              key={({key}) => key}
            />
          )}
          keyExtractor={item => item.key}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          getItemLayout={(_, index) => ({
            length: width,
            offset: width * index,
            index,
          })}
          onViewableItemsChanged={handleViewableItemChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          horizontal
          pagingEnabled
        />
      </View>
    </ScrollView>
  );
};

export default AccountOnBoarding;
