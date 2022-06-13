import Axios from "axios";
import { stringify } from "qs";
// import "./utility";
// import "./localStorageService";
import store from "../store";
import {API_URL} from '@env';;



const CreateAxios = () => {
  const axios = Axios.create();
  axios.defaults.baseURL =`${API_URL}`;

  axios.defaults.headers.common["Content-Type"] = "application/json";


  axios.defaults.withCredentials = true;
  axios.defaults.headers.common["subdomain"] = 'localhost:3000';

  axios.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      // if (response.data.code === window.$constants.STATUS.UNAUTHORIZED) {
      //   if (store.getState().user?.token) {
      //     window.location.href = "/login";
      //     window.$storageService.logoutUser();
      //   }
      // }
      return response;
    },
    (error) => {
      console.log(error);
      if (error && error.response) {
        if (error.response.data) {
          return Promise.reject(error.response.data);
        }
      }
      return Promise.reject(error);
    }
  );
  return axios;
};

const api = CreateAxios();

const service = {
  getHeaders() {
    return {
      "Content-Type": "application/json",
      token: `${store.getState().auth?.token}`,
    
    };
    
  },

  // post services
  async postWithoutHeaders(route, body, loading = true) {
    const { data } = await api.post(route, body);
    return data;
  },

  async postWithHeaders(route, body, loading = true) {
    const headers = this.getHeaders();
   
    const { data } = await api.post(route, body, {
      headers,
    });
    return data;
    
  },





  async rawPost(route, loading = true) {
    const headers = this.getHeaders();
    const { data } = await api.post(route, {
      headers,
    });

    return data;
  },

  //get services
  async getWithoutHeaders(route, loading = true) {
    const { data } = await api.get(route);
    return data;
  },

  async get(route, query = {}, loading = true) {
    const { data } = await api.get(`${route}?${stringify(query)}`);
    return data;
  },

  async getWithHeaders(route, loading = true) {
    const headers = this.getHeaders();

    const { data } = await api.get(`${route}`, {
      headers,
      
    });
    // console.log("../////////////////////////////    "+ JSON.stringify(headers))
    return data;

  },

  async getById(route, id, loading = true) {
    const headers = this.getHeaders();
    const { data } = await api.get(`${route}/${id}`, {
      headers,
    });
    return data;
  },

  // put services
  async update(route, query = {}, body) {
    const headers = this.getHeaders();
    const { data } = await api.put(`${route}?${stringify(query)}`, body, {
      headers,
    });
    return data;
  },

  async putWithoutHeaders(path) {
    const { data } = await api.put(path);
    return data;
  },

  async put(path) {
    const headers = this.getHeaders();
    const { data } = await api.put(path, {
      headers,
    });
    return data.object;
  },

  async updateById(route, id, body) {
    const headers = this.getHeaders();
    const { data } = await api.put(`${route}/${id}`, body, {
      headers,
    });
    return data.object;
  },

  async updateOrCreate(route, body) {
    const headers = this.getHeaders();

    let response;

    if (body.id) {
      response = await this.updateById(route, body.id, body, {
        headers,
      });
    } else {
      response = await this.rawPost(route, body, {
        headers,
      });
    }
    return response;
  },

  // patch services
  async patch(route, body) {
    const headers = this.getHeaders();
    const { data } = await api.patch(`${route}`, body, {
      headers,
    });
    return data.object;
  },

  // delete services
  async delete(route, id) {
    const headers = this.getHeaders();
    return api.delete(`${route}/${id}`, {
      headers,
    });
  },

  async logoutUser(route) {
    const headers = this.getHeaders();
    document.getElementById("id01");
    return api.get(`${route}`, {
      headers,
    });
  },

  test() {
    console.log("http service is working fine.");
  },
};

window.$http = service;

export default service;
