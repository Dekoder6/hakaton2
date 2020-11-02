import React, { Component } from 'react';

import LoginScreen from './src/screen/Login';
import HomeScreen from './src/screen/Home';

import SettingScreen from './src/screen/Settings';
import DrawerScreen from './src/routes/DrawerNav';
import ProfileScreen from './src/screen/Profile';
import InfoFORnoob from './src/screen/InfoFORnoob';
import WantToTQ from './src/screen/WantToTQ';
import Questions from './src/screen/Questions';
import Thanks from './src/screen/Thanks';
import ThanksCV from './src/screen/ThanksCV';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="drawer"
        drawerStyle={{ width: '90%' }}
        drawerContent={({ navigation }) => (
          <DrawerScreen navigation={navigation} />
        )}>
        <Drawer.Screen name="home" component={HomeStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="home">
      <Stack.Screen name="home" component={HomeScreen} />

      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="profile" component={ProfileScreen} />
      <Stack.Screen name="infoFORnoob" component={InfoFORnoob} />
      <Stack.Screen name="wantToTQ" component={WantToTQ} />
      <Stack.Screen name="questions" component={Questions} />
      <Stack.Screen name="thanks" component={Thanks} />
      <Stack.Screen name="thanksCV" component={ThanksCV} />
      

      <Stack.Screen name="setting" component={SettingScreen} />
      {/* <Stack.Screen name="Home">{() => <MyDrawer />}</Stack.Screen> */}
    </Stack.Navigator>
  );
}


