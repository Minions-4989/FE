import React, { useState } from 'react';
import styled from 'styled-components';
import { checkEmail } from '../../apis/authApi/authApi';

const FormEmail = ({ handleInputChange, formData }) => {
  const [emailConfirm, setEmailConfirm] = useState('');
  const idValidation = async (e) => {
    e.preventDefault();

    try {
      const response = await checkEmail({ email: formData.email });
      if (!response.data.Check) {
        setEmailConfirm('사용 가능한 이메일 입니다.');
      } else {
        setEmailConfirm('중복된 이메일 입니다.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ContainerWrapper>
      <label htmlFor="email">이메일</label>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <button onClick={(e) => idValidation(e)}>중복확인</button>
      </div>
      <p>{emailConfirm}</p>
    </ContainerWrapper>
  );
};

export default FormEmail;

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    margin-bottom: 10px;
  }

  > div {
    display: flex;
    justify-content: space-between;

    > input {
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 3px;
      width: 75%;
      margin-right: 10px;
    }

    > button {
      background-color: black;
      color: #fff;
      padding: 10px;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      transition: background-color 0.3s;
      font-size: 12px;
      height: 38px;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;
