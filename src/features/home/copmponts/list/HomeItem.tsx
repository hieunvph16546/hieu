import * as React from 'react';
import { AppImage, AppText, AppTouchableOpacity } from 'components';
import { ImageSourcePropType, StyleSheet } from 'react-native';

interface IProps {
  title: string;
  image: string;
  onPress?: () => void;
}
const HomeItem: React.FC<IProps> = ({ title, image, onPress }) => {
  return (
    <AppTouchableOpacity style={styles.container} onPress={onPress}>
      <AppImage source={image as ImageSourcePropType} style={styles.imageStyle} />
      <AppText boldOrLight="bold" style={styles.titleStyle}>
        {title}
      </AppText>
    </AppTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 85,
    borderWidth: 3,
    borderRadius: 6,
    borderColor: '#f1eeee',
    fontWeight: 'bold',
    marginTop: 10,
  },
  titleStyle: {
    fontSize: 14,
    marginLeft: 10,
  },
  imageStyle: {
    width: 40,
    height: 35,
    marginLeft: 10,
    marginTop: 10,
  },
});

export default HomeItem;
