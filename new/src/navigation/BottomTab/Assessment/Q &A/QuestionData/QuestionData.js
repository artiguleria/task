import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import {RadioButton} from 'react-native-paper';

const valueSet = [
  {
    id: 'e1',
    quesId: 0,
    optId: 0,
  },
];

const QuestionData = props => {
  const [optionId, setOptionId] = useState('');
  const [checked, setChecked] = useState(false);

  const handleChecked = async (optId, quesId) => {
    setChecked(true);
    setOptionId(optId);

    // console.log('optId   '+ optId + "   "+ "quesId   "+quesId)

    const setData = {
      id: Math.random().toString(),
      quesId: quesId,
      optId: optId,
    };

    if (valueSet.some(data => data.quesId === quesId)) {
      var index = valueSet.findIndex(data => data.quesId === quesId);
      valueSet[index] = setData;
    } else {
      valueSet.push(setData);
    }

    try {
      const result = await window.$http.postWithHeaders(
        'assessment/question/response',
        {
          rp_user_assmt_id: props.rp_user_assmt_id,
          rp_assmt_question_id: quesId,
          rp_assmt_option_id: optId,
        },
      );
      console.log('question response data ' + JSON.stringify(result));
      if (result.code !== 200) {
        console.log('Something went wrong');
      }
    } catch (error) {
      console.log(error);
    }
    props.handleData(valueSet);
  };

  return (
    <View>
      <View key={props.id}>
        <Text style={styles.questions}>{props.data.question_text}</Text>
        <View>
          {props.data.options.map((optionData, id) => (
            <View
              style={{flexDirection: 'row', left: 25}}
              key={id}
              onPress={() =>
                handleChecked(
                  optionData.rp_assmt_option_id,
                  props.data.rp_assmt_question_id,
                )
              }>
              <View style={{left: 20}}>
                <RadioButton
                  key={id}
                  status={
                    optionId === id + 1 ||
                    valueSet.some(
                      data =>
                        data.quesId === props.data.rp_assmt_question_id &&
                        data.optId === optionData.rp_assmt_option_id,
                    )
                      ? 'checked'
                      : 'unchecked'
                  }
                  value={optionData.option_title}
                  // status={optionId === id + 1 ? 'checked' : 'unchecked'}
                  color="#00A39D"
                  onPress={() =>
                    handleChecked(
                      optionData.rp_assmt_option_id,
                      props.data.rp_assmt_question_id,
                    )
                  }
                  // onPress={() => setChecked('male')}
                />
              </View>
              <Text
                key={id}
                style={
                  optionId === id + 1 ||
                  valueSet.some(
                    data =>
                      data.quesId === props.data.rp_assmt_question_id &&
                      data.optId === optionData.rp_assmt_option_id,
                  )
                    ? styles.options
                    : styles.not
                }
                htmlFor={optionData.option_title}>
                {optionData.option_title}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default QuestionData;
