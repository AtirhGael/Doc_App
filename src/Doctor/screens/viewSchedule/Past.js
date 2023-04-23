import { FlatList, StyleSheet, Text, View,Image, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { Chip } from 'react-native-paper';
import Data1 from '../../Components/Data1';

const Past = () => {
  return (
    <View>
        <ScrollView>
            <Text style={{padding:20,fontSize:18,fontWeight:'500'}}>Yesterday</Text>
      <View style={{padding:15}}>
        <FlatList
        data={Data1}
        renderItem={({item})=>{
        
            return(
                <View>
           <View style={styles.main}>
                <View style={styles.container}>
                    <Image source={item.image} style={styles.image}/>
                    <View style={{gap:8}}>
                        <Text style={styles.name}> {item.name} </Text>
                        <Text style={styles.call}> Voice call </Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between', gap:29}}>
                        <Text style={styles.time}> 13:00 - 15:00 AM </Text>
                          <Text style={[item.status==='Cancelled'? styles.complete: styles.cancel]} > {item.status} </Text>
                
                        </View>
                    </View>
                </View>
               
            </View>
            <View style={{height:10}} ></View>
           </View>
            )
        }}
        />
      </View>
      </ScrollView>
    </View>
  )
}

export default Past

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

    },
    complete:{
        color:'#be8484',
        fontWeight:'800'
    },
    cancel:{
        color:'#75b573',
        fontWeight:'800'
    }
})