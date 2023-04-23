import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BtnGroup = ({name1,name2,name3,name4,name5,name6,name7,name8,name9}) => {

    const [selection, setSelection] = useState(1);

    return (<>        
        <SafeAreaView style={styles.container}>
            <View style={styles.btnGroup}>
                <TouchableOpacity style={[styles.btn, selection === 1 ? { backgroundColor: '#7851a9' } : null]} onPress={() => setSelection(1)}>
                    <Text style={[styles.btnText, selection === 1 ? { color: "white" } : null]}>{name1}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, selection === 2 ? { backgroundColor: '#7851a9' } : null]} onPress={() => setSelection(2)}>
                    <Text style={[styles.btnText, selection === 2 ? { color: "white" } : null]}>{name2}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, selection === 3 ? { backgroundColor:'#7851a9' } : null]} onPress={() => setSelection(3)}>
                    <Text style={[styles.btnText, selection === 3 ? { color: "#ffff" } : null]}>{name3}</Text>
                </TouchableOpacity>
                
               
            </View>
            
        </SafeAreaView>
        <SafeAreaView style={styles.container}>
            <View style={styles.btnGroup}>
              <TouchableOpacity style={[styles.btn, selection === 4 ? { backgroundColor: '#7851a9' } : null]} onPress={() => setSelection(4)}>
                    <Text style={[styles.btnText, selection === 4 ? { color: "white" } : null]}>{name4}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, selection === 5 ? { backgroundColor: '#7851a9' } : null]} onPress={() => setSelection(5)}>
                    <Text style={[styles.btnText, selection === 5 ? { color: "white" } : null]}>{name5}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, selection === 6 ? { backgroundColor:'#7851a9' } : null]} onPress={() => setSelection(6)}>
                    <Text style={[styles.btnText, selection === 6 ? { color: "#ffff" } : null]}>{name6}</Text>
   
                </TouchableOpacity>
                
               
            </View>
            
        </SafeAreaView>
        <SafeAreaView style={styles.container}>
            <View style={styles.btnGroup}>
              <TouchableOpacity style={[styles.btn, selection === 7 ? { backgroundColor: '#7851a9' } : null]} onPress={() => setSelection(7)}>
                    <Text style={[styles.btnText, selection === 7 ? { color: "white" } : null]}>{name7}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, selection === 8 ? { backgroundColor: '#7851a9' } : null]} onPress={() => setSelection(8)}>
                    <Text style={[styles.btnText, selection === 8 ? { color: "white" } : null]}>{name8}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, selection === 9 ? { backgroundColor:'#7851a9' } : null]} onPress={() => setSelection(9)}>
                    <Text style={[styles.btnText, selection === 9 ? { color: "#ffff" } : null]}>{name9}</Text>
   
                </TouchableOpacity>
                
               
            </View>
            
        </SafeAreaView>
        
               
                </>
   
    );
}
export default BtnGroup
const styles = StyleSheet.create({
    container: {
        
    },
    btnGroup: {
        flexDirection: 'row',
        
        justifyContent:'space-between',
        borderBottomColor: '#7851a9',
        gap:10,
        height:45,
        
    },
    btn: {
        borderColor: '#7851a9',
        borderWidth:2,
        borderRadius:20,
        height:'100%',
        width:'30%',
        alignContent:'center',
        justifyContent:'center'
    },
    btnText: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight:'500'
    }
});