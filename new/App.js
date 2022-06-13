import React from 'react';
import { View, Text } from 'react-native';

const App = () => {

  const names=['Arti' , 'Rahul' ,'Pervinder',  'Nisha'  ,'Misha']
  return (
    <View style={{flex:1,alignItems:'center'}}>
      <Text>Hello React-Native</Text>
     
      {names.map((item,i)=>
        <Text  key={i}>{item}</Text>

      )}
    </View>
  );
}

export default App;










// import React from 'react';
// import { View, Text } from 'react-native';
// import AppStack from './src/navigation/Appstack/AppStack';
// import { Provider } from 'react-redux';
// import store from './src/store';

// const App = () => {
//   return (
//     <Provider store={store}>
//   <AppStack/>

//   </Provider>
//   );
// }

// export default App;








































