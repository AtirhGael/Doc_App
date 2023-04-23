import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Button, Card,} from 'react-native-paper';


const Portal = ({navigation}) => {
    const [active,setActive] = useState()
    const [checked,setChecked] = useState(checked)

    function doctors(){
        setActive(!active);
        navigation.navigate('SigninD')
    }
    function Patient(){
        setChecked(!checked)
        navigation.navigate('Choice')
    }
  
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <View style={{justifyContent:'center',alignItems:"center",height:'40%'}}>
        
      </View>
      <View style={{padding:20, height:'60%'}}>
        <View style={{display:'flex',flexDirection:'column',justifyContent:'space-between',gap:50}}>
        <Text style={styles.first}>Tele-Epilepsy</Text>
        <Text style={styles.second}>Welcome to  Tele-Epilepsy!</Text>
        </View>
      <View style={{ gap:10,justifyContent:'flex-end',height:'60%'}}>
      <Button style={active ? styles.btn:styles.inactive} onPress={doctors} >
          <Text style={active ? styles.btnText:styles.inactiveText} onPress={()=>setActive(!active)}> Doctor Portal</Text>
      </Button>
      <Button style={checked ? styles.btn:styles.inactive} onPress={Patient} >
          <Text style={checked ? styles.btnText:styles.inactiveText} onPress={()=>setChecked(!checked)}> Patient Portal</Text>
      </Button>
      </View>
      </View>
    </View>
  )
}

export default Portal
    // Purple: #7851a9
// Light blue: #088be9
// Black: #2e2c2c

const styles = StyleSheet.create({
    first:{
        textAlign:'center',
        fontSize:50,
        fontWeight:'700',
        color:'#7851a9',
        
    },
    second:{
        textAlign:'center',
        fontSize:22,
        fontWeight:'700',
        justifyContent:'flex-end'
    },
    btn:{
        height:60,
        width:'100%',
        justifyContent:'center',
        backgroundColor:'#7851a9',
        borderRadius:30,
        borderColor:'#7851a9',
        borderWidth:2,
    },
    inactive:{
        height:60,
        width:'100%',
        justifyContent:'center',
        borderRadius:30,
        borderWidth:2,
        borderColor:'#7851a9'
    },
    btnText:{
        fontSize:20,
        fontWeight:'500',
        alignItems:'center',
        justifyContent:'center',
        color:'#fff'
    },
    inactiveText:{
        fontSize:20,
        fontWeight:'500',
        alignItems:'center',
        justifyContent:'center',
        color:'#7851a9'
    }

})