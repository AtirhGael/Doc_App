import { StyleSheet, Text, View,Pressable,Image } from 'react-native'
import React from 'react'
import { Appbar,Button,ToggleButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons,FontAwesome5} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';


const MyDoctor = ({navigation}) => {
    const [value, setValue] = React.useState('left');
  return (
    <View>
      <View style={{height:'100%',backgroundColor:'#fff',width:'100%'}}>
       <View style={{height:'13%',}}>
       
            <Appbar.Header style={{ backgroundColor:"#fff",}}>
            <Appbar.BackAction onPress={() => navigation.goBack()} size={35}color='#000'/> 
                <Appbar.Content title="My Doctor" titleStyle={{fontSize:25,color:'#000',fontWeight:'700'}} ty />
              
            </Appbar.Header>
        
       </View>
    
       <View style={{padding:20}}>
       <View style={styles.container}>
       <View style={styles.inner}>
           <Image source={require('../../../assets/2.png')} 
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
             <FontAwesome5 name="sms" size={30} color="#088be9" />
            </View>
           </View>
           </TouchableOpacity>
       </View>
     </View>
       </View>

       <View style={{padding:15}}>
       <View style={styles.container}> 
       <View style={styles.inner1}>
           <View style={{gap:3,justifyContent:'center',alignItems:'center'}}>
            <View style={styles.icon}>
             <Ionicons name="ios-people" size={30} color="#088be9" />
            </View>
            <Text style={styles.second}>5000+</Text>
            <Text style={styles.third}>Patients</Text>
           </View>
           <View style={{gap:3,justifyContent:'center',alignItems:'center'}}>
            <View style={styles.icon}>
            <Ionicons name="person-sharp" size={30} color="#088be9" />
            </View>
            <Text style={styles.second}>5+</Text>
            <Text style={styles.third}>Years of experience</Text>
           </View><View style={{gap:3,justifyContent:'center',alignItems:'center'}}>
            <View style={styles.icon}>
            <MaterialIcons name="textsms" size={30} color="#088be9" />
            </View>
            <Text style={styles.second}>3800+</Text>
            <Text style={styles.third}>Review</Text>
           </View>
       </View>
     </View>
       </View>
       <View style={{padding:20,gap:4}}>
        <Text style={{fontWeight:'600',fontSize:20}}>Working Hours</Text>
        <Text style={{fontWeight:'400',fontSize:15}}>mon - Fri | 08:00 AM - 15:00 Pm</Text>
       </View>

       <View style={{padding:20,gap:4}}>
        <Text style={{fontWeight:'600',fontSize:20}}>About</Text>
        <Text style={{fontWeight:'400',fontSize:15}}> A tiny VS Code extension made up of a few commands that generate and insert lorem ipsum text into a text file. To use the extension, open the command palette (F1 or cmd/ctrl+shift+p, type "lorem ipsum" and select to insert either a line or paragraph. </Text>
       </View>
        
        <View style={{justifyContent:'flex-end' ,width:'100%',height:'15%',alignItems:'center'}}>
            <Pressable
              style={styles.btn}
              onPress={()=>navigation.navigate('types')}
             >
              <Text style={styles.btnText}>Book an Appointment</Text>
            </Pressable>
            </View>

        </View>
    </View>
  )
}

// Purple: #7851a9
// Light blue: #088be9
// Black: #2e2c2c

export default MyDoctor

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
        height:54,
        width:54,
        borderRadius:20,
        backgroundColor:'#c9f9ff',
        justifyContent:'center',
        alignItems:'center'
    },
    second:{
        color:'#7851a9',
        fontSize:18,
    },
    third:{
        fontWeight:'500'
    }
})