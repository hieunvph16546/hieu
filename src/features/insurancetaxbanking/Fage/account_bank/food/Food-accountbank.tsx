import * as React from 'react';
import { AppScrollView, AppText, AppView } from 'components';
import { StyleSheet } from 'react-native';
const Foodaccountbank: React.FC = () => {
  return (
    <AppScrollView>
      <AppView style={styles.container}>
        <AppView style={styles.view}>
          <AppText style={styles.textdataleft}>Tên ngân hàng</AppText>
          <AppText style={styles.textdataleft}>Số tài khoản</AppText>
          <AppText style={styles.textdataleft}>Tên chủ tài khoản</AppText>
          <AppText style={styles.textdataleft}>Chi nhánh</AppText>
        </AppView>
        <AppView style={styles.view}>
          <AppText boldOrLight="bold" style={styles.textdata}>
            MB
          </AppText>
          <AppText boldOrLight="bold" style={styles.textdata}>
            1212381728172
          </AppText>
          <AppText boldOrLight="bold" style={styles.textdata}>
            NGUYEN TIEN DUNG
          </AppText>
          <AppText boldOrLight="bold" style={styles.textdata}>
            Chi nhánh Cát Linh
          </AppText>
        </AppView>
      </AppView>
    </AppScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
export default Foodaccountbank;
