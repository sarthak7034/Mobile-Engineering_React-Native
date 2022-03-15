import { FlatList, StyleSheet } from 'react-native';
import React,{ Profiler} from 'react'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import  UserListItem  from '../components/UserListItem'
import useSWR from "swr";
import data_user from '../data/data_users'

export default function TabOneScreen() {

  const fetcher = (url:any) => fetch(url).then((res) => res.json());
  const {data,error} =   useSWR("https://reqres.in/api/users",fetcher)                   
  
  if (data) {
    return (
      <View style={styles.container}>
        <FlatList 
          style={{width:'100%'}}
          data={data_user[0].data}
          renderItem = {({item})=><UserListItem profile={item}/>}
          // keyExtractor={(item) =>item.id}
        />
        {/* <UserListItem profile={data_user[0].data[0]}/>   */}
      </View>
    );
  }
  else return "Loading...";
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
