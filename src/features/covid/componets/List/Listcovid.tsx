import { useAppSelector } from 'app/hooks';
import { AppFlatList, AppView } from 'components';
import { Covidword } from 'features/covid/covidSile';
import React from 'react';
import { StyleSheet } from 'react-native';
import { getValue } from 'utils';
import Menucovid from '../menu/Menucovid';
import Itemcovid from './Itemcovid';

const Listcovid: React.FC = () => {
  const listcoviddata = useAppSelector(state => state.covidState.covids);
  // console.log('---data----', listcoviddata);
  const renderItem = (item: Covidword) => {
    return <Itemcovid item={item} />;
  };
  return (
    <AppView style={styles.container}>
      <AppView>
        <Menucovid />
      </AppView>
      <AppView style={styles.flatListView}>
        <AppFlatList
          data={getValue(listcoviddata, 'Countries', [])}
          renderItem={({ item }) => renderItem(item as Covidword)}
        />
      </AppView>
    </AppView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '90%',
    width: '90%',
    marginLeft: 20,
  },
  flatListView: {
    marginTop: -100,
    height: '100%',
    width: 'auto',
  },
});
export default Listcovid;
