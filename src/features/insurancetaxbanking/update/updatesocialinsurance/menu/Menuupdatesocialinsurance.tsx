import { AppText, AppView } from 'components';
import React from 'react';
import { StyleSheet } from 'react-native';
import Itemupdatemenusocialinsurance from '../tilemenu/Item-updatemenusocialinsurance';
const Menuupdatesocialinsurance: React.FC = () => {
  return (
    <AppView style={styles.container}>
      <AppView style={styles.viewTiles}>
        <AppText boldOrLight="bold" style={styles.textmenutile}>
          BẢO HIỂM XÃ HỘI
        </AppText>
        <AppView style={styles.viewdraw} />
      </AppView>
      <AppView style={styles.viewTiles}>
        <Itemupdatemenusocialinsurance />
      </AppView>
    </AppView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '13%',
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
  textmenutile: {
    fontSize: 14,
    color: 'blue',
    marginLeft: 10,
  },
});
export default Menuupdatesocialinsurance;
