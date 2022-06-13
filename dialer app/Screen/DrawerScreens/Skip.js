import React,{useState,useEffect} from 'react';
import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Config from '../../Config'

const skip = () => {
  const [leads, setLeads] = useState({});
    
  const skipLead = async () => {

    const userData = await AsyncStorage.getItem('auth');
    const userInfo = JSON.parse(userData);

    let formBody = {
      userId: userInfo.userid,
      leadNo: leads.leadNo,
      id: leads.leadId,
    };
   console.log('hello'+JSON.stringify(leads))
    console.log(formBody);
    fetch(Config.API_URL + '/app/skip', {
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
    skipLead();
  }, []);
  return (
    <View>
     
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
      </TouchableOpacity>
    </View>
  );
}

export default skip;
const styles=StyleSheet.create({
    skipbtn: {
        flex: 0.5,
        backgroundColor: '#1d86ff',
        width: '90%',
        borderRadius: 20,
        alignItems: 'center',
        height: 60,
        marginBottom: '7%',
        marginLeft: '4.5%',
        alignContent: 'center'},
}
    
)