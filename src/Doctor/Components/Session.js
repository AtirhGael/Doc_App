import { StyleSheet, Text, View,TouchableOpacity,Pressable, Image} from 'react-native'
import React from 'react'
import { Appbar,Button, } from 'react-native-paper';
import { Entypo,Ionicons} from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
// import { useParams } from 'react-native'


const Session = ({navigation}) => {
    const route = useRoute()

    

  return (
    <View style={{height:'100%',backgroundColor:'#fff'}}>
        
        <View style={{height:'10%'}} >
        <Appbar.Header style={{ backgroundColor:"#fff",paddingRight:20,paddingTop:20}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} size={35} /> 
        <Appbar.Content title="Book Appointment" titleStyle={{fontSize:25,fontWeight:'700'}}  />           
            <TouchableOpacity
           onPress={()=>navigation.navigate('end')}
           >
           <View style={{justifyContent:'center',alignItems:'center'}}>
            <View style={styles.icon1}>
            <Entypo name="dots-three-vertical" size={25} color="#088be9" />
            </View>
           </View>
           </TouchableOpacity>
        </Appbar.Header>
        </View>
        <View style={{height:'30%',justifyContent:'center' ,width:'100%',alignItems:'center'}}>
           
            <Text style={{fontSize:22,fontWeight:'700',top:15,color:'#7851a9'}}> Start Session </Text>
        </View>
        <View style={{height:'30%',justifyContent:'flex-start' ,width:'100%',alignItems:'center'}}>
            <Image
            source={route.params.image}
            style={{
                height:'60%',
                width:'40%',
                borderRadius:100,
                resizeMode:'stretch'
            }}
            />
            <Text style={{fontSize:30,fontWeight:'700',top:15}}>{route.params.name}</Text>
            </View>
      <View style={{height:'30%', justifyContent:'center' ,width:'100%',alignItems:'center',gap:8}}>
            <Pressable
            onPress={()=>navigation.navigate('Route')}
              style={styles.btn1}
             >
              <Text style={styles.btnText1}>Edit Appointment</Text>
            </Pressable>
            <Pressable
            onPress={()=>navigation.navigate('Route')}
              style={styles.btn}
             >
              <Text style={styles.btnText}> Get Started</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Session

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
    btn1:{
        height:60,
        width:'80%',
        borderRadius:30,
        borderWidth:2,
        borderColor:'#7851a9',
        justifyContent:'center'
    },
    btnText1:{
        color:'#7851a9',
        fontSize:20,
        alignItems:'center',
        fontWeight:'400',
        textAlign:'center'
    },
    icon1:{
        height:45,
        width:45,
        borderRadius:13,
        backgroundColor:'#c9f9ff',
        justifyContent:'center',
        alignItems:'center'
    },
})