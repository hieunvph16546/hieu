import { useNavigation } from '@react-navigation/core';
import { AppText, AppTouchableOpacity, AppView } from 'components';
import React from 'react';
import { StyleSheet } from 'react-native';
const Menuaccountbank: React.FC = () => {
  const navigation = useNavigation();
  return (
    <AppView style={styles.container}>
      <AppView style={styles.viewTiles}>
        <AppText boldOrLight="bold" style={styles.textmenutile}>
          TÀI KHOẢN NGÂN HÀNG
        </AppText>
        <AppView style={styles.viewdraw} />
        <AppTouchableOpacity onPress={() => navigation.navigate('Updatebankaccount')}>
          <AppText style={styles.texttile}>sữa</AppText>
        </AppTouchableOpacity>
      </AppView>
    </AppView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '3.5%',
  },
  viewTiles: {
    marginTop: 10,
    flexDirection: 'row',
  },
  viewdraw: {
    flex: 0.9,
    height: 2,
    backgroundColor: '#d8d5d5',
    margin: 10,
  },
  touchableOpacity: {
    height: 50,
    flex: 1,
    margin: 10,
    backgroundColor: 'blue',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableOpacityringht: {
    height: 50,
    flex: 1,
    margin: 10,
    backgroundColor: '#F8F9FA',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textmenu: {
    color: 'white',
    fontSize: 14,
  },
  textmenuringht: {
    color: 'blue',
    fontSize: 14,
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
export default Menuaccountbank;
