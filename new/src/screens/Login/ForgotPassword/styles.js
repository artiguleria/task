import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    alignItems: 'center',
    padding: 5,
    marginTop: '5%',
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
  txtTop1: {
    color: COLORS.Nero,
    fontWeight: 'bold',
    fontSize: 18,
    top: 30,
  },
  txtTop2: {
    color: COLORS.StormGrey,

    top: 35,
  },

  txtInputView: {
    marginTop: '10%',
    width: '90%',
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


  emailIcon: {
    position: 'absolute',
    top: 17,
    left: 27,
  },

  button: {
    padding: 10,
    borderColor: COLORS.PattensBlue,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#00A39D',
    marginTop: '10%',

    width: '80%',
  },

  BottomText1: {
    color: '#6b778c',
  },

  BottomTxt2: {
    color: COLORS.SystemBlue,
    marginRight: '20%',
  },

  BottomTxt3: {
    // marginBottom:"20%",
    color: COLORS.RPPrimaryGreen,
    textAlign: 'center',
    fontSize: 15,
    bottom: 10,
  },
  BackToLoginTxt: {
    color: COLORS.StormGrey,
    top: 10,
  },



  buttonTxt: {
    textAlign: 'center',
    color: COLORS.white,
  },

  backtologinView: {
    marginLeft: '55%',
  },
});
export default styles;
