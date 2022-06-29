import * as React from 'react';
import { AppScrollView, AppText, AppView } from 'components';
import { StyleSheet } from 'react-native';
const Foodcodetaxnumber: React.FC = () => {
  return (
    <AppScrollView>
      <AppView style={styles.container}>
        <AppView style={styles.view}>
          <AppText style={styles.textdataleft}>Mã số thuế cá nhân</AppText>
          <AppText style={styles.textdataleft}>Ngày cấp</AppText>
          <AppText style={styles.textdataleft}>Cơ quan thuế quản lý cấp Tỉnh</AppText>
          <AppText style={styles.textdataleft}>Chi cục thuế</AppText>
          <AppText style={styles.textdataleft}>Ghi chú</AppText>
        </AppView>
        <AppView style={styles.view}>
          <AppText boldOrLight="bold" style={styles.textdata}>
            012312456458
          </AppText>
          <AppText boldOrLight="bold" style={styles.textdata}>
            20/11/2020
          </AppText>
          <AppText boldOrLight="bold" style={styles.textdata}>
            Hà Nội
          </AppText>
          <AppText boldOrLight="bold" style={styles.textdata}>
            Hà Nội
          </AppText>
          <AppText boldOrLight="bold" style={styles.textdata}>
            Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
          </AppText>
        </AppView>
      </AppView>
    </AppScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '100%',
    flex: 1,
  },
  view: {
    flex: 1,
    margin: 20,
  },
  textdata: {
    marginTop: 30,
  },
  textdataleft: {
    marginTop: 30,
    color: 'gray',
  },
});
export default Foodcodetaxnumber;
