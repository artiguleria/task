import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import styles from './style';
import Fontisto from 'react-native-vector-icons/Fontisto';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import '../../../../config';
import moment from 'moment';

const Profile = ({navigation}) => {
  const [profileData, setProfileData] = useState('');
  const [initials, setInitials] = useState('');
  const [countryOptions, setCountryOptions] = useState([]);

  const fullName = profileData?.first_name + ' ' + profileData?.last_name;
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getProfileData();
      getCountryOptions();
    });
    return unsubscribe;
  }, [navigation]);

  const getProfileData = async () => {
    try {
      const result = await window.$http.getWithHeaders('my_profile');
      console.log('response profile ' + JSON.stringify(result));
      if (result.code === 200) {
        setProfileData(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getCountryOptions = async () => {
    try {
      const result = await window.$http.getWithHeaders('country');
      console.log('response country ' + JSON.stringify(result));
      if (result.code === 200) {
        setCountryOptions(result.data);
      } else {
        console.log('Something went wrong!');
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getInitials = name => {
      let initials = name.split(' ');

      if (initials.length > 1) {
        initials = initials.shift().charAt(0) + initials.pop().charAt(0);
      } else {
        initials = name.substring(0, 1);
      }

      setInitials(initials.toUpperCase());
    };
    getInitials(fullName);
  }, [fullName]);

  const handleEdit = () => {
    // console.log("from redux  ...."+savedData)
    navigation.navigate('EditProfile');
  };

  console.log('setProfile data ...' + JSON.stringify(profileData));
  return (
    <ScrollView style={{flex: 1, paddingBottom: 30}}>
      <View style={styles.container}>
        <View style={styles.profileHeaderPicCircle}>
          <Text style={{fontSize: 25, color: 'white', right: 7}}>
            {' '}
            {profileData ? initials : ''}
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 25, color: '#42526e', textAlign: 'center'}}>
            {profileData ? fullName : ''}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#F8F9F9',
            borderWidth: 1,
            borderColor: '#F8F9F9',
            height: 60,
            marginTop: 20,
          }}>
          <View style={{}}>
            <Fontisto name="date" size={25} color="#d3d3d3" />
          </View>
          <View>
            <Text style={{color: '#42526e', marginLeft: 5}}>Date of birth</Text>
            <Text style={{color: '#00a39d', marginLeft: 7, fontWeight: 'bold'}}>
              {profileData.dob ? moment(profileData.dob).format('ll') : ''}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#F8F9F9',
            borderWidth: 1,
            borderColor: '#F8F9F9',
            height: 60,
            marginTop: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#F8F9F9',
              borderWidth: 1,
              borderColor: '#F8F9F9',
              height: 60,
              marginTop: 20,
            }}>
            <Fontisto name="world-o" size={25} color="#d3d3d3" />
          </View>
          <View>
            <Text style={{color: '#42526e', marginLeft: 1}}> Country</Text>
            <Text style={{color: '#00a39d', marginLeft: 7, fontWeight: 'bold'}}>
              {countryOptions.map(
                (data, id) =>
                  data.rp_gbl_country_id === profileData.rp_gbl_country_id && (
                    <Text key={id}>{data.country_name}</Text>
                  ),
              )}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#F8F9F9',
            borderWidth: 1,
            borderColor: '#F8F9F9',
            height: 60,
            marginTop: 20,
          }}>
          <View style={{}}>
            <Fontisto name="heart" size={25} color="#d3d3d3" />
          </View>
          <View>
            <Text style={{color: '#42526e', marginLeft: 5}}> Gender</Text>
            <Text style={{color: '#00a39d', marginLeft: 7, fontWeight: 'bold'}}>
              {/* {global.genderData.map(
                (data, id) =>
                  data.id === profileData.rp_gbl_gender_id && (
                    <Text className="tab-sub-titel" key={id}>
                      {data.value}
                    </Text>
                  ),
              )} */}
              {global.genderData.map(
                (data, id) =>
                  data.id === profileData.rp_gbl_gender_id && (
                    <Text key={id}>{data.value}</Text>
                  ),
              )}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#F8F9F9',
            borderWidth: 1,
            borderColor: '#F8F9F9',
            height: 60,
            marginTop: 20,
          }}>
          <View style={{}}>
            <Icon name="chart-timeline-variant" size={35} color="#d3d3d3" />
          </View>
          <View>
            <Text style={{color: '#42526e', marginLeft: 5}}>
              {' '}
              Total experience in years
            </Text>
            <Text style={{color: '#00a39d', marginLeft: 8, fontWeight: 'bold'}}>
              {global.rangeData.map(
                (data, id) =>
                  data.id === profileData.rp_total_experience_id && (
                    <Text key={id}>{data.value}</Text>
                  ),
              )}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#F8F9F9',
            borderWidth: 1,
            borderColor: '#F8F9F9',
            height: 60,
            marginTop: 20,
          }}>
          <View style={{}}>
            <FontAwesome name="street-view" size={35} color="#d3d3d3" />
          </View>
          <View>
            <Text style={{color: '#42526e', marginLeft: 5}}>
              How long at your present position
            </Text>
            <Text style={{color: '#00a39d', marginLeft: 7, fontWeight: 'bold'}}>
              {global.rangeData.map(
                (data, id) =>
                  data.id === profileData.rp_present_experience_id && (
                    <Text className="tab-sub-titel" key={id}>
                      {data.value}
                    </Text>
                  ),
              )}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#F8F9F9',
            borderWidth: 1,
            borderColor: '#F8F9F9',
            height: 60,
            marginTop: 20,
          }}>
          <View style={{}}>
            <Icon name="account-tie-outline" size={35} color="#d3d3d3" />
          </View>
          <View>
            <Text style={{color: '#42526e', marginLeft: 5}}>
              {' '}
              Employee status
            </Text>
            <Text style={{color: '#00a39d', marginLeft: 8, fontWeight: 'bold'}}>
              {global.statusData.map(
                (data, id) =>
                  data.id === profileData.rp_gbl_employee_status_id && (
                    <Text className="tab-sub-titel" key={id}>
                      {data.value}
                    </Text>
                  ),
              )}
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={handleEdit} style={styles.button}>
          <Text style={styles.buttonTxt}> Edit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;
