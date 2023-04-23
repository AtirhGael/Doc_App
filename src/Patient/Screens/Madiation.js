import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { Agenda} from 'react-native-calendars';
import { Card } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';

const timeToString=(time)=> {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
}

const Madiation = () => {
  const [selected, setSelected] = useState('');
  const [items, setItems] = useState({})

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];
          
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime
            });
          }
        }
      }
      const newItems  = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(
        newItems
      );
    }, 1000);
  }
  const renderItem = (item) =>{
    return(
      <TouchableOpacity style={styles.touchable}>
        <Card style={{ backgroundColor:"#fff" }}>
          <Card.Content style={styles.row}>
            <View style={styles.container}>
              <View style={{flexDirection:'row',justifyContent:'space-between',}} > 
                <Text style={styles.name}> Medicin for {item.day}</Text>
                <Feather name="x" size={20} color="black" />
              </View>
              <Text  style={styles.tablet}> Tablets</Text>
              <View style={styles.row1}>
                <Text> items for </Text>
                <View style={styles.row2}>
                  <Text style={{color:'blue'}}> Done </Text> 
                  <Text style={{color:'#7851a9'}}> View </Text> 
                </View> 
              </View>  
            </View>
            
          </Card.Content>
        </Card>
      </TouchableOpacity>
    )
  }
  return (
    <View style={{flex:1,paddingTop:20, backgroundColor:"#fff" }}>
       <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2017-05-16'}
       renderItem={renderItem}
       theme={{
          dotColor:'#ecc13b',
          selectedDayTextColor:'#fff',
          selectedDotColor:'#fff',
          selectedDayBackgroundColor:'#ecc13b',
          // backgroundColor:'#f5efdb'
        }}
        renderKnob={() => <View style={styles.knobStyles} />}
      />
    </View>
  )
}

export default Madiation

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    display:'flex',
    flexDirection:'column',
    width:'100%',
    gap:3,
   
  },
  touchable:{
    marginRight:10,
    marginTop:17,
    backgroundColor:'#fff'
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    gap:5
  },
  row1:{
    flexDirection:'row',
    justifyContent:'space-between',
   
  },
  row2:{
    flexDirection:'row',
    
    gap:5
  },
  name:{
    fontWeight:'500'
  },
  knobStyles:{
    marginTop:10,
    height:6,
    width:50,
    backgroundColor:'#7851a9',
    borderRadius:3
  },
})