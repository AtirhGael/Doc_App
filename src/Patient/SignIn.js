import {  ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Checkbox,Button, } from 'react-native-paper';

const SignInP = ({navigation}) => {
    const [checked, setChecked] = React.useState(false);
  return (
    <View >
        <ScrollView>
      <Text style={styles.text}>Tele-Epilepsy</Text>

      <Text style={{textAlign:'center',fontSize:23,fontWeight:'500'}}>Sign In to Your account</Text>
      <View style={styles.container}>
        <View style={styles.inputes}>
            <Text style={styles.inputText}>Phone</Text>
            <TextInput
            style={styles.input}
            placeholder='650292489'
            placeholderTextColor='black'
            keyboardType='phone-pad'
            
            />
        </View>
        <View style={styles.inputes}>
            <Text style={styles.inputText}>password</Text>
            <TextInput
            style={styles.input}
            placeholder='password'
            placeholderTextColor='black'
            secureTextEntry={true}
            />
        </View>
        <View style={styles.last}>
        <Checkbox
        style={{borderColor:'#7851a9'}}
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
        setChecked(!checked);
            }}
            />
        <Text style={{fontWeight:'500',fontSize:15}} >Remember me</Text>
        </View>
        <Button style={styles.btn} onPress={()=>navigation.navigate('congrats2')} >
            <Text style={styles.btnText}> Sign UP</Text>
        </Button>
        <Text style={styles.pass}> Forgot Password?</Text>

      </View>
      </ScrollView>
    </View>
  )
}

export default SignInP

const styles = StyleSheet.create({
    text:{
        marginTop:120,
        marginBottom:50,
        textAlign:'center',
        fontSize:40,
        fontWeight:'800',
        color:'#7851a9',
    },
    container:{
        padding:30, 
        gap:10,
    },
    inputText:{
        paddingLeft:15,
        fontSize:18,
        fontWeight:'500',
        paddingBottom:10,
    },
    input:{
        borderWidth:1,
        borderColor:'gray',
        height:50,
        width:'100%',
        borderRadius:25,
        padding:8,
    },
    inputes:{

    },
    last:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:10   
    },
    btn:{
        height:60,
        width:'100%',
        justifyContent:'center',
        backgroundColor:'#7851a9',
        borderRadius:30,
    },
    btnText:{
        fontSize:20,
        fontWeight:'500',
        alignItems:'center',
        justifyContent:'center',
        color:'#fff'
    },
    pass:{
        textAlign:'right',
        color:'#7851a9',
        top:10,
        fontSize:18
    }

})
//simple react native login form? 
// Purple: #7851a9
// Light blue: #088be9
// Black: #2e2c2c