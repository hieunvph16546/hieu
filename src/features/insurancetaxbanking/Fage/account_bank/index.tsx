import * as React from 'react';
import { DashBoardScreenProps } from 'app/type';
import { AppView } from 'components';
import styles from 'features/insurancetaxbanking/Fage/account_bank/style';
import Foodaccountbank from './food/Food-accountbank';
import Menuaccountbank from './menu/Menu-accountbank';

const Accountbank: React.FC<DashBoardScreenProps> = () => {
  return (
    <AppView style={styles.container}>
      <Menuaccountbank />
      <Foodaccountbank />
    </AppView>
  );
};
export default Accountbank;
