import React from "react";
import { Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import profile_data from '../data/profile_data'
import ProfileDetails from '../components/ProfileDetail/index'

const User_Profile = () =>{

    const route = useRoute()
    // console.log(route.params)


    return (
        <ProfileDetails data={profile_data[0].data}></ProfileDetails>
    )

}
export default User_Profile