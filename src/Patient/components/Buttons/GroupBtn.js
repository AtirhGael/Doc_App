import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GroupBtn = ({name1,name11,name2,name22,name3,name33,name4,name44,name5,name55,name6,name66,name7,name77}) => {

    const [selection, setSelection] = useState(1);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.btnGroup}>
                <TouchableOpacity style={[styles.btn, selection === 1 ? { backgroundColor: '#7851a9',elevation:8 } : null]} onPress={() => setSelection(1)}>
                    <Text style={[styles.btnText, selection === 1 ? { color: "white",fontSize:20 } : null]}>{name1}</Text>
                    <Text style={[styles.btnText1, selection === 1 ? { color: "white",fontSize:17 } : null]}>{name11}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, selection === 2 ? { backgroundColor: '#7851a9' } : null]} onPress={() => setSelection(2)}>
                    <Text style={[styles.btnText, selection === 2 ? { color: "white",fontSize:20 } : null]}>{name2}</Text>
                    <Text style={[styles.btnText1, selection === 2 ? { color: "white",fontSize:17 } : null]}>{name22}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, selection === 3 ? { backgroundColor: '#7851a9',elevation:8 } : null]} onPress={() => setSelection(3)}>
                    <Text style={[styles.btnText, selection === 3 ? { color: "white",fontSize:20 } : null]}>{name3}</Text>
                    <Text style={[styles.btnText1, selection === 3 ? { color: "white",fontSize:17 } : null]}>{name33}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, selection === 4 ? { backgroundColor: '#7851a9' } : null]} onPress={() => setSelection(4)}>
                    <Text style={[styles.btnText, selection === 4 ? { color: "white",fontSize:20 } : null]}>{name4}</Text>
                    <Text style={[styles.btnText1, selection === 4 ? { color: "white",fontSize:17 } : null]}>{name44}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, selection === 5 ? { backgroundColor: '#7851a9',elevation:8 } : null]} onPress={() => setSelection(5)}>
                    <Text style={[styles.btnText, selection === 5 ? { color: "white",fontSize:20 } : null]}>{name5}</Text>
                    <Text style={[styles.btnText1, selection === 5 ? { color: "white",fontSize:17 } : null]}>{name55}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, selection === 6 ? { backgroundColor: '#7851a9' } : null]} onPress={() => setSelection(6)}>
                    <Text style={[styles.btnText, selection === 6 ? { color: "white",fontSize:20 } : null]}>{name6}</Text>
                    <Text style={[styles.btnText1, selection === 6 ? { color: "white",fontSize:17 } : null]}>{name66}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, selection === 7 ? { backgroundColor: '#7851a9',elevation:8 } : null]} onPress={() => setSelection(7)}>
                    <Text style={[styles.btnText, selection === 7 ? { color: "white",fontSize:20 } : null]}>{name7}</Text>
                    <Text style={[styles.btnText1, selection === 7 ? { color: "white",fontSize:17 } : null]}>{name77}</Text>
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
        borderRadius:10,
        height:80,
        width:'15%',
        alignContent:'center',
        justifyContent:'center',
        gap:13,
    },
    btnText: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight:'500'
    },
    btnText1: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight:'400'
    }
});

