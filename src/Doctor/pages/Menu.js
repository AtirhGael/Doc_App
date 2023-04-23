import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {Appbar,Divider} from 'react-native-paper'
import { AntDesign,FontAwesome5 } from '@expo/vector-icons';
import Logout from '../Components/Logout';


// Purple: #7851a9
// Light blue: #088be9
// Black: #2e2c2c

const Menu = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
       <Appbar.Header style={{backgroundColor:'#fff'}}>
                <Appbar.BackAction size={35} color='#000' onPress={() => navigation.goBack()} />
                <Appbar.Content  title="Profile" titleStyle={{fontSize:29,fontWeight:'600',color:'#000'}}  />
                </Appbar.Header>
                  
       <View style={{padding:20}}>
       <View style={styles.container}>
       <View style={styles.inner}>
           <Image source={require('../assets/3.png')} 
               style={{
                   height:'100%',
                   width:100,
                   resizeMode:'stretch'
               }}
            />
           <View style={styles.text}>
               <Text style={{fontSize:22, fontWeight:'bold',}}> Dr. Salome jean</Text>
               <Text style={{fontSize:15, }}> Medicine Spacialist</Text>
               <Text style={{fontSize:13}}> Good Health Clinic,bamenda</Text>
            </View>
           <TouchableOpacity
           onPress={()=>navigation.navigate('massaging')}
           >
           <View style={{justifyContent:'center',alignItems:'center'}}>
            <View style={styles.icon1}>
             <FontAwesome5 name="pen" size={25} color="#088be9" />
            </View>
           </View>
           </TouchableOpacity>
       </View>
     </View>
       </View>

           <View style={{ padding:20,gap:15}}>
           <View style={styles.line}>
            <Text style={styles.title}>Contact Us</Text>
            <AntDesign name="right" size={28} color="black" onPress={()=>navigation.navigate('contact')} />
           
           </View>
           <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'gray',
            }}/>
           </View>
           <View style={{ padding:20,gap:15}}>
           <View style={styles.line}>
            <Text style={styles.title}>Terms & Conditions</Text>
            <AntDesign name="right" size={28} color="black" onPress={()=>navigation.navigate('terms')} />
           
           </View>
           <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'gray',
            }}/>
           </View>
           <View style={{ padding:20,gap:15}}>
           <View style={styles.line}>
            <Text style={styles.title}>Privacy Policy</Text>
            <AntDesign name="right" size={28} color="black"
            onPress={()=>navigation.navigate('Policy')}
             />
           
           </View>
           <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'gray',
            }}/>
           </View>

           <View style={{ padding:20}}>
           <View style={styles.line1}>
            <Text style={{color:'red',fontSize:22,fontWeight:'600'}}>Logout</Text>    
            <Logout/>
           </View>
           </View>
           

        
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
  main:{
    display:'flex',
    flexDirection:'row',
    borderColor:'gray',
    borderWidth:1,
    borderRadius:10,
    width:'100%'
},
container:{
    display:'flex',
    flexDirection:'row',
    gap:10,
    alignItems:'center'
},
image:{
    height:110,
    width:100,
    resizeMode:'stretch',
},
name:{
    fontSize:22,
    fontWeight:'800'
},
call:{
    fontSize:18,
    
},
line:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
 
  alignItems:'center'
},
line1:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  width:'100%',
  maxWidth:'100%',
  gap:50,

},
title:{
  fontSize:20,
},
container:{
  width:'100%',
  height:130,
  borderColor:'gray',
  borderWidth:  1,
  borderRadius:10,
},
inner:{
  flexDirection:'row',
  height:'100%',
  width:'100%',
  maxWidth:'100%',
  display:'flex',
  alignItems:'center',
  gap:8
},
inner1:{
  flexDirection:'row',
  height:'100%',
  width:'100%',
  display:'flex',
  padding:10,
  justifyContent:'center',
  gap:30,
},
text:{
  paddingTop:5,
  gap:5,
},
icon:{
  height:50,
  width:50,
  borderRadius:25,
  backgroundColor:'#c9f9ff',
  justifyContent:'center',
  alignItems:'center'
},
icon1:{
  height:45,
  width:44,
  borderRadius:10,
  backgroundColor:'#c9f9ff',
  justifyContent:'center',
  alignItems:'center'
},
})