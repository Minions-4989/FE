import { useDaumPostcodePopup } from 'react-daum-postcode';

const PostCodeButton = ({ getAdress}) => {
  const open = useDaumPostcodePopup();

  const handleComplete = (data) => {
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

    getAdress(fullAddress, zonecode);
  
  };
  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{
        marginLeft: '10px',
        border: '1px solid transparent',
        width: '90px',
        height: '30px',
      }}
    >
      우편번호
    </button>
  );
};

export default PostCodeButton;
