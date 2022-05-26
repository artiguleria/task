import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/Colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Nero,
  },
  result: {
    flex: 2,
    alignItems: 'flex-end',
    right: 10,
    top: '38%',
  },
  line: {
    height: 3,
    backgroundColor: COLORS.BlackOut,
    alignSelf: 'stretch',
    margin: 20,
    top: '22%',
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  numbers: {
    flex: 3,
  },
  operations: {
    backgroundColor: COLORS.ThamarBlack,
    borderRadius: 25,
    width: 60,
    right: 30,
    height: 369,
    bottom: 20,
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  resultTxt: {
    fontWeight: '400',
    color: COLORS.Gray,
    fontSize: 25,
  },

  row: {
    flexDirection: 'row',

    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  number: {
    color: COLORS.Gray,
    fontSize: 30,
  },

  operationButtonTxt: {
    color: COLORS.Gray,
    fontSize: 30,
    fontWeight: '400',
    textAlign: 'center',
  },

  operationButton: {
    backgroundColor: COLORS.YellowUrnOrchid,

    height: 55,
    borderRadius: 60 / 2,
    color: 'white',

    justifyContent: 'center',
    width: 55,
    top: 18,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: COLORS.white,
  },

  Alert_Main_View: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.Abomination,
    height: 350,
    width: '80%',

    borderRadius: 45,
    alignSelf: 'center',
    opacity: 0.3,
  },

  Alert_Title: {
    fontSize: 35,
    color: COLORS.white,
    textAlign: 'center',
    padding: 10,
    height: '28%',
  },
  messageStyle: {
    color: COLORS.white,
    fontSize: 25,
  },
  contentContainerStyle: {
    backgroundColor: COLORS.Wolfram,
    justifyContent: 'center',

    height: 300,
    width: '70%',

    borderRadius: 45,
    alignSelf: 'center',
  },
});

export default styles;
