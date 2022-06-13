import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import styles from './style';
import moment from 'moment';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SelectDropdown from 'react-native-select-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import {TextInput} from 'react-native-paper';
import Callender from '../../assets/images/icon2/callender.svg';
import '../../../config';
import {useDispatch} from 'react-redux';
import {save} from '../../store/user/actions';
import DatePicker from 'react-native-neat-date-picker';
import {Picker} from '@react-native-picker/picker';

const Onboarding = ({navigation, route}) => {
  const [Enable, setEnable] = useState('courses');
  const [resultData, setResultData] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [genderId, setGenderId] = useState('');
  const [employeeStatusId, setEmployeeStatusId] = useState('');
  const [totalExperienceId, setTotalExperienceId] = useState('');
  const [presentExperienceId, setPresentExperienceId] = useState('');
  const [countryId, setCountryId] = useState('');
  const [countryOptions, setCountryOptions] = useState([]);

  const [isPickerShow, setIsPickerShow] = useState(false);
  // const [date, setDate] = useState(new Date(Date.now()));

  const [male, setMale] = useState('');
  const [female, setFemale] = useState('');
  // const { name } = route.params;

  const [pressed, setPressed] = useState(false);
  const [pressed2, setPressed2] = useState(false);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getProfileData();
    getCountryOptions();
  }, []);

  useEffect(() => {
    if (resultData?.dob !== null) {
      setDateOfBirth(moment(resultData?.dob).format('L'));
    }
    setFirstName(resultData?.first_name);
    setLastName(resultData?.last_name);
    setGenderId(resultData?.rp_gbl_gender_id);
    setEmployeeStatusId(resultData?.rp_gbl_employee_status_id);
    setTotalExperienceId(resultData?.rp_total_experience_id);
    setPresentExperienceId(resultData?.rp_present_experience_id);
    setCountryId(resultData?.rp_gbl_country_id);

    // return () => {
    //   setDateOfBirth('');
    //   setFirstName('');
    //   setLastName('');
    //   setGenderId('');
    //   setEmployeeStatusId('');
    //   setTotalExperienceId('');
    //   setPresentExperienceId('');
    //   setCountryId('');
    // };
  }, [resultData]);

  const getProfileData = async () => {
    try {
      const result = await window.$http.getWithHeaders('my_profile');
      if (result.code === 200) {
        setResultData(result.data);
        // console.log('my_profile Get Api onBoarding ' + JSON.stringify(result));
      } else {
        console.log('Something went wrong!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCountryOptions = async () => {
    try {
      if (result.code === 200) {
        setCountryOptions(result.data);
        console.log('country response ' + JSON.stringify(result));
      } else {
        console.log('Something went wrong!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const {width, height} = Dimensions.get('window');
  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (event, value) => {
    setDateOfBirth(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };
  function handleSelection(e) {
    console.log(e);
  }

  const handleSave = async () => {

    

    const body = {
      dob: dateOfBirth,
      gender_id: genderId,
      employee_status_id: employeeStatusId,
      total_experience_id: totalExperienceId,
      present_experience_id: presentExperienceId,
      rp_gbl_country_id: countryId,
    };
    try {
      const result = await window.$http.postWithHeaders('my_profile', body);


      if (result.code === 200) {
        dispatch(save(result));

    

        navigation.navigate('DrawerNavigationRoutes');
      } else {
        console.log('Something went wrong!');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const onCancel = () => {
 
    setShowDatePicker(false);
  };

  const onConfirm = output => {

    setShowDatePicker(false);

 
    setDateOfBirth(moment(output.dateString).format('L'));
  
  };
  return (
    <ScrollView style={{paddingBottom:300,flex:1,}}  showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={{marginTop: '10%', left: 30}}>
          <Text style={styles.personalProfileTxt}>Personal Profile</Text>
        </View>

        <View style={styles.inputView}>
          <Text style={styles.inputTxt}> First Name</Text>
          <TextInput
            style={styles.input}
            autoCorrect={false}
            autoCapitalize={'none'}
            disabled={true}
            value={firstName}
          />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.inputTxt}>Last Name</Text>
          <TextInput
            style={styles.input}
            autoCorrect={false}
            autoCapitalize={'none'}
            disabled={true}
            value={lastName}
          />
        </View>
      </View>

      <View style={styles.container2}>
        <TextInput
          style={styles.paperInput}
          label="Date of birth"
          mode="outlined"
          activeOutlineColor="#00A39D"
          outlineColor="#00A39D"
          value={dateOfBirth}
          // onChangeText={(date)=> setDateOfBirth(moment(date).format('L'))}
        />
        {!showDatePicker && (
          <TouchableOpacity onPress={openDatePicker}>
            <Callender
              style={{position: 'absolute', bottom: 25, left: '80%'}}
              height={20}
              width={20}
            />
          </TouchableOpacity>
        )}
        {showDatePicker && (
          <DatePicker
            isVisible={showDatePicker}
            mode={'single'}
            onCancel={onCancel}
            onConfirm={onConfirm}
          />
        )}
    
        <View style={{top:20}}>
        <Text style={styles.pickerTxt}> Gender</Text>

        </View>
     

<View style={styles.picker1}>
  <View>  
  <Picker
     selectedValue={genderId}
    
     mode={'dialog'}
     onValueChange={itemValue => setGenderId(itemValue)}>
    {global.genderData.map((data, id) => (
            <Picker.item
              label={data.value}
              value={data.id}
              key={id}></Picker.item>
    ))}
  </Picker>
  </View>
</View>
<View style={{top:50}}>
        <Text style={styles.pickerTxt}> Country</Text>

        </View>

        <View style={styles.picker2}>
          <Picker
            selectedValue={countryId}
            mode={'dialog'}
            onValueChange={itemValue => setCountryId(itemValue)}>
            
            {global.country.map((data, id) => (
              <Picker.item
                label={data.value}
                value={data.id}
                key={id}></Picker.item>
            ))}
          </Picker>
        </View>

        <View style={{top: 80}}>
          <Text style={styles.pickerTxt}> Total experience in years</Text>
        </View>
        <View style={styles.picker3}>
          <Picker
            selectedValue={totalExperienceId}
            mode={'dialog'}
            onValueChange={itemValue => setTotalExperienceId(itemValue)}>
            {global.rangeData.map((data, id) => (
              <Picker.item
                label={data.value}
                value={data.id}
                key={id}></Picker.item>
            ))}
          </Picker>
        </View>

        <View style={{top:30}}>
          <Text style={styles.pickerTxt}>
         
            How long at your present company
          </Text>
        </View>
        <View style={styles.picker4}>
          <Picker
            selectedValue={presentExperienceId}
            mode={'dialog'}
            onValueChange={itemValue => setPresentExperienceId(itemValue)}>
            {global.rangeData.map((data, id) => (
              <Picker.item
                label={data.value}
                value={data.id}
                key={id}></Picker.item>
            ))}
          </Picker>
        </View> 

        <View style={{top: 55}}>
          <Text style={styles.pickerTxt}> Employee status</Text>
        </View>
        <View style={styles.picker5}>
          <Picker
            selectedValue={employeeStatusId}
            mode={'dialog'}
            onValueChange={itemValue => setEmployeeStatusId(itemValue)}>
            {global.statusData.map((data, id) => (
              <Picker.item
                label={data.value}
                value={data.id}
                key={id}></Picker.item>
            ))}
          </Picker>
        </View>

        <TouchableOpacity onPress={handleSave} style={styles.button}>
          <Text style={styles.buttonTxt}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Onboarding;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: 1,
    height: 50,
    borderRadius: 4,
    borderColor: 'grey',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'green',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
});
