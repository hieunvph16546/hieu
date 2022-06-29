import { AppText, AppTouchableOpacity, AppView } from 'components';
import React from 'react';
import { StyleSheet } from 'react-native';
import { InsurancetaxbankingItem } from '../../InsurancetaxbankingSile';
interface IProps {
  item: InsurancetaxbankingItem;
  setNumder: any;
  index: number;
  numberValue: number;
}
const Itemmenu: React.FC<IProps> = ({ item, setNumder, index, numberValue }) => {
  const checkBackground = (numberIndex, indexValue: number) => {
    if (numberIndex === indexValue) {
      return { backgroundColor: '#0D6EFD' };
    } else {
      return { backgroundColor: '#F8F9FA' };
    }
  };
  const checkTitle = (numberIndex, indexValue: number) => {
    if (numberIndex === indexValue) {
      return { color: '#F8F9FA' };
    } else {
      return { color: '#0D6EFD' };
    }
  };
  return (
    <AppView style={styles.container}>
      <AppTouchableOpacity
        style={[styles.touchableOpacity, checkBackground(index, numberValue)]}
        onPress={() => {
          setNumder(item.id);
        }}>
        <AppText boldOrLight="bold" style={[styles.textmenu, checkTitle(index, numberValue)]}>
          {item.name}
        </AppText>
      </AppTouchableOpacity>
    </AppView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '18%',
  },
  touchableOpacityringht: {
    height: 50,
    width: 175,
    margin: 10,
    backgroundColor: 'blue',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textmenuringht: {
    color: 'white',
    fontSize: 14,
  },
  touchableOpacity: {
    height: 50,
    width: 175,
    margin: 10,
    backgroundColor: '#F8F9FA',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textmenu: {
    color: 'blue',
    fontSize: 14,
  },
});
export default Itemmenu;
