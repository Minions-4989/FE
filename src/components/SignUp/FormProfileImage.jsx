import React, { useState } from 'react';
import styled from 'styled-components';
import DefaultProfile from '../../assets/images/default_profile_img.gif';

const FormProfileImage = ({ setProfileImage }) => {
  const [preview, setPreview] = useState(DefaultProfile);

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setPreview(DefaultProfile);
      return;
    }

    setProfileImage(file);

    const reader = new FileReader();

    reader.onloadend = () => {
      setPreview(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <ContainerWrapper>
      <PreviewImg src={preview} alt="profile preview" />

      <Label htmlFor="profileImage">프로필</Label>

      <Input
        type="file"
        id="profileImage"
        name="profileImage"
        onChange={handleProfileImageChange}
      />
    </ContainerWrapper>
  );
};

export default FormProfileImage;

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; // 너비를 100%로 설정하여 부모 요소의 전체 너비를 차지
`;

const PreviewImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%; // 원형으로 만들기 위해 border-radius를 50%로 설정
  object-fit: cover; // 이미지 비율 유지를 위해 object-fit을 cover로 설정
  margin-bottom: 15px;
`;

const Label = styled.label`
  text-align: center; // 텍스트를 가운데 정렬
  margin-bottom: 15px; // 아래쪽으로 마진 추가

  > input {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
`;

const Input = styled.input`
  align-self: flex-start; // 자신만 왼쪽으로 정렬
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 95%;
`;
