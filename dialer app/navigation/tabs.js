import React from 'react';
import { View, Text, TabBarIOS } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screen/DrawerScreens/Home';
import History from '../Screen/DrawerScreens/History';
import sms from '../Screen/sms';
import email from '../Screen/email';
import watsap from '../Screen/watsap'
import logout from '../Screen/logout'
const Tab = createBottomTabNavigator();
const tabs = () => {
  return (
   <Tab.Navigator>


       <Tab.Screen name='Home' component={Home}/>
       <Tab.Screen name='History' component={History}/>
       <Tab.Screen name='sms' component={sms}/>
       <Tab.Screen name='email' component={email}/>
       <Tab.Screen name='watsap' component={watsap}/>
       <Tab.Screen name='logout' component={logout}/>
       
   </Tab.Navigator>
  );
}

export default tabs ;
// import {NavigationContainer} from '@react-navigation/native';
// import Tabs from './navigation/tabs'
// import React from 'react';
// import { View, Text } from 'react-native';

// const App = () => {
//   return (
//    <NavigationContainer>
//      <Tabs/>
//    </NavigationContainer>
//   );
// }

