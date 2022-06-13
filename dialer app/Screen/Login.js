// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Feather from 'react-native-vector-icons/Feather';

import Loader from './Components/Loader';
import Config from '../Config';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [show, setShow] = React.useState(false);
   const [visible, setVisible] = React.useState(true);


  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext('');
    if (!username&&!password) {
      alert('Please fill username and password');
      return;
    }
    if (!username) {
      alert('Please fill Username' );
      return;
    }
    else if (!password) {
      alert('Please fill Password');
      return;
    }
    
    setLoading(true);
    let formBody = {username: username, password: password};

    fetch(Config.API_URL +'/login', {
      method: 'POST',
      body: JSON.stringify(formBody),
      headers: {
        //Header Defination
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        //Hide Loader
        setLoading(false);
        console.log('Login Response ' + JSON.stringify(responseJson));
        // If server response message same as Data Matched
        if (responseJson.message === 'success') {
          const storeResult = storeData(responseJson);
          console.log('Stored Login Response' + storeResult);
          navigation.replace('DrawerNavigationRoutes');
        } else {
          setErrortext(responseJson.message);
          console.log('Please check your username or password');
        }
      })
      .catch(error => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };

  const storeData = async value => {
    try {
      //we have to wait until AsyncStorage.setItem() returns a promise
      var item = await AsyncStorage.setItem('auth', JSON.stringify(value));
        console.log('auth response'+JSON.stringify(value));

      return item;
    
    } catch (error) {
      console.log(error);
    }
  };

  return (

   <View style={styles.container}>
       <Loader loading={loading} />
       
       <KeyboardAvoidingView enabled>
        <View style={{alignItems: 'center'}}>
             <Image
                source={{
                  uri: 'http://stgdialerapi.vl8.in/img/violet_logo.png',
                }}
                //source={require('http://stgdialerapi.vl8.in/img/violet_logo.png')}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  marginBottom:10
                }}
              />
            </View>
{/* 
   <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30 ,marginTop:40}}> Log in</Text> */}

   <View style={styles.edit}>
      <TextInput maxLength={20} style={styles.input}
         underlineColorAndroid="skyblue"
         placeholder="Username"
         value={username}

         placeholderTextColor="gray"
         autoCapitalize="none"
         keyboardType="default"
         
         returnKeyType="next"
       
         onChangeText={username => setUsername(username)}

         onSubmitEditing={() =>
           passwordInputRef.current && passwordInputRef.current.focus()
         }
        
         blurOnSubmit={false}
      />

      <TextInput style={styles.input}
         underlineColorAndroid="skyblue"

         placeholder="Password"
         secureTextEntry={visible}
         value={password}
         placeholderfontsize='30'
         placeholderTextColor="gray"
         keyboardType="default"
         autoCapitalize="none"
         ref={passwordInputRef}
         onChangeText={password => setPassword(password)}  
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
             
                returnKeyType="next"

      />
                  <TouchableOpacity style={styles.btneye}
               onPress={() => {
                  setVisible(!visible)
                  setShow(!show)
               }}
            >
               <Feather name={show === false ? "eye-off" : "eye-off"} size={23} color={'gray'} />
            </TouchableOpacity>
     


   </View>
   {errortext != '' ? (
              <Text style={styles.errorTextStyle}>{errortext}</Text>
            ) : null}
   <TouchableOpacity style={styles.loginbtn}
      activeOpacity={0.5}
        onPress={handleSubmitPress}>
      <Text style={styles.loginText}> LOG IN  </Text>
   </TouchableOpacity>
       {/* <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('Register')}>
              New Here ? Register
            </Text> */}

           
             
   </KeyboardAvoidingView>

</View>
);
}

export default Login

const styles = StyleSheet.create({
container: {
paddingTop: 130,
flex: 1,
backgroundColor: "#DCDCDC"

},
edit: {

backgroundColor: "#fff",
width: "90%",
borderRadius: 18,
marginLeft: 17,
marginTop: 50,
marginBottom: 20

},
errorTextStyle: {
   color: 'red',
   textAlign: 'center',
   fontSize: 14,
 },
input: {
margin: 15,
//height: 40,
marginTop: 20,
fontSize: 20,


},
btneye: {
position: 'absolute',
top: 110,
left: 300,


},

loginbtn: {
backgroundColor: '#307ecc',
width: "88%",
marginTop: 10,
paddingTop: 15,
paddingBottom: 15,
marginLeft: 20,
marginRight: 20,

borderRadius: 15,



},
loginText: {

color: 'white',
textAlign: 'center'
},
registerTextStyle: {
   color: '#000000',
   textAlign: 'center',
   fontWeight: 'bold',
   fontSize: 14,
   alignSelf: 'center',
   padding: 10,
 },

})