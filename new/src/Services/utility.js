import AsyncStorage from '@react-native-community/async-storage';
import '../../config'



const Utility = {
    getSubDomain() {
      var subdomain = "qa-iradar";
      const parsedData = window.location.host.split(".");
  
      if (parsedData.length >= 3) {
        subdomain = parsedData[0];
      } else {
        subdomain = parsedData[0];
      }
      return subdomain;
    },
    logoutUser() {
      AsyncStorage.clear();
    },
  
    clearStorageData() {
      AsyncStorage.clear();
    },
  
    getCmpTypeMsg(rp_gbl_company_type_id, keyValue) {
      var data = global.messageData;
      var msg = "";
      if (data[keyValue]) {
        if (data[keyValue][rp_gbl_company_type_id]) {
          msg = data[keyValue][rp_gbl_company_type_id];
        } else {
          msg = data[keyValue][1];
        }
      }
      return msg;
    },
  
    getInitials(name) {
      if (name) {
        let initials = name.split(" ");
  
        if (initials.length > 1) {
          initials = initials.shift().charAt(0) + initials.pop().charAt(0);
        } else {
          initials = name.substring(0, 1);
        }
  
        return initials.toUpperCase();
      } else {
        return;
      }
    },
  
    async getCountryOptions() {
      try {
        const result = await window.$http.getWithHeaders("country");
        if (result.code === 200) {
          return result.data;
        } else {
          console.log("Something went wrong!");
        }
      } catch (error) {
        console.log(error);
      }
    },
  
    async getGroupOptions() {
      try {
        const result = await window.$http.getWithHeaders("groups");
        if (result.code === 200) {
          return result.data;
        } else {
          console.log("Something went wrong!");
        }
      } catch (error) {
        console.log(error);
      }
    },
  
    async getLocationOptions() {
      try {
        const result = await window.$http.getWithHeaders("locations");
        if (result.code === 200) {
          return result.data;
        } else {
          console.log("Something went wrong!");
        }
      } catch (error) {
        console.log(error);
      }
    },
  };
  
  window.$utility = Utility;
  
  export default Utility;