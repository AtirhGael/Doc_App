import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, } from 'react-native-paper';


const Congrats = ({navigation}) => {
  return (
    <View style={{height:'100%'}}>
      <View style={{height:'40%'}} ></View>
      <View style={{height:'60%',padding:20}} >
        <View  style={{height:'30%'}}>
        <Text style={styles.text}>Tele-Epilepsy</Text>
        </View>
        <View  style={{height:'30%'}}>
        <Text style={styles.text}>Congrats!</Text>
        <Text style={styles.alfa}>Your account is ready to use</Text>
        </View>
        <View  style={{height:'40%',justifyContent:'flex-end',}}>
        <Button style={styles.btn} onPress={()=>navigation.navigate('Doctor')} >
            <Text style={styles.btnText}> Done</Text>
        </Button>
        </View>
      </View>
    </View>
  )
}

export default Congrats

const styles = StyleSheet.create({
    text:{
        textAlign:'center',
        fontSize:40,
        fontWeight:'800',
        color:'#7851a9',
    },
    alfa:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'400',
        
    },
    btn:{
        height:60,
        width:'100%',
        justifyContent:'center',
        backgroundColor:'#7851a9',
        borderRadius:30,
    },
    btnText:{
        fontSize:20,
        fontWeight:'500',
        alignItems:'center',
        justifyContent:'center',
        color:'#fff'
    },
})