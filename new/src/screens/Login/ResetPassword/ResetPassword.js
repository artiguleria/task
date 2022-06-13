import React, {useState,useEffect} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity,ToastAndroid} from 'react-native';
import styles from './style'

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Email from '../../../assets/images/icon2/email.svg';
import Lock from '../../../assets/images/icon2/lock.svg';

import {useDispatch} from 'react-redux';



const device_id = 'RP123456789';

const ResetPassword = ({navigation}) => {
  const dispatch = useDispatch();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [visible, setVisible] = useState(true);
  const [visiblePass, setVisiblePass] = useState(true);
  const [validPwdHash, setValidPwdHash] = useState(true);

  const [message, setMessage] = useState('');

  const pwdRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{9,20}$/i;

    useEffect(() => {
      // const validatePassword = async () => {
      //   const result = await window.$http.postWithoutHeaders(
      //     "password/validate",
      //     {
      //       password_reset_hash,
      //     }
      //   );
  
      //   if (result.code !== 200) {
      //     setValidPwdHash(false);
      //   }
      // };
  
      // validatePassword();
    }, []);

  const handleSubmit = async () => {
    if(!password && !confirmPassword){
      ToastAndroid.show('Fields needs ti fill',ToastAndroid.LONG)
      return;

    }
    
    if (!password) {
    ToastAndroid.show( "Password is required." ,ToastAndroid.LONG);
      return;
    }
    if (!confirmPassword) {
      ToastAndroid.show( "Confirm password is required.",ToastAndroid.LONG);
      return 
    }

    if (password && confirmPassword) {
      if (password !== confirmPassword) {
       ToastAndroid.show("Password and Confirm password do not match.",ToastAndroid.LONG)
        
        return 
      }
    }

    if (!pwdRegex.test(password)) {
     ToastAndroid.show( "Password format is invalid." ,ToastAndroid.LONG);
      return 
    }

  }
    
   

  return (
    <>
      <View style={styles.logoView}>
        <Image
          style={styles.rpLogo}
          source={require('../../../assets/images/rp-logo.png')}
        />
        <View style={styles.verticleLine}></View>
        <Image
          style={styles.clientLogo}
          source={require('../../../assets/images/client-logo.png')}
        />
      </View>

      <View style={styles.container}>
        <View style={{padding: 20, left: 5}}>
          {/* <Text style={styles.welcomTxt}>Welcome to Resiliency Program</Text>
          <Text style={styles.yourEmployerTxt}>
            Your employer is dedicated to maximizing your resiliency and
            quality-of-life
          </Text> */}
        </View>

        <View style={styles.txtInput1View}>
       
       <TextInput
         style={ styles.input}
         placeholder=" password"
         autoCorrect={false}
         autoCapitalize={'none'}
         secureTextEntry={visiblePass}
         onChangeText={(text)=>setPassword(text)}
         value={password}
       />
       <Lock width={20} height={20} style={styles.lockIcon} />

       <TouchableOpacity
         onPress={() => {
           setVisiblePass(!visiblePass);
           setShowPass(!showPass);
         }}>
         <Ionicons
           style={styles.eyeIcon}
           name={showPass === false ? 'eye-off-outline' : 'eye-outline'}
           size={23}
           color={'#6B778C'}
         />
       </TouchableOpacity>
     </View>
        <View style={styles.txtInput1View}>
       
          <TextInput
            style={ styles.input}
            placeholder=" Confirm password"
            autoCorrect={false}
            autoCapitalize={'none'}
            secureTextEntry={visible}
             onChangeText={(text)=>setConfirmPassword(text)}
            value={confirmPassword}
          />
          <Lock width={20} height={20} style={styles.lockIcon} />

          <TouchableOpacity
            onPress={() => {
              setVisible(!visible);
              setShow(!show);
            }}>
            <Ionicons
              style={styles.eyeIcon}
              name={show === false ? 'eye-off-outline' : 'eye-outline'}
              size={23}
              color={'#6B778C'}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.forgotTxt}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.BottomTxt}>Back to login</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonTxt}> Save</Text>
        </TouchableOpacity>

        <View>
          <Text style={{color: 'red', top: 20}}>{message}</Text>
        </View>

        {/* <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Text style={styles.BottomText1}>@Resiliency Textrogram 2022</Text>

          <View style={{flexDirection: 'row', bottom: 25}}>
            <AntDesign
              style={{left: 35}}
              name="exclamationcircleo"
              color={'red'}
              size={13}
            />

            <Text style={styles.BottomTxt2}>Privacy policy</Text>
          </View>
        </View> */}
      </View>
    </>
  );
};

export default ResetPassword;
