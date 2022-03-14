import React from "react";
import {
    View,
    Text,
    Image}  from 'react-native'
import {Data, Support} from '../../types'
import styles from './style'

export type ProfileDetailProps ={
    data:Data
}

const ProfileDetails = (props:ProfileDetailProps) => {
    const { data } = props

    return(
        
                <View style={styles.Container}>                   
                    <Text style={{fontSize: 30,padding:20,fontWeight: 'bold'}}>User profile</Text>
                    <Image source={{uri: data.avatar}} style={styles.avatar}></Image>
                    <View style={styles.bottomContainer}>
                        <Text style={styles.baseText}>Name</Text>
                        <Text style={styles.username}>{data.first_name} {data.last_name}</Text>
                        <Text style={styles.baseText}>Email</Text>
                        <Text style={styles.email}>{data.email}</Text>
                    </View>
                </View>
        
    )

}

export default ProfileDetails