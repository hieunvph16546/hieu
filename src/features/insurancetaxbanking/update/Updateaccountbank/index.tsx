import * as React from 'react';
import { DashBoardScreenProps } from 'app/type';
import { AppView } from 'components';
import styles from 'features/insurancetaxbanking/update/Updateaccountbank/style';
import Headerupdateaccountbank from './header/Headerupdateaccountbank';
import Menuupdateaccountbank from './menu/Menuupdateaccountbank';
import Foodupdateaccounbank from './food/Foodupdateaccounbank';
import Foodupdate from '../compontn/food/Foodupdate';
const UpdateAccountbank: React.FC<DashBoardScreenProps> = () => {
  return (
    <AppView style={styles.container}>
      <Headerupdateaccountbank />
      <Menuupdateaccountbank />
      <Foodupdateaccounbank />
      <Foodupdate />
    </AppView>
  );
};
export default UpdateAccountbank;
