import React from "react";
import {
    View,
    Text,
    Image, 
    TouchableWithoutFeedback}  from 'react-native'
import { Data } from "../../types";
import styles from './style'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";

export type UserListItemProps ={
    profile:Data
}

const UserListItem = (props: UserListItemProps) =>{
    const{ profile } = props;
    const user =profile

    const navigation = useNavigation()

    const onClick = () =>{
        navigation.navigate('Userprofile',{
            id:profile.id,
            name:profile.first_name
        })
    }

    return(
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.Container}>
                <View style={styles.leftContainer}>
                    <Image source={{uri: user.avatar}} style={styles.avatar}></Image>
                    <View style={styles.midContainer}>
                        <Text style={styles.username}>{user.first_name} {user.last_name}</Text>
                        <FontAwesome5 style={{marginRight:100,flex:1,alignSelf: 'flex-end',}} name="greater-than" size={12} color="grey" />
                        <Text style={styles.email}>{user.email}</Text>
                    </View>
                </View>
        
                
            </View>
        </TouchableWithoutFeedback>
    )
}

export default UserListItem