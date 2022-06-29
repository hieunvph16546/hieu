import * as React from 'react';
import { AppText, AppTouchableOpacity, AppView } from 'components';
import { ClientData, deleteById, searchByid } from 'features/client/clientSile';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

import { useAppDispatch } from 'app/hooks';
// import {deleteById} from './clientSile';
interface IProps {
  item: ClientData;
}
const Itemclient: React.FC<IProps> = ({ item }) => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  // const [posts, setposts] = useState();
  // const deletepost = async post => {
  // Alert.alert('bạn có chắc chắn muốn xóa không');
  // await axios.delete(apiClient + '/' + post.id);
  // setposts(posts.filter(p => p.id !== post.id));
  // };
  const onPressDelete = () => {
    dispatch(deleteById(item.id));
  };
  const onPressSearch = () => {
    dispatch(searchByid(item.id));
  };
  return (
    <AppView style={[styles.container, { borderColor: colors.borderGrey }]}>
      <AppView style={styles.Itemview}>
        <AppView>
          <AppText>{item.id}</AppText>
        </AppView>
        <AppView>
          <AppText>{item.title}</AppText>
        </AppView>
        <AppView>
          <AppText>{item.body}</AppText>
        </AppView>
      </AppView>
      <AppView style={styles.xoaView}>
        <AppView>
          <AppTouchableOpacity style={styles.touchableOpacity} onPress={onPressDelete}>
            <AppText>xóa</AppText>
          </AppTouchableOpacity>
        </AppView>
        <AppView>
          <AppTouchableOpacity style={styles.touchableOpacity} onPress={onPressSearch}>
            <AppText>xem chi tiết</AppText>
          </AppTouchableOpacity>
        </AppView>
      </AppView>
    </AppView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  touchableOpacity: {
    flexDirection: 'row',
    borderWidth: 2,
    backgroundColor: 'white',
    borderRadius: 5,
    height: 40,
    marginLeft: 5,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    borderColor: '#7989ec',
  },
  Itemview: {
    justifyContent: 'center',
    height: 150,
    marginLeft: 10,
    flex: 1,
    borderBottomWidth: 2,
    borderColor: '#7989ec',
  },
  xoaView: {
    flex: 0.3,
    flexDirection: 'row',
    height: 150,
    borderBottomWidth: 2,
    borderColor: '#7989ec',
  },
});
export default Itemclient;
