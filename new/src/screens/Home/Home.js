import React from 'react';
import { View, Text } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../../constants/Colors'


import Assessment from '../../navigation/BottomTab/Assessment/Assessment'

import ResiliencyPlan from '../../navigation/BottomTab/ResiliencyPlan/ResiliencyPlan'
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            // height: 60,
            // position:'absolute',
            // bottom:"90%",
            // left: 10,
            // right:0,
            // backgroundColor:"#00a39d"
          },
          tabBarIconStyle: {display: 'none'},
        }}
        initialRouteName="Assessments"
        tabBarOptions={{
          activeTintColor: COLORS.RPPrimaryGreen,
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: '#e0e0e0',
          },
          labelStyle: {
            textAlign: 'center',
            fontSize: 16,
          },
        }}>
        <Tab.Screen
          name="Assesment"
          component={Assessment}
          options={{
            tabBarLabel: 'Assessment',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="ResiliencyPlan"
          component={ResiliencyPlan}
          options={{
            tabBarLabel: 'ResiliencyPlan',
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    );
  };
  
const Home = () => {

  return (
 <BottomTabStack/>
  );
}

export default Home;
