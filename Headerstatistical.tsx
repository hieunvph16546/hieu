import * as React from 'react';
import {AppText, AppView} from 'components';
import { StyleSheet } from 'react-native';
import { translate } from 'utils';
const Headerstatistical: React.FC = () => {
  return (
    <AppView style={styles.container}>
       <AppView style={styles.viewtext}>
           <AppText>{translate('number_of_cases')}</AppText>
           <AppText>hh</AppText>
           <AppText>hh</AppText>
       </AppView>
       <AppView style={styles.viewtext}>
           <AppText>{translate('number_of_deaths')}</AppText>
           <AppText>jj</AppText>
           <AppText>jj</AppText>
       </AppView>
    </AppView>
  );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height:100,
        backgroundColor:'white'
    },
    viewtext:{
        flex:1,
    }
})
export default Headerstatistical;
