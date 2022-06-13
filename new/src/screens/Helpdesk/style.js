import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    alignItems: 'center',
  },

 
  inputView: {
    marginTop: '30%',
    width: '90%',
  },

  input: {
 

    borderRadius: 5,

    width: '90%',
    marginLeft: 20,
    paddingLeft: 40,
    backgroundColor: COLORS.white,
  },

  button: {
    padding: 10,
    borderColor: COLORS.RPPrimaryGreen,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#00A39D',
    marginTop: '10%',

    width: '80%',
  },
  buttonTxt: {
    textAlign: 'center',
    color: COLORS.white,
  },
});
export default styles;
