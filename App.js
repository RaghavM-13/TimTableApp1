import React, { Component } from 'react';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
//import { createAppContainer, createSwitchNavigator} from 'react-navigation';


// const AppSwitchNavigator = createSwitchNavigator({
//   LoginScreen: LoginScreen,
//   HomeScreen: HomeScreen
// });

// const AppNavigator = createAppContainer(AppSwitchNavigator);

 export default function App() {
   return <HomeScreen />;
 }
