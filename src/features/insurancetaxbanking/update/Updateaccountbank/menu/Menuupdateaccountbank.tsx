import { AppText, AppView } from 'components';
import React from 'react';
import { StyleSheet } from 'react-native';
const Menuupdateaccountbank: React.FC = () => {
  return (
    <AppView style={styles.container}>
      <AppView style={styles.viewTiles}>
        <AppText boldOrLight="bold" style={styles.textmenutile}>
          TÀI KHOẢN NGÂN HÀNG
        </AppText>
        <AppView style={styles.viewdraw} />
      </AppView>
    </AppView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '5%',
    backgroundColor: 'white',
  },
  viewTiles: {
    marginTop: 10,
    flexDirection: 'row',
  },
  viewdraw: {
    flex: 0.9,
    height: 1,
    backgroundColor: '#d8d5d5',
    marginTop: 10,
  },
  touchableOpacity: {
    height: 50,
    width: 175,
    margin: 10,
    backgroundColor: 'blue',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableOpacityringht: {
    height: 50,
    width: 175,
    margin: 10,
    backgroundColor: '#bcdfee',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textmenu: {
    color: 'white',
    fontSize: 20,
  },
  textmenuringht: {
    color: 'blue',
    fontSize: 20,
  },
  textmenutile: {
    fontSize: 20,
    color: 'blue',
    marginLeft: 10,
  },
});
export default Menuupdateaccountbank;
