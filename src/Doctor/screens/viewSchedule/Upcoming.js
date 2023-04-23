import { FlatList, StyleSheet, Text, View,Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import data from '../../Components/Data';
import { AntDesign,Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


// Purple: #7851a9
// Light blue: #088be9
// Black: #2e2c2c
const Upcoming = () => {
    const navigation = useNavigation();
    
  return (
    <View>
        <ScrollView >
      <Text style={{padding:20,fontSize:18,fontWeight:'500'}}>Today, january 08 2020</Text>
      <View style={{padding:15}}>
        <FlatList
        data={data}
        renderItem={({item})=>{
            return(
           <View>
           <View style={styles.main}>
                <View style={styles.container}>
                    <Image source={item.image} style={styles.image}/>
                    <View style={{gap:8}}>
                        <Text style={styles.name}> {item.name} </Text>
                        <Text style={styles.call}> Voice call </Text>
                        <Text style={styles.time}> 13:00 - 15:00 AM </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('session',item)} >
                <View style={styles.icon}>
                <AntDesign name="right" size={30}color="#088be9" />
                </View>
                </TouchableOpacity>
            </View>
            <View style={{height:10}} ></View>
           </View>
        )}}
        />
      </View>
      </ScrollView>
    </View>
  )
}

export default Upcoming

const styles = StyleSheet.create({
    main:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderColor:'gray',
        borderWidth:1,
        borderRadius:10,
        paddingRight:5,
        
    },
    container:{
        display:'flex',
        // justifyContent:'space-between',
        flexDirection:'row',
        gap:20,
        alignItems:'center'
    },
    image:{
        height:110,
        width:100,
        resizeMode:'stretch',
    },
    name:{
        fontSize:22,
        fontWeight:'800'
    },
    call:{
        fontSize:13,
    },
    icon:{
        height:45,
        width:45,
        borderRadius:8,
        backgroundColor:'#9bedff',
        alignItems:'center',
        justifyContent:'center',

    }
})