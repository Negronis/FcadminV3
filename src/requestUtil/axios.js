"use strict";

import axios from "axios";
import Url from './url.js';
let config = {
  baseURL:  Url
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) { 
    config['token'] = localStorage.getItem("fcToken");
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);
  
export default _axios;
