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
OTPTxt: {
    color:COLORS.StormGrey,
    marginLeft:"5%",
 
    padding:50,
    fontSize:15,
    top:20
  },

  txtInput1View: {
    marginTop: '10%',
     width: "90%"
  },


  input: {
    // height: 40,

    borderRadius: 10,
    // marginBottom: 15,
    // paddingHorizontal: 10,
    width: '65%',
    marginLeft: 20,
    paddingLeft: 40,
    backgroundColor: COLORS.white,
    alignSelf:'center'
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

  lockIcon: {
    position: 'absolute',
    top: 10,
    left: 27,
  },
  eyeIcon: {
    position: 'absolute',
  bottom:15,
    left: '80%',
  },

  forgotTxt: {
    marginLeft: '55%',
    color: COLORS.StormGrey
  },
 


  button: {
    padding: 10,
    borderColor: COLORS.RPPrimaryGreen,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#00A39D',
    marginTop: '10%',
  
    width: "70%"
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





  

  
  







});
export default styles;
