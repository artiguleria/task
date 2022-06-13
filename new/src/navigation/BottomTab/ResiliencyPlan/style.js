

import {StyleSheet} from 'react-native'
import { COLORS } from '../../../constants/Colors'

 const styles=StyleSheet.create({
    container:{
      flex:1,
      alignItems:"center",
     //  justifyContent:"center"
    },
    txt:{
      fontWeight:"700",
      color:"#006061",
      fontSize:20,
      top:30
 
    },
    dailyLinks: {
     padding: 10,
 borderRadius:10,
    
     borderRadius: 10,
     backgroundColor: "#d4dbda",
     marginTop:"10%",
     // height:"20%",
     // width: "20%"
     marginBottom:"20%",
     width: "45%",
    
   },
   nutrition:{
     padding: 10,
     borderRadius:10,
        
         borderRadius: 10,
         backgroundColor: "#d4dbda",
         marginTop:"10%",
         // height:"20%",
         // width: "20%"
         marginBottom:"20%",
         width: "45%",
         marginLeft:10
   },
 
   Assessment:{
     padding: 10,
     borderRadius:10,
        
         borderRadius: 10,
         backgroundColor: "#006061",
         marginTop:"25%",
       height:55,
         // width: "20%"
         marginBottom:"20%",
         width: "55%",
         marginLeft:10
   },
   AssessmentTxt:{
     color:"#fff",
     textAlign:'center',
     padding: 10
   },
   buttonTxt:{
     color:"#006060",
     textAlign:'center'
   },
 
  })
   export default  styles;