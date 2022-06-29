import * as React from 'react';
import { AppScrollView, AppText, AppTouchableOpacity, AppView, RNAppTextInput } from 'components';
import { StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Picker from 'features/insurancetaxbanking/compontn/ficker/AppPicker';
import { useState } from 'react';
const Foodupdatecodetax: React.FC = () => {
  const [valuegd, setValuegd] = useState('Hà Nội');
  const persistentListItemgd = [
    { value: 'Hà Nội', key: 'Hà Nội' },
    { value: 'Hà Nội', key: 'Hà Nội' },
    { value: 'Hà Nội', key: 'Hà Nội' },
  ];
  return (
    <AppScrollView>
      <AppView style={styles.container}>
        <AppView>
          <AppView style={styles.viewtitle}>
            <AppView style={styles.title}>
              <RNAppTextInput style={styles.inputdate1} placeholder="1231231234534 " />
            </AppView>
          </AppView>
          <AppText boldOrLight="bold" style={styles.titleStyle1}>
            Mã số thuế cá nhân
          </AppText>
        </AppView>
        <AppView style={styles.viewpapding} />
        <AppView>
          <AppView style={styles.viewtitle}>
            <AppView style={styles.title}>
              <AppTouchableOpacity style={styles.inputdate1}>
                <AppText>Hà Nội</AppText>
              </AppTouchableOpacity>
              <FontAwesome name="calendar-o" size={15} style={{ marginTop: 20 }} />
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
              <Picker
                itemWidth={300}
                listItem={persistentListItemgd}
                value={valuegd}
                setValue={setValuegd}
                style={styles.inputdate}
              />
            </AppView>
          </AppView>
          <AppText boldOrLight="bold" style={styles.titleStyle2}>
            Cơ quan thuế quản lý cấp Tỉnh
          </AppText>
        </AppView>
        <AppView style={styles.viewpapding} />
        <AppView>
          <AppView style={styles.viewtitle}>
            <AppView style={styles.title}>
              <Picker
                itemWidth={300}
                listItem={persistentListItemgd}
                value={valuegd}
                setValue={setValuegd}
                style={styles.inputdate}
              />
            </AppView>
          </AppView>
          <AppText boldOrLight="bold" style={styles.titleStyle1}>
            Chi cục thuế
          </AppText>
        </AppView>
        <AppView style={styles.viewpapding} />
        <AppView>
          <AppView style={styles.viewtitle1}>
            <AppView style={styles.title}>
              <RNAppTextInput style={styles.inputdate} placeholder="Loẻm ípum Loẻm ípum Loẻm ípum  " />
            </AppView>
          </AppView>
          <AppText boldOrLight="bold" style={styles.titleStyle3}>
            Ghi chút
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
  viewtitle1: {
    width: '90%',
    margin: 20,
    height: 100,
    alignItems: 'center',
    borderWidth: 1,
  },
  titleStyle: {
    width: 60,
    fontSize: 14,
    marginTop: -80,
    marginLeft: 20,
    backgroundColor: 'white',
  },
  titleStyle3: {
    width: 60,
    fontSize: 14,
    marginTop: -130,
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
    width: 200,
    fontSize: 14,
    marginTop: -80,
    marginLeft: 20,
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
    height: 90,
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
export default Foodupdatecodetax;
