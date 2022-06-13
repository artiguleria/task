
import {StyleSheet} from 'react-native'
import { COLORS } from '../../../constants/Colors'
const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginTop: "10%",
height: "90%",
   padding: 20,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20
  },
  profileHeaderPicCircle: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    color: 'white',
    backgroundColor: '#95b4b8',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:"center",
    marginTop:20,
  },
  Toptxt:{
    color:"black",
    fontSize:20,
    fontWeight:"bold",
    marginTop:"10%"
  },
  inputTxt:{
marginTop:"10%"
  },
  input: {
    height: 40,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    marginTop:"10%"
  },
 bottomTxt:{
color: '#00A39D'
 },
 button: {
  padding: 10,
  borderColor: COLORS.PattensBlue,
  borderWidth: 1,
  borderRadius: 10,
  backgroundColor: "#00A39D",
  marginTop:"10%",
  // height:"20%",
  // width: "20%"
  marginBottom:"20%",
  width: "50%",
  alignSelf:"center"
},
buttonTxt:{
  color:"white",
  textAlign:'center'
},
btneye1: {
  position: 'absolute',
top:"45%",
  left: 275,
  
  
  },
  btneye2: {
    position: 'absolute',
    top: 37,
    left: 275,
    
    
    },
  });
  
   export default styles;