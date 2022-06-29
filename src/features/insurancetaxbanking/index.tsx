import * as React from 'react';
import { DashBoardScreenProps } from 'app/type';
import { AppView } from 'components';
import styles from 'features/insurancetaxbanking/style';
import Menu from './compontn/menu/Menu';
import Header from './compontn/header/Header';
const Insurancetaxbanking: React.FC<DashBoardScreenProps> = () => {
  return (
    <AppView style={styles.container}>
      <Header />
      <Menu />
    </AppView>
  );
};
export default Insurancetaxbanking;
