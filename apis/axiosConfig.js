import axios from 'axios';

// Set the base URL for Axios requests (optional but useful)
axios.defaults.baseURL = 'https://sea-turtle-app-7ta2e.ondigitalocean.app';

// Function to get the CSRF token from cookies
function getCsrfToken() {
  const cookies = document.cookie.split('; ');
  const csrfCookie = cookies.find(cookie => cookie.startsWith('XSRF-TOKEN='));
  if (csrfCookie) {
    return csrfCookie.split('=')[1];
  }
  return null;
}

// Set up Axios to include CSRF token in headers
axios.interceptors.request.use(config => {
  const csrfToken = getCsrfToken();
  if (csrfToken) {
    config.headers['X-XSRF-TOKEN'] = csrfToken;
  }
  return config;
});

export default axios;
