import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Email from '../../assets/images/icon2/email.svg';
import Lock from '../../assets/images/icon2/lock.svg';

import {useDispatch} from 'react-redux';
import {login} from '../../store/auth/actions';

const initialState = {
  email: '',
  password: '',
  emailValid: true,
  pwdValid: true,
};
const device_id = 'RP123456789';

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [state, setState] = useState(initialState);
  const [message, setMessage] = useState('');
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const emailChangeHandler = text => {
    if (isSubmitting) {
      setMessage('');
      return setState({
        ...state,
        email: text,
        emailValid: true,
      });
    } else {
      return setState({...state, email: text});
    }
  };

  const passwordChangeHandler = text => {
    if (isSubmitting) {
      setMessage('');
      return setState({
        ...state,
        password: text,
        pwdValid: true,
        isSubmitting: false,
      });
    } else {
      return setState({...state, password: text});
    }
  };

  const handleSubmit = async () => {
    console.log('email ' + state.email + '  ' + state.password);
    setMessage('');
    setIsSubmitting(true);

    try {
      if (!state.email && !state.password) {
        setState({...state, pwdValid: false, emailValid: false});
        setMessage('Email and Password are required.');
        return;
      }

      if (!state.email) {
        setState({...state, emailValid: false});
        return setMessage('Email is required.');
      }
      if (!state.password) {
        setState({...state, pwdValid: false});
        return setMessage('Password is required.');
      }

      if (reg.test(state.email) === false) {
        setState({...state, emailValid: false});

        return setMessage('Please enter a valid email .');
      }

      const result = await window.$http.postWithoutHeaders('login', {
        email: state.email,
        password: state.password,
        device_id,
      });

      console.log('Login Response' + JSON.stringify(result));
      if (result.code === 200) {
        dispatch(login(result));

        console.log('Login Response' + JSON.stringify(result));

        navigation.navigate('DrawerNavigationRoutes');

        // if (result.data.is_profile_completed === false) {

        //   if (result.data.onboarding_step === 0) {
        //     return navigation.navigate('Onboarding');
        //   }
        //    else if (result.data.onboarding_step === 1) {
        //     return navigation.navigate('OTPVerification');
        //   }

        // }
        // else{
        //   return navigation.navigate('DrawerNavigationRoutes');
        //    }
      } else {
        return setMessage(result.message);
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
        <View style={{padding: 20, left: 5}}>
          <Text style={styles.welcomTxt}>Welcome to Resiliency Program</Text>
          <Text style={styles.yourEmployerTxt}>
            Your employer is dedicated to maximizing your resiliency and
            quality-of-life
          </Text>
        </View>

        <View style={styles.txtInput1View}>
          <TextInput
            style={!state.emailValid ? styles.Wronginput : styles.input}
            placeholder="Email"
            value={state.email}
            onChangeText={emailChangeHandler}
            autoCorrect={false}
            // autoCapitalize={'none'}
            keyboardType="email-address"
          />
          <Email style={styles.emailIcon} width={20} height={20} />
        </View>

        <View style={styles.txtInput1View}>
          <TextInput
            style={!state.pwdValid ? styles.Wronginput : styles.input}
            placeholder="password"
            autoCorrect={false}
            // autoCapitalize={'none'}
            blurOnSubmit={true}
            secureTextEntry={visible}
            onChangeText={passwordChangeHandler}
            value={state.password}
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
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.BottomTxt}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonTxt}> Sign in</Text>
        </TouchableOpacity>

        <View>
          <Text style={{color: 'red', top: 20}}>
            {message && <Text>{message}</Text>}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            height: 100,
            position: 'absolute',
            top: 600,
          }}>
          <Text style={styles.BottomText1}>@Resiliency Program 2022</Text>

          <View style={{flexDirection: 'row', bottom: 25}}>
            <AntDesign
              style={{left: 35}}
              name="exclamationcircleo"
              color={'red'}
              size={13}
            />

            <Text style={styles.BottomTxt2}>Privacy policy</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Login;
