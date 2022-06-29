import * as React from 'react';
import { DashBoardScreenProps } from 'app/type';
import { AppView } from 'components';
import styles from 'features/insurancetaxbanking/Fage/health_Insurance/style';
import MenuhealthInsurance from './menu/MenuhealthInsurance';
import FoodhealthInsurance from './food/FoodhealthInsurance';
const Healthinsurance: React.FC<DashBoardScreenProps> = () => {
  return (
    <AppView style={styles.container}>
      <MenuhealthInsurance />
      <FoodhealthInsurance />
    </AppView>
  );
};
export default Healthinsurance;
