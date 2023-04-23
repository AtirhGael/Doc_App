import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { Avatar } from 'react-native-paper';

const Pupup = ({name}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{width:'100%',height:'50%',justifyContent:'center',alignItems:'center'}}>
            <Avatar.Icon size={150} icon="check" />
            </View>

            <View style={{width:'100%',height:'30%'}}>
                <Text style={styles.modalText}>Successful</Text>
                <Text style={styles.modalText1}>The Modal component is a basic way to present content above an enclosing view.</Text>

            </View>
            
            <View style={{width:'100%',height:'20%',alignItems:'center'}}>
            <Pressable
              style={[styles.btn, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.btnText}>OK</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.btnSection}>
      <Pressable
        style={[styles.btn, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.btnText}>{name}</Text>
      </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width:'90%',
    height:'70%',
   
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor:'#7851a9',
    width:'100%'
  },
  buttonClose: {
    backgroundColor:'#7851a9',
    width:'90%',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color:'#7851a9',
    fontSize:25,
    fontWeight:'600'
  },
  modalText1: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize:20,
    fontWeight:'600'
  },
  btnSection:{
    padding:20,
    gap:5,
    width:'100%',
    justifyContent:'center',
   
},
btn:{
    height:60,
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
}
});

export default Pupup;