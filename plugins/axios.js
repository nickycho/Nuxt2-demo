import axios from 'axios';

export default ({ $axios, redirect }) => {
  // Set baseURL for API requests
  console.log($axios);

  // Interceptors (optional) for handling request and response errors
  $axios.onError(error => {
    // Handle error
    console.error('Request error:', error);
    return Promise.reject(error);
  });
};