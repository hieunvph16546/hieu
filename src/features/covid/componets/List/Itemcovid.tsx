import { AppText, AppView } from 'components';
import { Covidword } from 'features/covid/covidSile';
import React from 'react';
import { StyleSheet } from 'react-native';
interface IProps {
  item: Covidword;
}
const Itemcovid: React.FC<IProps> = ({ item }) => {
  return (
    <AppView style={styles.container}>
      <AppView style={styles.viewItem}>
        <AppText>{item.Country}</AppText>
      </AppView>
      <AppView style={styles.viewItem1}>
        <AppView>
          <AppText>{item.TotalConfirmed} tr</AppText>
        </AppView>
        <AppView>
          <AppText>{item.NewDeaths}</AppText>
        </AppView>
      </AppView>
      <AppView style={styles.viewItem2}>
        <AppText>{item.TotalDeaths} N</AppText>
      </AppView>
    </AppView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  viewItem: {
    flex: 0.8,
    alignItems: 'flex-start',
  },
  viewItem1: {
    flex: 0.7,
    alignItems: 'flex-start',
  },
  viewItem2: {
    flex: 0.5,
    alignItems: 'flex-start',
  },
});
export default Itemcovid;
