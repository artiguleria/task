// Import React and Component
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native';
import { Wave } from 'react-animated-text';

import AsyncStorage from '@react-native-community/async-storage';

const Splash = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if userid is set or not
      //If not then send for Authentication
      //else send to Home Screen
      
      const auth = retrieveData();
      auth.then((value) =>
        navigation.replace(
          value === null ? 'Auth' : 'DrawerNavigationRoutes'
        ),
      );
    }, 3000);
  }, []);

  const retrieveData = async () => {
    const auth = await AsyncStorage.getItem('auth');
    return auth;
    };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'http://stgdialerapi.vl8.in/img/violet_logo.png',
        }}
        //source={require('http://stgdialerapi.vl8.in/img/violet_logo.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30, height: 100,}}
      />
      <Text style={styles.textDialer}>DIALER</Text>
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D3D3D3',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  text: {
    fontSize: 18,
    fontWeight: '800',
    marginLeft: '5%',
    marginRight: '5%',
    color: '#795bd4',
    marginBottom: '10%'
  },
  textDialer: {
    fontSize: 36,
    fontWeight: '800',
    marginLeft: '5%',
    marginRight: '5%',
    color: '#795bd4'
  },
});