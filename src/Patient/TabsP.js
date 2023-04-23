import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View,Text} from 'react-native'
// import BookingType from './Components/BookingType';
import Home from './pages/Home'
import Booking from './pages/Booking'
import History from './pages/History'
import Menu from './pages/Menu'



const Tab = createMaterialBottomTabNavigator();




function TabP() {


  return (
    <Tab.Navigator
    initialRouteName="Feed"
    activeColor='#7851a9'
    shifting={true}
    barStyle={{ backgroundColor: '#fff', }}
    screenOptions={{
      headerShown:false,
      tabBarStyle:{
        shadowColor:'#fff',
        position:'absolute',
        
      },
      tabBarBackground: () => (
      <View>
      <BlurView tint="light" intensity={100} />
      <Text> heo</Text>
      </View>
    ),
    }}
  >
   
   <Tab.Screen
      name="Feed"
      component={Home}
      options={{
        tabBarShowLabel:false,
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused, color, size }) => (
          

          <View style={{flexDirection:"row",}}>
       
          <MaterialCommunityIcons name="home" color='#7851a9' size={35} />
          
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={Booking}
      options={{
        tabBarShowLabel:false,
        tabBarLabel: 'Booking',
        tabBarIcon: ({ color, size }) => (
          <Entypo name="calendar"  size={35} color='#7851a9' />
          
        ),
        
      }}
    />
    <Tab.Screen
      name="main"
      
      component={History}
      options={{
        tabBarShowLabel:false,
        tabBarLabel: 'History',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="history" size={35} color='#7851a9' />
        ),
      }}
    />
    <Tab.Screen
      name="nothin"
      component={Menu}
      options={{
        tabBarShowLabel:false,
        tabBarLabel: 'Menu',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="menu"  size={35} color='#7851a9' />
        ),
      }}
    />
  </Tab.Navigator>
   
  );
}
export default TabP
// Purple: #7851a9
// Light blue: #088be9
// Black: #2e2c2c
