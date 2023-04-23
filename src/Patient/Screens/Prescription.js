import { FlatList, StyleSheet, Text, Vibration, View } from 'react-native'
import React from 'react'
import Data from '../components/Data'
import { Image } from 'react-native'
import { ScrollView } from 'react-native'
import { Button} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

const Prescription = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView>
      <Text style={{fontSize:20,left:20,top:10,fontWeight:'500'}}>Medication</Text>
      <View style={styles.container}>
        <FlatList
        data={Data}
        renderItem={({item})=>(
        <View>
        <View style={styles.box}>
          <Image 
          source={item.image}
          style={{
            height:'90%',
            width:'15%',
            borderRadius:45,
            resizeMode:'contain',
            left:10,
          }}
          
           />
            <View style={{gap:3,justifyContent:'center',alignItems:'flex-start'}}>
              <Text style={{fontWeight:'600',fontSize:19}} > Name: {item.name} </Text>
              <Text  >Tablets: {item.number}</Text>
              <Text>Dose : {item.dose} </Text>
              <Text> Dosage: {item.gram} </Text>
            </View>
          
          </View>
          <View style={{height:10}} />
        </View>
        )}
         />

      </View>
      <Text style={{fontSize:20,left:20,top:10,fontWeight:'500'}}>Doctor's Comment</Text>
         <View style={{padding:20}}>
         <View style={styles.text}>
            <Text style={styles.txt}>  A declarative cross-platform React Native calendar component for iOS and Android.</Text>
          </View>
         </View>
         <View style={styles.btnSection}>
            <Button style={styles.btn} onPress={()=>navigation.navigate('payment')}  >
                <Text style={styles.btnText} > Order Medicine </Text>
            </Button>
        </View>
          </ScrollView>
    </View>
  )
}

export default Prescription

const styles = StyleSheet.create({
  container:{
    padding:20,
  },
  box:{
    width:'100%',
    borderColor:'gray',
    borderWidth:1,
    height:100,
    borderRadius:20,
    flexDirection:'row',
    gap:35,
    alignItems:'center'
  },
  text:{
    height:120,
    width:'100%',
    backgroundColor:'#decef3',
   display:'flex',
    borderRadius:10,
    justifyContent:'center'
  },
  txt:{
    fontSize:15,
    fontWeight:'400',
    textAlign:'center',
    
  },
  btn:{
    height:60,
    width:'100%',
    borderRadius:30,
    borderWidth:1,
    borderColor:'#7851a9',
    backgroundColor:'#7851a9',
    justifyContent:'center'
},
btnText:{
  color:'#fff',
  fontSize:20,
  alignItems:'center',
  fontWeight:'400',
  textAlign:'center'
},
btnSection:{
  padding:20,
  width:'100%',
  justifyContent:'center'
},
})