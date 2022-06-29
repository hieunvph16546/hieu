import * as React from 'react';
import { DashBoardScreenProps } from 'app/type';
import { AppView } from 'components';
import styles from 'features/insurancetaxbanking/Fage/code_tax_number/style';
import Menucodetaxnumber from './menu/Menu-codetaxnumber';
import Foodcodetaxnumber from './food/Foodcodetaxnumber';
const Codetaxnumber: React.FC<DashBoardScreenProps> = () => {
  return (
    <AppView style={styles.container}>
      <Menucodetaxnumber />
      <Foodcodetaxnumber />
    </AppView>
  );
};
export default Codetaxnumber;
