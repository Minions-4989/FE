import React from 'react';
import styled from 'styled-components';

const FormAddressDetail = ({ formData, handleInputChange }) => {
  return (
    <ContainerWrapper>
      <label htmlFor="address">상세 주소</label>
      <input
        type="text"
        id="addressDetail"
        name="addressDetail"
        value={formData.addressDetail}
        onChange={handleInputChange}
      />
    </ContainerWrapper>
  );
};

export default FormAddressDetail;

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
