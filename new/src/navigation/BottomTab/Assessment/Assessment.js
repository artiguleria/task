import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import cardData from '../Assessment/CardData/cardData.json';
import {saveAssmt} from '../../../store/assmt/actions';
import {saveAssmtId} from '../../../store/assmtId/actions';
import {useDispatch, useSelector} from 'react-redux';
import moment from "moment";
const Assessment = ({navigation}) => {
  const assmt = useSelector(state => state.assmt);
  const dispatch = useDispatch();
  const [pressed, setPressed] = useState(false);
  const [pressed1, setPressed1] = useState(false);
  const [resultData, setResultData] = useState('');

  useEffect(() => {
    getAssessmentData();
  }, []);

  const getAssessmentData = async () => {
    try {
      const result = await window.$http.getWithHeaders('my/assessment');
      if (result.code === 200) {
        console.log('my/assessment@@@@@@@@ ' + JSON.stringify(result));
        setResultData(result);
        dispatch(saveAssmt(result));
      } else {
        console.log('Something went wrong!');
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log("assmt.." + JSON.stringify(assmt))

  const handlePrevAssmtResult = (rp_user_assmt_id) => {
    // navigate(`/dashboard/assessments/result/${rp_user_assmt_id}`);
  };
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.About}>About</Text>

        <Text style={styles.heading}>
          You are on your way to better resiliency
        </Text>
        <Text style={styles.info}>
          Your employee is dedicated to maximizing your resiliency and
          quality-of-life.
        </Text>

        <View style={{marginBottom: 40}}>
          <Image
            style={styles.GroupImage}
            source={require('../../../assets/images/Group.png')}
          />
        </View>
      </View>

      <Text style={{marginHorizontal:10,top:15}}>
        {resultData
          ? resultData.data.map((data, id) =>
              data.status === 0 ? (
                <TouchableOpacity 
                onPress={()=>handlePrevAssmtResult(data.rp_user_assmt_id)}
                style={styles.status}>
                  <Text style={styles.statusTxt}>previous  {moment(new Date(data.display_date)).format(
                              "MMM DD, YYYY"
                            )}</Text>
                </TouchableOpacity>
              
              ) : data.status === 1 ? (
                <TouchableOpacity style={styles.status}>
                  <Text style={styles.statusTxt}>Current Assessment</Text>
                </TouchableOpacity>
              ) : data.status === 2 ? (
                <TouchableOpacity  key={id}
             
                style={styles.next}>
                  <Text style={styles.previousTxt}>Next May'23</Text>
                </TouchableOpacity>
              ) : (
                ' '
              ),
            )
          : ''}
      </Text>


      <Text style={styles.resiliencyRefer}>
        Resiliency refers to your ability to deal with physical and emotional
        stress without triggering a negative physical or emotional response.
      </Text>

      <ScrollView
        style={{    flex:1,}}
        nestedScrollEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
          
        <View style={styles.Horizontalcontainer1}>
          <Text style={styles.About}>About</Text>
          <Text style={styles.ResiliencyScore}>Your Resiliency Result</Text>
          <Text style={styles.Description}>
            Your Resiliency result is calculated utilizing your individual
            scores for Enthusiasm, Fatigue, Motivation and Negativity about work
            and life.
          </Text>

          <Image
            style={styles.GroupImage2}
            source={require('../../../assets/images/Group.png')}
          />
        </View>

        <View style={styles.Horizontalcontainer2}>
          <Text style={styles.About}>About</Text>
          <Text style={styles.ResiliencyScore}>
            Factors towards your Resiliency Result
          </Text>
          <Text style={styles.Description}>
            These 4 distinct factors directly affect your quality-of-life.
          </Text>

          <View style={{flexDirection: 'row', marginTop: 50}}>
            <Image source={require('../../../assets/images/enthu.png')} />
            <View>
              <Text style={styles.Factors}>(E) Enthusiasm</Text>
            </View>
          </View>
          <Text style={styles.FactorsDiscription}>
            Is the excitement and satisfaction you feel for work and life.
          </Text>

          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Image source={require('../../../assets/images/enthu.png')} />
            <View>
              <Text style={styles.Factors}>(F) Fatigue </Text>
            </View>
          </View>
          <Text style={styles.FactorsDiscription}>
            Refers to the amount of physical and emotional energy your work and
            life provides or takes from you.
          </Text>

          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Image source={require('../../../assets/images/enthu.png')} />
            <View>
              <Text style={styles.Factors}>(M) Motivation </Text>
            </View>
          </View>
          <Text style={styles.FactorsDiscription}>
            Is your personal drive to do a good job, no matter what obstacles
            are in your way.
          </Text>

          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Image source={require('../../../assets/images/enthu.png')} />
            <View>
              <Text style={styles.Factors}>(N) Negativity</Text>
            </View>
          </View>
          <Text style={styles.FactorsDiscription}>
            Refers to the loss of confidence in your work and life choices.
          </Text>
        </View>
      </ScrollView>


    
      <View>
        <Text style={styles.StepsHeading}>
          Steps To Resiliency and a higher quality-of-life
        </Text>
      </View>

      <View style={styles.StepsContainer}>
        <View>
          <Icon name="apple-keyboard-command" size={40} color="#00a89d" />
        </View>
        <View style={{left:15}}>
          <Text style={styles.SecondStepTxt}>
            Complete your Resiliency Program assessement.
          </Text>
        </View>
      </View>

      <View style={styles.SecondStep}>
        <View>
          <Icon name="apple-keyboard-command" size={40} color="#00a89d" />
        </View>
        <View style={{left:15}}>
          <Text style={styles.SecondStepTxt}>
            Review Your Resiliency Score.
          </Text>
        </View>
      </View>

      <View style={styles.ThirdStep}>
        <View>
          <Icon name="apple-keyboard-command" size={40} color="#00a89d" />
        </View>
        <View style={{left:15}}>
          <Text style={styles.SecondStepTxt}>
            Follow your personalized Resiliecy Plan that includes.
          </Text>
        </View>
      </View>

      <ScrollView
        style={{flex: 1, marginTop: 40, paddingBottom: 20}}
        nestedScrollEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {cardData.map((item, index) => (
          <View
            style={
              index == 0
                ? styles.card1
                : index == 1
                ? styles.card2
                : styles.card3
            }>
            <Text style={styles.About}> {item.title}</Text>

            <Text style={styles.ContainerHeading}>{item.heading}</Text>
            <Text style={styles.info}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.Bottomcontainer}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 25,
            color: '#006061',
          
            top: 30,
            padding: 10,
          }}>
          You can have a positive impact on your resiliency - Today
        </Text>

        <View style={{flexDirection: 'row', top: 70,alignSelf:'center'}}>
          <View style={styles.profileHeaderPicCircleE}>
            <Text style={styles.Capital}> E</Text>
          </View>

          <View
            style={{
              height: 1,
              backgroundColor: '#00a89d',
              top: 25,
              width: '10%',
            }}
          />
          <View
            style={[
              styles.profileHeaderPicCircleF,
              {backgroundColor: '#00a89d'},
            ]}>
            <Text style={[styles.Capital, {textAlign: 'center'}]}> F</Text>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: '#00a89d',
              top: 25,
              width: '10%',
            }}
          />

          <View style={styles.profileHeaderPicCircleM}>
            <Text style={[styles.Capital, {textAlign: 'center'}]}> M</Text>
          </View>

          <View
            style={{
              height: 1,
              backgroundColor: '#00a89d',
              top: 25,
              width: '10%',
            }}
          />

          <View style={styles.profileHeaderPicCircleN}>
            <Text style={[styles.Capital, {textAlign: 'center'}]}> N</Text>
          </View>
        </View>

        <View style={{flex: 1,}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '30%',
              left: 10,
           
            }}>
            <View>
              <Icon name="apple-keyboard-command" size={40} color="#00a89d" />
            </View>
            <View style={{left:15}}>
              <Text style={styles.StepsTxt}>
                Complete the confidential assessment to unlock your resiliency
                score.
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '6%',
              left: 10,
             
            }}>
            <View>
              <Icon name="apple-keyboard-command" size={40} color="#c33a3a" />
            </View>
            <View style={{left:15}}>
              <Text style={[styles.StepsTxt, {color: '#c33a3a'}]}>
                Your assessment response and personal data will never be shared
                with anyone or your employer.
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: '6%',
              left: 10,
            }}>
            <View>
              <Icon name="apple-keyboard-command" size={40} color="#00a89d" />
            </View>
            <View style={{left:15}}>
              <Text style={styles.StepsTxt}>
                The more thoroughly you complete the assessment, the more
                tailored the Resiliency Plan can be made for you.
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: '6%',
              left: 10,
            }}>
            <View>
              <Icon name="apple-keyboard-command" size={40} color="#00a89d" />
            </View>
            <View style={{left:15}}>
              <Text style={styles.StepsTxt}>
                The more thoroughly you complete the assessment, the more
                tailored the Resiliency Plan can be made for you.
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
           marginTop: '6%',
              left: 20,
              left: 10,
            }}>
            <View>
              <Icon name="apple-keyboard-command" size={40} color="#00a89d" />
            </View>
            <View style={{left:15}}>
              <Text style={styles.StepsTxt}>
                Please complete the assessment in one sitting. It takes 5-8
                minutes to complete the assessment.
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('TermAndCondition')}
          style={styles.button}>
          <Text style={styles.buttonTxt}>Begin Assessment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Assessment;

{
  /* <ScrollView
style={{flex: 1, marginTop: 40}}
nestedScrollEnabled={true}
horizontal={true}
showsHorizontalScrollIndicator={false}>


<View style={styles.HorizontalContainer}>
  <View>
    {/* <Text style={styles.About}>About</Text> */
}
// <Text style={styles.ContainerHeading}>Why ?</Text>
// <Text style={styles.ContainerHeading}>Lifestyle Changes</Text>

// <Text style={styles.HeadingDescription}>
//   New habits will help reduce the burden on your mind and body.
//   Positive lifestyle and habit changes can dramatically improve your
//   health and emotional outlook. Proper diet, exercise and sleep are
//   proven methods to maximize your quality-of-life.
// </Text>

// <View style={{left: '85%', top: 7}}>
{
  /* <Add width={20} height={20} /> */
}
//     </View>
//   </View>
// </View>
// <View
//   style={[styles.HorizontalContainer, {backgroundColor: '#ecb676'}]}>
//   <View>
//     {/* <Text style={styles.About}>About</Text> */}
//     <Text style={styles.ContainerHeading}>Why ?</Text>
//     <Text style={styles.ContainerHeading}>Nutritional Supplements</Text>
//     <Text style={styles.HeadingDescription}>
//       Supplementation helps reduce physical and emotional complaints
//       while rebuilding the mind and body's ability to handle work and
//       life stress. Nutritional supplementation is extremely effective in
//       improving resiliency, reducing burnout and maximizing
//       quality-of-life.
//     </Text>

//     <View style={{left: '85%', top: 20}}>
{
  /* <Add width={20} height={20} /> */
}
//     </View>
//   </View>
// </View>

// <View
//   style={[styles.HorizontalContainer, {backgroundColor: '#f7c0ec'}]}>
// <View>
{
  /* <Text style={styles.About}>About</Text> */
}

{
  /* <Text style={styles.ContainerHeading}>Why ?</Text>
    <Text style={styles.ContainerHeading}>Mindfulness Training</Text>
    <Text style={styles.HeadingDescription}>
      Focusing your mind and body will promote a sense of calm and
      health. Mindfulness training teaches you to slow down racing
      thoughts, let go of negativity, and calm both your mind and body.
    </Text>

    <View style={{left: '85%', top: 20}}>
      {/* <Add width={20} height={20} /> */
}
//     </View>
//   </View>
// </View>
// </ScrollView> */} */}
