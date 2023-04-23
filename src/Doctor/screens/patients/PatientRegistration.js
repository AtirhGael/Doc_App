import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import {Appbar,Button,Avatar } from 'react-native-paper'
import { ScrollView } from 'react-native'

const PatientRegistration = ({navigation}) => {
    const route = useRoute()

  return (
    <View style={{flex:1, backgroundColor:'#fff'}}>
        <Appbar.Header style={styles.header}>
                <Appbar.BackAction size={40} onPress={() => navigation.goBack()} color='#000' />
                <Appbar.Content title={route.params.name}titleStyle={{fontSize:30,fontWeight:'700',color:'#000'}} />
               
                <Avatar.Image size={60} source={route.params.image} />
            </Appbar.Header>
       
            <View style={{
            paddingTop:25,
            paddingLeft:10,
            height:'60%'
        }}>
        <ScrollView>
            <Text style={styles.upcoming}>Registration Information</Text>
        </ScrollView>
        </View>
        <View style={{ padding:20,height:'20%',justifyContent:'flex-end'}}>
        <Button style={{ height:50, backgroundColor:'red',elevation:5,justifyContent:'center'}}>
            <Text style={{color:'#fff',fontWeight:'500',fontSize:20}}>
               Delete Patient
            </Text>
            </Button>
        </View>

      <Text></Text>
    </View>
  )
}

export default PatientRegistration

const styles = StyleSheet.create({
    header:{
        height:100,
        marginRight:10,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        header:'20%'
    },
    image:{
        height:66,
        width:66,
        borderRadius:33,
        resizeMode:'stretch',
        
    },
    upcoming:{
        fontSize:20,
        fontWeight:'bold',
        padding:20
    },
})