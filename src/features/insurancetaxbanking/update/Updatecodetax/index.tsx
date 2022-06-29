import * as React from 'react';
import { DashBoardScreenProps } from 'app/type';
import { AppView } from 'components';
import styles from 'features/insurancetaxbanking/update/Updatecodetax/style';
import Headerupdatecodetax from './header/Headerupdatecodetax';
import Menupdatecodetax from './menu/Menupdatecodetax';
import Foodupdatecodetax from './food/Foodupdatecodetax';
import Foodupdate from '../compontn/food/Foodupdate';
const Updatecodetax: React.FC<DashBoardScreenProps> = () => {
  return (
    <AppView style={styles.container}>
      <Headerupdatecodetax />
      <Menupdatecodetax />
      <Foodupdatecodetax />
      <Foodupdate />
    </AppView>
  );
};
export default Updatecodetax;
