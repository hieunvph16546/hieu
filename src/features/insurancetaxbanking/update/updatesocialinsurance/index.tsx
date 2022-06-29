import * as React from 'react';
import { DashBoardScreenProps } from 'app/type';
import { AppView } from 'components';
import styles from 'features/insurancetaxbanking/update/updatesocialinsurance/style';
import Headerupdatesocialinsurance from './header/Headerupdatesocialinsurance';
import Menuupdatesocialinsurance from './menu/Menuupdatesocialinsurance';
import Foodupdatesocialinsurance from './food/Foodupdatesocialinsurance';
import Foodupdate from '../compontn/food/Foodupdate';
const Updatesocialinsurance: React.FC<DashBoardScreenProps> = () => {
  return (
    <AppView style={styles.container}>
      <Headerupdatesocialinsurance />
      <Menuupdatesocialinsurance />
      <Foodupdatesocialinsurance />
      <Foodupdate />
    </AppView>
  );
};
export default Updatesocialinsurance;
