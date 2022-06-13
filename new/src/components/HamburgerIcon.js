// Import React and Component
import React from 'react';
import {View, Image, TouchableOpacity,Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Menu from '../assets/images/icon2/menu.svg'

const HamburgerIcon = props => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>

      
        <Menu  width={30} height={25}
          style={{       width: 30, height: 10, marginLeft: 5,right:10,}}
        />
      </TouchableOpacity>
    </View>
  );
};



export default HamburgerIcon;

































// const NavigationDrawerHeader = (props) => {
//   const toggleDrawer = () => {
//     props.navigationProps.toggleDrawer();
//   };

//   return (
//     // <View style={{flexDirection: 'row'}}>
//     //   <TouchableOpacity onPress={toggleDrawer}>
//     //     <Icon name="chevron-down"
//     //     size={30}
//     //       style={{ marginLeft: 5}}
//     //     />
//     //   </TouchableOpacity>
   
//     //     <Image 
//     //      source={require('../assets/images/client-logo.png')}
//     //       style={{marginLeft: 10,}}
//     //     />
    
//     // </View>
//     <> 
//     <View style={{flexDirection: 'row',flexWrap:"wrap"}}>
//       <View>
//       <TouchableOpacity onPress={toggleDrawer}>
//       <Image
//         source={require('../assets/images/menu.png')}
//         style={{width: 30, height: 30,color:"black",left:10,top:10,right:5}}
//       />
      
//     </TouchableOpacity>
//       </View>
//       <View>
//       <Text style={{left:20,color:"#00a39d",fontWeight:"600",top:10}}    >Helo,Arti</Text>
//       </View>
    
    
    
//   </View>
//   <View>
//         <Text style={{left:45,clor:"#2c4143"}} >Welcome to Resiliency Program</Text>
    
//   </View>
//   </>
 
//   );
// };
// export default NavigationDrawerHeader;
// export {HumBurgerIcon}
