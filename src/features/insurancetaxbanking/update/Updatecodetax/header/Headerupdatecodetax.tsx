import { AppText, AppTouchableOpacity, AppView } from 'components';
import React from 'react';
import { StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/core';
const Headerupdatecodetax: React.FC = () => {
  const navigation = useNavigation();
  return (
    <AppView style={styles.container}>
      <AppTouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={20} style={styles.antDesign} />
      </AppTouchableOpacity>
      <AppView style={styles.padding} />
      <AppText boldOrLight="bold" style={styles.title}>
        Cập nhật mã số thuế
      </AppText>
    </AppView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  antDesign: {
    margin: 10,
  },
  padding: {
    width: 10,
  },
  title: {
    margin: 10,
    fontSize: 20,
  },
});
export default Headerupdatecodetax;
