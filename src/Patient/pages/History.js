import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Appbar,Button,ToggleButton } from 'react-native-paper';
import { MaterialIcons,FontAwesome5} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
// import Prescription from '../Components/Prescription';

const History = ({navigation}) => {
  return (
    <View style={{height:'100%',backgroundColor:'#fff',width:'100%'}}>
     
       <View style={{height:'12%',}}>
       
       <Appbar.Header style={{ backgroundColor:"#fff",}}>
       <Appbar.BackAction onPress={() => navigation.goBack()} size={35} color='#000' /> 
           <Appbar.Content title="History" titleStyle={{fontSize:25,fontWeight:'700',color:'#000'}} ty />
         
       </Appbar.Header>
   
  </View>
  <ScrollView>
  <View style={{padding:20,gap:10}}>
  <Text style={{padding:10,right:5,fontSize:20,fontWeight:'600'}}>Pending Orders </Text>

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
          <Text style={{fontSize:20, fontWeight:'bold',}}> Medicine Name</Text>
          <Text style={{fontSize:15, }}> Medicine Spacialist</Text>
          <Text style={{fontSize:13}}> Good Health Clinic,bamenda</Text>
          <Text style={{fontSize:13}}> Good Health Clinic,bamenda</Text>
       </View>
      <TouchableOpacity
      onPress={()=>navigation.navigate('madiation')}
      >
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <View style={styles.icon1}>
       <Entypo name="chevron-right" size={30} />
       </View>
      </View>
      </TouchableOpacity>
  </View>
  
</View>
<View style={styles.container}>
  <View style={styles.inner}>
      <Image source={require('../../Doctor/assets/2.png')} 
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
      onPress={()=>navigation.navigate('madiation')}
      >
      <View style={{justifyContent:'center',alignItems:'center'}}>
       <View style={styles.icon1}>
       <Entypo name="chevron-right" size={30} />
       </View>
      </View>
      </TouchableOpacity>
  </View>
  
</View>
<Text style={{padding:10,right:5,fontSize:20,fontWeight:'600'}}> Completed order </Text>

<View style={styles.container}>
  <View style={styles.inner}>
      <Image source={require('../../Doctor/assets/2.png')} 
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
      onPress={()=>navigation.navigate('madiation')}
      >
      <View style={{justifyContent:'center',alignItems:'center'}}>
       <View style={styles.icon1}>
       <FontAwesome5 name="check" size={25} color="#278c58" />
       </View>
      </View>
      </TouchableOpacity>
  </View>
  
</View>
<View style={styles.container}>
  <View style={styles.inner}>
      <Image source={require('../../Doctor/assets/2.png')} 
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
      onPress={()=>navigation.navigate('Prescription')}
      >
      <View style={{justifyContent:'center',alignItems:'center'}}>
       <View style={styles.icon1}>
       <FontAwesome5 name="check" size={25} color="#278c58" />
       </View>
      </View>
      </TouchableOpacity>
  </View>
</View>
<View style={styles.container}>
  <View style={styles.inner}>
      <Image source={require('../../Doctor/assets/2.png')} 
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
      onPress={()=>navigation.navigate('Prescription')}
      >
      <View style={{justifyContent:'center',alignItems:'center'}}>
       <View style={styles.icon1}>
        <FontAwesome5 name="check" size={25} color="#278c58" />
       </View>
      </View>
      </TouchableOpacity>
  </View>
  
</View>
  </View>
  
  </ScrollView>
    </View>
  )
}

export default History

const styles = StyleSheet.create({
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
  height:45,
  width:45,
  borderRadius:10,
  backgroundColor:'#c9f9ff',
  justifyContent:'center',
  alignItems:'center'
},
})