import { useNavigation } from '@react-navigation/core';
import { AppText, AppTouchableOpacity, AppView } from 'components';
import React from 'react';
import { StyleSheet } from 'react-native';
import Itemmenuinsurancetaxbanking from '../tilemenu/Item-menusocialinsurance';
const Menusocialinsurance: React.FC = () => {
  const navigation = useNavigation();
  return (
    <AppView style={styles.container}>
      <AppView style={styles.viewTiles}>
        <AppText boldOrLight="bold" style={styles.textmenutile}>
          BẢO HỂM XÃ HỘI
        </AppText>
        <AppView style={styles.viewdraw} />
        <AppTouchableOpacity onPress={() => navigation.navigate('Updatesocialinsurance')}>
          <AppText style={styles.texttile}>sữa</AppText>
        </AppTouchableOpacity>
      </AppView>
      <AppView>
        <Itemmenuinsurancetaxbanking />
      </AppView>
    </AppView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '9 %',
  },
  viewTiles: {
    marginTop: 10,
    flexDirection: 'row',
  },
  viewdraw: {
    flex: 0.9,
    height: 2,
    backgroundColor: '#EBEBEC',
    marginTop: 10,
  },
  textmenutile: {
    fontSize: 14,
    color: '#0D6EFD',
    marginLeft: 14,
  },
  texttile: {
    fontSize: 14,
    color: '#5E81F4',
    marginLeft: 14,
  },
});
export default Menusocialinsurance;
