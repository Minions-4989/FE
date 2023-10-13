import React from 'react';
import styled from 'styled-components';

const FormName = ({ formData, handleInputChange }) => {
  return (
    <ContainerWrapper>
      <label htmlFor="name">이름</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
    </ContainerWrapper>
  );
};

export default FormName;

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
