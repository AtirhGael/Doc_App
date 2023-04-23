import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Appbar, Button } from 'react-native-paper';
import Madiation from './Madiation'
import Prescription from './Prescription';
import TimelineEffect from './TimelineEffect';

// Purple: #7851a9
// Light blue: #088be9
// Black: #2e2c2c

const Madication = ({navigation}) => {
    const [next, setNext] = useState('active')
    const [ selection, setSelection] = useState(1)

    function presc(){
        setSelection(1)
        setNext('active')
    }
    function press(){
        setSelection(2)
        setNext('inactive')
    }
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
       <View style={{height:'20%',}}>
       <View>
            <Appbar.Header style={{ backgroundColor:"#fff",}}>
            <Appbar.BackAction onPress={() => navigation.goBack()} size={35} color='#000' /> 
                <Appbar.Content title="Medication" titleStyle={{fontSize:25,color:'#000'}} ty />
            </Appbar.Header>
        </View>
        <SafeAreaView style={styles.container}>
            <View style={styles.btnGroup}>
                <TouchableOpacity style={[styles.btn, selection === 1 ? { backgroundColor: '#7851a9' } : null]} onPress={presc}>
                    <Text style={[styles.btnText, selection === 1 ? { color: "white" } : null]}>Medication</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, selection === 2 ? { backgroundColor: '#7851a9' } : null]} onPress={press}>
                    <Text style={[styles.btnText, selection === 2 ? { color: "white" } : null]}>Prescription</Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
       </View>
       
        <View style={{height:'75%'}}>
        <ScrollView>    
            { next === 'active' && < TimelineEffect/> }
            { next === 'inactive' && < Prescription /> }
        </ScrollView>        
        </View>
        </View>
  )
}

export default Madication

const styles = StyleSheet.create({
    btnSection:{
        padding:20,
        top:10,
        gap:5,
        display:'flex',
        flexDirection:'row',
        width:'100%',
        justifyContent:'center'
    },
    container: {
        top:10
    },
    btnGroup: {
        flexDirection: 'row',
        alignItems: "center",
        borderBottomColor: '#7851a9',
        gap:10,
        justifyContent:'center',
        height:45,
        width:'100%'
    },
    btn: {
        borderColor: '#7851a9',
        borderWidth:2,
        borderRadius:20,
        height:'100%',
        width:'30%',
        alignContent:'center',
        justifyContent:'center',
        width:'45%'

    },
    btnText: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight:'500'
    }

})