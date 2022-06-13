import React from 'react';
import {View, StyleSheet, Image,Alert} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Avatar,
  Title,
  Caption,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import style from 'react-native-datepicker/style';

import Logout from '../assets/images/icon2/logout.svg'
import Support from '../assets/images/icon2/support.svg'
import User from '../assets/images/icon2/user.svg'
const DrawerContent = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View syle={styles.userInfoSection}>
            
            <View style={{flexDirection: 'row', marginTop: 15,marginLeft:15}}>
              <Avatar.Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                }}
                size={55}
              />
    
              <View styles={{ flexDirection: 'column',}}>
                <Title style={styles.title}> Hello, Arti Mehta     
              
               </Title>

               <Caption styles={styles.caption}>amehta@resiliency.com</Caption>  

              </View>
            </View>
          </View>



          <View style={styles.profileHeaderLine} />

          <Drawer.Section style={styles.drawerSection}>
      
        <DrawerItem 
          icon={({color , size}) => (
            <User width={20} height={20}  />
          )}
          label="Profile"
          onPress={()=>{ props.navigation .navigate("Profile")}}
        />
          <View style={styles.profileHeaderLine} />
        <DrawerItem style={{    marginTop: 10,right:6}}
          icon={({color , size}) => (
            // <AntDesign name="setting" color={"gray"} size={size} />
            <Image   
            style={{resizeMode:'contain',height:30,width:30}}
            
            source ={require('../assets/images/icon2/setting_Images/setting.png')} /> 
          )}
          label="Setting"
          onPress={()=>{props.navigation .navigate("Setting")}}
        />
          <View style={styles.profileHeaderLine} />
            <DrawerItem style={{    marginTop: 10,left:5}}
          icon={({color , size}) => (
            <Support width={20} height={20} />
          )}
          label="Support"
          onPress={()=>{props.navigation .navigate("Support")}}
        />
          <View style={styles.profileHeaderLine} />
        <DrawerItem style={{    marginTop: 10,}}
          icon={({color , size}) => (
            <Logout width={25} height={25} />
          )}
          label="Logout"
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              'Logout',
              'Are you sure?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {
                    // AsyncStorage.clear();
                    props.navigation.replace('Login');
                  },
                },
              ],
              {cancelable: false},
            );
          }}
        />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={style.bottomDrawerSection}>
       
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },

  userInfoSection: {
    paddingLeft: 20,
  },

  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: '600',
    color:"#00A39D",
    marginLeft:5
  },

  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: '#2c4143',

  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 10,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,

    paddingHorizontal: 16,
  },
  profileHeaderLine: {
    height: 1.5,
    // marginHorizontal: 20,
    backgroundColor: '#F2F4F4',

    marginTop:10,
    width:"100%",

  },
});
