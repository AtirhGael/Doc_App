import { StyleSheet, View,Image, ScrollView } from 'react-native'
import React from 'react'
import { Appbar,Text } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { Avatar } from 'react-native-paper';

const Notifications = ({navigation}) => {
  return (
    <View style={{flex:1, backgroundColor:'#fff', paddingLeft:10,paddingRight:10}}>
      <View>
            <Appbar.Header style={{ backgroundColor:"#fff",padding:20}}>
            <Appbar.BackAction onPress={() => navigation.goBack()} size={35} /> 
                <Appbar.Content title="Notifications" titleStyle={{fontSize:25,fontWeight:'700',color:'#000'}} ty />  
            </Appbar.Header>
        </View>
        <ScrollView>
        <Text style={{padding:20,fontSize:20,fontWeight:'700',color:'#000'}}>Today, jan 08 2024</Text>

        <View style={{gap:35, padding:30}}>
        <View style={styles.content}>
        <Avatar.Image size={75} source={require('../assets/3.png')} />
          <View style={styles.flow}>
            <Text style={{paddingBottom:5, fontSize:16,fontWeight:'700',color:'#000'}}> New Schedule</Text>
            <Text> we have an appointment schedule with john for an eye surgery</Text>
          </View>
        </View>

        <View style={styles.content}>
        <Avatar.Image size={75} source={require('../assets/2.png')} />
          <View style={styles.flow}>
            <Text style={{paddingBottom:5, fontSize:16,fontWeight:'700',color:'#000'}}> New Schedule</Text>
            <Text style={{color:'#000'}}> we have an appointment schedule with john for an eye surgery</Text>
          </View>
        </View>
        </View>
        <Text style={{padding:20,fontSize:20,fontWeight:'700',color:'#000'}}>Yesterday, jan 08 2024</Text>

        <View style={{gap:35, padding:30}}>
        <View style={styles.content}>
        <Avatar.Image size={75} source={require('../assets/2.png')} />
          <View style={styles.flow}>
            <Text style={{paddingBottom:5, fontSize:16,fontWeight:'700',color:'#000'}}> New Schedule</Text>
            <Text style={{color:'#000'}}> we have an appointment schedule with john for an eye surgery</Text>
          </View>
        </View>

        <View style={styles.content}>
        <Avatar.Image size={75} source={require('../assets/1.png')} />
          <View style={styles.flow}>
            <Text style={{paddingBottom:5, fontSize:16,fontWeight:'700',color:'#000'}}> New Schedule</Text>
            <Text style={{color:'#000'}}> we have an appointment schedule with john for an eye surgery</Text>
          </View>
        </View>
        </View>
        </ScrollView>
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({
  content:{
    display:'flex',
    flexDirection:'row',
    height:70,   
   paddingRight:20,
    gap:8,
    alignItems:'center',
    justifyContent:'center',
    paddingBottom:10
  },
  flow:{
    height:'100%',
    width:'80%'
  },
})