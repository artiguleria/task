import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';
import { Dimensions } from 'react-native';
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',


    justifyContent: 'center',

    backgroundColor: '#fff',
  },
  personalProfileTxt: {
    color: '#1a1a1a',
    fontWeight: '600',
    fontSize: 20,
  },

  pressed: {
    borderWidth: 0.5,
    borderColor: '#00A39D',
    borderRadius: 5,
    borderWidth: 1,
  },
  pressed2: {
    borderWidth: 0.5,
    borderColor: '#00A39D',
    borderRadius: 5,
    borderWidth: 1,
  },
  unpressed: {},

  inputTxt: {
    color: '#6b778c',
    left: 30,
    top: 30,
  },

  pickerTxt: {color: '#6b778c', 
  left: 30,
},

  input: {
    backgroundColor: COLORS.Azure,
    height: 50,
    borderColor: '#e0e0e0',

    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    borderColor: '#D5D8DC',

    marginTop: '3%',
    margin: 30,
  },

  container2: {
    flex: 1,
    alignSelf: 'stretch',

    // alignItems:"center",
    justifyContent: 'center',

    backgroundColor: '#fff',
    marginTop: 20,
    paddingBottom:100
  },
  paperInput: {
    height: 50,

    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    borderColor: '#D5D8DC',

    marginTop: '3%',
    margin: 30,
  },


 


 

  Dropdown: {
    height: 50,

    backgroundColor: 'red',
    borderRadius: 5,
    marginBottom: 10,
    borderColor: COLORS.Azure,
    borderWidth: 3,
    marginTop: '3%',

    width: '95%',

    zIndex: 1000,
    alignSelf: 'center',
    paddingVertical: 10,
  },
  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  button: {
    padding: 10,
    borderColor: COLORS.RPPrimaryGreen,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#00A39D',
    marginTop: '35%',

    width: '35%',
    alignSelf: 'center',
    bottom: 20,
  },
  buttonTxt: {
    textAlign: 'center',
    color: COLORS.white,
  },
  selected: {
    borderWidth: 1,
    borderColor: '#00A39D',
  },
  unselected: {},




picker1:{
  backgroundColor: 'white',
  height: 50,


  borderWidth: 1,
  borderRadius: 5,
  marginBottom: 10,
  borderColor: 'lightgray',

  marginTop: '3%',
  margin: 35,
  top:30,

},


picker2:{
  backgroundColor: 'white',
  height: 50,


  borderWidth: 1,
  borderRadius: 5,
  marginBottom: 10,
  borderColor: 'lightgray',

  marginTop: '3%',
  margin: 35,
  top:70,

},




picker3:{
  backgroundColor: 'white',
  height: 50,


  borderWidth: 1,
  borderRadius: 5,
  marginBottom: 10,
  borderColor: 'lightgray',

  marginTop: '3%',
  margin: 35,
 marginTop:100

},





picker4:{
  backgroundColor: 'white',
  height: 50,


  borderWidth: 1,
  borderRadius: 5,
  marginBottom: 10,
  borderColor: 'lightgray',

  marginTop: '3%',
  margin: 35,
  top:40,

},


picker5:{
  backgroundColor: 'white',
  height: 50,


  borderWidth: 1,
  borderRadius: 5,
  marginBottom: 10,
  borderColor: 'lightgray',

  marginTop: '3%',
  margin: 35,
  top:60,

},


  // header: {
  //   flexDirection: 'row',
  //   width,.dropdown1BtnTxtStyle
  //   height: 50,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: '#F6F6F6',
  // },
  headerTitle: {color: '#000', fontWeight: 'bold', fontSize: 16},
  saveAreaViewContainer: {flex: 1, backgroundColor: '#FFF'},
  viewContainer: {flex: 1, width, backgroundColor: '#FFF',alignSelf:"center"},
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '10%',
    paddingBottom: '20%',
  },

  dropdown1BtnStyle: {
    width: '85%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'lightgray',
    alignSelf:"center"
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left',fontSize:16},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},

  dropdown2BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#444',
    borderRadius: 8,
  },
  dropdown2BtnTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dropdown2DropdownStyle: {
    backgroundColor: '#444',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  dropdown2RowStyle: {backgroundColor: '#444', borderBottomColor: '#C5C5C5'},
  dropdown2RowTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  dropdown3BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    paddingHorizontal: 0,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#444',
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdown3BtnImage: {width: 45, height: 45, resizeMode: 'cover'},
  dropdown3BtnTxt: {
    color: '#444',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 12,
  },
  dropdown3DropdownStyle: {backgroundColor: 'slategray'},
  dropdown3RowStyle: {
    backgroundColor: 'slategray',
    borderBottomColor: '#444',
    height: 50,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdownRowImage: {width: 45, height: 45, resizeMode: 'cover'},
  dropdown3RowTxt: {
    color: '#F1F1F1',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 12,
  },

  dropdown4BtnStyle: {
    width: '50%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown4BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown4DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown4RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown4RowTxtStyle: {color: '#444', textAlign: 'left'},












});

export default styles;
