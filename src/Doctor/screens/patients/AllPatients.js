import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper';
import { FlatList } from 'react-native';
import data from '../../Components/Data';
import { Avatar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';


const AllPatients = ({navigation}) => {
  return (
    <View style={{flex:1, backgroundColor:"#fff"}}>
      <View >
        <Appbar.Header style={{ backgroundColor:"#fff"}}>
                <Appbar.BackAction onPress={() => navigation.goBack()} size={30} color='#000' />
                <Appbar.Content title="All Patients"  titleStyle={{fontSize:28,fontWeight:'600',color:'#000'}} />
            
            </Appbar.Header>
      </View>
    
        <ScrollView>
      <View style={styles.twoRows}>
        
            <FlatList
                data={data}
                contentContainerStyle={{
                    alignSelf: 'center',
                    alignItems: 'center',
                    gap:6,
                    }}
                columnWrapperStyle={{flexWrap: 'wrap'}}
                numColumns={2}
                renderItem={({item})=>(
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate('patientdetail',item)}
                    >
                        <View style={styles.align}>
                        <Avatar.Image size={120} source={item.image} />
                        <Text style={{
                            fontSize:30,
                        }}>
                            {item.name}
                            
                        </Text>
                        
                        </View>
                        
                    </TouchableOpacity>
                )}
             />
            
        
      </View>
      </ScrollView>
    </View>
  )
}

export default AllPatients

const styles = StyleSheet.create({
    align:{
         justifyContent:'space-around',
         alignContent:'space-around',
         alignItems:'center',
         gap:5,
        padding:29,
    },
    twoRows:{
       
    }
})