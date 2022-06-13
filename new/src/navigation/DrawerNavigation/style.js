
import {StyleSheet} from 'react-native'
import { COLORS } from '../../constants/Colors'

const styles = StyleSheet.create({
    profileHeaderLine: {
      height: 1,
      // marginHorizontal: 20,
      backgroundColor: '#af002a',
  
      marginTop: 3,
      width: '300%',
    },
    headerLeft: {
      width: 40,
      height: 40,
      borderRadius: 40 / 2,
      color: 'white',
      backgroundColor: '#006061',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
  
      // alignSelf:"center",
  
    },
    headerLeftView: {
      flexDirection: 'row',
      alignItems: 'center',
      left:5,
    },
    headerLeftTxt: {
      fontSize: 22,
      color: 'white',
      textAlign: 'center',
    },
    headerLeftTxt2: {
      color: '#00a39d',
      fontWeight: '700',
      fontSize: 18,
      bottom: 10,
      left: 10,
    },
    WelcomeView: {
      right: 65,
      top: 10,
      color: '#2c4143',
      fontSize: 12,
      flexWrap: 'wrap',
    },
    headerRight: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerRightImage: {
      height: 60,
      width: 90,
      resizeMode: 'contain',
  
      marginLeft: '10%',
    },
  });
  
  
   export default styles;