import { AppText, AppView } from 'components';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { translate } from 'utils';

const Menucovid: React.FC = () => {
  const { colors } = useTheme();
  return (
    <AppView style={styles.container}>
      <AppView style={styles.textvieW}>
        <AppText style={{ color: colors.grey }}>{translate('location')}</AppText>
      </AppView>
      <AppView style={styles.textvieW1}>
        <AppText style={{ color: colors.grey }}>{translate('number_of_cases')}</AppText>
        <AntDesign name="arrowdown" size={15} />
      </AppView>
      <AppView style={styles.textvieW2}>
        <AppText style={{ color: colors.grey }}>{translate('number_of_deaths')}</AppText>
      </AppView>
    </AppView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '20%',
  },
  textvieW: {
    flex: 0.8,
  },
  textvieW1: {
    flex: 0.7,
    flexDirection: 'row',
  },
  textvieW2: {
    flex: 0.5,
    alignItems: 'flex-end',
  },
});
export default Menucovid;
