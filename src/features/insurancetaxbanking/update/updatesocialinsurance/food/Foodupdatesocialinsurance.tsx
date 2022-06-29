import * as React from 'react';
import { AppScrollView, AppText, AppTouchableOpacity, AppView, RNAppTextInput } from 'components';
import { StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import Picker from 'features/insurancetaxbanking/compontn/ficker/AppPicker';
const Foodupdatesocialinsurance: React.FC = () => {
  const [valuegd, setValuegd] = useState('Hà Nội');
  const persistentListItemgd = [
    { value: 'Hà Nội', key: 'Hà Nội' },
    { value: 'Hà Nội', key: 'Hà Nội' },
  ];
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
            Mã bảo hiểm xã hội
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
          <AppText boldOrLight="bold" style={styles.titleStyle1}>
            Ngày tham gia
          </AppText>
        </AppView>
        <AppView style={styles.viewpapding} />
        <AppView>
          <AppView style={styles.viewtitle}>
            <AppView style={styles.title}>
              <AppTouchableOpacity style={styles.inputdate1}>
                <AppText>Hà Nội</AppText>
              </AppTouchableOpacity>
            </AppView>
          </AppView>
          <AppText boldOrLight="bold" style={styles.titleStyle}>
            Ngày cấp
          </AppText>
        </AppView>
        <AppView style={styles.viewpapding} />
        <AppView>
          <AppView style={styles.viewtitle}>
            <Picker
              itemWidth={300}
              itemHeight={30}
              listItem={persistentListItemgd}
              value={valuegd}
              setValue={setValuegd}
              style={styles.inputdateficke}
            />
          </AppView>
          <AppText boldOrLight="bold" style={styles.titleStyle}>
            Nơi cấp
          </AppText>
        </AppView>
        <AppView style={styles.viewpapding} />
        <AppView>
          <AppView style={styles.viewtitle}>
            <AppView style={styles.title}>
              <RNAppTextInput style={styles.inputdate1} placeholder="20/01/2020" />
              <FontAwesome name="calendar-o" size={15} />
            </AppView>
          </AppView>
          <AppText boldOrLight="bold" style={styles.titleStyle2}>
            Ngày bắt đầu đóng tại MC
          </AppText>
        </AppView>
        <AppView style={styles.viewpapding} />
        <AppView>
          <AppView style={styles.viewtitle}>
            <AppView style={styles.title}>
              <RNAppTextInput style={styles.inputdate1} placeholder="20/01/2020" />
              <FontAwesome name="calendar-o" size={15} />
            </AppView>
          </AppView>
          <AppText boldOrLight="bold" style={styles.titleStyle2}>
            Ngày kết thúc đóng tại MC
          </AppText>
          <AppView style={styles.viewpapding} />
        </AppView>
        <AppView>
          <AppView style={styles.viewtitle}>
            <AppView style={styles.title}>
              <RNAppTextInput style={styles.inputdate1} placeholder="Loẻm ípum Loẻm ípum Loẻm ípum  " />
            </AppView>
          </AppView>
          <AppText boldOrLight="bold" style={styles.titleStyle}>
            Ghi chú
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
    width: 130,
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
  inputdateficke: {
    with: 1000,
    height: 40,
    borderBottomColor: 'white',
    marginLeft: 10,
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
export default Foodupdatesocialinsurance;
