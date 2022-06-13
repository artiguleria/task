import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants/Colors';
const styles = StyleSheet.create({

  view: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 200
 },
 title: {
    fontSize : 20,
    marginBottom: 10
 },

  container2: {
    alignSelf: 'stretch',
    marginTop: '5%',

    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    
  },
  container3: {
    alignSelf: 'stretch',
    marginTop: 10,

    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',

    flex: 1,
  },
  progress: {
    backgroundColor: '#00A39D',
    alignSelf: 'stretch',

    height: '10%',
    borderColor: '#00A39D',
    borderWidth: 1,

    backgroundColor: '#00A39D',
  },
  progressBar: {
    margin: 25,
  },

  unselected: {
    backgroundColor: '#fff',
    margin: 6,
    padding: 10,
   

  },
  selected: {
    backgroundColor: '#00A39D',
    color: 'white',
    margin: 6,
    padding: 10,
    // width: '25%',
    borderRadius: 5,
    
  },

  paragraph: {
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',

    flex: 1,
    flexWrap: 'wrap',
  },

  // button: {
  //   padding: 10,
  //   borderColor: '#00A39D',
  //   borderWidth: 1,
  //   borderRadius: 10,
  //   backgroundColor: '#fff',
  //   marginTop: '10%',
  //   // height:"20%",
  //   // width: "20%"
  //   marginBottom: '20%',
  //   width: '35%',
  // },

  button: {
    padding: 10,
    borderColor: '#00A39D',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#00A39D',
    marginTop: '10%',
    // height:"20%",
    // width: "20%"
    marginBottom: '20%',
    width: '35%',
  },
  disablePrevious:{
    padding: 10,
    borderColor: '#00A39D',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginTop: '10%',
    // height:"20%",
    // width: "20%"
    marginBottom: '20%',
    width: '35%',

  },
  button2: {
    padding: 10,
 
    borderRadius: 10,
    backgroundColor: '#00A39D',
    marginTop: '10%',
    // height:"20%",
    // width: "20%"
    marginBottom: '20%',
    width: '35%',
  },

  buttonDisable: {
    padding: 10,
    borderColor:'#00A39D',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginTop: '10%',
    // height:"20%",
    // width: "20%"
    marginBottom: '20%',
    width: '35%',
  },
  buttonTxt2: {
    color: 'white',
    textAlign: 'center',
  },
  disablebuttonTxt2: {
    color: '#00A39D',
    textAlign: 'center',
  },
  buttonTxt: {
    color: '#00A39D',
    textAlign: 'center',
  },
  enablebuttonTxt: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default styles;
