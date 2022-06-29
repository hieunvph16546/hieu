import * as React from 'react';
import { DashBoardScreenProps } from 'app/type';
import { AppView } from 'components';
import styles from 'features/client/style';
import { useEffect } from 'react';
import { useAppDispatch } from 'app/hooks';
import { ClientAPI } from './clientAPI';
import { setClientdata } from './clientSile';
import Listclient from './componts/listcilent/Listclient';
import Addclient from './componts/addclient/Addclient';
// const oldData = [...state.clients]
// state.clients = remove(oldData, item => item.id !== action.payload);
// const result = remove(state.clients, function (o) {
//   return o.id == action.payload;
// });
// state.clients = result;
const Client: React.FC<DashBoardScreenProps> = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    getDataClients();
  }, []);
  const getDataClients = async () => {
    const response = await ClientAPI.fetchClientData();

    dispatch(setClientdata(response));
  };
  return (
    <AppView style={styles.container}>
      <Addclient />
      <Listclient />
    </AppView>
  );
};
export default Client;
