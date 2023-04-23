import { StyleSheet, Text, View,Image, ScrollView,SafeAreaView,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { Link, useRoute } from '@react-navigation/native';
import { Appbar,Button } from 'react-native-paper';
import { FontAwesome5,Feather,Ionicons } from '@expo/vector-icons';


const PatientDetails = ({navigation}) => {
    const [selection, setSelection] = useState(1);
    const route = useRoute()
    const id = route.params

    function click(){
        navigation.navigate('type')
        setSelection(1)
    }
    function AsignDrug(){
        navigation.navigate("prescriptions")
        setSelection(2)
    }

    // console.log(id);
    
// Purple: #7851a9
// Light blue: #088be9
// Black: #2e2c2c
  return (
    <View style={{flex:1, backgroundColor:"#fff"}}>
        <View style={{height:'30%'}}  >
            <Appbar.Header style={styles.header}>
                <Appbar.BackAction onPress={() => navigation.goBack()} size={30} color='#000'/>
                <View style={styles.left}>
                <View  style={{justifyContent:'center',alignItems:'center'}}>
                <View style={styles.icon1}>
                <FontAwesome5 onPress={()=>navigation.navigate('massages')} name="rocketchat" size={30} color="#088be9" />
                </View>
                </View>
                <View  style={{justifyContent:'center',alignItems:'center'}}>
                    <View style={styles.icon1}>
                    <FontAwesome5 name="video" size={30} color="#088be9"/>
                    </View>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                <View style={styles.icon1}>
                <Ionicons name="ios-call" size={30} color="#088be9" />
                </View>
                </View>
                </View>
            </Appbar.Header>
      
        

      <View style={styles.container}>
       
        <View style={styles.inner}>
            <Image source={route.params.image} 
                style={{
                    height:'100%',
                    width:110,
                    resizeMode:'stretch'
                }}
             />
            <View style={styles.text}>
                <Text style={{fontSize:22, fontWeight:'bold',}}> {route.params.name}</Text>
                <Text style={{fontSize:15, fontWeight:'400'}}> {route.params.sicknesType}</Text>
                <Text style={{fontSize:15}}> {route.params.address}</Text>
            </View>
    
            <Button
                onPress={()=> navigation.navigate('patientInfo',id)}
             style={{paddingTop:30,paddingRight:10,}}>
                <Text style={{fontSize:20,color:"#7851a9",fontWeight:'700'}}>View</Text>
            </Button>
        </View>
      </View>
      </View>
      
      
      <ScrollView style={{height:'40%',padding:20}}>
            <Text style={styles.upcoming}> Medications</Text>   
        </ScrollView>

        <View style={styles.body}>
        <SafeAreaView>
            <View style={styles.button}>
                <TouchableOpacity style={[styles.btn2, selection === 1 ? { backgroundColor: '#7851a9' } : null]} onPress={click}>
                    <Text style={[styles.btnText, selection === 1 ? { color: "white" } : null]}> Schedule Apointment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn2, selection === 2 ? { backgroundColor: '#7851a9' } : null]} onPress={AsignDrug}>
                    <Text style={[styles.btnText, selection === 2 ? { color: "white" } : null]}> Asign Drugs</Text>
                </TouchableOpacity>
               
            </View>
            
        </SafeAreaView>
    
      </View>
      
        
    </View>
  )
}

export default PatientDetails

const styles = StyleSheet.create({
    icon1:{
        height:45,
        width:45,
        borderRadius:13,
        backgroundColor:'#c9f9ff',
        justifyContent:'center',
        alignItems:'center'
    },
 
    btnText: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight:'500'
    },
    container:{
        width:'90%',
        height:100,
        borderColor:'gray',
        borderWidth:  2,
        marginTop:20,
        marginLeft:15,
        borderRadius:10,
    },
    inner:{
        display:'flex',
        flexDirection:'row',
        height:'100%',
        justifyContent:'space-between',
        gap:5,
        maxWidth:'100%'
    },
    text:{
        paddingTop:5,
        marginRight:80,
        gap:5,
    },
    upcoming:{
        fontSize:30,
        fontWeight:'bold'
    },
    button:{
        gap:10,
        justifyContent:'flex-end',
        paddingTop:250
    },
    header:{
        backgroundColor:'#fff',
        display:'flex',
        justifyContent:'space-between',
    },
    left:{
        display:'flex',
        flexDirection:'row',
        gap:10,
        paddingRight:20
    },
    body:{
        padding:20
    },
    btn2:{
        height:55,
        borderWidth:2,
        borderColor:'#7851a9',
        alignItems:"center",
        justifyContent:'center',
        borderRadius:26
    }
})