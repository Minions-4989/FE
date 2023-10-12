import axios from 'axios';

const createInstance = (contentType) => {
  const config = {
    baseURL: import.meta.env.VITE_SERVER_API,
    timeout: 3000,
    headers: {
      'Content-Type': contentType,
    },
  };
  const instance = axios.create(config);

  instance.interceptors.request.use((config) => {
    if (
      config.url.includes('member/login') ||
      config.url.includes('member/signup')
    ) {
      const accessToken = document.cookie
        .split('; ')
        .find((row) => row.startsWith('accessToken='))
        .split('=')[1];

      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
    }

    return config;
  });

  return instance;
};

export const axiosInstance = createInstance('application/json');
export const axiosImgInstance = createInstance('multipart/form-data');
