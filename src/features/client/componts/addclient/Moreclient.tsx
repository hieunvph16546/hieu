import * as React from 'react';
import { AppText, AppTextInput, AppTouchableOpacity, AppView } from 'components';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
const Moreclient: React.FC = () => {
  const { colors } = useTheme();
  return (
    <AppView style={styles.container}>
      <AppView>
        <AppView>
          <AppTextInput
            placeholder="Tìm Kiếm..."
            style={[styles.TextInputsearch, { borderColor: colors.borderGrey }]}></AppTextInput>
        </AppView>
      </AppView>
      <AppView style={styles.viewSearch}>
        <AppTouchableOpacity style={styles.searchcb}>
          <FontAwesomeIcon name="search" size={15} color="white" />
          <AppText style={styles.textsearchcb}>thêm</AppText>
        </AppTouchableOpacity>
        <AppTouchableOpacity style={styles.searchnc}>
          <AntDesign name="menu-unfold" size={15} color="#6186f1" />
          <AppText style={styles.textsearchnc}>sữa</AppText>
        </AppTouchableOpacity>
      </AppView>
    </AppView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  TextInputsearch: {
    width: '94%',
    borderWidth: 3,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'gray',
    height: 40,
    margin: 10,
    borderBottomRadius: 10,
  },
  viewSearch: {
    flexDirection: 'row',
  },
  textsearchnc: {
    marginLeft: 5,
    color: '#6186f1',
  },
  searchnc: {
    flexDirection: 'row',
    borderWidth: 2,
    backgroundColor: 'white',
    borderRadius: 5,
    height: 40,
    width: '43.5%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderColor: '#7989ec',
  },
  searchcb: {
    flexDirection: 'row',
    borderWidth: 0.5,
    backgroundColor: '#6186f1',
    borderRadius: 5,
    height: 40,
    width: '43.5%',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
  },
  textsearchcb: {
    color: 'white',
    marginLeft: 10,
  },
});
export default Moreclient;
