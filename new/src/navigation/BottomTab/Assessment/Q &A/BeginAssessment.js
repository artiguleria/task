import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from './style';
import {ProgressBar, Colors} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {saveAssmtId} from '../../../../store/assmtId/actions';
import QuestionData from './QuestionData/QuestionData';

const BeginAssessment = ({navigation}) => {
  const dispatch = useDispatch();
  const [resultData, setResultData] = useState([]);
  const [limit, setLimit] = useState(2);
  const [index, setIndex] = useState(0);
  const [showButton, setShowButton] = useState('next');
  const [progressWidth, setProgressWidth] = useState('');
  const [selectedData, setSelectedData] = useState([]);
  const [totalView, setTotalView] = useState(1);
  const [count, setCount] = useState('');
  const [result, setResult] = useState([]);
  const [currData, setCurrData] = useState([]);
  const dataLimitPerPage = 2;
  const rp_assmt_id = useSelector(state => state.assmt[0].rp_assmt_id);
  const rp_user_assmt_id = useSelector(state => state.assmtId?.payload);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const data = await window.$http.getWithHeaders(
          `assessment/detail/${rp_assmt_id}`,
        );
        console.log(
          'assessment detail response  .....' +
            JSON.stringify(data.data.questions),
        );
        if (data.code === 200) {
          setResultData(data.data.questions);
          dispatch(saveAssmtId(data?.data?.rp_user_assmt_id));
        } else {
          console.log('Something went wrong!');
        }
      } catch (error) {
        console.log(error);
      }
      setCount((resultData.length / 2).toFixed());
    };

    getQuestions();
  }, [resultData.length, rp_assmt_id]);

  const handleQuestionnaire = async e => {
    try {
      const result = await window.$http.postWithHeaders('assessment/save', {
        rp_user_assmt_id,
      });
      console.log(' save result ' + JSON.stringify(result));
      if (result.code === 200) {
        navigation.navigate('GetResult');
      } else {
        console.log('Something went wrong!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getNewArray = () => {
      setIndex(i => totalView * dataLimitPerPage - dataLimitPerPage);
      setLimit(l => index + dataLimitPerPage);
      setResult(resultData.slice(index, limit));
    };
    getNewArray();
  }, [totalView, index, limit, resultData, count]);

  const handleNext = () => {
    setTotalView(prevView => prevView + 1);

    if (`${totalView + 1}` === count) {
      setShowButton('');
    }
  };

  useEffect(() => {
    const currentData = totalView => {
      let currIndex = totalView - 1;
      currIndex = currIndex + currIndex + totalView;
      const currLimit = currIndex + 2;
      setCurrData(resultData.slice(currIndex - 1, currLimit - 1));
    };

    currentData(totalView);
  }, [resultData, totalView]);

  const handlePrevious = () => {
    setShowButton('next');
    setTotalView(prevView => prevView - 1);
  };
  useEffect(() => {
    const maxWidth = () => {
      const result = (limit / resultData.length) * 100;
      setProgressWidth(result);
    };
    maxWidth();
  }, [limit, resultData]);

  const handleSet = value => {
    setSelectedData(prevData => [...value]);
  };

  const isEqual = (currSet, optSet) => {
    for (let i = 0; i < currSet.length; i++) {
      if (optSet.indexOf(currSet[i]) === -1) {
        return false;
      }
    }
    return true;
  };
  return (
    <ScrollView style={{backgroundColor: '#fff', flex: 1, paddingBottom: 100}}>
      <View>

    
      <View style={styles.progress}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            top: 7,
          }}>
          <Text style={{color: '#fff', left: 5}}>Resiliency Assessent</Text>

          <Text>
            {resultData.length > 0 ? (
              <View style={{top: 20}}>
                <Text style={{color: '#fff'}}>
                  {selectedData.length === 0
                    ? resultData.length - selectedData.length
                    : resultData.length - (selectedData.length - 1)}
                  {''} Questions remaining
                </Text>
              </View>
            ) : (
              ''
            )}
          </Text>
        </View>
        <ProgressBar style={styles.progressBar} progress={0.3} color="#fff" />
      </View>

      {result.map((data, id) => (
        <View key={data.rp_assmt_question_id}>
          <QuestionData
            data={data}
            id={id}
            rp_user_assmt_id={rp_user_assmt_id}
            handleData={handleSet}
          />
        </View>
      ))}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          flex: 1,
          bottom: 0,
        }}>
        <TouchableOpacity
          disabled={!index}
          style={index ? styles.button : styles.disablePrevious}
          onPress={handlePrevious}>
          <Text style={index ? styles.enablebuttonTxt : styles.buttonTxt}>
            {' '}
            Pevious
          </Text>
        </TouchableOpacity>

        {currData && (
          <TouchableOpacity
            style={
              isEqual(
                currData.map(data => data.rp_assmt_question_id),
                selectedData.map(data => data.quesId),
              )
                ? styles.button2
                : styles.button2
            }
            onPress={showButton === 'next' ? handleNext : handleQuestionnaire}>
            <Text
              style={
                isEqual(
                  currData.map(data => data.rp_assmt_question_id),
                  selectedData.map(data => data.quesId),
                )
                  ? styles.buttonTxt2
                  : styles.buttonTxt2
              }>
              {showButton === 'next' ? 'Next' : 'Finish'}{' '}
            </Text>
          </TouchableOpacity>
        )}
      </View>
        </View>
    </ScrollView>
  );
};

export default BeginAssessment;
