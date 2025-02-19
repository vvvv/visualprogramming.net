import en from '@vueform/vueform/locales/en'
import theme from '@vueform/vueform/dist/vueform'
import { defineConfig } from '@vueform/vueform'
import axios from 'axios'

// axios.defaults.headers.post = {
//   'Content-Type': 'multipart/form-data'
// }

// const axiosInstance = axios.create({
//   validateStatus: function (status) {
//     return status < 500; // Treat only status codes >= 500 as errors
//   },
// });

axios.defaults.validateStatus = function () {
  return true;
};

export default defineConfig({
  theme: theme,
  classHelpers: true,
  locales: { en },
  locale: 'en',
  axios
})