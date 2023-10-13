import React from 'react';
import styled from 'styled-components';
import PostCodeButton from '../../components/PostCodeButton/PostCodeButton';

const FormAddress = ({ formData, handleInputChange, setFormData }) => {
  const getAdress = (addressData, zoneCodeData) => {
    setFormData({
      ...formData,
      address: addressData,
      addressZipcode: zoneCodeData,
    });
  };
  return (
    <ContainerWrapper>
      <Label htmlFor="address">주소</Label>

      <div>
        <ZipcodeInput
          type="text"
          id="addressZipcode"
          name="addressZipcode"
          value={formData.addressZipcode}
          placeholder="우편번호"
          onChange={handleInputChange}
        />
        <PostCodeButton getAdress={getAdress} />
      </div>

      <Input
        type="text"
        id="address"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
      />
    </ContainerWrapper>
  );
};

export default FormAddress;

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const ZipcodeInput = styled.input`
  width: 100px;
  height: 30px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
`;


