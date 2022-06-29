import * as React from 'react';
import { AppImage, AppText, AppView } from 'components';
import { ImageSourcePropType, StyleSheet } from 'react-native';
import image from 'assets/icons';
import { translate } from 'utils';
const Headerhome: React.FC = () => {
  return (
    <AppView style={styles.container}>
      <AppView style={styles.headerView}>
        <AppImage source={image.AVA_HOME_CLINE as ImageSourcePropType} resizeMode="center" style={styles.imageHome} />
      </AppView>
      <AppView style={styles.headerView}>
        <AppText boldOrLight="bold" style={styles.nameText}>
          {translate('name_home')}
        </AppText>
        <AppText style={styles.Seniortext}> {translate('Senior_specialist_HR_partner')}</AppText>
      </AppView>
    </AppView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '15%',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  imageHome: {
    width: 100,
    height: 100,
    borderRadius: 270 / 2,
    borderWidth: 1,
  },
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  nameText: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'vincHand',
  },
  Seniortext: {
    color: '#7f94a0',
    borderBottomColor: '#773fcb',
    borderBottomWidth: 2,
  },
});
export default Headerhome;
