import React from 'react';
import styled from 'styled-components';

const FormPhoneNumber = ({ formData, handleInputChange }) => {
  return (
    <ContainerWrapper>
      <label htmlFor="phoneNumber">휴대폰 번호</label>
      <input
        type="text"
        id="telNumber"
        name="telNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
      />
    </ContainerWrapper>
  );
};

export default FormPhoneNumber;

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
`;
