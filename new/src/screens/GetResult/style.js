import {StyleSheet} from 'react-native';
import { COLORS } from '../../constants/Colors';

const styles = StyleSheet.create({

    container: {
      backgroundColor: COLORS.RPPrimaryGreen,
      flex: 1,
      alignItems: 'center',
    
  
    },
  
    done:{
      color:COLORS.white,
      fontSize:20,
      fontWeight:"600",
      textAlign:'center',
      top:20

    },
    button: {
      padding: 10,
      borderColor: COLORS.RPPrimaryGreen,
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: '#20C3C3',
  bottom:200,
    
      width: "80%",
      alignSelf:'center'
    },
    buttonTxt: {
      textAlign: 'center',
      color: COLORS.white,
    },
  
  
  

});
export default styles;
