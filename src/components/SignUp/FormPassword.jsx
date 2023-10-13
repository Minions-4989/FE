import React from 'react';
import styled from 'styled-components';

const FormPassword = ({
  formData,
  handleInputChange,
  passwordError,
  passwordConfirm,
  handlePasswordConfirm,
}) => {
  return (
    <ContainerWrapper>
      <label htmlFor="password">비밀번호</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
      />
      {passwordError && <p>{passwordError}</p>}
      <label htmlFor="passwordConfirm">비밀번호 중복확인</label>
      <input
        type="password"
        id="passwordConfirm"
        name="passwordConfirm"
        value={passwordConfirm}
        onChange={handlePasswordConfirm}
      />
      {formData.password !== passwordConfirm && (
        <p>비밀번호가 일치하지 않습니다.</p>
      )}
    </ContainerWrapper>
  );
};

export default FormPassword;

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    margin-bottom: 10px;
  }

  > input {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  > p {
    color: red;
    margin-bottom: 10px;
    font-size: 12px;
  }
`;
