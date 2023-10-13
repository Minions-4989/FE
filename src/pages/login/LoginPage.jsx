import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { login } from '../../apis/authApi/authApi';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await login({ email, password });
      navigate('/');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <ContainerWrapper>
      <div className="login-wrapper">
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    </ContainerWrapper>
  );
};

export default LoginForm;

const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .login-wrapper {
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    > h2 {
      text-align: center;
      margin-bottom: 40px;
      font-weight: bold;
      font-size: 20px;
    }
    > form {
      display: flex;
      flex-direction: column;
      > label {
        font-size: 13px;
        margin-bottom: 10px;
      }
      > input {
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
      > button {
        background-color: black;
        color: #fff;
        padding: 10px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        transition: background-color 0.3s;
        &:hover {
          background-color: #0056b3;
        }
      }
    }
  }
`;
