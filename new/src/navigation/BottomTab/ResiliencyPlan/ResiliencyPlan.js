import React from 'react';
import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native';
import styles from './style'
const ResiliencyPlan = ({navigation}) => {
  return (
    <View style={styles.container}>


      <Text style={{color:"#006061",fontSize:25,fontWeight:"700",top:45}}>No content available. Please take your assessement. Click the link below</Text>
      <TouchableOpacity
            style={styles.Assessment}
            onPress={() => navigation.navigate('DrawerNavigationRoutes')}>
            <Text style={styles.AssessmentTxt}> Take Assessment </Text>
          </TouchableOpacity>
      {/* <Text style={styles.txt}> Based on your Assessment, Here is a Personalized Resiliency Plan for you!</Text>


      <View style={{flexDirection: 'row',marginTop:20}}>
          <TouchableOpacity
            style={styles.dailyLinks}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonTxt}> Daily Links</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nutrition}
            onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.buttonTxt}> Nutritional Supplements </Text>
          </TouchableOpacity>
        </View>

        <View style={{alignItems:"center",padding:5,}}>
          <Text style={{color:"#006061",fontSize:17,fontWeight:"600",textAlign:"center"}}>Nutritional supplements help the mind body rebuild from years of being overly stressed.</Text>
        </View> */}
    </View>
  );
}

export default ResiliencyPlan;


