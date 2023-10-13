import styled from 'styled-components';
import Input from '../Input/Input';
import PostCodeButton from '../../PostCodeButton/PostCodeButton';
import Text from '../Text/Text';

const addressInfo = [
  { name: 'recipient_zipcode', placeholder: '우편번호' },
  { name: 'recipient_address', placeholder: '주소' },
  { name: 'recipient_detail_address', placeholder: '상세주소' },
];

const AddressInput = ({
  deliveryInput,
  handleDelieryInputChange,
  getAddress,
}) => {
 
  return (
    <label>
      배송지
      <div>
        {addressInfo.map(({ name, placeholder }) => (
          <div key={name}>
            <AdrressInfoInput
              width={name}
              name={name}
              placeholder={placeholder}
              value={deliveryInput[name]}
              onChange={handleDelieryInputChange}
            />
            {name === 'recipient_zipcode' && (
              <PostCodeButton getAdress={getAddress} />
            )}
          </div>
        ))}
        <Text />
      </div>
    </label>
  );
};

export default AddressInput;

const AdrressInfoInput = styled(Input)`
  width: ${(props) => (props.width === 'recipient_zipcode' ? '80px' : '350px')};
  margin-bottom: 10px;
`;
