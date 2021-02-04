import axios from 'axios';
import Url from '@/requestUtil/url.js'; 
let login = (un, psw) => {
   return new Promise((resolve, reject) => {
      axios.get(Url + "/user/login").then(res => {
         if (res.data.code === 0) {
            reject(res);
         }
         resolve(res['data']['data']);
      }).catch(err => {
         reject(err);
      })
   })
}
export default login;