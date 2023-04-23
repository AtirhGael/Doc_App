import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar,Surface } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { FontAwesome,FontAwesome5 } from '@expo/vector-icons';

const Home = ({navigation}) => {
  return (
    <View style={{flex:1, backgroundColor:'#fff', paddingLeft:10,paddingRight:10,top:4}}>
        <View style={{height:'15%'}}>
            <Appbar.Header style={{ backgroundColor:"#fff",padding:20}}>
                <Appbar.Content title="Tele-Epilepsy" titleStyle={{fontSize:25,fontWeight:'700',color:'#000'}} ty />
                <View style={{ height:50, width:50,borderRadius:10,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                <View  style={{justifyContent:'center',alignItems:'center'}}>
                    <View style={styles.icon1}>
                    <FontAwesome name="bell" size={35} color="#088be9" onPress={()=>navigation.navigate('notification')} />
                    </View>
                    </View>
                  
                </View>
            
            </Appbar.Header>
        </View>
        <View style={styles.choice}>
            <Pressable style={{width:'50%'}}
            onPress={() => navigation.navigate('allpatients')}
            >
                <View style={styles.surface}  >
                    <Text style={styles.txt}>Patients</Text>
                </View>
            </Pressable>
            <Pressable style={{width:'50%'}}
            onPress={() => navigation.navigate('myappointment')}
            >
                <View style={styles.surface}>
                    <Text style={styles.txt}>View Schedule</Text>
                </View>
            </Pressable>
        </View>
      
        <View style={{
            paddingTop:25,

        }}>
            <Text style={styles.upcoming}> Upcoming  </Text>
        </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  another:{
      height:100,
      width:150,
      borderRadius:10,
      backgroundColor:'#c9f9ff',
      opacity:1,
      elevation:4
  },
    icon1:{
        height:45,
        width:45,
        borderRadius:13,
        backgroundColor:'#c9f9ff',
        justifyContent:'center',
        alignItems:'center'
    },
    surface: {
        paddingTop: 25,
        height: 150,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderRadius:35,   
        backgroundColor:'#7851a9'   ,
        color:"#fff",
        opacity:10,  
      },
    choice:{
        
        display:'flex',
        flexDirection:'row',
        padding:20,
        width:'100%',
        gap:25,
        justifyContent:'center'

    },
    upcoming:{
        fontSize:30,
        fontWeight:'bold'
    },
    txt:{
        fontSize:20,
        fontWeight:'700',
        color:'#fff',
        bottom:20,
    }
})
