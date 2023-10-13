import React from 'react';
import styled from 'styled-components';
import PostCodeButton from '../../components/PostCodeButton/PostCodeButton';

const FormAddress = ({ formData, handleInputChange }) => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    handleInputChange({
      target: {
        name: 'address',
        value: fullAddress,
      },
    });
  };

  return (
    <ContainerWrapper>
      <Label htmlFor="address">주소</Label>

      <PostCodeButton getAdress={handleComplete} />

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
