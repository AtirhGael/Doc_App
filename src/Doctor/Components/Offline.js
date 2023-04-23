import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {Appbar, Button} from 'react-native-paper'
import { ScrollView } from 'react-native'
import { MaterialIcons,FontAwesome } from '@expo/vector-icons';
import Pupup from './Popup'
import Buttongroup from './Buttons/Buttongroup'



const Offline = ({navigation}) => {
    const [checked, setChecked] = useState(1);
    const [selection, setSelection] = useState(1);

    function activeState(){

    }

  return (
    <View style={{flex:1, backgroundColor:"#fff"}}>
        
       <View style={{height:'13%'}}>
            <Appbar.Header style={{ backgroundColor:"#fff"}}>
            <Appbar.BackAction onPress={() => navigation.goBack()} size={35} color='#000'/>
                <Appbar.Content title="Book Appointment" titleStyle={{fontSize:23,fontWeight:'700',color:'#000'}} />
                
            </Appbar.Header>
      </View>
      <View style={{height:'77%'}}>
      <Text style={{fontSize:21,padding:10}}> Wednesday, April 5 2023 </Text>
     
      <View style={styles.button1}>
            <TouchableOpacity style={[styles.btn, selection === 1 ? { backgroundColor: '#7851a9' } : null]} onPress={() => setSelection(1)}>
                    <Text style={[styles.btnText, selection === 1 ? { color: "white" } : null]}>Morning </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, selection === 2 ? { backgroundColor: '#7851a9' } : null]} onPress={() => setSelection(2)}>
                    <Text style={[styles.btnText, selection === 2 ? { color: "white" } : null]}>Evening</Text>
                </TouchableOpacity>

        </View>
        <Text style={{fontSize:21,padding:15}}> Choose the Hour </Text>
        <View style={styles.button}>
        <Buttongroup
        name1='9:00 AM'
        name2='10:00 AM'
        name3='11:00 AM'
        name4='13:00 PM'
        name5='14:00 PM'
        name6='15:00 PM'
        name7='17:00 PM'
        name8='18:00 PM'
        name9='19:00 PM'
         />
    
    
        </View>
        
        

        <Text style={{fontSize:21,padding:15}}> Choose Appointment type </Text>

       <TouchableOpacity style={[styles.bellow, checked === 1 ? { backgroundColor: '#7851a9' } : null]} onPress={() => setChecked(1)}>
       
            <View style={styles.round}>
             <MaterialIcons name="call" size={35} color='#088be9' />
            </View>
            <View style={{display:'flex',flexDirection:'column', gap:3}}>
                <Text style={[ checked === 1 ? { color: "white",fontSize:15,fontWeight:'500' } : null]}> Voice Call </Text>
                <Text style={[styles.btnText, checked === 1 ? { color: "white",fontSize:15,fontWeight:'500' } : null]}> Can mak a voice call with doctore </Text>
            </View>
        
       </TouchableOpacity>
        <View style={{height:15}} />
        </View>
        <Pupup name=' Confirm Apointment' />
            {/* for failed, use Fpopup */}
    </View>



  )
}

// Purple: #7851a9
// Light blue: #088be9
// Black: #2e2c2c

export default Offline

const styles = StyleSheet.create({
    btnText: {
        textAlign: 'center',
        fontSize: 17,
        color:'#000'
    },
    button1:{
        display:'flex',
        flexDirection:'row',
        gap:5,
        padding:10,
        justifyContent:'center',
        flexWrap:'wrap',
        width:'100%'
    },
    btn1:{
        height:50,
        width:180,
        borderWidth:2,
        borderColor:'#7851a9',
        borderRadius:25,
    },
    btn2:{
        height:50,
        width:'45%',
        borderWidth:2,
        borderColor:'#7851a9',
        borderRadius:25,
        justifyContent:'center'
    },
    button:{
        display:'flex',
        flexDirection:'row',
        gap:7,
        padding:10,
        flexWrap:'wrap',
        width:'100%',
        justifyContent:'center'
    },
    btn:{
        height:50,
        width:'45%',
        borderWidth:2,
        borderColor:'#7851a9',
        borderRadius:25,
        justifyContent:'center'
    },
    btnActive:{
        height:50,
        width:100,
        borderRadius:25,
        backgroundColor:'#7851a9',
        borderWidth:1,
        borderColor:'#7851a9',
        color:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    btnInactive:{
        height:50,
        width:100,
        borderRadius:25,
        borderWidth:1,
        borderColor:'#7851a9',
        color:'#fff'
    },
    bellow:{
        height:80,
        width:'90%',
        padding:15,
        borderColor:"#7851a9",
        borderWidth:1,
        borderRadius:10,
        alignSelf:'center',
        paddingBottom:10,
        display:'flex',
        flexDirection:'row',
        gap:5
    },
    round:{
        height:50,
        width:50,
        borderRadius:25,
        backgroundColor:'#c9f9ff',
        alignItems:'center',
        justifyContent:'center'
    },
    active:{
        color:'#fff',
        fontSize:16
    },
    inactive:{
        color:'#7851a9',
        fontSize:16
    }
})