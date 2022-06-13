// Import React
import React from 'react';
import {Image,Text} from 'react-native';
// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';

// Import Screens
import Home from './DrawerScreens/Home';
import Remarks from './DrawerScreens/Remarks';
import History from './DrawerScreens/History';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import Skip from './DrawerScreens/Skip';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';

//import icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import color from 'color';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const getHeaderTitle = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'History':
      return 'History';
  }
};
const BottomTabStack = () => {
  return (
    <Tab.Navigator initialRouteName="Home"
    tabBarOptions={{
     // activeTintLabelColor : '#e91e63',
    labelStyle:{fontWeight:'bold', 
    fontSize: 13,
  },
    
    }}
>

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
        
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={33}  />,
        }}
      />

      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: 'History', 
          tabBarIcon: ({color}) => (
            <Icon name="history" color={color} size={33} />
          ),
         
    
        }}
      />

      <Tab.Screen
        name="Skip"
        component={Skip}
        options={{
          tabBarLabel: 'Skip',
          tabBarIcon: ({color}) => (
            <Icon name="skip-next-circle-outline" color={color} size={33} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const homeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/* <Stack.Screen
        name="Home"
        component={BottomTabStack}
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      /> */}
      <Stack.Screen
        name="Home"
        component={BottomTabStack}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};

const remarksScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Remarks">
      <Stack.Screen
        name="Remarks"
        component={Remarks}
        options={{
          title: 'Remarks', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const historyScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="History">
      <Stack.Screen
        name="History"
        component={History}
        options={{
          title: 'Reports', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = props => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        //  activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: 'gray',
          fontSize: 16,
          fontWeight:'bold'
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="homeScreenStack"
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({color, size}) => (
            <Icon name="home-outline" color={color} size={33} />
          ),
        }}
        component={homeScreenStack}
      />
      <Drawer.Screen
        name="historyScreenStack"
        options={{
          drawerLabel: 'Reports',
          drawerIcon: ({color, size}) => (
            <SimpleLineIcons name="note" color={color} size={25} />
          ),
        }}
        component={historyScreenStack}
      />

      {/* <Drawer.Screen
        name="remarksScreenStack"
        options={{drawerLabel: 'Remarks'}}
        component={remarksScreenStack}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
