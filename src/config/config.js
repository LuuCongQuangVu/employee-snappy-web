const prod = process.env.NODE_ENV === 'production';
const api_url = process.env.REACT_APP_BASE_URL;

const config = {
  routes: {
    login: '/login',
    register: '/register',
    home: '/',
    employee: '/employee',
  },
  env: {
    api_url: prod ? api_url : 'http://localhost:8000',
  },
};

const API_URL = config.env.api_url;

export default config;

export { API_URL };
