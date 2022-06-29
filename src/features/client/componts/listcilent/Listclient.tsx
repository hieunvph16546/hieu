import * as React from 'react';
import { AppFlatList, AppView } from 'components';
import { StyleSheet } from 'react-native';
import { useAppSelector } from 'app/hooks';
import { ClientData } from 'features/client/clientSile';
import Itemclient from './Itemclient';
const Listclient: React.FC = () => {
  const data = useAppSelector(state => state.clientState.clients);
  const renderItem = (item: ClientData) => {
    return <Itemclient item={item} />;
  };
  return (
    <AppView style={styles.container}>
      <AppView>
        <AppFlatList data={data} renderItem={({ item }) => renderItem(item as ClientData)} />
      </AppView>
    </AppView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
export default Listclient;
