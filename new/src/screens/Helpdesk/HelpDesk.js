import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

import styles from './style';

const HelpDesk = ({navigation}) => {
  const [URL, setURL] = useState('');
const handlePress=()=>{
  navigation.navigate('Login')
}
  return (
    <View style={styles.container}>
      <View style={{marginTop: '35%'}}>
        <Image
          style={styles.rpLogo}
          source={require('../../assets/images/rp-logo.png')}
        />
      </View>

      <View style={styles.inputView}>
        <Text style={{left: 20}}> HELPDESK URL</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="#00A39D"
          onChangeText={URL => setURL(URL)}
        />
      </View>

      <TouchableOpacity   onPress={handlePress}
       style={styles.button}>
        <Text style={styles.buttonTxt}> Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HelpDesk;
