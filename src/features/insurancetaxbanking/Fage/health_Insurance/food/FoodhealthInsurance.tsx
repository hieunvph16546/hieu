import * as React from 'react';
import { AppScrollView, AppText, AppView } from 'components';
import { StyleSheet } from 'react-native';
const FoodhealthInsurance: React.FC = () => {
  return (
    <AppScrollView>
      <AppView style={styles.container}>
        <AppView style={styles.view}>
          <AppText style={styles.textdataleft}>Số thẻ BHYT</AppText>
          <AppText style={styles.textdataleft}>Ngày tham gia</AppText>
          <AppText style={styles.textdataleft}>Ngày cấp</AppText>
          <AppText style={styles.textdataleft}>Nơi cấp</AppText>
          <AppText style={styles.textdataleft}>Ngày bắt đầu đóng tại MC</AppText>
          <AppText style={styles.textdataleft}>Ngày kết thúc đóng tại MC</AppText>
          <AppText style={styles.textdataleft}>Địa phương đăng ký KCB</AppText>
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
            20/11/2020
          </AppText>
          <AppText boldOrLight="bold" style={styles.textdata}>
            Hà Nội
          </AppText>
          <AppText boldOrLight="bold" style={styles.textdata}>
            20/11/2020
          </AppText>
          <AppText boldOrLight="bold" style={styles.textdata}>
            20/11/2020
          </AppText>
          <AppText boldOrLight="bold" style={styles.textdata}>
            BV Đa Khoa Thu Cúc
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
export default FoodhealthInsurance;
