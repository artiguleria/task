import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import styles from './styles';
import Email from '../../../assets/images/icon2/email.svg';

const device_id = 'RP123456789';
const initialState = {
  email: '',
  password: '',
  emailValid: true,
};
const ForgotPassword = ({navigation}) => {
  const [state, setState] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSucess] = useState('');

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
  const handleResetPassword = async () => {
    setMessage('');
    setIsSubmitting(true);
    if (!state.email) {
      setState({...state, emailValid: false});
      setMessage('Email is required.');
      return;
    }

    if (state.email) {
      if (
        !state.email.match(
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+.+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        )
      ) {
        setState({...state, emailValid: false});

        return setMessage('Please enter a valid email .');
      }
    }

    try {
      const result = await window.$http.postWithoutHeaders('password/forgot', {
        email: state.email,
        device_id,
      });
      console.log('forgot password response ' + JSON.stringify(result));
      if (result.code === 200) {
        return setSucess('Please check your email for the link to reset your password. Check your spam or notification folders if you dont see the email in your inbox.');
      }

      else {
        setMessage(result.message)
      }
    } catch (error) {
      console.log(error);
    }

    // navigation.navigate('ProfileScreen');
  };
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
          <Text style={styles.txtTop1}>Forgot Password</Text>
          <Text style={styles.txtTop2}>
            Please enter your email o reset the password
          </Text>
        </View>

        <View style={styles.txtInputView}>
          <TextInput
            style={!state.emailValid ? styles.Wronginput : styles.input}
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize={'none'}
            placeholderTextColor="#AAB7B8"
            value={state.email}
            onChangeText={emailChangeHandler}
          />

          <Email style={styles.emailIcon} width={20} height={20} />
        </View>

        <View style={styles.backtologinView}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.BackToLoginTxt}>Back to login</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleResetPassword} style={styles.button}>
          <Text style={styles.buttonTxt}> Reset password</Text>
        </TouchableOpacity>
        <View>
          <Text style={{color: 'red', top: 20}}>
            {message && <Text>{message}</Text>}
            


          </Text>
          <Text style={{color: '#00a39d', top:10}}>
            {success&& <Text>{success}</Text>}
            


          </Text>
        </View>
      </View>
    </>
  );
};

export default ForgotPassword;
