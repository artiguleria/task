import React from 'react';

import {Text, View, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';


import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import DrawerContent from '../../components/DrawerContent';

import HamburgerIcon from '../../components/HamburgerIcon';
import styles from './style';

import Home from '../../screens/Home/Home';
import AssessmentResult from '../../screens/Assessment Result/AssessmentResult';

import Setting from '../DrawerScreens/Setting/Setting';
import Support from '../DrawerScreens/Support/Support';
import Profile from '../DrawerScreens/profile/Profile';
import EditProfile from '../../screens/EditProfile/EditProfile';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        title: '', //Set Header Title
        headerRight: () => (
          <View style={styles.headerRight}>
            <View>
              <HamburgerIcon
                navigationProps={navigation}
                style={{marginLeft: '10%'}}
              />
            </View>
          </View>
        ),
        headerLeft: () => (
          <View style={styles.headerLeftView}>
            <View>
              <Text style={styles.headerLeftTxt2}>Helo, Arti</Text>
            </View>

            <View style={styles.WelcomeView}>
              <Text style={{left: 0}}>Welcome to Resiliency Porgram</Text>
            </View>
          </View>
        ),
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="AssessmentResult" component={AssessmentResult} />
    </Stack.Navigator>
  );
};

const ProfileScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: '', //Set Header Title
          headerRight: () => (
            <View style={styles.headerRight}>
              <View>
                <HamburgerIcon
                  navigationProps={navigation}
                  style={{marginLeft: '10%'}}
                />
              </View>
            </View>
          ),
          headerLeft: () => (
            <View style={styles.headerLeftView}>
              <View>
                <Text style={styles.headerLeftTxt2}>Helo, Arti</Text>
              </View>

              <View style={styles.WelcomeView}>
                <Text style={{left: 0}}>Welcom to Resiliency Program</Text>
              </View>
            </View>
          ),
          headerStyle: {
            // backgroundColor:'#ea3c53', //Set Header color
            backgroundColor: '#fff',
          },
          headerTintColor: '#00a39d', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          title: '', //Set Header Title
          headerRight: () => (
            <View style={styles.headerRight}>
              <View>
                <HamburgerIcon
                  navigationProps={navigation}
                  style={{marginLeft: '10%'}}
                />
              </View>
            </View>
          ),
          headerLeft: () => (
            <View style={styles.headerLeftView}>
              <View>
                <Text style={styles.headerLeftTxt2}>Helo, Arti</Text>
              </View>

              <View style={styles.WelcomeView}>
                <Text style={{left: 0}}>Welcome to Resiliency Porgram</Text>
              </View>
            </View>
          ),
          headerStyle: {
            // backgroundColor: Config.a, //Set Header color
            // backgroundColor:'#ea3c53',
            backgroundColor: '#fff',
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },

          // headerRight: () => (
          //   <Text style={{color: '#2c4143', marginRight: '10%'}}>
          //     Welcome to resiliency program
          //   </Text>
          // ),
        }}
      />
    </Stack.Navigator>
  );
};

const SettingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Setting">
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{
          title: '',
          headerRight: () => (
            <View style={styles.headerRight}>
              <View>
                <HamburgerIcon
                  navigationProps={navigation}
                  style={{marginLeft: '10%'}}
                />
              </View>
            </View>
          ),
          headerLeft: () => (
            <View style={styles.headerLeftView}>
              <View>
                <Text style={styles.headerLeftTxt2}>Helo, Arti</Text>
              </View>

              <View style={styles.WelcomeView}>
                <Text style={{left: 0}}>Welcome to Resiliency Program </Text>
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

    
    </Stack.Navigator>
  );
};

const SupportScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Support">
      <Stack.Screen
        name="Support"
        component={Support}
        options={{
          title: '',
          headerRight: () => (
            <View style={styles.headerRight}>
              <View>
                <HamburgerIcon
                  navigationProps={navigation}
                  style={{marginLeft: '10%'}}
                />
              </View>
            </View>
          ),
          headerLeft: () => (
            <View style={styles.headerLeftView}>
              <View>
                <Text style={styles.headerLeftTxt2}>Helo, Arti</Text>
              </View>

              <View style={styles.WelcomeView}>
                <Text style={{left: 0}}>Welcome to Resiliency Program </Text>
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

  
    </Stack.Navigator>
  );
};
const DrawerNavigationRoutes = props => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{headerShown: false, drawerPosition: 'right'}}>
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: 'Home',
        }}
        component={HomeScreenStack}
      />

      <Drawer.Screen
        name="Profile"
        // options={{
        //   drawerLabel: 'Profile',
        //   drawerIcon: ({color, size}) => (
        //     <Icon name="account-outline" size={25} />
        //   ),
        // }}
        component={ProfileScreenStack}
      />
      <Drawer.Screen
        name="Setting"
        // options={{
        //   drawerLabel: 'Setting',
        //   drawerIcon: ({color, size}) => (
        //     <AntDesign name="setting" color={'gray'} size={25} />
        //   ),
        // }}
        component={SettingScreenStack}
      />
      <Drawer.Screen
        name="Support"
        // options={{
        //   drawerLabel: 'Support',
        //   drawerIcon: ({color, size}) => (
        //     <Ionicons name="help-circle-outline" color={'gray'} size={25} />
        //   ),
        // }}
        component={SupportScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigationRoutes;
