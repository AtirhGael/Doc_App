import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar,Avatar } from 'react-native-paper';
import { AntDesign,FontAwesome ,Entypo} from '@expo/vector-icons';


const Menu = ({navigation}) => {
  return (
    <View  style={{flex:1, backgroundColor:"#fff",}}>
      <Appbar.Header  style={{backgroundColor:"#fff",height:90,alignSelf:'center',paddingRight:15}}>
                <Appbar.BackAction size={35} color='#000' onPress={() => navigation.goBack()} />
                <Appbar.Content title="Profile"  titleStyle={{fontSize:25,fontWeight:'700',color:"#000"}} />
               <View style={{height:45,width:45,borderRadius:10,backgroundColor:'#9bedff',justifyContent:'center',alignItems:'center'}}>
               <FontAwesome name="pencil" size={35} color="#0195f8" />
               </View>
            </Appbar.Header>
                
               <View style={{flexDirection:'row', gap:13, borderRadius:10,alignItems:'center',padding:20,width:'100%',height:120}}  >
               <Avatar.Image size={110} source={require('../../Doctor/assets/gael.jpg')} />
               <View style={{gap:8}}>
                  <Text style={{fontSize:20,fontWeight:'600'}}> Patient Name</Text>
                  <Text style={{fontSize:15}}> Patient Email</Text>
                  <Text style={{fontSize:15}}> Patient Address</Text>
               </View>
               </View >

               <View style={{flexDirection:'row', gap:13, borderRadius:10,alignItems:'center',padding:20,width:'100%',paddingBottom:20,}}>
                <View style={{height:55,width:55,borderRadius:10,backgroundColor:'#9bedff',justifyContent:'center',alignItems:'center'}}>
                <AntDesign name="exclamationcircle"size={35} color="#0195f8" />
                </View>
                <Text style={{fontSize:17,fontWeight:'600'}}> Help</Text>
               </View>

              < View style={{flexDirection:'row', gap:13, borderRadius:10,alignItems:'center',padding:20,width:'100%',paddingBottom:20,}}>
                <View style={{height:55,width:55,borderRadius:10,backgroundColor:'#9bedff',justifyContent:'center',alignItems:'center'}}>
                <FontAwesome name="bell" size={35} color="#0195f8" />
                </View>
                <Text style={{fontSize:17,fontWeight:'600'}}> Security</Text>
               </View>

               <View style={{flexDirection:'row', gap:13, borderRadius:10,alignItems:'center',padding:20,width:'100%',paddingBottom:30,}}>
                <View style={{height:55,width:55,borderRadius:10,backgroundColor:'#fee7ed',justifyContent:'center',alignItems:'center'}}>
                <Entypo name="log-out" size={35} color="#d44a71" />
                </View>
                <Text style={{fontSize:17,fontWeight:'600'}}> Logout</Text>
               </View>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({})