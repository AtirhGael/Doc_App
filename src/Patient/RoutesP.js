import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsP from './TabsP';
import Notifications from './Screens/Notifications';
import Madication from './Screens/Madication';
import MyDoctor from './Screens/MyDoctor';
import Massaging from './Screens/Massaging';
import BookingType from '../Doctor/screens/patients/BookingType';
import Online from '../Doctor/Components/Online'
import Offline from '../Doctor/Components/Offline'
import Onsite from '../Doctor/Components/Onsite'
import Booking from './pages/Booking';



const Doctor = () => {
  const Stack = createNativeStackNavigator();
  return (
    
      <Stack.Navigator
      screenOptions={{
        headerShown:false,
      }}
      >
      <Stack.Screen name="tabsP" component={TabsP} />        
      <Stack.Screen name="notificationD" component={Notifications} />       
      <Stack.Screen name="madiation" component={Madication} />        
      <Stack.Screen name="mydoctor" component={MyDoctor} />        
      <Stack.Screen name="massaging" component={Massaging} />        
      <Stack.Screen name="types" component={BookingType} />        
      <Stack.Screen name="ofline" component={Online} />        
      <Stack.Screen name="online" component={Offline} />        
      <Stack.Screen name="onsite" component={Onsite} />        
      <Stack.Screen name="booking" component={Booking} />        
      </Stack.Navigator>
    
  )
}

export default Doctor

const styles = StyleSheet.create({})