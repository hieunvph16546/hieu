import * as React from 'react';
import { DashBoardScreenProps } from 'app/type';
import { AppView } from 'components';
import styles from 'features/home/style';
import Headerhome from './copmponts/header/Headerhome';
import Itemhome from './copmponts/list/Menuhome';
const Home: React.FC<DashBoardScreenProps> = () => {
  return (
    <AppView style={styles.container}>
      <Headerhome />
      <Itemhome />
    </AppView>
  );
};
export default Home;
