import {StyleSheet} from 'react-native';
import { COLORS } from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,

    top:25, 
 alignItems:'center',
 padding:5,
  },

  logoView: {
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:"center",

 
  },
  rpLogo: {
 left:20,
 top:20
  },
  clientLogo: {
    height: 70,
    width: 120,
    resizeMode: 'contain',
    right:20,
    top:20

  },
  verticleLine: {
    height: '50%',
    width: 2,
    backgroundColor: COLORS.PinkSwan,
    top:20
  
  },



  welcomTxt: {
    color: COLORS.Nero,
    fontWeight: 'bold',
    fontSize: 18,
    top:30,




  },
  yourEmployerTxt: {
    color:COLORS.StormGrey,
  
    top:35,

  },

  txtInput1View: {
    marginTop: '10%',
     width: "90%"
  },


  input: {
    // height: 40,
    borderColor: '#D5D8DC',
    borderWidth: 1,
    borderRadius: 10,
    // marginBottom: 15,
    // paddingHorizontal: 10,
    width: '90%',
    marginLeft: 20,
    paddingLeft: 40,
    backgroundColor: COLORS.white,
  },
  Wronginput:{
    // height: 40,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    // marginBottom: 15,
    // paddingHorizontal: 10,
    width: '90%',
    marginLeft: 20,
    paddingLeft: 40,
    backgroundColor: COLORS.white,

  },









  BottomText1:{
    bottom:35
 
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
    borderColor: COLORS.PattensBlue,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#00A39D',
    marginTop: '10%',
  
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
    
    left:40,
   fontSize:13,
   bottom: 3


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
