import { ScrollView, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import {Appbar, Button,Searchbar} from 'react-native-paper'
import { Feather,MaterialIcons } from '@expo/vector-icons';
import Upcoming from './Upcoming'
import Past from './Past'



const Booking = ({navigation}) => {
    const [selection, setSelection] = useState(0);

    const [active, setActive] = useState('active')

    function clicked(){
        setActive('inactive');
         setSelection(1)
    }
    function button(){
        setActive('active')
        setSelection(2)
    }
    
  return (

     <View  style={{flex:1, backgroundColor:"#fff",}}>
      <Appbar.Header  style={{backgroundColor:"#fff",height:90,alignSelf:'center',paddingRight:15}}>
                <Appbar.BackAction size={35} onPress={() => navigation.goBack()} />
                <Appbar.Content title="My Appointments"  titleStyle={{fontSize:25}} />
               <View style={{height:50,width:50,borderRadius:10,backgroundColor:'#9bedff',justifyContent:'center',alignItems:'center'}}>
               <Feather name="plus-circle" size={35} color="#088be9" onPress={()=>navigation.navigate('type')} /> 
               </View>
            </Appbar.Header>
            <View style={styles.button}
            >
            <TouchableOpacity style={[styles.btn, selection ===  1? { backgroundColor: '#7851a9' } : null]} onPress={clicked}>
                    <Text style={[styles.btnText, selection === 1 ? { color: "white" } : null]}>Upcoming</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, selection === 2 ? { backgroundColor: '#7851a9' } : null]} onPress={button}>
                    <Text style={[styles.btnText, selection === 2 ? { color: "white" } : null]}>Past</Text>
                </TouchableOpacity>
           
        </View>
       <ScrollView showsVerticalScrollIndicator={false}>
       {active === 'active' && <Past/> }
        {active === 'inactive' && <Upcoming/>}
       </ScrollView>
           
    </View>
  )
}

export default Booking

const styles = StyleSheet.create({
    button:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        gap:10,
    },
    btn:{
      height:45,
        width:'45%',
        borderRadius:20,
        borderWidth:2,
        borderColor:'#7851a9',
        justifyContent:'center'
    },
    butn:{
        height:40,
        width:180,
        borderRadius:20,
        borderWidth:2,
        borderColor:'#7851a9',
        backgroundColor:'#7851a9',
       
    },
    btnText: {
        textAlign: 'center',
        fontSize: 19,
        color:'#000',
        justifyContent:'center',
        fontWeight:"500"
    },

})