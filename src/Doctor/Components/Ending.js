import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const Ending = ({navigation}) => {
  return (
    <View style={{height:'100%',backgroundColor:'#fff'}}>
        <View style={{height:'30%',justifyContent:'center' ,width:'100%',alignItems:'center'}}>
            <Text style={{fontSize:20,fontWeight:'500',}}> Message Ended</Text>
            <Text style={{fontSize:22,fontWeight:'700',top:15,color:'#7851a9'}}> 30:00 Minutes </Text>
        </View>
        <View style={{height:'40%',justifyContent:'flex-start' ,width:'100%',alignItems:'center'}}>
            <Image
            source={require('../../../assets/gael.jpg')}
            style={{
                height:'70%',
                width:'60%',
                borderRadius:110,
                resizeMode:'stretch'
            }}
            />
            <Text style={{fontSize:30,fontWeight:'700',top:15}}>Dr. Salome Joan</Text>
            </View>
      <View style={{height:'30%', justifyContent:'center' ,width:'100%',alignItems:'center'}}>
            <Pressable
            onPress={()=>navigation.navigate('Route')}
              style={styles.btn}
             >
              <Text style={styles.btnText}>Go to DashBoard</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Ending

const styles = StyleSheet.create({
    btn:{
        height:60,
        width:'80%',
        borderRadius:30,
        borderWidth:1,
        borderColor:'#7851a9',
        backgroundColor:'#7851a9',
        justifyContent:'center'
    },
    btnText:{
        color:'#fff',
        fontSize:20,
        alignItems:'center',
        fontWeight:'400',
        textAlign:'center'
    },
})