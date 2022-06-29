import { useAppSelector } from 'app/hooks';
import { AppFlatList, AppView } from 'components';
import Accountbank from 'features/insurancetaxbanking/Fage/account_bank';
import Codetaxnumber from 'features/insurancetaxbanking/Fage/code_tax_number';
import HealthInsurance from 'features/insurancetaxbanking/Fage/health_Insurance';
import Socialinsurance from 'features/insurancetaxbanking/Fage/social_insurance';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { InsurancetaxbankingItem } from '../../InsuranceTaxBankingSile';
import Itemmenu from './Itemmenu';
const Menu: React.FC = () => {
  const [number, setNumder] = useState(0);

  const transferfage = () => {
    switch (number) {
      case 0:
        return <Socialinsurance navigation={undefined} route={undefined} />;
      case 1:
        return <HealthInsurance navigation={undefined} route={undefined} />;
      case 2:
        return <Codetaxnumber navigation={undefined} route={undefined} />;
      case 3:
        return <Accountbank navigation={undefined} route={undefined} />;
      default:
        return <Socialinsurance navigation={undefined} route={undefined} />;
    }
  };
  const data = useAppSelector(state => state.insurancetaxbankingState.insurancetaxbankings);
  const renderItem = (item: InsurancetaxbankingItem, index: number) => {
    return <Itemmenu item={item} setNumder={setNumder} index={index} numberValue={number} />;
  };
  return (
    <AppView style={styles.container}>
      <AppView style={styles.viewMenu}>
        <AppFlatList
          data={data}
          horizontal={true}
          renderItem={({ item, index }) => renderItem(item as InsurancetaxbankingItem, index)}
        />
      </AppView>
      <AppView style={styles.viewFood}>{transferfage()}</AppView>
    </AppView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  viewMenu: {
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  viewFood: {
    height: '90%',
    backgroundColor: 'blue',
  },
});
export default Menu;
