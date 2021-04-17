import React from 'react';
import {Image, View} from 'react-native';
import Text from '../../components/text';
import LinearGradient from '../../views/gradient';
import styles from './styles';

const uri =
  'https://media.istockphoto.com/photos/happy-boy-on-the-zipline-picture-id594481094?s=612x612';

const CustomDrawer = () => {
  return (
    <View>
      <LinearGradient style={styles.drawerWrapper}>
        <View style={styles.imageWrapper}>
          <Image source={{uri}} style={styles.image} />
          <View>
            <Text label={'Teneng Clifford'} style={styles.text} />
            <Text
              label={`@${'cliffordten'}`}
              style={[styles.text, styles.username]}
            />
          </View>
        </View>
        <View style={[styles.imageWrapper, styles.textWrapper]}>
          <Text label={'22 Following'} style={styles.text} />
          <Text label={'444 Followers'} style={[styles.text, styles.left]} />
        </View>
      </LinearGradient>
    </View>
  );
};

export default CustomDrawer;
