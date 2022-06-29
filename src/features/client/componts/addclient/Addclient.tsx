import * as React from 'react';
import { AppView } from 'components';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
const Addclient: React.FC = () => {
  // const { colors, fonts } = useTheme();
  // const [isActive, setIsActive] = useState(false);
  // const [enabledsearch, setenabledsearch] = useState<boolean>(false);
  // const onPressSearch = () => {
  //   setIsActive(!isActive);
  //   setenabledsearch(!enabledsearch);
  // };
  // const [posts,setposts]= useState();
  // const addPost= async () => {
  //   const post={title:"new post",body:"new"};
  //   await axios.post(apiClient,post);
  //    setposts([post,...posts]);
  // }
  // const updatePost= async post => {
  //   post.title = 'update title'
  //   await axios.put(apiClient+"/"+post.id);
  //   const postsClone = [...posts];
  //   const index = postsClone.indexOf(post);
  //   postsClone[index]={...post};
  // }
  return (
    <AppView style={styles.container}>
      <AppView style={styles.btnView}>
        <FAB style={styles.fab} small icon="plus" onPress={() => console.log('Pressed')} />
      </AppView>
    </AppView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  btnView: {
    marginRight: 50,
  },
  searchcb: {
    flexDirection: 'row',
    borderWidth: 0.5,
    backgroundColor: '#6186f1',
    borderRadius: 5,
    height: 40,
    width: '10%',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
  },
  textsearchcb: {
    color: 'white',
    marginLeft: 10,
  },
  fab: {
    position: 'relative',
    margin: 16,
    marginTop: 40,
    right: 0,
    bottom: 0,
  },
  textInput: {
    position: 'relative',
    margin: 18,
  },
  btn: {
    marginTop: 20,
  },
});
export default Addclient;
