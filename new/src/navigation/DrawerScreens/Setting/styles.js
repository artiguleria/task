
import {StyleSheet} from 'react-native'
import { COLORS } from '../../../constants/Colors'
const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginTop: "5%",
    padding: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
    paddingBottom:133,

    flex:1
  },
  Toptxt:{
    color:"#1a1a1a",
    fontSize:25,
    fontWeight:"bold",
    marginTop:"10%"
  },
  inputTxt:{
marginTop:"10%",
color:"#2c4143",fontSize:15
  },
  input: {
    height: 55,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    marginTop:"10%",
    color:"#212529",
    backgroundColor: '#fff'
  },


  wrongInput:{
    height: 55,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    marginTop:"10%",
    color:"#212529",
    backgroundColor: '#fff'

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
  width: "75%",
 
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
    top: 45,
    left: 275,
    
    
    },
  });
  
   export default styles;