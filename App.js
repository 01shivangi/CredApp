import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Home from './src/components/Home';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/components/Login';
import TandC from './src/components/TandC';
import DenyPermission from './src/components/DenyPermission';
import OTP from './src/components/OTP';
import FirstName from './src/components/FirstName';
import LastName from './src/components/LastName';
import Email from './src/components/Email';
import Score from './src/components/Score';
import DOB from './src/components/DOB';
import PAN from './src/components/PAN';
import Waitlisted from './src/components/Waitlisted';
import ActionSheet from './src/components/ActionSheet';
import Read from './src/components/Read';
import CheckWhy from './src/components/CheckWhy';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = {'Home'}>
        <Stack.Screen name="Home" component={Home}  options = {{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options = {{ headerShown: false }}/>
        <Stack.Screen name="TandC" component={TandC} options = {{ headerShown: false }}/>
        <Stack.Screen name="DenyPermission" component={DenyPermission} options = {{ headerShown: false }}/>
        <Stack.Screen name="OTP" component={OTP} options = {{ headerShown: false }}/>
        <Stack.Screen name="FirstName" component={FirstName} options = {{ headerShown: false }}/>
        <Stack.Screen name="LastName" component={LastName} options = {{ headerShown: false }}/>
        <Stack.Screen name="Email" component={Email} options = {{ headerShown: false }}/>
        <Stack.Screen name="Score" component={Score} options = {{ headerShown: false }}/>
        <Stack.Screen name="DOB" component={DOB} options = {{ headerShown: false }}/>
        <Stack.Screen name="PAN" component={PAN} options = {{ headerShown: false }}/>
        <Stack.Screen name ="Waitlisted" component={Waitlisted} options = {{ headerShown: false }}/>
        <Stack.Screen name="ActionSheet" component={ActionSheet} options = {{ headerShown: false }}/>
        <Stack.Screen name="Read" component={Read} options = {{ headerShown: false }}/>
        <Stack.Screen name="CheckWhy" component={CheckWhy} options = {{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;