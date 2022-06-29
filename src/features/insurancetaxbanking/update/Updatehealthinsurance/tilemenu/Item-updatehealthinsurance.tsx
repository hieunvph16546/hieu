import { AppText, AppView } from 'components';
import React from 'react';
import { StyleSheet, Switch } from 'react-native';

const Itemupdatehealthinsurance: React.FC = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <AppView style={styles.container}>
      <AppView style={styles.viewTiles}>
        <AppText boldOrLight="bold" style={styles.textmenu}>
          Đóng bảo hiểm y tế
        </AppText>
        <Switch style={styles.Switch} value={isSwitchOn} onValueChange={onToggleSwitch} />
      </AppView>
    </AppView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  viewTiles: {
    flexDirection: 'row',
  },
  viewdraw: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    marginTop: 10,
  },
  textmenu: {
    fontSize: 15,
    marginLeft: 20,
  },
  Switch: {
    marginLeft: 140,
  },
});
export default Itemupdatehealthinsurance;
