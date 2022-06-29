import * as React from 'react';
import { AppScrollView, AppText, AppView, RNAppTextInput } from 'components';
import { StyleSheet } from 'react-native';
const Foodupdateaccounbank: React.FC = () => {
  return (
    <AppScrollView>
      <AppView style={styles.container}>
        <AppView>
          <AppView style={styles.viewtitle}>
            <AppView style={styles.title}>
              <RNAppTextInput style={styles.inputdate} placeholder="MB " />
            </AppView>
          </AppView>
          <AppText boldOrLight="bold" style={styles.titleStyle}>
            Tên ngân hàng *
          </AppText>
        </AppView>
        <AppView style={styles.viewpapding} />
        <AppView>
          <AppView style={styles.viewtitle}>
            <AppView style={styles.title}>
              <RNAppTextInput style={styles.inputdate1} placeholder="1023981209381092 " />
            </AppView>
          </AppView>
          <AppText boldOrLight="bold" style={styles.titleStyle}>
            Số tài khoản *
          </AppText>
        </AppView>
        <AppView style={styles.viewpapding} />
        <AppView>
          <AppView style={styles.viewtitle}>
            <AppView style={styles.title}>
              <RNAppTextInput style={styles.inputdate1} placeholder="NGUYEN TIEN DUNG " />
            </AppView>
          </AppView>
          <AppText boldOrLight="bold" style={styles.titleStyle1}>
            Tên chủ tài khoản *
          </AppText>
        </AppView>
        <AppView style={styles.viewpapding} />
        <AppView>
          <AppView style={styles.viewtitle}>
            <AppView style={styles.title}>
              <RNAppTextInput style={styles.inputdate1} placeholder="Chi nhánh Cát Linh " />
            </AppView>
          </AppView>
          <AppText boldOrLight="bold" style={styles.titleStyle2}>
            Chi nhánh
          </AppText>
        </AppView>
        <AppView style={styles.viewpapding} />
        <AppView>
          <AppView style={styles.viewtitle}>
            <AppView style={styles.title}>
              <RNAppTextInput style={styles.inputdate1} placeholder="123456456 " />
            </AppView>
          </AppView>
          <AppText boldOrLight="bold" style={styles.titleStyle}>
            Mã nhân viên
          </AppText>
        </AppView>
      </AppView>
    </AppScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 500,
    flex: 1,
    backgroundColor: 'white',
  },
  viewpapding: {
    height: 60,
  },
  viewtitle: {
    width: '90%',
    margin: 20,
    height: 50,
    alignItems: 'center',
    borderWidth: 1,
  },
  titleStyle: {
    width: 100,
    fontSize: 14,
    marginTop: -80,
    marginLeft: 20,
    backgroundColor: 'white',
  },
  titleStyle1: {
    width: 130,
    fontSize: 14,
    marginTop: -80,
    marginLeft: 20,
    backgroundColor: 'white',
  },
  titleStyle2: {
    width: 70,
    fontSize: 14,
    marginTop: -80,
    marginLeft: 20,
    backgroundColor: 'white',
  },
  inputdate1: {
    flex: 0.9,
    height: 40,
    backgroundColor: 'white',
    borderBottomColor: 'white',
  },
  inputdate: {
    flex: 0.9,
    height: 40,
    backgroundColor: 'white',
    borderBottomColor: 'white',
  },
  title: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    marginLeft: 25,
  },
});
export default Foodupdateaccounbank;
