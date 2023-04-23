import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GroupBtn = ({name1,name2}) => {

    const [selection, setSelection] = useState(1);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.btnGroup}>
                <TouchableOpacity style={[styles.btn, selection === 1 ? { backgroundColor: '#7851a9' } : null]} onPress={() => setSelection(1)}>
                    <Text style={[styles.btnText, selection === 1 ? { color: "white" } : null]}>{name1}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, selection === 2 ? { backgroundColor: '#7851a9' } : null]} onPress={() => setSelection(2)}>
                    <Text style={[styles.btnText, selection === 2 ? { color: "white" } : null]}>{name2}</Text>
                </TouchableOpacity>
               
            </View>
            
        </SafeAreaView>
    );
}
export default GroupBtn

const styles = StyleSheet.create({
    container: {
        
    },
    btnGroup: {
        flexDirection: 'row',
        alignItems: "center",
        borderBottomColor: '#7851a9',
        gap:10,
        justifyContent:'center',
        height:45
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

