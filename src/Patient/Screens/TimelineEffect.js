import React,{useState} from 'react';
import { View, Text, Image, ScrollView,TouchableOpacity, StyleSheet, Modal, Pressable} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
import GroupBtn from '../components/Buttons/GroupBtn';

const TimelineEffect = () => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [active, setActive] = useState('inactive')
    const [selection, setSelection] = useState(1)
    
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];

  const data = [
    {
      time: '09:00',
      title: 'Medicine Name',
      description:'Tablets',
      description1:'Before Meal',
    },
    {
      time: '10:45',
      title: 'Play Badminton',
      description:'Tablets',
      description1:'Before Meal',
    },
    {
      time: '12:00',
      title: 'Lunch',
      description:'Tablets',
      description1:'Before Meal',
    },
    {
      time: '14:00',
      title: 'Watch Soccer',
      description:'Tablets',
      description1:'Before Meal',
    },
    {
      time: '16:30',
      title: 'Go to Fitness center',
      description:'Tablets',
      description1:'Before Meal',    },
  ];

  const renderDetail = (rowData, sectionID, rowID) => {
    let title = <Text style={[styles.title]}>{rowData.title}</Text>;
    let desc = null;
    if (rowData.description && rowData.description1)
      desc = (
        <View style={styles.descriptionContainer}>
          {/* <Image source={{ uri: rowData.imageUrl }} style={styles.image} /> */}
          <Text style={[styles.textDescription]}>{rowData.description}</Text>
          <View style={styles.container}>
          <Text style={[styles.textDescription]}>{rowData.description1}</Text>
          <View style={{flexDirection:'row',gap:15,justifyContent:'flex-end'}}>
                    <Text style={{color:"#088be9",fontWeight:'600'}} >Done</Text>
                    <Text style={{color:"#7851a9",fontWeight:'600'}}>View</Text>
                </View>
          </View>
        </View>
      );

    return (
        <ScrollView>
        <View style={styles.main}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                {title}
            <Feather name="x" size={24} color="black" />
            </View>     
                {desc}
        </View>
        
        </ScrollView>
        
    );
  };

  return (
    <View>
        <View style={{width:'40%',paddingBottom:20}}>
            <Picker
                
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="January"  value="js"  />
                <Picker.Item label="February" value="w" />
                <Picker.Item label="March" value="jsw" />
                <Picker.Item label="April" value="jss" />
                <Picker.Item label="April" value="jsd" />
                <Picker.Item label="May"  value="jsf"/>
                <Picker.Item label="June"  value="jss"/>
                <Picker.Item label="July"  value="jsa"/>
                <Picker.Item label="August" value="jfds" />
                <Picker.Item label="September" value="fjs" />
                <Picker.Item label="November"  value="jsd"/>
                <Picker.Item label="December" value="jsss" />
            </Picker>
        </View>
      
       <View style={{width:'100%',height:80,}}>
              <GroupBtn
              name1='Mon'
              name11='01'
              name2='Tue'
              name22='02'
              name3='Wed'
              name33='03'
              name4='Thu'
              name44='04'
              name5='Fri'
              name55='05'
              name6='Sat'
              name66='06'
              name7='Sun'
              name77='07'
              
              />
              
        </View>
       
    <Timeline
        circleSize={18}
          circleColor='#7851a9'
          lineColor='#7851a9'
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:5}
          }}         
      data={data}
      renderDetail={renderDetail}
    />
    </View>
  );
};

TimelineEffect.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      lineColor: PropTypes.string,
      icon: PropTypes.any,
      imageUrl: PropTypes.string,
    })
  ).isRequired,
  renderDetail: PropTypes.func.isRequired,
};

export default TimelineEffect;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
   
  },
  descriptionContainer: {
   width:'100%',
   maxWidth:'100%',
    paddingTop: 15,
  },
  textDescription: {
    flex: 1,
    flexWrap: 'wrap',
    color:'#000'
  },
  main:{
    borderWidth:1,
    marginRight:5,
    borderColor:'gray',
    padding:10,
    borderRadius:5,
  },
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  selectedMonth: {
    fontSize: 20,
    padding: 10,
    backgroundColor: '#e6e6e6',
    borderRadius: 5,
  },
  modal: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  monthButton: {
    padding: 10,
  },
  monthText: {
    fontSize: 18,
  },
  active:{
    fontSize:20,
    fontWeight:'700',
    color:'#000',
  },
  inactive:{
    fontSize:20,
    fontWeight:'700',
    color:'#fff'
  },
  activeT:{
    fontSize:20,
    fontWeight:'700',
    color:'#000',
  },
  inactiveT:{
    fontSize:25,
    fontWeight:'700',
    color:'#fff'
  },
  activeV:{
    alignItems:'center',
    justifyContent:'center'
  },
  inactiveV:{
    height:60,
   width:50,
   borderRadius:5,
    backgroundColor:'#7851a9',
    alignItems:'center',
    justifyContent:'center'
  },
});
