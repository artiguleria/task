import React from 'react';
import {View, Text, Image ,TouchableOpacity} from 'react-native';

import Back from '../../assets/images/icon2/back.svg';
import {COLORS} from '../../constants/Colors';
import styles from './style';
import { useSelector } from "react-redux";
const GetResult = ({navigation}) => {
  const rp_user_assmt_id = useSelector((state) => state.assmtId?.payload);
  return (
    <View style={styles.container}>
      <View style={{right: '45%', top: 20}}>
        <Back
          height={25}
          width={25}
          fill={'#fff'}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>

      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          alignItems: 'center',
          bottom: 50,
        }}>
        <View>
          <Image
            style={{borderRadius: 100}}
            source={require('../../assets/images/result.png')}
          />
          <Text style={styles.done}>Well Done!</Text>
          <Text style={styles.done}>Assessment Complete</Text>
        </View>
      </View>

      <View  style={styles.button}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('AssessmentResult',{
            data:rp_user_assmt_id,
          })}>
          <Text style={styles.buttonTxt}>Show Result</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetResult;
