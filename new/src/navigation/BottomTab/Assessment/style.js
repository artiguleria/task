import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    top: 15,
    padding: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
  },

  About: {
    color: '#00a39d',
    fontSize: 15,
    fontWeight: '700',
  
  },
  GroupImage: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 200,
    width: 200,
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

  heading: {
    color: COLORS.PersianRed,
    fontSize: 20,
    fontWeight: '700',
    marginTop: 10,
    padding: 10,
  },
  info: {
    color: '#575757',
    fontSize: 15,
    padding: 10,
    fontWeight:"700",
    fontSize:16
  },

  DatesContainer: {

   alignSelf:'center',
  
    top: 15,
    width: "15%",
  
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

status:{
  backgroundColor: COLORS.RPPrimaryGreen,
 borderBottomLeftRadius:5,
 borderBottomRightRadius:5,
 height:50,
 width:150,



 

},



statusTxt:{
  color: COLORS.white,
  textAlign: 'center',
  padding:5,

},

  next: {
    backgroundColor: COLORS.white,
    width: '20%',
    height: 50,

    borderRadius: 5,
  },
  nextTxt: {
    color: COLORS.RPPrimaryGreen,
    textAlign: 'center',

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

  Horizontalcontainer1: {
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '19%',
    padding: 15,
    left: 10,
    top:20
  },
  Horizontalcontainer2: {
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '19%',
    padding: 15,
    left: 30,
    top:20
  },

  ResiliencyScore: {
    fontSize: 18,
    color: '#2c4143',
    fontWeight: '700',
    top: 10,
    
  },
  Description: {
    fontSize: 17,
    top: 20,
    color:"#42526e",
    
  },

  GroupImage: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 200,
    width: 230,
    top: 30,
  },

  GroupImage2: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 200,
    width: 230,
    top: 80,
  },

  StepsHeading: {
    color: '#006061',
    fontSize: 25,
    fontWeight: '700',
    top: 25,
    left: 20,
  },

  StepsContainer: {
    // flexDirection: 'row',
    // marginTop: '10%',
    // left: 20,
    // top:20
    flexDirection: 'row',
    marginTop: '20%',
    left: 18,
  },
  Steps:
   {color: '#333', 
   textAlign: 'center',
    top: 10, 
    left: 10},

  ThirdStep: {
    flexDirection: 'row',
    marginTop: 20,
    left: 20,

  },
  SecondStep: {
    flexDirection: 'row',
    marginTop: 20,
    left: 20,
  
  },

  SecondStepTxt: {
    // color: '#333',
    // textAlign: 'center',
    
    // left:6,
    // top:8,

    top: 5, 

    flexWrap: 'wrap',
   //  letterSpacing:0.5
   // lineHeight:20
 
  paddingRight: 70,
    

  },
  card1:{
    alignSelf: 'stretch',

    padding: 10,

    borderRadius: 10,
    width: '6%',
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#76ece5',
    height: 340
  },

   card2:{
    alignSelf: 'stretch',

    padding: 10,

    borderRadius: 10,
    width: '6%',
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#ecb676',
    height: 340
  },
  card3:{
    alignSelf: 'stretch',

    padding: 10,

    borderRadius: 10,
    width: '6%',
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#f7c0ec',
    height: 340
  },
  HorizontalContainer: {
    alignSelf: 'stretch',

    padding: 10,

    borderRadius: 10,
    width: '5%',
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#76ece5',
    height:400
  },
  ContainerHeading: {
    color: '#42526e',
    fontSize: 25,
    fontWeight: '600',
  },
  HeadingDescription:
   {
    top: 10, 
    color: '#42526e',
    fontSize:17,
  
  
  },


  

  Bottomcontainer: {
    alignSelf: 'stretch',
    top: 25,

    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    // marginLeft: 10,
    // marginRight: 10,

    flex: 1,
  },
  container2: {
    marginTop: '5%',
    padding: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
    width: '40%',
  },
  container3: {
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

  tcL: {
    marginLeft: 20,
    top: 20,

    fontSize: 15,
  },
  tcL1: {
    marginLeft: 20,

    bottom: 10,
    fontSize: 15,
  },
  tcL2: {
    marginLeft: 20,

    top: 5,
    fontSize: 15,
  },
  verticleLine: {
    height: '3%',
    width: 1,
    backgroundColor: '#00a89d',
    left: 25,
  },
  verticleLine2: {
    height: '2%',
    width: 1,
    backgroundColor: '#00a89d',
    left: 25,
    bottom: 15,
  },

  Capital: 
  {fontSize: 25, 
    color: 'white', 
    textAlign: 'center',
  right:5},




  StepsTxt: {color: '#333',
   top: 3, 

   flexWrap: 'wrap',
  //  letterSpacing:0.5
  // lineHeight:20

 paddingRight: 70,
 

  },


   resiliencyRefer: {
    color: '#006061',
    fontSize: 20,
    fontWeight: '700',
    padding: 25,
    top:20,
  },
  Begin: {
    color: 'gray',
    bottom: 10,
    marginTop: '10%',
  },
  profileHeaderPicCircleE: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#036b6c',

    justifyContent: 'center',
    alignItems:"center"
    
  },
  profileHeaderPicCircleN: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#c33a3a',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems:"center"
  
  },

  profileHeaderPicCircleF: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#c33a3a',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderPicCircleM: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#036b6c',
    textAlign: 'center',
    
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  profileHeaderLine: {
    height: 2,

    backgroundColor: '#00a89d',
    marginTop: 15,
  },

  PerformenceCurve: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 200,
    width: 200,
  },

  Discription: {
    color: COLORS.RPPrimaryGreen,
    fontSize: 30,
    fontWeight: '700',
    margin: 20,
  },

  bottomTxt: {
    color: '#00A39D',
  },
  button: {
    padding: 10,
    borderColor: '#00A39D',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#00A39D',
    marginTop: '15%',
    // height:"20%",
    width: '85%',
    marginBottom: '20%',
    alignSelf: 'center',
  },
  buttonTxt: {
    color: 'white',
    textAlign: 'center',
    fontWeight:"bold"
  },











  containerScroll: {
    padding: 25,
  
    backgroundColor: '#f1f5f9',
    marginBottom: '2%',

  },

  

  box: {
    borderRadius: 3,
    color: 'white',
    
    flexDirection: 'row',
    flexWrap: 'wrap',
    
    marginTop: '10%',

    borderRadius: 10,
    width: '93%',
    height: 430,
    marginLeft: '7%',
     backgroundColor:'#ec535a'
  
  },
  mainBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
 
    marginRight: '10%',
    marginBottom: '10%',
  },

  textTop1: {
    color: 'red',
    marginLeft: '10%',
    paddingTop: '20%',
  },
  textGeneral: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'gray',
    marginLeft: '10%',

  },
  textRecommended: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'gray',
    marginLeft: '10%',
  

    marginTop: '8%',
  },

  textRecent: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'gray',

  
    marginLeft: '10%',
  },
  profileHeaderLine1: {
    height: 4,
   
    backgroundColor: '#ff6666',
    width: '75%',
    marginLeft: '9%',
  },
  profileHeaderLinegeneral: {
    height: 4,

    backgroundColor: '#ff6666',
    width: '45%',
    marginLeft: '9%',
  },
});

export default styles;
