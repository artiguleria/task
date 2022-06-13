//React Native FlatList
//https://aboutreact.com/react-native-flatlist/

//import React in our code
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

//import all the components we are going to use
import {
    FlatList,
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Linking,
    PermissionsAndroid
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CallLogs from 'react-native-call-log';
import CallDetectorManager from 'react-native-call-detection';

const HistoryScreen = ({navigation}) => {

  //const [reports, setReports] = useState({});
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [leadNo, setLeadNo] = useState('');
  const [leadId, setLeadId] = useState('');
  const [emailId, setEmailId] = useState('');
  let callDetector = undefined;
  let [isStart, setIsStart] = useState(false);
  let [callStates, setCallStates] = useState([]);
  let [callData, setCallData] = useState([]);

  const getRequest = async() =>{
    const userData = await AsyncStorage.getItem('auth');
    const userInfo = JSON.parse(userData);
      const headers = {
      Authorization: 'Bearer ' + userInfo.token,
      'Content-Type': 'application/json',
      };
      fetch('http://stgdialerapi.vl8.in/app/agent/report/'+userInfo.userid, {headers},{
        method: 'GET',
        //Request Type
      })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success
        console.log('Reports Response :'+JSON.stringify(responseJson));
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      //If response is not in json then in error
      .catch((error) => {
        //Error
        //alert(JSON.stringify(error));
        console.error(error);
      });
  }
  useEffect(() => {
    getRequest();
      
  }, []);

  const remarks = async () => {
    console.log('History Id.'+leadId);
    console.log('History No.'+leadNo);
    console.log('History Mail.'+emailId);
    navigation.navigate('RemarksScreen', {
      leadNo: leadNo,
      leadId: leadId,
      email: emailId
    })
  };

  const dialCall = async () => {
    // setLeadId(0);
    // setLeadNo(mobileNo);
    // setEmailId(email);
    console.log('Id.'+leadId);
    console.log('No.'+leadNo);
    console.log('Mail.'+emailId);
    eventListener();
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = `tel:${leadNo}`;
    }
    else {
      phoneNumber = 'telprompt:${leadNo}';
    }
    Linking.openURL(phoneNumber).catch((err) => {
      console.log(err);
    });
  };

  async function insertReport(callData)
    {
      console.log('Submitting Call Data '+callData[0].phoneNumber+', '+callData[0].dateTime+', '+callData[0].duration);
      var reportResp;
      const userData = await AsyncStorage.getItem('auth');
      const userInfo = JSON.parse(userData);
        //moment.locale('en');
        var startTime = new Date(callData[0].dateTime);
        var date = startTime.getFullYear()+'-'+((startTime.getMonth()+1) > 9 ? (startTime.getMonth()+1):'0'+(startTime.getMonth()+1))+'-'+(startTime.getDate() > 9 ? startTime.getDate():'0'+startTime.getDate());
        var time = startTime.getHours() + ":" + startTime.getMinutes() + ":" + startTime.getSeconds();
        var dateTime = date+' '+time;
        console.log('Converted Date Time '+dateTime);
        let formBody = {userId: userInfo.userid, customerNo: callData[0].phoneNumber, leadTalkDuration: callData[0].duration, startTime: dateTime, emailId: emailId};
        fetch('http://stgdialerapi.vl8.in/app/agent/report', {
        method: 'POST',
        body: JSON.stringify(formBody),
        headers: {
        //Header Defination
        Authorization: 'Bearer ' + userInfo.token,
        'Content-Type': 'application/json',
      },
    })
        .then((response) => response.json())
        //If response is in json then in success
        .then((responseJson) => {
          //Success
          console.log('Report Response :'+JSON.stringify(responseJson));
          
          reportResp = responseJson;
         
          
        })
        //If response is not in json then in error
        .catch((error) => {
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
            CallLogs.load(1).then((c) => (c))
            .then((callData) => {
              //console.log('Last Call :'+JSON.stringify(callData));
              setCallData(callData);
              console.log('Last Call :'+JSON.stringify(callData));
              var reportResult = insertReport(callData);
              console.log('Insert Report '+reportResult);
              remarks();
            })
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

    async function eventListener(){
        console.log(' Event Listener Start');
        callDetector = new CallDetectorManager(
          (event, number) => {
            console.log('event -> ',
              event + (number ? ' - ' + number : '')
            );
  
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
    };

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.customerNo;
          //const itemData = `${item.customerNo} ${item.agentNo}`;
          const textData = text;
          return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({item}) => {

    return (
      // FlatList Item
      <View>
          <Text style={styles.text}>
            Customer : {item.customerNo}
          </Text>
          <Text style={styles.text}>
            Agent : {item.agentNo}
          </Text>
          <Text style={styles.text}>
            Call Time : {item.ansTime}
          </Text>
          <Text style={styles.text}>
            Call Duration : {item.leadTalkDuration}
          </Text>
          
          <View style={styles.btnContainer} />
          
          <TouchableOpacity onPressIn={() => {setLeadId('0'),setLeadNo(item.customerNo), setEmailId(item.emailId)}} onPress={dialCall} style={styles.followupbtn}>
          {/* onPress={() => this.handlePress('weeeeee')} */}
          <Text style={{color:"white",fontSize:25,justifyContent:"center",marginTop:8,marginBottom:10}}>Follow Up</Text>
        </TouchableOpacity>
        
      </View>
      
    );
  };

  const ItemSeparatorView = () => {
    return (
      // FlatList Item Separator
      <View
          style={{
              height: 2,
              width: '100%',
              backgroundColor: '#C8C8C8'
          }}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
      <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          //data defined in constructor
          ItemSeparatorComponent={ItemSeparatorView}
          //Item Separator View
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  text: {
    fontSize: 18,
    fontWeight: '800',
    marginLeft: '5%',
    marginRight: '5%'
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#DCDCDC',
    backgroundColor: '#DCDCDC',
    borderRadius: 20,
    marginBottom: '5%'
  },
  btnContainer: {
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    //paddingBottom: 15,
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
  followupbtn: {
    flex: 0.5,
    backgroundColor: '#1d86ff',
    width: '90%',
    borderRadius: 20,
    alignItems: 'center',
    height: 50,
    marginTop: '7%',
    marginBottom: '7%',
    marginLeft: '4.5%',
    alignContent: 'center'
  }
});

export default HistoryScreen;