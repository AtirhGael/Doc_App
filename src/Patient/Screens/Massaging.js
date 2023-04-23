import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView,TextInput,Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Appbar,Button, } from 'react-native-paper';
import { Entypo,Ionicons} from '@expo/vector-icons';



const Massaging = ({navigation}) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
      if (task == null) return;
      setTasks([...tasks, task]);
      Keyboard.dismiss();
    }
  
    const deleteTask = (deleteIndex) => {
      setTasks(tasks.filter((value, index) => index != deleteIndex));
    }
  return (
   <View style={{height:'100%',backgroundColor:'#fff'}}>
      <View Style={{height:'15%', width:'100%',padding:20}}>
      <View >
        <Appbar.Header style={{ backgroundColor:"#fff",paddingRight:20,paddingTop:20}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} size={35}color='#000'/> 
            <Appbar.Content title="My Doctor" titleStyle={{color:'#000'}} ty />            
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
        <View style={{padding:20,}}>
        <View style={styles.container}>
        <View style={styles.inner}>
           <Image source={require('../../Doctor/assets/3.png')} 
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
           
       </View>
       </View>
       </View>
    </View>
    
    <ScrollView>
    <View style={{height:'70%',padding:20,gap:5}}>
      <View style={styles.inner1}>
      <Text style={{ fontSize:15}}>Create button group in React Native using react components Create button group in React Native using react components Create button group in React Native using react components </Text>
        <Text style={{ fontSize:15,fontWeight:'500',textAlign:'right'}}>10:00am</Text>
      </View>
      <View style={styles.inner1}>
      <Text style={{ fontSize:15}}>Create button group in React Native using react components </Text>
        <Text style={{ fontSize:15,fontWeight:'500',textAlign:'right'}}>10:00am</Text>
      </View>
      <View style={styles.inner1}>
      <Text style={{ fontSize:15}}>Create button group in React Native using react components </Text>
        <Text style={{ fontSize:15,fontWeight:'500',textAlign:'right'}}>10:00am</Text>
      </View>
    
      <View style={styles.inner2}>
      <Text style={{ fontSize:15,color:'#fff'}}>Create button group in React Native using react </Text>
        <Text style={{ fontSize:15,color:'#fff',fontWeight:'500',textAlign:'left'}}>10:00am</Text>
      </View>
      <View style={styles.inner2}>
      <Text style={{ fontSize:15,color:'#fff'}}>Create button group in React Native using react components </Text>
        <Text style={{ fontSize:15,fontWeight:'500',textAlign:'left',color:'#fff'}}>10:00am</Text>
      </View>
      <View style={styles.inner2}>
      <Text style={{ fontSize:15,color:'#fff'}}>Create button group in React Native using react components components Create button group in React Native using react components Create button group in React Native using react components </Text>
        <Text style={{ fontSize:15,fontWeight:'500',textAlign:'left',color:'#fff'}}>10:00am</Text>
      </View>
    </View>
      </ScrollView>
   
   
    <View style={{height:'10%',width:'80%', position:'relative',backgroundColor:'#fff',alignItems:'center',marginLeft:35}}>
    <View style={styles.searchSection}>
    <TextInput
        style={styles.input}
        placeholder="User Nickname"
        underlineColorAndroid="transparent"
        />
        <Ionicons name="send" size={30} color="#088be9" />
    </View>
    </View>
   </View>
  )
}

// Purple: #7851a9
// Light blue: #088be9
// Black: #2e2c2c

export default Massaging

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
   width:'100%',
    borderWidth:1,
    borderRadius:10,
    elevation:4,
    paddingRight:15,
   
    
},
searchIcon: {
    padding: 10,
},
input: {
    flex: 1,
   padding:10,
    backgroundColor: '#fff',
    color: '#424242',
    paddingRight:10
},
    container:{
        width:'100%',
        height:130,
        borderRadius:10,
      
    },
    inner:{
        flexDirection:'row',
        height:'100%',
        width:'100%',
        maxWidth:'100%',
        display:'flex',
        alignItems:'center',
        gap:5,
    },
    inner1:{   
        width:'90%',
        maxWidth:'100%',
        backgroundColor:'#dcdde0',
        borderTopRightRadius:15,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        justifyContent:'space-between',
        padding:10,
        minHeight:'8%',
        display:'flex',
        
    },
    inner2:{   
        marginLeft:'10%',
        width:'90%',
        maxWidth:'100%',
        backgroundColor:'#0096ff',
        borderTopLeftRadius:15,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        justifyContent:'space-between',
        padding:10,
        minHeight:'10%',
        display:'flex',
        
    },
   
    text:{
        paddingTop:5,
        gap:5,
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