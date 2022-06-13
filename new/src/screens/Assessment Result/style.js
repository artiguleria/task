import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';
const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginTop: '5%',
    padding: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
  },

  GroupImage: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 200,
    width: 200,
    top:30
  },
  heading: {
    color: '#006061',
    fontSize: 25,
    fontWeight: '700',
    marginTop: '10%',
  },
  resiliencyefer:{
    color: '#006061',
    fontSize: 25,
    fontWeight: '700',

    padding: 20

  },

  info: {
    color: '#42526e',
    fontSize: 16,

    marginTop: '20%',
    bottom:20
  },

  DatesView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  previous: {
    backgroundColor: COLORS.white,
    width: '20%',
    height: 50,

    borderRadius: 5,
  },

  current: {
    backgroundColor: COLORS.RPPrimaryGreen,
    width: '20%',
    height: 50,

    borderRadius: 5,
  },
  next: {
    backgroundColor: COLORS.white,
    width: '20%',
    height: 50,

    borderRadius: 5,
  },

  previousTxt: {
    color: COLORS.RPPrimaryGreen,
    textAlign: 'center',
    padding: 8,
  },
  currentTxt: {
    color: COLORS.white,
    textAlign: 'center',
    padding: 8,
  },

  Summary: {
    alignSelf: 'stretch',
    marginTop: '5%',
    padding: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
    top:30,
 
    height: "15%"
  
  },

  SummaryTxt: {
    color: COLORS.RPPrimaryGreen,
   fontSize: 25, 

    top: 5},

  paragraph: {
    top: 30,
    color: '#42526e',
    fontSize:19
  },

  PerformenceCurve: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 200,
    width: 200,
  },
  AssessmentResult: {
    color: COLORS.RPPrimaryGreen,
    fontSize: 15,
    fontWeight: '700',
    marginTop: '5%',
    left: 15,
  },

  AssessmentResultContainer: {
    alignSelf: 'stretch',
    marginTop: '5%',
    padding: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,

  },

  AssessmentDate: {
    color: COLORS.RPPrimaryGreen,
    fontSize: 15,
    fontWeight: '700',
    marginTop: '5%',
  },

  AssessmentTypeTxt: {
    fontSize: 25,
    marginTop: 10,
    color: COLORS.RPPrimaryGreen,
  },

  AssessmentTypeDescription: {
    fontSize: 16,
    marginTop: '5%',
  },

  title: {
    fontSize: 25,
    marginTop: '5%',
    color: COLORS.RPPrimaryGreen,
  },
  GraphImage: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 250,
    width: 250,
  },

  FatigueChart: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 250,
    width: 250,
  },

  About: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
    marginTop: '5%',
  },

  Begin: {
    color: 'gray',
    bottom: 10,
    marginTop: '10%',
  },

  BottomButton: {
    backgroundColor: COLORS.RPPrimaryGreen,
    width: '70%',
    height: 50,
top:120,
    borderRadius: 5,
    alignSelf: 'center',
   

 
  },
  ButtonTxt: {
    color: '#fff',
    textAlign: 'center',
    padding: 15,
  },
  FactorsDiscription: {
    left: 45,
    paddingLeft: 15,
    paddingRight: 35,
    bottom: 20,
    color:"#42526e"
  },

  Factors: {color: '#1a1a1a',
   fontWeight: '600', fontSize: 18, 
   left: 20},
   progress: {
    alignSelf: 'stretch',


    

  },
  progressBar: {
    marginLeft: 60,
    marginRight:10,
    borderRadius:5
  },
  Result:{
    fontSize:25,
    color:"#00a39d",
    top:20

  },
  ResultSummary:{
color:"#42526e",
top:40,
fontSize:15

  },
  ResultSummaryView:{
    alignSelf: 'stretch',
    marginTop: '5%',
    padding: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
    top:80,
 
    height: "15%"
  }

});

export default styles;
