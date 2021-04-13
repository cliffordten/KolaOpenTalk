import React, {useRef, useState} from 'react';
import {FlatList, View, Animated} from 'react-native';
import labels from '../../assets/labels';
import Button from '../../components/button';
import Logo from '../../components/logo';
import {Colors} from '../../config';
import Signup from '../signup';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import ScrollView from '../../views/scroll';

const data = [
  {
    key: 0,
    component: <Signup />,
  },
  {
    key: 1,
    component: <Signup />,
  },
  {
    key: 2,
    component: <Signup />,
  },
];

const RenderOnBoardingItem = ({component}) => (
  <View style={styles.onboardingItem}>{component}</View>
);

const AccountOnBoarding = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);

  const handleViewableItemChanged = useRef(({viewableItems}) =>
    setCurrentIndex(viewableItems[0].index),
  ).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={[Colors.primary, Colors.secondary]}
        style={styles.gradient}>
        <View style={styles.flatBtn}>
          <Button
            label={labels.signIn}
            flat="white"
            bold
            onPress={() => navigation.navigate('Login')}
          />
        </View>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
      </LinearGradient>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <RenderOnBoardingItem
              component={item.component}
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
          onViewableItemsChanged={handleViewableItemChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
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
