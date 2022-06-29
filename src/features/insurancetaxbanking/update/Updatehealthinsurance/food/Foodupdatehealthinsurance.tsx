import * as React from 'react';
import { AppScrollView, AppText, AppTouchableOpacity, AppView, RNAppTextInput } from 'components';
import { StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Foodupdatehealthinsurance: React.FC = () => {
  return (
    <AppScrollView>
      <AppView style={styles.container}>
        <AppView>
          <AppView style={styles.viewtitle}>
            <AppView style={styles.title}>
              <RNAppTextInput style={styles.inputdate} placeholder="1231231234534" />
            </AppView>
          </AppView>
          <AppText boldOrLight="bold" style={styles.titleStyle1}>
            Số thẻ BHYT
          </AppText>
        </AppView>
        <AppView style={styles.viewpapding} />
        <AppView>
          <AppView style={styles.viewtitle}>
            <AppView style={styles.title}>
              <AppTouchableOpacity style={styles.inputdate1}>
                <AppText>20/11/2020</AppText>
              </AppTouchableOpacity>
              <FontAwesome name="calendar-o" size={15} />
            </AppView>
          </AppView>
          <AppText boldOrLight="bold" style={styles.titleStyle}>
            Ngày cấp
          </AppText>
        </AppView>
        <AppView style={styles.viewpapding} />
        <AppView>
          <AppView style={styles.viewtitle}>
            <AppView style={styles.title}>
              <AppTouchableOpacity style={styles.inputdate1}>
                <AppText>Hà Nội</AppText>
              </AppTouchableOpacity>
              <FontAwesome name="calendar-o" size={15} />
            </AppView>
          </AppView>
          <AppText boldOrLight="bold" style={styles.titleStyle1}>
            Ngày hiệu lực
          </AppText>
        </AppView>
        <AppView style={styles.viewpapding} />
        <AppView>
          <AppView style={styles.viewtitle}>
            <AppView style={styles.title}>
              <AppTouchableOpacity style={styles.inputdate1}>
                <AppText>20/11/2020</AppText>
              </AppTouchableOpacity>
              <FontAwesome name="calendar-o" size={15} />
            </AppView>
          </AppView>
          <AppText boldOrLight="bold" style={styles.titleStyle2}>
            Ngày giao cho nhân viên
          </AppText>
        </AppView>
        <AppView style={styles.viewpapding} />
        <AppView>
          <AppView style={styles.viewtitle}>
            <AppView style={styles.title}>
              <RNAppTextInput style={styles.inputdate1} placeholder="MCredit" />
            </AppView>
          </AppView>
          <AppText boldOrLight="bold" style={styles.titleStyle1}>
            Đầu mối nhận
          </AppText>
        </AppView>
        <AppView style={styles.viewpapding} />
        <AppView>
          <AppView style={styles.viewtitle}>
            <AppView style={styles.title}>
              <RNAppTextInput style={styles.inputdate1} placeholder="Hà Nội" />
            </AppView>
          </AppView>
          <AppText boldOrLight="bold" style={styles.titleStyle2}>
            Địa phương đăng ký KCB
          </AppText>
          <AppView style={styles.viewpapding} />
        </AppView>
        <AppView>
          <AppView style={styles.viewtitle}>
            <AppView style={styles.title}>
              <RNAppTextInput style={styles.inputdate1} placeholder="Địa phương đăng ký KCB  " />
            </AppView>
          </AppView>
          <AppText boldOrLight="bold" style={styles.titleStyle2}>
            BV Đa Khoa Thu Cúc
          </AppText>
        </AppView>
      </AppView>
    </AppScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 600,
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
    width: 70,
    fontSize: 14,
    marginTop: -80,
    marginLeft: 25,
    backgroundColor: 'white',
  },
  titleStyle1: {
    width: 100,
    fontSize: 14,
    marginTop: -80,
    marginLeft: 25,
    backgroundColor: 'white',
  },
  titleStyle2: {
    width: 170,
    fontSize: 14,
    marginTop: -80,
    marginLeft: 25,
    backgroundColor: 'white',
  },
  inputdate1: {
    flex: 0.9,
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
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
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Foodupdatehealthinsurance;
