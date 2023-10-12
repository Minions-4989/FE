import {axiosImgInstance,  
  axiosInstance
} from '../axiosInstance/axiosInstance';

export const signUp = async (signupData) => {
  const response = await axiosImgInstance.post('member/signup', signupData);
  console.log(response.data)
  return response.data;
};

export const login = async (loginData) => {
  const response = await axiosInstance.post('member/login', loginData);
  console.log(response.data);
};
