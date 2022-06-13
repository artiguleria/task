import React, {useState, useEffect} from 'react';
import {View, Linking, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';
import Moment from 'moment';
import CheckBox from '@react-native-community/checkbox';
import Textarea from 'react-native-textarea';
import axios from 'axios';
import {Item, List} from 'native-base';
import Loader from '../Components/Loader';
import Config from '../../Config';
const Remarks = ({navigation, route}) => {
  var resp;
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox4, setCheckbox2] = useState(false);
  const [checkbox2, setCheckbox3] = useState(false);
  const [checkbox5, setCheckbox4] = useState(false);
  const [checkbox3, setCheckbox5] = useState(false);
  const [checkbox6, setCheckbox6] = useState(false);
  
  const [statusId1, setStatusId1] = useState('');
  const [statusId2, setStatusId2] = useState('');
  const [statusId3, setStatusId3] = useState('');
  const [statusId4, setStatusId4] = useState('');
  const [statusId5, setStatusId5] = useState('');
  const [statusId6, setStatusId6] = useState('');

  const [statusName1, setStatusName1] = useState('');
  const [statusName2, setStatusName2] = useState('');
  const [statusName3, setStatusName3] = useState('');
  const [statusName4, setStatusName4] = useState('');
  const [statusName5, setStatusName5] = useState('');
  const [statusName6, setStatuName6] = useState('');

  const [leads, setLeads] = useState({});
  const [additionalRemarks, setAdditionalRemarks] = useState('');
  const {leadNo, leadId, email, name} = route.params;
  const [loading, setLoading] = useState(false);

  async function submitRemarks() {
    console.log(
      'Submitting Remarks ' +
        statusId1 +
        '#' +
        checkbox1 +
        ',' +
        statusId2 +
        '#' +
        checkbox2 +
        ',' +
        statusId3 +
        '#' +
        checkbox3 +
        ',' +
        statusId4 +
        '#' +
        checkbox4 +
        ',' +
        statusId5 +
        '#' +
        checkbox5 +
        ',' +
        statusId6 +
        '#' +
        checkbox6 +
        ',' +
        additionalRemarks,
    );
    var remarksResp;
    if (
      checkbox1 == false &&
      checkbox2 == false &&
      checkbox3 == false &&
      checkbox4 == false &&
      checkbox5 == false &&
      checkbox6 == false
    ) {
      alert('Please select atleast one remark');
      return;
    }
    if (additionalRemarks === '') {
      var finalRemarks =
        statusId1 +
        '#' +
        checkbox1 +
        ',' +
        statusId2 +
        '#' +
        checkbox2 +
        ',' +
        statusId3 +
        '#' +
        checkbox3 +
        ',' +
        statusId4 +
        '#' +
        checkbox4 +
        ',' +
        statusId5 +
        '#' +
        checkbox5 +
        ',' +
        statusId6 +
        '#' +
        checkbox6;
      console.log(finalRemarks);
    } else {
      var finalRemarks =
        statusId1 +
        '#' +
        checkbox1 +
        ',' +
        statusId2 +
        '#' +
        checkbox2 +
        ',' +
        statusId3 +
        '#' +
        checkbox3 +
        ',' +
        statusId4 +
        '#' +
        checkbox4 +
        ',' +
        statusId5 +
        '#' +
        checkbox5 +
        ',' +
        statusId6 +
        '#' +
        checkbox6 +
        ',' +
        additionalRemarks;
      console.log(finalRemarks);
    }
    const userData = await AsyncStorage.getItem('auth');
    const userInfo = JSON.parse(userData);

    let formBody = {
      userId: userInfo.userid,
      leadNo: leadNo,
      id: leadId,
      remarks: finalRemarks,
    };
    // console.log(formBody);
    fetch(Config.API_URL + '/app/calldispose', {
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
        console.log('Remarks Response :' + JSON.stringify(responseJson));
        if (responseJson.message === 'Remarks Submitted Successfully') {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            navigation.replace('DrawerNavigationRoutes');
          }, 1000);
        } else {
          alert(JSON.stringify(responseJson));
        }
      })
      //If response is not in json then in error
      .catch(error => {
        //Error
        //alert(JSON.stringify(error));
        console.error(error);
      });
  }

  const getRequest = async () => {
    const userData = await AsyncStorage.getItem('auth');
    const userInfo = JSON.parse(userData);
    const headers = {
      Authorization: 'Bearer ' + userInfo.token,
      'Content-Type': 'application/json',
    };
    fetch( Config.API_URL + '/app/custom_status/' + userInfo.userid,
      {headers},
      {
        method: 'GET',
        //Request Type
      },
    )
      .then(response => response.json())
      //If response is in json then in success
      .then(responseJson => {
        console.log('custom Response :' + JSON.stringify(responseJson));

        responseJson.map((item, index) => {
          // console.log(item.statusId)
          // {'/n'}
          // console.log(item.statusName);

          if (item.statusId == 1) {
            setStatusId1(item.statusId);
            setStatusName1(item.statusName);
            //console.log("ghhhh"+item.statusName+item.statusId)
          } else if (item.statusId == 2) {
            setStatusId2(item.statusId);
            setStatusName2(item.statusName);
          } else if (item.statusId == 3) {
            setStatusId3(item.statusId);
            setStatusName3(item.statusName);
            //console.log('helo'+t)
          } else if (item.statusId == 4) {
            setStatusId4(item.statusId);
            setStatusName4(item.statusName);
          } else if (item.statusId == 5) {
            setStatusId5(item.statusId);
            setStatusName5(item.statusName);
          } else if (item.statusId == 6) {
            setStatusId6(item.statusId);
            setStatuName6(item.statusName);
          }
        });
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

  

  


  const sendMail = async () => {
    let emailId = '';

    if (Platform.OS === 'android') {
      emailId = `mailto:${JSON.stringify(email)}`;
    } else {
      phoneNumber = 'telprompt:${leads.leadNo}';
    }
    Linking.openURL(email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.menubar}>
        <View style={styles.menu} />
      

        <View style={styles.menu} />
       

        <View style={styles.menu} />
       

        <View style={styles.menu} />
      

        <View style={styles.menu} />
       
        <View style={styles.menu} />
      </View>
      <Text style={styles.txt}>Remarks</Text>

      <View style={styles.top}>
        <Text style={styles.heading}>Mobile No.: {leadNo}</Text>

        <View style={styles.checkboxContainer}>
          <CheckBox value={checkbox1} onValueChange={setCheckbox1} />
          <Text style={styles.label}>{statusName1}</Text>

          <CheckBox value={checkbox2} onValueChange={setCheckbox2} />
          <Text style={styles.label}> {statusName2}</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox value={checkbox3} onValueChange={setCheckbox3} />
          <Text style={styles.label}> {statusName3}</Text>

          <CheckBox value={checkbox4} onValueChange={setCheckbox4} />
          <Text style={styles.label}>{statusName4} </Text>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox value={checkbox5} onValueChange={setCheckbox5} />
          <Text style={styles.label}> {statusName5}</Text>

          <CheckBox value={checkbox6} onValueChange={setCheckbox6} />
          <Text style={styles.label}> {statusName6}</Text>
        </View>

        <View>
        
        </View>
      </View>

    
    </View>
  );
};