
import React, {useState} from 'react';
import {View, Linking, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';
import Moment from 'moment';
import CheckBox from '@react-native-community/checkbox';
import Textarea from 'react-native-textarea';

const RemarksScreen = ({ navigation, route }) => {

  const [highlyInterestedCheckBox, setHighlyInterestedCheckBox] = useState(false);
  const [noAnswerCheckBox, setNoAnswerCheckBox] = useState(false);
  const [mediumInterestCheckBox, setMediumInterestCheckBox] = useState(false);
  const [wrongNumberCheckBox, setWrongNumberCheckBox] = useState(false);
  const [notInterestedCheckBox, setNotInterestedCheckBox] = useState(false);
  const [highlyPricedCheckBox, setHighlyPricedCheckBox] = useState(false);
  const [additionalRemarks, setAdditionalRemarks] = useState('');
  const { leadNo, leadId, email, name } = route.params;
  
  async function submitRemarks()
    {
      console.log('Submitting Remarks '+highlyInterestedCheckBox+','+mediumInterestCheckBox+','+notInterestedCheckBox+','+wrongNumberCheckBox+','+noAnswerCheckBox+','+highlyPricedCheckBox+','+additionalRemarks);
      var remarksResp;
      if(additionalRemarks === '')
      {
        var finalRemarks = highlyInterestedCheckBox+','+mediumInterestCheckBox+','+notInterestedCheckBox+','+wrongNumberCheckBox+','+noAnswerCheckBox+','+highlyPricedCheckBox;
        console.log(finalRemarks);
      }
      else
      {
        var finalRemarks = highlyInterestedCheckBox+','+mediumInterestCheckBox+','+notInterestedCheckBox+','+wrongNumberCheckBox+','+noAnswerCheckBox+','+highlyPricedCheckBox+','+additionalRemarks;
        
      }
      const userData = await AsyncStorage.getItem('auth');
      const userInfo = JSON.parse(userData);
      
        let formBody = {userId: userInfo.userid, leadNo: leadNo, id: leadId, remarks: finalRemarks};
        console.log(formBody);
        fetch('http://stgdialerapi.vl8.in/app/calldispose', {
        method: 'POST',
        body: JSON.stringify(formBody),
        headers: {
        //Header Defination
        Authorization: 'Bearer ' + userInfo.token,
        'Content-Type': 'application/json',
      }
    })
        .then((response) => response.json())
        //If response is in json then in success
        .then((responseJson) => {
          //Success
          console.log('Remarks Response :'+JSON.stringify(responseJson));
          if(responseJson.message === 'Remarks Submitted Successfully'){
          navigation.navigate('HomeScreen');
          }
          else
          {
              alert(JSON.stringify(responseJson));
          }
        })
        //If response is not in json then in error
        .catch((error) => {
          //Error
          //alert(JSON.stringify(error));
          console.error(error);
        });
    }

    const reports = async () => {
      navigation.navigate('HistoryScreen');
    };

    const remarks = async () => {
      navigation.navigate('RemarksScreen', {
        leadNo: leads.leadNo,
        leadId: leads.leadId
      })
    };

    const sendSMS = async () => {
      let phoneNumber = '';

      if (Platform.OS === 'android') {
        phoneNumber = `sms:${JSON.stringify(leadNo)}`;
      }
      else {
        phoneNumber = 'telprompt:${leads.leadNo}';
      }
      Linking.openURL(phoneNumber);
    };

    const sendWhatsapp = async () => {
      let phoneNumber = '';
      let url = '';

      if (Platform.OS === 'android') {
        phoneNumber = `${JSON.stringify(leadNo)}`;
        url ='whatsapp://send?&phone=91' + phoneNumber;
      }
      else {
        phoneNumber = 'telprompt:${leads.leadNo}';
      }
      Linking.openURL(url);
    };

    const sendMail = async () => {
      let emailId = '';

      if (Platform.OS === 'android') {
        emailId = `mailto:${JSON.stringify(email)}`;
      }
      else {
        phoneNumber = 'telprompt:${leads.leadNo}';
      }
      Linking.openURL(email);
    };

  return (
    
    <View style={styles.container}>
      <View style={styles.menubar}>
          <View style={styles.menu} />
          <TouchableOpacity onPress={sendSMS}>
            <FontAwesome5 name={'sms'} size={45} color="#4180ec" />
          </TouchableOpacity>
  
          <View style={styles.menu} />
          <TouchableOpacity onPress={sendMail}>
            <FontAwesome5 name={'envelope-square'} size={45} color="#BB001B" />
          </TouchableOpacity>
  
          <View style={styles.menu} />
          <TouchableOpacity onPress={sendWhatsapp}>
            <FontAwesome5 name={'whatsapp-square'} size={45} color="#25D366" />
          </TouchableOpacity>
  
          <View style={styles.menu} />
          <TouchableOpacity onPress={reports}>
            <FontAwesome5 name={'history'} size={43} color="#993d00" />
          </TouchableOpacity>
  
          <View style={styles.menu} />
          {/* <TouchableOpacity onPress={logout}>
            <FontAwesome5 name={'sign-out-alt'} size={45} color="black" />
          </TouchableOpacity> */}
          <View style={styles.menu} />
        </View>
      <Text style={styles.txt}>Remarks</Text>
      
      <View style={styles.top}>
      <Text style={styles.heading}>Mobile No.: {leadNo}</Text>
        <View style={styles.checkboxContainer}>
        <CheckBox value={highlyInterestedCheckBox}
          onValueChange={setHighlyInterestedCheckBox}/>
          <Text style={styles.label}>Covid +ve</Text>
        <CheckBox value={noAnswerCheckBox}
          onValueChange={setNoAnswerCheckBox}/>
          <Text style={styles.label}>Report Pending</Text>
        </View>
 
        <View style={styles.checkboxContainer}>
        <CheckBox value={mediumInterestCheckBox}
          onValueChange={setMediumInterestCheckBox}/>
          <Text style={styles.label}>Not Yet Tested</Text>
        <CheckBox value={wrongNumberCheckBox}
          onValueChange={setWrongNumberCheckBox}/>
          <Text style={styles.label}>Hospitalisation</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox value={notInterestedCheckBox}
            onValueChange={setNotInterestedCheckBox}/>
            <Text style={styles.label}>Home Quarantine</Text>
          <CheckBox value={highlyPricedCheckBox}
            onValueChange={setHighlyPricedCheckBox}/>
            <Text style={styles.label}>Covid Symptoms</Text>
        </View> 
        
        <View>
        <Textarea
          onChangeText={(additionalRemarks) =>
            setAdditionalRemarks(additionalRemarks)
          }
          containerStyle={styles.textareaContainer}
          style={styles.textarea}
          maxLength={250}
          placeholder={'Additional Remarks'}
          placeholderTextColor={'grey'}
          underlineColorAndroid={'transparent'}
  />
        </View>
      </View>
      
      <TouchableOpacity
        style={styles.submitButton}
        onPress={submitRemarks}>
        <Text style={styles.submitButtonText}>Submit Remarks</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#DCDCDC'
  },

  menubar: {
    flex: 0.1,
    //paddingTop: '2%',
    //paddingBottom: '2%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    marginBottom: '2%',
  },
  menu: {
    flex: 0.2,
    flexDirection: 'row',
  },

  txt: {
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginLeft: '35%',
    marginBottom: '5%',
    paddingTop: 10,
  },
  top: {
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '90%',
    flex: 0.8,
    //marginTop:'2%',
    marginLeft: '5%',
    borderRadius: 20,
    flexWrap: 'wrap',
    //paddingBottom:50,
    marginBottom: '5%',
  },

  edit: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 18,
    marginLeft: 17,
    marginTop: 20,
    // marginBottom: 20,
  },
  input: {
    //margin: 10,
    //height: 40,
    //marginTop: 20,
    fontSize: 18,
    backgroundColor: '#7EAEEC',
    borderRadius: 20,
    width: '80%',
    marginLeft: '10%',
    paddingBottom: 10,
  },
  
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: '4%',
    marginLeft: '5%'
  },
  checkbox: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  heading: {
    margin: 5,
    marginBottom: '20%',
    alignSelf: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  label: {
    margin: 5,
    marginBottom: '1%'
  },
  textinput: {
    marginTop: 20,
    width: '95%',
    marginLeft: '2%',
    marginRight: '2%',
    paddingTop: '10%',
    //marginTop:'15%',
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 2
  },
  txtinput: {
    justifyContent: "center",
    //marginTop:10,
    marginBottom: 20,
    fontSize: 20,
    marginLeft: 5
  },

  submitButton: {
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    // marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 20,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22
  },
  textareaContainer: {
    height: 100,
    padding: 5,
    backgroundColor: '#FFFFFF',
    paddingLeft: '5%'
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 100,
    fontSize: 14,
    color: '#333',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'grey'
  },
});

export default RemarksScreen;
