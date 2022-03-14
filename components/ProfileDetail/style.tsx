import { StyleSheet } from 'react-native'

const styles =StyleSheet.create({
    
    Container:{
        flex: 1,
        flexDirection: 'column',
        width:'100%',
        padding:10,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor:'white'
    },
    avatar: {
        width:200,
        height: 200,
        marginRight:10,
        padding:10,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    username:{
        fontWeight: 'bold',
        fontSize:15,
        padding:20,
        // alignItems: 'center',
    
    },
    email:{
        fontSize:15,
        color:'green',
        padding:15,
        // alignItems: 'center',
 
    },
    bottomContainer:{
        justifyContent: 'space-around',
        padding:10,
        alignItems: 'center',
    },
    baseText:{
        fontSize: 20,
        fontWeight: "bold"
    }
})    
export default styles