import * as React from 'react';
import { DashBoardScreenProps } from 'app/type';
import { AppView } from 'components';
import styles from 'features/insurancetaxbanking/Fage/social_insurance/style';
import Foodsocialinsurance from './food/Food-socialinsurance';
import Menusocialinsurance from './menu/Menu-socialinsurance';
const Socialinsurance: React.FC<DashBoardScreenProps> = () => {
  return (
    <AppView style={styles.container}>
      <Menusocialinsurance />
      <Foodsocialinsurance />
    </AppView>
  );
};
export default Socialinsurance;
