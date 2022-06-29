import * as React from 'react';
import { AppScrollView, AppView } from 'components';
import { StyleSheet } from 'react-native';
import image from 'assets/icons';
import { translate } from 'utils';
import HomeItem from './HomeItem';
import { useNavigation } from '@react-navigation/core';

const Itemhome: React.FC = () => {
  const navigation = useNavigation();
  return (
    <AppScrollView>
      <AppView style={styles.container}>
        <AppView style={styles.viewLeft}>
          <HomeItem
            title={translate('Insurance_tax_banking')}
            image={image.IC_CAPITAL}
            onPress={() => navigation.navigate('Insurancetaxbanking')}
          />
          <HomeItem title={translate('health')} image={image.IC_HEADER} />
          <HomeItem title={translate('certificate')} image={image.IC_CERTIFICATE} />
          <HomeItem title={translate('documents')} image={image.IC_DOCUMENT} />
          <HomeItem title={translate('party_union')} image={image.IC_MINIMC} />
          <HomeItem title={translate('at_MC')} image={image.IC_DEGREE} />
          <HomeItem title={translate('Bonus')} image={image.IC_GIFT} />
        </AppView>
        <AppView style={styles.viewRinght}>
          <HomeItem title={translate('relative')} image={image.IC_RELATIVE} />
          <HomeItem title={translate('degree')} image={image.IC_DEGREE} />
          <HomeItem title={translate('before_MC')} image={image.IC_BAG} />
          <HomeItem title={translate('military')} image={image.IC_DEGREE} />
          <HomeItem title={translate('personal_capacity_set')} image={image.IC_DOCUMENT} />
          <HomeItem title={translate('contract')} image={image.IC_CAPITAL} />
          <HomeItem title={translate('discipline')} image={image.IC_CONTRACT} />
        </AppView>
      </AppView>
    </AppScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    flex: 1,
  },
  viewLeft: {
    flex: 0.8,
    margin: 10,
  },
  viewRinght: {
    flex: 0.8,
    margin: 10,
  },
});
export default Itemhome;
