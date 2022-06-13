import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import styles from './OTPVerify.style';
import {useSelector, useDispatch} from 'react-redux';
import {save} from '../../store/user/actions';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import OTPTextInput from 'react-native-otp-textinput';
import AsyncStorage from '@react-native-community/async-storage';

import {API_URL} from '@env';

const OTPVerify = ({navigation, route}) => {
  const mobileNo = route.params.mobile;
  const dispatch = useDispatch();
  const [code, setCode] = useState('');
  const [countryCode, setCountryCode] = useState(91);

  const [counter, setCounter] = useState(15);
  const [success, setSucess] = useState('');
  const Bold = ({children}) => (
    <Text style={{fontWeight: 'bold', color: '#000'}}>{children}</Text>
  );

  const [state, setState] = useState({
    success: '',
    error: '',

  });

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const handleResendOtp = async () => {
    try {
      const result = await window.$http.postWithHeaders('mobile/sendotp', {
        mobile_country_code: countryCode,
        mobile_no: mobileNo,
      });
      console.log('Verification  Response ' + JSON.stringify(result));
      if (result.code === 200) {
        setCounter(15);
        // ToastAndroid.show('Authentication code sent.!', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    setState({});

    if (code === '') {
      return        setState({
        success: '',
        error: 'Authentication code required',
       
      });
      //  setState({
      //   success: '',
      //   error: 'Authentication code required',
      //   value: 'otp',
      // });
    }

    
    if (code.length !== 6) {
      return setState({
        success: '',
        error: 'Please enter a valid  code',
      
      });
    }

    try {
      const result = await window.$http.postWithHeaders('mobile/verifyotp', {
        mobile_country_code: countryCode,
        mobile_no: mobileNo,
        otp_code: code,
      });
      console.log("response verify "+JSON.stringify(result))

      if (result.code === 200) {
        dispatch(save(result));

        setSucess("OTP Successfully Verified!")
        setTimeout(() => {
          navigation.navigate("Onboarding");
      }, 3000);
    }
     else {
        return  setState({
          success: '',
          error: 'Invalid authentication code',

        
        });
    
      }
    }
    
    catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <View style={styles.logoView}>
        <Image
          style={styles.rpLogo}
          source={require('../../assets/images/rp-logo.png')}
        />
        <View style={styles.verticleLine}></View>
        <Image
          style={styles.clientLogo}
          source={require('../../assets/images/client-logo.png')}
        />
      </View>
      <View style={styles.container}>
        <Image
          style={{top: 30}}
          source={require('../../assets/images/icon2/otp2_Images/otp2.png')}
        />
        <Text style={styles.otpverification}>Mobile Verification</Text>
        <Text style={styles.enterotp}>
          {/* Enter the OTP sent to <Bold> +9625396006</Bold> */}
          Enter the authentication
        </Text>

        <View style={styles.container2}>
          {/* <OTPInputView
    style={{width: '80%', height: 200}}
    pinCount={6}
    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    // onCodeChanged = {code => { this.setState({code})}}
    autoFocusOnLoad
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {(code => {
        setCode(code)
    })}
/> */}
          <OTPTextInput
            handleTextChange={code => setCode(code)}
            inputCount={6}
            tintColor="#00A39D"
            inputCellLength={1}
            textInputStyle={{width: 30}}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          {/* <Text style={styles.buttonTxt}> Verfy {'	\u0026'} Procced</Text> */}
          <Text style={styles.buttonTxt}>Verify</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', top: 115}}>
          <View style={{}}>
            <Text>Don't receive OTP? </Text>
          </View>
          <View style={{}}>
            <TouchableOpacity onPress={handleResendOtp} disabled={counter != 0}>
              <Text style={{color: '#00A39D', fontWeight: '600', fontSize: 15}}>
                Resend OTP
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{top: 70}}>
        

<Text style={{textAlign:'center'}}   >   {state.error ? (
            <Text style={{color: 'red',top:25}}> {state.error} </Text>
          ) :   ""
          
          
      
          } </Text>

     <Text style={{textAlign:'center',bottom:17}}   > {success? <Text style={{color: '#00a39d', textAlign: 'center',}}>
             
             {success} 
           </Text> :"" }</Text>
        </View>

        <View>
          <Text>
            {counter > 0 ? (
              <View style={{flexDirection: 'row'}}>
               
                <Text style={{color: 'red', fontSize: 16, top: 10}}>
                Resend code in {''}
                  {counter}
                </Text>
                <Text style={{color: 'red', fontSize: 16, top: 10}}>  Sec.</Text>
              </View>
            ) : (
              ''
            )}
          </Text>
        </View>
      </View>
    </>
  );
};

export default OTPVerify;
