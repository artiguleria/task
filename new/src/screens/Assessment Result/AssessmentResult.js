import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ProgressBar, Colors} from 'react-native-paper';

const AssessmentResult = ({navigation, route}) => {
  const rp_user_assmt_id = route.params.data;

  const [resultData, setResultData] = useState('');
  const [assmtData, setAssmtData] = useState('');

  const Red = ({children}) => (
    <Text style={{color: '#c33a3a'}}>{children}</Text>
  );

  useEffect(() => {
    // window.scrollTo(0, 0);
    const getAssessmentData = async () => {
      try {
        const result = await window.$http.getWithHeaders('my/assessment');
        console.log(' my assessment ' + JSON.stringify(result));
        if (result.code === 200) {
          setAssmtData(result);
        } else {
          console.log('Something went wrong!');
        }
      } catch (error) {
        console.log(error);
      }
    };

    getAssessmentData();
  }, []);

  useEffect(() => {
    const getAssessmentResult = async () => {
      try {
        const result = await window.$http.getById(
          'my/assessment/result',
          rp_user_assmt_id,
        );
        console.log(' my assessment result  ' + JSON.stringify(result));
        if (result.code === 200) {
          setResultData(result);
        } else {
          console.log('Something went wrong!');
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAssessmentResult();
  }, [rp_user_assmt_id]);

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={{paddingBottom: 350, flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.About}>May Assessment Result</Text>
          <Text style={styles.heading}>
            Your resiliency questionnaire indicates that you have{' '}
            <Red>Severe</Red> Burnout.
          </Text>
          <Image
            style={styles.GroupImage}
            source={require('../../assets/images/Group.png')}
          />

          <Text style={styles.info}>
            Severe Burnout is a crisis mode and you need to take action
            immediately.
          </Text>
        </View>

        <View style={styles.DatesView}>
          <View style={{top: 5}}>
            <Icon name="chevron-left" size={35} color="#00A39D" />
          </View>

          <TouchableOpacity style={styles.previous}>
            <Text style={styles.previousTxt}>previous Sept'20</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.current}>
            <Text style={styles.currentTxt}>Current Dec'20</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.next}>
            <Text style={styles.previousTxt}>Next May'21</Text>
          </TouchableOpacity>

          <View style={{top: 5}}>
            <Icon name="chevron-right" size={35} color="#00A39D" />
          </View>
        </View>

        <View style={{top: 30}}>
          <Text style={styles.resiliencyefer}>
            Resiliency refers to your ability to deal with physical and
            emotional stress.
          </Text>
        </View>
        <View style={styles.Summary}>
          <Text
            style={{
              fontSize: 15,

              marginTop: '5%',
              color: '#006061',
              fontWeight: '600',
              fontSize: 18,
            }}>
            Resiliency Factor
          </Text>
          <Text style={styles.SummaryTxt}>Factors towards Resiliency</Text>
          <Text style={styles.paragraph}>
            Your resiliency result is calculated based on your combined results
            for Enthusiasm, Fatigue, Motivation and Negativity.
          </Text>
        </View>

        <View style={{marginLeft: 20, marginRight: 20, top: 70}}>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Image source={require('../../assets/images/enthu.png')} />
            <View>
              <Text style={styles.Factors}>(F) Fatigue </Text>
            </View>
          </View>
          <Text style={styles.FactorsDiscription}>
            Your fatigue is low which promotes Resiliency.
          </Text>
          <View style={styles.progress}>
            <Text style={{left: 270, bottom: 10}}>62.00%</Text>
            <ProgressBar
              style={styles.progressBar}
              progress={0.5}
              color="#00a39d"
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: '5%',
              }}>
              <Text style={{left: 60, top: 5}}>Low</Text>

              <Text style={{right: 10, top: 5}}>High</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Image source={require('../../assets/images/enthu.png')} />
            <View>
              <Text style={styles.Factors}>(F) Fatigue </Text>
            </View>
          </View>
          <Text style={styles.FactorsDiscription}>
            Your fatigue is low which promotes Resiliency.
          </Text>
          <View style={styles.progress}>
            <Text style={{left: 270, bottom: 10}}>62.00%</Text>
            <ProgressBar
              style={styles.progressBar}
              progress={0.5}
              color="#00a39d"
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: '5%',
              }}>
              <Text style={{left: 60, top: 5}}>Low</Text>

              <Text style={{right: 10, top: 5}}>High</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Image source={require('../../assets/images/enthu.png')} />
            <View>
              <Text style={styles.Factors}>(F) Fatigue </Text>
            </View>
          </View>
          <Text style={styles.FactorsDiscription}>
            Your fatigue is low which promotes Resiliency.
          </Text>
          <View style={styles.progress}>
            <Text style={{left: 270, bottom: 10}}>62.00%</Text>
            <ProgressBar
              style={styles.progressBar}
              progress={0.5}
              color="#00a39d"
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: '5%',
              }}>
              <Text style={{left: 60, top: 5}}>Low</Text>

              <Text style={{right: 10, top: 5}}>High</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Image source={require('../../assets/images/enthu.png')} />
            <View>
              <Text style={styles.Factors}>(F) Fatigue </Text>
            </View>
          </View>
          <Text style={styles.FactorsDiscription}>
            Your fatigue is low which promotes Resiliency.
          </Text>
          <View style={styles.progress}>
            <Text style={{left: 270, bottom: 10}}>62.00%</Text>
            <ProgressBar
              style={styles.progressBar}
              progress={0.5}
              color="#00a39d"
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: '5%',
              }}>
              <Text style={{left: 60, top: 5}}>Low</Text>

              <Text style={{right: 10, top: 5}}>High</Text>
            </View>
          </View>
        </View>

        <View style={styles.ResultSummaryView}>
          <Text style={styles.Result}>Result Summary</Text>

          <Text style={styles.ResultSummary}>
            Severe Burnout indicates that your ability to handle any physical or
            emotional stress has been critically compromised and that you are
            likely to exhibit physical and emotional symptoms as a direct
            result. It negatively affects your personal and work life and by
            making some lifestyle changes and focusing on improving your
            resiliency you will improve and regain the quality- of-life you
            deserve.
          </Text>
        </View>

        <View>
          <TouchableOpacity style={styles.BottomButton}>
            <Text style={styles.ButtonTxt}>Take me to my Resiliency Plan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AssessmentResult;
