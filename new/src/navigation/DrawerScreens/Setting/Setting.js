import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ToastAndroid,
} from 'react-native';
import styles from './styles';
import store from '../../../store';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Root, Popup} from 'popup-ui';
import {useSelector} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';

const device_id = 'RP123456789';

const initialState = {
  currentPassword: '',
  newPassword: '',
  repeatPassword: '',
  currentPassValid: true,
  newPassValid: true,
  repeatPassValid: true,
  error: '',
};
const handlePasswordChange = text => {
  setPassword(text);
};

const Setting = ({navigation}) => {
  const email = useSelector(state => state.user).email;

  const [state, setState] = useState(initialState);

  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [visibleIcon, setVisibleIcon] = useState(true);
  const [success, setSucess] = useState('');

  const pwdRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{9,20}$/i;

  const currentPassHandler = text => {
    if (isSubmitting) {
      setState({...state, error: ''});
      return setState({
        ...state,
        currentPassword: text,
        currentPassValid: true,
      });
    } else {
      return setState({...state, currentPassword: text});
    }
  };

  const newPaasHandler = text => {
    if (isSubmitting) {
      setState({...state, error: ''});
      return setState({
        ...state,
        newPassword: text,
        newPassValid: true,
      });
    } else {
      return setState({...state, newPassword: text});
    }
  };
  const repeatPassHandler = text => {
    if (isSubmitting) {
      setState({...state, error: ''});
      return setState({
        ...state,
        repeatPassword: text,
        repeatPassValid: true,
      });
    } else {
      return setState({...state, repeatPassword: text});
    }
  };

  const handleSave = async () => {
    
  
      console.log("newpas "+state.newPassword+" "+"current "+ state.currentPassword)
      setState({...state,error:''})
      setIsSubmitting(true);
      if (!state.currentPassword && !state.newPassword && !state.repeatPassword) {
        return    setState({
          ...state,
          currentPassValid: false,
          newPassValid: false,
          repeatPassValid: false,
          error:"Password is required."
        });

      }
      if ( !state.newPassword ) {
        return    setState({
          ...state,

          newPassValid: false,

          error:" New password is required."
        });

      }
      if ( !state.repeatPassword) {
        return    setState({
          ...state,

          repeatPassValid: false,
          error:"Confirm password is required."
        });

      }
      if ( !state.currentPassword) {
        return    setState({
          ...state,

          currentPassValid: false,
          error:"current password is required."
        });

      }

      if (state.currentPassword && state.newPassword && state.repeatPassword) {
        if (state.currentPassword === state.newPassword) {
          return    setState({ ...state, newPassValid: false,
    error: "New Password cannot be same as your current password." });

        }
        if (!pwdRegex.test(state.currentPassword)) {
          console.log('hi')
          return setState({ ...state, currentPassValid: false ,error:"New password format is invalid.",});

        }
      }

    try {
      const data = await window.$http.postWithHeaders('password/change', {
        email,
        device_id,
        current_password: state.currentPassword,
        new_password: state.newPassword,
      });

      console.log('setting screen response ' + JSON.stringify(data));
      if (data.code === 200) {

        setSucess("Password successfully changed!")
        setTimeout(() => {
          navigation.goBack() //this.props.navigation.navigate('Login')
      }, 3000);

        // Popup.show({
        //   type: 'Success',
        //   title: 'successfully',
        //   button: false,
        //   textBody: 'Password successfully changed!',
        //   buttontext: 'Ok',
        //   button: true,

        //   callback: () => {
        //     Popup.hide();
        //     navigation.goBack();
        //   },
        // });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
   
      <KeyboardAvoidingView behavior="height" >
        <ScrollView style={{}}>
          <View style={styles.container}>
            <Text style={styles.Toptxt}>Settings</Text>
            <View>
              <Text style={styles.inputTxt}>Password</Text>
              <TextInput
                style={
                  !state.currentPassValid ? styles.wrongInput : styles.input
                }
                placeholder="Current Password"
                autoCorrect={false}
                autoCapitalize={'none'}
                secureTextEntry={true}
                valu={state.currentPassword}
                onChangeText={currentPassHandler}
              />
            </View>
            <View>
              <TextInput
                style={!state.newPassValid ? styles.wrongInput : styles.input}
                placeholder="New Password"
                autoCorrect={false}
                autoCapitalize={'none'}
                value={state.newPassword}
                secureTextEntry={visible}
                onChangeText={newPaasHandler}
              />
              <TouchableOpacity
                style={styles.btneye1}
                onPress={() => {
                  setVisible(!visible);
                  setShow(!show);
                }}>
                <Ionicons
                  name={show === false ? 'eye-off-outline' : 'eye-outline'}
                  size={23}
                  color={'#333'}
                />
              </TouchableOpacity>
            </View>

            <View>
              <TextInput
                style={
                  !state.repeatPassValid ? styles.wrongInput : styles.input
                }
                placeholder="Confirm Password"
                autoCorrect={false}
                autoCapitalize={'none'}
                value={state.repeatPassValid}
                secureTextEntry={visibleIcon}
                onChangeText={repeatPassHandler}
              />
              <TouchableOpacity
                style={styles.btneye2}
                onPress={() => {
                  setVisibleIcon(!visibleIcon);
                  setShowIcon(!showIcon);
                }}>
                <Ionicons
                  name={showIcon === false ? 'eye-off-outline' : 'eye-outline'}
                  size={23}
                  color={'#333'}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonTxt}> Save</Text>
            </TouchableOpacity>
            <View style={{top:20,alignContent:'center'}}>
              <Text style={{color: 'red', textAlign: 'center'}}>
                
                {state.error}
              </Text>

          <Text style={{textAlign:'center'}}   > {success? <Text style={{color: '#00a39d', textAlign: 'center',}}>
             
             {success} 
           </Text> :"" }</Text>
            
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
 
  );
};

export default Setting;
