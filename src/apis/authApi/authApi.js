import {
  axiosImgInstance,
  axiosInstance,
} from '../axiosInstance/axiosInstance.js';

export const signUp = async (signupData) => {
  const response = await axiosImgInstance.post('auth/signup', signupData);

  return response;
};

export const login = async (loginData) => {
  const response = await axiosInstance.post('auth/login', loginData);
  if (response.status === 200) {
    localStorage.setItem('isLoggedIn', 'true');
  }

  return response;
};

export const checkEmail = async (checkEmailData) => {
  const response = await axiosInstance.post('auth/idcheck', checkEmailData);
  return response;
};

export const logout = async () => {
  localStorage.removeItem('isLoggedIn');

  return true;
};
