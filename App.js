import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  Provider } from 'react-native-paper';
import { name as appName } from './app.json';
import { AppRegistry } from 'react-native'

import Doctor from './src/Doctor/Routes';
import RoutesP from './src/Patient/RoutesP'
import First from './src/Welcome/First';
import Portal from './src/Welcome/Portal';
import Second from './src/Welcome/Second';
import Congrats from './src/Welcome/Congrats'
import SignInP from './src/Patient/SignIn'
import SignIn from './src/Doctor/SignIn'
import Choice from './src/Welcome/Choice'
import SignUp from './src/Patient/Signup'
import Congrats2 from './src/Welcome/Congrates2';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <Provider>
      
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
      }}
      >
      <Stack.Screen name='first' component={First} />
      <Stack.Screen name='second' component={Second} />
      <Stack.Screen name='Portal' component={Portal} />
      <Stack.Screen name='Congrats' component={Congrats} />
      <Stack.Screen name='SigninD' component={SignIn} />
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='SignInP' component={SignInP} />
      <Stack.Screen name='Choice' component={Choice} />
      <Stack.Screen name='patient' component={RoutesP} />
      <Stack.Screen name='Doctor' component={Doctor} />
      <Stack.Screen name='congrats2' component={Congrats2} />
    
      
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
AppRegistry.registerComponent(appName, () => Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
