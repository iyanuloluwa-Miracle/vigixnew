import axios from 'axios';

export const createHTTPHeader = authToken => {
  const token = authToken === null ? 'test' : authToken;
  return {
    'content-type': 'application/json',
  };
};

const api = {
  post: (url, body, headers = createHTTPHeader()) => {
    return axios.post(url, body, { headers }).then(response => response.data);
  },
  put: (url, body, headers) => {
    return axios.put(url, body, { headers }).then(response => response.data);
  },
  patch: (url, body, headers) => {
    return axios.patch(url, body, { headers }).then(response => response.data);
  },
  get: (url, headers) => {
    return axios.get(url, { headers }).then(response => response.data);
  },
  delete: (url, body, headers) => {
    return axios
      .delete(url, { data: body }, { headers })
      .then(response => response.data);
  },
};
