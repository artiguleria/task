import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';
import {call, Value} from 'react-native-reanimated';

import Loader from '../Components/Loader';
import CallLogs from 'react-native-call-log';
import CallDetectorManager from 'react-native-call-detection';
import Config from '../../Config';
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';  
// import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
// import Remarks from './Remarks'
// import History from './History'
import { Icon } from 'react-native-vector-icons';
// //import {Icon}from 'react-native-elements'

//import ManageCallLogs from 'react-native-manage-call-logs'

const Home = ({navigation}) => {
  var resp;

  const [leads, setLeads] = useState({});
  let callDetector = undefined;
  let [isStart, setIsStart] = useState(false);
  let [callStates, setCallStates] = useState([]);
  let [callData, setCallData] = useState([]);

  const getRequest = async () => {
    const userData = await AsyncStorage.getItem('auth');
    const userInfo = JSON.parse(userData);
    const headers = {
      Authorization: 'Bearer ' + userInfo.token,
      'Content-Type': 'application/json',
    };
    fetch(Config.API_URL + '/app/leads/' + userInfo.userid,
      {headers},
      {
        method: 'GET',
        //Request Type
      },
    )
      .then(response => response.json())
      //If response is in json then in success
      .then(responseJson => {
        //Success
        console.log('Leads Response :' + JSON.stringify(responseJson));
        if (responseJson.message === 'Token Expired') {
          AsyncStorage.clear();
          navigation.navigate('Login');
        } else {
          resp = responseJson;
          setLeads(resp);
          //alert(resp);
        }
      })
      //If response is not in json then in error
      .catch(error => {
        //Error
        //alert(JSON.stringify(error));
        console.error(error);
      });
  };
  useEffect(() => {
    getRequest();
  }, []);

  // const skipLead = async () => {
  //   const userData = await AsyncStorage.getItem('auth');
  //   const userInfo = JSON.parse(userData);

  //   let formBody = {
  //     userId: userInfo.userid,
  //     leadNo: leads.leadNo,
  //     id: leads.leadId,
  //   };
  //   console.log(formBody);
  //   fetch(Config.API_URL + '/app/skip', {
  //     method: 'POST',
  //     body: JSON.stringify(formBody),
  //     headers: {
  //       //Header Defination
  //       Authorization: 'Bearer ' + userInfo.token,
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then(response => response.json())
  //     //If response is in json then in success
  //     .then(responseJson => {
  //       //Success
  //       console.log('Leads Response :' + JSON.stringify(responseJson));
  //       if (responseJson.message === 'Token Expired') {
  //         AsyncStorage.clear();
  //         navigation.navigate('Login');
  //       } else {
  //         resp = responseJson;
  //         setLeads(resp);
  //         //alert(resp);
  //       }
  //     })
  //     //If response is not in json then in error
  //     .catch(error => {
  //       //Error
  //       //alert(JSON.stringify(error));
  //       console.error(error);
  //     });
  // };

  const retrieveData = async () => {
    const userData = JSON.parse(await AsyncStorage.getItem('auth'));
    console.log('Retreiving User Data in Home ' + userData.token);
    console.log('Retreiving User Data in Home ' + userData.userid);
    return userData;
  };

  const dialCall = async () => {
    eventListener();
    
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = `tel:${leads.leadNo}`;
    } else {
      phoneNumber = 'telprompt:${leads.leadNo}';
    }
    Linking.openURL(phoneNumber).catch(err => {
      console.log(err);
    });
  };

  async function insertReport(callData) {
    console.log(
      'Submitting Call Data ' +
        callData[0].phoneNumber +
        ', ' +
        callData[0].dateTime +
        ', ' +
        callData[0].duration,
    );
    var reportResp;
    const userData = await AsyncStorage.getItem('auth');
    const userInfo = JSON.parse(userData);
    //moment.locale('en');
    var startTime = new Date(callData[0].dateTime);
    var date =
      startTime.getFullYear() +
      '-' +
      (startTime.getMonth() + 1 > 9
        ? startTime.getMonth() + 1
        : '0' + (startTime.getMonth() + 1)) +
      '-' +
      (startTime.getDate() > 9
        ? startTime.getDate()
        : '0' + startTime.getDate());
    var time =
      startTime.getHours() +
      ':' +
      startTime.getMinutes() +
      ':' +
      startTime.getSeconds();
    var dateTime = date + ' ' + time;
    console.log('Converted Date Time ' + dateTime);
    let formBody = {
      userId: userInfo.userid,
      customerNo: callData[0].phoneNumber,
      leadTalkDuration: callData[0].duration,
      startTime: dateTime,
      emailId: leads.emailId,
    };
    fetch(Config.API_URL +'/app/agent/report', {
      method: 'POST',
      body: JSON.stringify(formBody),
      headers: {
        //Header Defination
        Authorization: 'Bearer ' + userInfo.token,
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      //If response is in json then in success
      .then(responseJson => {
        //Success
        console.log('Report Response :' + JSON.stringify(responseJson));
        reportResp = responseJson;
      })
      //If response is not in json then in error
      .catch(error => {
        //Error
        //alert(JSON.stringify(error));
        console.error(error);
      });
    return reportResp;
  }

  async function fetchCallData() {
    if (Platform.OS != 'ios') {
      console.log('Fetching Call Data');
      try {
        //Ask for runtime permission
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
          {
            title: 'Call Log Example',
            message: 'Access your call logs',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          CallLogs.load(1).then(c => c);
          CallLogs.load(1)
            .then(c => c)
            .then(callData => {
              //console.log('Last Call :'+JSON.stringify(callData));
              setCallData(callData);
              console.log('Last Call :' + JSON.stringify(callData));
              var reportResult = insertReport(callData);
              console.log('Insert Report ' + reportResult);
              remarks();
            });
          //const postResult = insertReport(callData);
        } else {
          console.log('Call Log permission denied');
          alert('Call Log permission denied');
        }
      } catch (e) {
        alert(e);
      }
    } else {
      alert(
        'Sorry! You can’t get call logs in iOS devices because of the security concern',
      );
    }
  }

  async function eventListener() {
    console.log(' Event Listener Start');
    callDetector = new CallDetectorManager(
      (event, number) => {
        console.log('event -> ', event + (number ? ' - ' + number : ''));

        if (event === 'Disconnected') {
          // Do something call got disconnected
          console.log('Call Disconnected');

          fetchCallData();
        } else if (event === 'Connected') {
          // Do something call got connected
          // This clause will only be executed for iOS
        } else if (event === 'Incoming') {
          // Do something call got incoming
        } else if (event === 'Dialing') {
          // Do something call got dialing
          // This clause will only be executed for iOS
        } else if (event === 'Offhook') {
          //Device call state: Off-hook.
          // At least one call exists that is dialing,
          // active, or on hold,
          // and no calls are ringing or waiting.
          // This clause will only be executed for Android
        } else if (event === 'Missed') {
          // Do something call got missed
          // This clause will only be executed for Android
        }
      },
      true, // To detect incoming calls [ANDROID]
      () => {
        // If your permission got denied [ANDROID]
        // Only if you want to read incoming number
        // Default: console.error
        console.log('Permission Denied by User');
      },
      {
        title: 'Phone State Permission',
        message:
          'This app needs access to your phone state in order to react and/or to adapt to incoming calls.',
      },
    );
  }

  const reports = async () => {
    navigation.navigate('History');
  };

  const logout = async () => {
    //props.navigation.toggleDrawer();
    Alert.alert(
      'Logout',
      'Are you sure? You want to logout?',
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
            AsyncStorage.clear();
            navigation.replace('Login');
          },
        },
      ],
      {cancelable: false},
    );
  };

  const remarks = async () => {
    navigation.navigate('Remarks', {
      leadNo: leads.leadNo,
      leadId: leads.leadId,
      email: leads.emailId,
      name: leads.name,
    });
  };

  const sendSMS = async () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = `sms:${leads.leadNo}`;
    } else {
      phoneNumber = 'telprompt:${leads.leadNo}';
    }
    Linking.openURL(phoneNumber);
  };

  const sendWhatsapp = async () => {
    let phoneNumber = '';
    let url = '';

    if (Platform.OS === 'android') {
      phoneNumber = `${leads.leadNo}`;
      url = 'whatsapp://send?&phone=91' + phoneNumber;
    } else {
      phoneNumber = 'telprompt:${leads.leadNo}';
    }
    Linking.openURL(url);
  };

  const sendMail = async () => {
    let emailId = '';

    if (Platform.OS === 'android') {
      emailId = `mailto:${leads.emailId}`;
    } else {
      phoneNumber = 'telprompt:${leads.leadNo}';
    }
    Linking.openURL(emailId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.menubar}>
        <View style={styles.menu} />
        <TouchableOpacity onPress={sendSMS}>
          <FontAwesome5
            style={{
              backgroundColor: '#FFFFFF',
              textAlign: 'center',
              width: 50,
              height: 50,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: '#4180ec',
            }}
            name={'sms'}
            size={45}
            color="#4180ec"
          />
        </TouchableOpacity>

        <View style={styles.menu} />
        <TouchableOpacity onPress={sendMail}>
          <FontAwesome5
            style={{
              backgroundColor: '#FFFFFF',
              textAlign: 'center',
              width: 50,
              height: 50,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: '#BB001B',
            }}
            name={'envelope-square'}
            size={45}
            color="#BB001B"
          />
        </TouchableOpacity>

        <View style={styles.menu} />
        <TouchableOpacity onPress={sendWhatsapp}>
          <FontAwesome5
            style={{
              backgroundColor: '#FFFFFF',
              textAlign: 'center',
              width: 50,
              height: 50,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: '#25D366',
            }}
            name={'whatsapp-square'}
            size={45}
            color="#25D366"
          />
        </TouchableOpacity>

        <View style={styles.menu} />
        <TouchableOpacity onPress={reports}>
          <FontAwesome5
            style={{
              backgroundColor: '#FFFFFF',
              textAlign: 'center',
              width: 50,
              height: 50,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: '#993d00',
            }}
            name={'history'}
            size={43}
            color="#993d00"
          />
        </TouchableOpacity>

        <View style={styles.menu} />
        <TouchableOpacity onPress={logout}>
          <FontAwesome5
            style={{
              backgroundColor: '#FFFFFF',
              textAlign: 'center',
              width: 50,
              height: 50,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: 'black',
            }}
            name={'sign-out-alt'}
            size={45}
            color="black"
          />
        </TouchableOpacity>
        <View style={styles.menu} />
      </View>

      <View style={styles.remarksHeader}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            marginBottom: 10,
          }}>
          Lead History
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textLabel}>Last Call</Text>
          <Text style={styles.text}>{leads.leadAnswerTime}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textLabel}>Feedback</Text>
          <Text style={styles.text}>{leads.remarks}</Text>
        </View>
      </View>
      <View style={styles.top}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            marginBottom: 10,
          }}>
          Lead Data
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textLabel}>Mobile No.</Text>
          <Text style={styles.text}>{leads.leadNo}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textLabel}>Name</Text>
          <Text style={styles.text}>{leads.name}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textLabel}>Company</Text>
          <Text style={styles.text}>{leads.companyName}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textLabel}>Website</Text>
          <Text style={styles.text}>{leads.website}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textLabel}>Email Id</Text>
          <Text style={styles.text}>{leads.emailId}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textLabel}>City</Text>
          <Text style={styles.text}>{leads.city}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textLabel}>PIN Code</Text>
          <Text style={styles.text}>{leads.pincode}</Text>
        </View>
      </View>

      <View style={styles.btnContainer} />
      <TouchableOpacity onPress={dialCall} style={styles.btn}>
        <FontAwesome5 name={'phone'} size={50} color="white" />
      </TouchableOpacity>
{/* 
      <TouchableOpacity onPress={skipLead} style={styles.skipbtn}>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontWeight: 'bold',
            justifyContent: 'center',
            marginTop: 8,
            marginBottom: 10,
          }}>
          Skip
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#DCDCDC',
  },

  menubar: {
    flex: 0.6,
    paddingTop: 11,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    //borderBottomWidth: 1.5,
  },

  menu: {
    flex: 1,
    flexDirection: 'row',
    //padding:25,
    paddingBottom: 10,
    //width:25,
    //height:25
  },
  btnContainer: {
    borderRadius: 20,
    //paddingBottom: 15,
    //flexDirection: 'row',
    //width: '50%'
  },

  top: {
    flex: 2,
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '8%',
    width: '90%',
    backgroundColor: '#fff',
    alignContent: 'center',
  },
  btn: {
    flex: 0.5,
    backgroundColor: '#25D366',
    width: '90%',
    borderRadius: 20,
    alignItems: 'center',
    height: 60,
    marginTop: '7%',
    marginBottom: '5%',
    marginLeft: '4.5%',
  },
  // skipbtn: {
  //   flex: 0.5,
  //   backgroundColor: '#1d86ff',
  //   width: '90%',
  //   borderRadius: 20,
  //   alignItems: 'center',
  //   height: 60,
  //   marginBottom: '7%',
  //   marginLeft: '4.5%',
  //   alignContent: 'center',
  // },
  textLabel: {
    textAlign: 'left',
    width: '40%',
    fontSize: 16,
    fontWeight: '800',
    marginLeft: '5%',
    //marginRight: '5%',
    borderColor: '#D3D3D3',
  },
  text: {
    fontSize: 16,
    width: '50%',
    fontWeight: '800',
    //marginLeft: '20%',
    //marginRight: '20%',
    borderColor: '#D3D3D3',
  },
  remarks: {
    textAlign: 'left',
    fontSize: 15,
    fontWeight: '800',
    marginLeft: '5%',
    marginRight: '5%',
    borderColor: '#D3D3D3',
  },
  remarksHeader: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '8%',
    width: '90%',
    backgroundColor: '#fff',
    alignContent: 'center',
  },
});
 export default  Home;
