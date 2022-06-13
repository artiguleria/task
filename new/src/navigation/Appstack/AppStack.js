import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../../screens/Login/Login';

import DrawerNavigationRoutes from '../DrawerNavigation/DrawerNavigationRoutes';

import Onboarding from '../../screens/Onboarding/Onboarding';
import ForgotPassword from '../../screens/Login/ForgotPassword/ForgotPassword';
import Back from '../../assets/images/icon2/back.svg';
import {Avatar} from 'react-native-paper';
import OTPVerification from '../../screens/verification/OTPVerification';
import OTPVerify from '../../screens/verification/OTPVerify';
import GetResult from '../../screens/GetResult/GetResult';
import TermAndCondition from '../../screens/TermCondition/TermAndCondition';
import BeginAssessment from '../BottomTab/Assessment/Q &A/BeginAssessment';
import HelpDesk from '../../screens/Helpdesk/HelpDesk';
import EditProfile from '../../screens/EditProfile/EditProfile';
import styles from '../DrawerNavigation/style';
import HamburgerIcon from '../../components/HamburgerIcon'
import ResetPassword from '../../screens/Login/ResetPassword/ResetPassword';
const Stack = createNativeStackNavigator();

const AppStack = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HelpDesk">
        <Stack.Screen
          name="BeginAssessment"
          options={{
            title: 'Assessment',

            headerLeft: ({goback}) => (
              <>
                <Back
                  style={{right: 10}}
                  height={20}
                  width={20}
                  onPress={() => {
                    navigation.goBack();
                  }}
                />
              </>
            ),
          }}
          component={BeginAssessment}
        />
        <Stack.Screen
          name="HelpDesk"
          component={HelpDesk}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="TermAndCondition"
          component={TermAndCondition}
          options={{
            title: 'Terms and Conditions',

            headerLeft: ({goback}) => (
              <>
                <Back
                  style={{right: 10}}
                  height={20}
                  width={20}
                  onPress={() => {
                    navigation.goBack();
                  }}
                />
              </>
            ),
          }}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="OTPVerification"
          component={OTPVerification}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="OTPVerify"
          component={OTPVerify}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="GetResult"
          component={GetResult}
        />

        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            title: '',
            headerRight: () => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Avatar.Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                  }}
                  size={40}
                />
                <Text
                  style={{fontSize: 23, color: 'white', textAlign: 'center'}}>
                  Na
                </Text>
              </View>
            ),
            headerLeft: () => (
              <View>
                <Text
                  style={{
                    color: '#00a39d',
                    fontWeight: '600',
                    fontSize: 18,
                  }}>
                  Helo, Arti
                </Text>
                <View
                  style={{
                    color: '#2c4143',

                    flexWrap: 'wrap',
                  }}>
                  <Text style={{left: 0}}>Welcome to resiliency program</Text>
                </View>
              </View>
            ),
            headerStyle: {
              backgroundColor: '#fff',
              height: 60,
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
