import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import Notification from './screens/Notifications';
import AllPatients from './screens/patients/AllPatients';
import PatientDetails from './screens/patients/PatientDetails';
import Massaging from './screens/patients/Massaging';
import BookingType from './screens/patients/BookingType';
import Offline from './Components/Offline';
import Online from './Components/Online';
import Onsite from './Components/Onsite';
import Prescription from './screens/patients/Prescription';
import PatientRegistration from './screens/patients/PatientRegistration';
import Myappointment from './screens/viewSchedule/Myappointments'
import MyAppointment from './screens/viewSchedule/MyAppoinments'
import Contact from './Components/Contact'
import Terms from './Components/Terms'
import Policy from './Components/Policy';

const Doctor = () => {
  const Stack = createNativeStackNavigator();
  return (
    
      <Stack.Navigator
      screenOptions={{
        headerShown:false,
      }}
      >
      <Stack.Screen name="tabs" component={Tabs} />        
      <Stack.Screen name="notification" component={Notification} />        
      <Stack.Screen name="allpatients" component={AllPatients} />        
      <Stack.Screen name="patientdetail" component={PatientDetails} />        
      <Stack.Screen name="massages" component={Massaging} />    
      <Stack.Screen name="type" component={BookingType} />        
      <Stack.Screen name="online" component={Online} />        
      <Stack.Screen name="ofline" component={Offline} />        
      <Stack.Screen name="onsite" component={Onsite} />       
      <Stack.Screen name="prescriptions" component={Prescription} />     
      <Stack.Screen name="patientInfo" component={PatientRegistration} />   
      <Stack.Screen name="myappointment" component={Myappointment} />   
      <Stack.Screen name="session" component={MyAppointment} />
      <Stack.Screen name="contact" component={Contact} />      
      <Stack.Screen name="terms" component={Contact} />      
      <Stack.Screen name="Policy" component={Policy} />      
      </Stack.Navigator>
    
  )
}

export default Doctor

const styles = StyleSheet.create({})