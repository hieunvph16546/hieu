import * as React from 'react';
import { AppText, AppTouchableOpacity, AppView } from 'components';
import { StyleSheet } from 'react-native';
const Foodupdate: React.FC = () => {
  return (
    <AppView style={styles.container}>
      <AppView style={styles.padding} />
      <AppTouchableOpacity style={styles.food}>
        <AppText>Hủy</AppText>
      </AppTouchableOpacity>
      <AppView style={styles.padding} />
      <AppTouchableOpacity style={styles.food1}>
        <AppText style={styles.textstyle}>Lưu</AppText>
      </AppTouchableOpacity>
      <AppView style={styles.padding} />
    </AppView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
  },
  food: {
    width: '100%',
    borderWidth: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 6,
    borderColor: 'gray',
    flex: 1,
  },
  food1: {
    backgroundColor: 'blue',
    width: '100%',
    borderWidth: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 6,
    borderColor: 'gray',
    flex: 1,
  },
  padding: {
    flex: 0.1,
  },
  textstyle: {
    color: 'white',
  },
});
export default Foodupdate;
