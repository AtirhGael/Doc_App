import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar,Surface } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const HomeP = ({navigation}) => {

  
  return (
  //content offset in android scrollview?
    <View style={{flex:1,height:"100%", backgroundColor:'#fff',top:10,width:'100%'}}>
       
        <View style={{height:"13%",backgroundColor:'#fff'}}>
            <Appbar.Header style={{padding:20}}>
                <Appbar.Content title="Tele-Epilepsy" titleStyle={{fontSize:25,fontWeight:'700',color:'#000'}} />
                <TouchableOpacity
           onPress={()=>navigation.navigate('end')}
           >
           <View style={{justifyContent:'center',alignItems:'center'}}>
            <View style={styles.icon1}>
            <FontAwesome name="bell" size={30} color="#088be9" onPress={()=>navigation.navigate('notificationD')} />
            </View>
           </View>
           </TouchableOpacity>
            </Appbar.Header>
        </View>

        <View style={styles.choice}>
        <ScrollView horizontal={true} contentContainerStyle={{gap:10}}  style={{ width: screenWidth }}  showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
            onPress={()=>navigation.navigate('madiation')}
            style={styles.surface}
            >
                
                    <Text style={styles.txt}>Medication</Text>
               
            </TouchableOpacity>
            <TouchableOpacity  style={styles.surface}
            onPress={()=>navigation.navigate('mydoctor')}
            >
               
                    <Text style={styles.txt}>My Doctor</Text>
                
            </TouchableOpacity>
            <TouchableOpacity style={styles.surface}
            onPress={()=>navigation.navigate('booking')}
            >
              
                    <Text style={styles.txt}>My Appointment</Text>
                
            </TouchableOpacity>
            <TouchableOpacity style={styles.surface}
            onPress={()=>navigation.navigate('booking')}
            >
                
                    <Text style={styles.txt}>Community Chatroom</Text>
                
            </TouchableOpacity>
        </ScrollView>
        </View>
        <Text style={styles.upcoming}>Upcoming</Text>
        
    </View>
   
  )
}

export default HomeP

const styles = StyleSheet.create({
    icon1:{
        height:45,
        width:45,
        borderRadius:13,
        backgroundColor:'#c9f9ff',
        justifyContent:'center',
        alignItems:'center'
    },
    surface: {
        paddingTop: 35,
        height: 120,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:18,   
        backgroundColor:'#7851a9'     
      },
    choice:{
        paddingTop:20,
        display:'flex',
        flexDirection:'row',
        padding:10,
        width:'100%',
        gap:10,
        justifyContent:'center',
        height:"23%"
    },
    upcoming:{
        fontSize:30,
        fontWeight:'bold',
        left:10,
    },
    txt:{
      color:'#fff',
      fontSize:20,
      fontWeight:'400',
      textAlign:'center'
    }
})
