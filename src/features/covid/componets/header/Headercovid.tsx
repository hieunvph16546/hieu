//import { useAppSelector } from 'app/hooks';
import { AppText, AppView } from 'components';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { translate } from 'utils';
const Headercovid: React.FC = () => {
  //const headercovid = useAppSelector(state => state.covidState.covids);
  const { colors } = useTheme();
  return (
    <AppView style={styles.container}>
      <AppView style={styles.textView}>
        <AppText>{translate('number_of_cases')}</AppText>
        {/* <AppText style={styles.fonttext}>{headercovid.Global.NewConfirmed}</AppText> */}
        <AppText style={styles.fonttext}>hh</AppText>
        <AppView style={styles.textView1}>
          <Ionicons name="add" size={15} />
          {/* <AppText style={{ color: colors.grey }}>{headercovid.Global.NewDeaths}</AppText> */}
          <AppText style={{ color: colors.grey }}>hh</AppText>
        </AppView>
      </AppView>
      <AppView style={styles.textView}>
        <AppText>{translate('number_of_deaths')}</AppText>
        {/* <AppText style={styles.fonttext}>{headercovid.Global.TotalDeaths}</AppText> */}
        <AppText style={styles.fonttext}>hh</AppText>
        <AppView style={styles.textView1}>
          <Ionicons name="add" size={15} />
          {/* <AppText style={{ color: colors.grey }}>{headercovid.Global.NewRecovered}</AppText> */}
          <AppText style={{ color: colors.grey }}>hh</AppText>
        </AppView>
      </AppView>
    </AppView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '10%',
    flexDirection: 'row',
    margin: 20,
  },
  textView: {
    flex: 1,
  },
  textView1: {
    flexDirection: 'row',
  },
  fonttext: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
});
export default Headercovid;
