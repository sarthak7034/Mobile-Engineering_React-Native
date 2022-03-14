import { StyleSheet } from 'react-native'

const styles =StyleSheet.create({

    Container:{
        flex:1,
        flexDirection: 'row',
        width:'100%',
        padding:10
    },
    leftContainer:{
        flexDirection: 'row'
    },
    midContainer:{
        flex:1,
        padding:10,
        flexDirection: 'column',
        justifyContent:'space-around'
    },
    avatar: {
        width:80,
        height: 80,
        marginRight:10
    },
    username:{
        fontWeight: 'bold',
        fontSize:18
    },
    email:{
        fontSize:15,
        color:'green'
    },

})

export default styles