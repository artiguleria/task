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
    justifyContent:'center',
 
  },
  rpLogo: {
    marginTop: '10%',
    marginRight:"10%",
  },
  clientLogo: {
    height: 70,
    width: 120,
    resizeMode: 'contain',
    marginTop: '5%',
    marginLeft:"10%"
  },
  verticleLine: {
    height: '40%',
    width: 2,
    backgroundColor: COLORS.PinkSwan,
    marginTop: '10%',
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
  
    width: "80%",
    alignSelf:'center'
  },
  buttonTxt: {
    textAlign: 'center',
    color: COLORS.white,
  },





  

  
  







});
export default styles;
