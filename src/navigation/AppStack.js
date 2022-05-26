import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calculator from '../component/Calculator'

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen     options={{headerShown: false}}  name="Calculator" component={Calculator} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default AppStack;
