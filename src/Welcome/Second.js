import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper';



const Second = ({navigation}) => {
  return (
    <View style={{flex:1, backgroundColor:'#fff'}}>
      <Card style={{flex:0.6, backgroundColor:'#fff'}}>
        <Card.Cover source={require('../../assets/2.png')} style={{ height:'100%',resizeMode:'cover'  }}/> 
    </Card>


    <View style={{flex:0.4, backgroundColor:'#fff',padding:20,top:25 }}>

        <Text style={styles.first}>Patient Follow Up</Text>
        <Text style={styles.second}> You can easily contact with thousands of doctors and contacts for your needs. </Text>

            <Text style={{textAlign:'center',paddingBottom:10,color:'#088be9',fontSize:15 }}></Text>
        <Button style={styles.btn} onPress={()=>navigation.navigate('Portal')} >
            <Text style={styles.btnText}> Next</Text>
        </Button>
    </View>
    </View>
  )
}
 
// Purple: #7851a9
// Light blue: #088be9
// Black: #2e2c2c

export default Second

const styles = StyleSheet.create({
    first:{
       
        textAlign:'center',
        fontSize:22,
        fontWeight:'700',
        color:'#7851a9',
        paddingBottom:30,
    },
    second:{
        textAlign:'center',
        fontSize:18,
        fontWeight:'500',
        paddingBottom:50,
        color:'#2e2c2c'
        
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