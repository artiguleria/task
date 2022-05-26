import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import AwesomeAlert from 'react-native-awesome-alerts';

const Calculator = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [resultText, setResultText] = useState('');

  let rows = [];
  let nums = [
    ['C', '+/-', ['%']],
    [7, 8, 9],
    [4,5,6],
    [1,2,3],
    ['.', 0, '00'],
  ];

  for (let i = 0; i < 5; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push(
        <TouchableOpacity onPress={() => onButtonClick(nums[i][j])}>
          <Text style={styles.number}>{nums[i][j]}</Text>
        </TouchableOpacity>,
      );
    }
    rows.push(<View style={styles.row}>{row}</View>);
  }

  let operation = ['/', 'X', '-', '+', '='];
  let ops = [];
  for (let i = 0; i < 5; i++) {
    ops.push(
      <TouchableOpacity
        onPress={() => onOperationClick(operation[i])}
        style={operation[i] === '=' ? styles.operationButton : ''}>
        <Text style={styles.operationButtonTxt}>{operation[i]}</Text>
      </TouchableOpacity>,
    );
  }
  const onButtonClick = text => {
    setShowAlert(false);
    if (text == 'C') {
      let text = resultText.split('');
      text.splice(0, text.length);
      setResultText(text.join(''));
    } else {
      setResultText(resultText + text);
    }
  };

  const onOperationClick = text => {
    setShowAlert(false);
    if (text == '=') {
      return calculateResult();
    }
    setResultText(resultText + text);
  };

  const calculateResult = () => {
    var text = resultText;
    if (text === '1+3+9') {
      setShowAlert(true);
      setResultText('')

      return;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultTxt}> {resultText}</Text>
      </View>
      <View style={styles.line} />

      <View style={styles.buttons}>
        <View style={styles.numbers}>{rows}</View>

        <View style={styles.operations}>{ops}</View>
        <View opacity={1.0}>
          <AwesomeAlert
            show={showAlert}
            showProgress={false}
            contentContainerStyle={{
              backgroundColor: '#B6B6B6',
              justifyContent: 'center',
              height: 300,
              width: '70%',
              borderRadius: 45,
              alignSelf: 'center',
            }}
            message="Hello World"
            messageStyle={{color: 'white', fontSize: 25}}
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
          />
        </View>
      </View>
    </View>
  );
};

export default Calculator;
