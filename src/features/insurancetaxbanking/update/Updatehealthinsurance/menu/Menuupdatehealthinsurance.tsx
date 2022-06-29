import { AppText, AppView } from 'components';
import React from 'react';
import { StyleSheet } from 'react-native';
import Itemupdatehealthinsurance from '../tilemenu/Item-updatehealthinsurance';
const Menuupdatehealthinsurance: React.FC = () => {
  return (
    <AppView style={styles.container}>
      <AppView style={styles.viewTiles}>
        <AppText boldOrLight="bold" style={styles.textmenutile}>
          Cập nhật bảo hiểm y tế
        </AppText>
        <AppView style={styles.viewdraw} />
      </AppView>
      <AppView style={styles.viewTiles}>
        <Itemupdatehealthinsurance />
      </AppView>
    </AppView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '15%',
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
export default Menuupdatehealthinsurance;
