import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

import styles from './OTPVerification.style';

const OTPVerification = ({navigation}) => {
  const [mobileNo, setMobileNo] = useState('');
  const [countryCode, setCountryCode] = useState(91);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [state, setState] = useState({
    mobileNo: '',
    mobileValid: true,
    success: '',
    error: '',
  });

  const handleMobileChange = text => {
    if (isSubmitting) {
      return setState({
        ...state,
        mobileNo: text,
        mobileValid: true,
        success: ' ',
        error: ' ',
      });
    } else {
      return setState({...state, mobileNo: text});
    }
  };

  const handleSubmit = async () => {
    console.log(state.mobileNo);
    setState({success: ' ', error: ' '});
    setIsSubmitting(true);

    if (!state.mobileNo) {
      return setState({
        ...state,
        mobileValid: false,
        success: '',
        error: 'The mobile no field is required.',
      });
    }
    if (state.mobileNo.length !== 10) {
      return setState({
        ...state,
        mobileValid: false,

        success: '',
        error: 'Please enter a valid mobile no',
      });
    }

    try {
      const result = await window.$http.postWithHeaders('mobile/sendotp', {
        mobile_country_code: countryCode,
        mobile_no: state.mobileNo,
      });
      console.log('Verification  Response ' + JSON.stringify(result));
      if (result.code === 200) {
        ToastAndroid.show('Authentication code sent.!', ToastAndroid.SHORT);
        navigation.navigate('OTPVerify',{
          mobile:state.mobileNo
        })
      }
    } catch (error) {
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
          source={require('../../assets/images/icon2/otp_Images/otp.png')}
        />

        <Text style={styles.otpverification}> Mobile Verification</Text>
        <Text style={styles.OTPTxt}>
          We will send you an authentication code
          {/* <Bold>One Time Pssword</Bold> on this mobile number */}
        </Text>

        <View style={styles.txtInput1View}>
          <Text style={{textAlign: 'center'}}> Enter Mobile Number</Text>
          <TextInput
            style={styles.input}
            //   placeholder="962536905"
            value={state.mobileNo}
            underlineColorAndroid="#00A39D"
            // { !state.mobileValid ? 'red':   "#00A39D"}

            keyboardType="numeric"
            onChangeText={handleMobileChange}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonTxt}> Send authentication code</Text>
        </TouchableOpacity>
        <Text>
          <View style={{top: 20}}>
            <Text style={{color: 'red', top: 20}}> {state.error} </Text>
          </View>

          {/* {state.error ? ( */}
          {/* <Text style={{color: 'red', top: 20}}> {state.error} </Text> */}
          {/* ) : (
          state.success && (
            <Text >
      
              {state.success}
            </Text>
          )
        )
        } */}
        </Text>
      </View>
    </>
  );
};

export default OTPVerification;
