import {StyleSheet} from 'react-native';
import { COLORS } from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    alignItems: 'center',
    marginTop:'5%'
  },

  logoView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rpLogo: {
    left: 20,
    top: 20,
  },
  clientLogo: {
    height: 70,
    width: 120,
    resizeMode: 'contain',
    right: 20,
    top: 20,
  },
  verticleLine: {
    height: '50%',
    width: 2,
    backgroundColor: COLORS.PinkSwan,
    top: 20,
  },



  otpverification: {
    color: COLORS.Nero,
    fontWeight: 'bold',
    fontSize: 20,
    top:50



  },
  enterotp: {
    color:COLORS.StormGrey,
    marginLeft:"5%",
    top:15,
    padding:50,
    fontSize:15
  },

  txtInput1View: {
    marginTop: '10%',
     width: "90%"
  },


  input: {
    // height: 40,

  
    // marginBottom: 15,
    // paddingHorizontal: 10,
    width: '90%',
    marginLeft: 20,
    paddingLeft: 40,
    backgroundColor: COLORS.white,
  },









  BottomText1:{
 
  },

  // bottomTxt:{
  //   marginTop:"6%"
  // },

  emailIcon: {
    position: 'absolute',
    top: 17,
    left: 27,
  },




  button: {
    padding: 10,
    borderColor: COLORS.RPPrimaryGreen,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#00A39D',
top:40,
  
    width: "80%"
  },
  buttonTxt: {
    textAlign: 'center',
    color: COLORS.white,
  },

  BottomTxt: {
    color: '#333',
    marginTop:"5%"
  },

  BottomTxt2:{
    
    left: 10

    },

    BottomTxt3:{
      // marginBottom:"20%",
      color: COLORS.RPPrimaryGreen,
      textAlign:"center",
      fontSize:15,
      bottom:5
      
    
    },
    borderStyleBase: {
      width: 30,
      height: 45
    },
  
    container2: {
      
      // justifyContent: 'center',
      // alignItems: 'center',
      alignSelf:'center',
    },
    otpView: {
      width: '80%',
      height: 200,
      color: 'black',
    },
    underlineStyleBase: {
      width: 30,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 1,
      color: 'black',
      
    },

  

  
  







});
export default styles;
