import axios from "axios";

axios.defaults.baseURL = "https://pokeapi.co/api/v2";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log(error);
  }

  return Promise.reject(error);
});

const methods = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default methods;
