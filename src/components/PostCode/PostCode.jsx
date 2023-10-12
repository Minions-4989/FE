import styled from 'styled-components';
import { useDaumPostcodePopup } from 'react-daum-postcode';

const PostCode = ({ getAdressData, getPostCodeData }) => {
  const open = useDaumPostcodePopup();

  const handleComplete = (data) => {
    console.log(data);
    let fullAddress = data.address;
    const zonecode = data.zonecode;
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

    getAdressData(fullAddress);
    getPostCodeData(zonecode);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <AddressButton type="button" onClick={handleClick}>
      주소 찾기
    </AddressButton>
  );
};

const AddressButton = styled.button`
  margin-left: 10px;
  border: 1px solid transparent;
  width: 120px;
  height: 30px;
  cursor: pointer;

  &:active {
    opacity: 0.3;
  }
`;

export default PostCode;
