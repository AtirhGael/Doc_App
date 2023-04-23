import { ScrollView, StyleSheet, Text, View,Image, Button, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import {Appbar,Avatar} from 'react-native-paper'
import { useRoute } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons';

// Purple: #7851a9
// Light blue: #088be9
// Black: #2e2c2c
const MyAppoinments = ({navigation}) => {
   const route =  useRoute()
  return (
  
        <View  style={{flex:1, backgroundColor:"#fff"}} >
        <Appbar.Header  style={{backgroundColor:"#fff"}}>
                <Appbar.BackAction size={35}  onPress={() => navigation.goBack()} color='#000' />
                <Appbar.Content title="My Appoinments" titleStyle={{color:'#000',fontSize:22,}} />
                <TouchableOpacity onPress={()=>navigation.navigate('tabs')} >
                <View style={styles.icon}>
                <Entypo name="dots-three-vertical" size={30}color="#088be9" />
                </View>
                </TouchableOpacity>
            </Appbar.Header>
      <View style={styles.center}>
        <Text style={styles.session}>Start Session</Text>
        <Avatar.Image size={250} source={route.params.image}/>
        <Text style={styles.name}>{route.params.name}</Text>

      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Edit Appoinments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnActive}>
            <Text style={styles.btnTextA}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  )
}

export default MyAppoinments

const styles = StyleSheet.create({
    center:{
        justifyContent:'center',
        alignItems:'center',
        gap:20,
        paddingTop:60
    },
    session:{
        paddingBottom:15,
        fontSize:20,
        color:'#7851a9',
        fontSize:27,
        fontWeight:'700'
    },
    name:{
        paddingTop:10,
        fontSize:29,
        fontWeight:'700',
        paddingBottom:19
    },
    button:{
        gap:10,
        padding:12,

    },
    btn:{
        height:60,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        borderWidth:2,
        borderColor:'#7851a9'
    },
    btnActive:{
        height:60,
        backgroundColor:'#7851a9',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        borderWidth:2,
        borderColor:'#7851a9'
    },
    btnText:{
        fontSize:23,
        color:'#7851a9'
    },
    btnTextA:{
        fontSize:23,
        color:'#fff'
    },
    icon:{
        height:45,
        width:40,
        borderRadius:8,
        backgroundColor:'#9bedff',
        alignItems:'center',
        justifyContent:'center',
        right:5

    }
 
})