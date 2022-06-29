import { AppText, AppTouchableOpacity, AppView } from 'components';
import React from 'react';
import { StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/core';

const Header: React.FC = () => {
  const navigation = useNavigation();
  return (
    <AppView style={styles.container}>
      <AppTouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={20} style={styles.antDesign} />
      </AppTouchableOpacity>
      <AppView style={styles.padding} />
      <AppText boldOrLight="bold" style={styles.title}>
        bảo hiểm ,thuế ,ngân hàng
      </AppText>
      <AppView style={styles.padding} />
      <AppTouchableOpacity>
        <AntDesign name="pluscircle" size={30} style={styles.antDesign} color="blue" />
      </AppTouchableOpacity>
    </AppView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '7%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  antDesign: {
    margin: 10,
  },
  padding: {
    width: 20,
  },
  title: {
    margin: 10,
    fontSize: 20,
  },
});
export default Header;
