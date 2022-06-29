import * as React from 'react';
import { DashBoardScreenProps } from 'app/type';
import { AppView } from 'components';
import styles from 'features/insurancetaxbanking/update/Updatehealthinsurance/style';
import Headerupdatehealthinsurance from './header/Headerupdatehealthinsurance';
import Menuupdatehealthinsurance from './menu/Menuupdatehealthinsurance';
import Foodupdatehealthinsurance from './food/Foodupdatehealthinsurance';
import Foodupdate from '../compontn/food/Foodupdate';
const Updatehealthinsurance: React.FC<DashBoardScreenProps> = () => {
  return (
    <AppView style={styles.container}>
      <Headerupdatehealthinsurance />/
      <Menuupdatehealthinsurance />
      <Foodupdatehealthinsurance />
      <Foodupdate />
    </AppView>
  );
};
export default Updatehealthinsurance;
