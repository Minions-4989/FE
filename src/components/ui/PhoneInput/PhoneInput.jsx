import styled from 'styled-components';
import Input from '../Input/Input';
import Text from '../Text/Text';
import Wrap from '../Wrap/Wrap'
import { Fragment } from 'react';

const phoneInfo = [
  { name: 'firstPhoneNumber', placeholder: '010' },
  { name: 'secondPhoneNumber', placeholder: '1234' },
  { name: 'thirdPhoneNumber', placeholder: '5678' },
];
const PhoneInput = ({
  phoneInput,
  handlePhoneInputChange,
  validatePhoneNumber,
  alertMessage,
  addRef,
}) => {
  return (
    <label>
      연락처
      <TelWrap>
        <Wrap>
          <TelInputWrap>
            {phoneInfo.map(({ name, placeholder }, index) => (
              <Fragment key={name}>
                <TelInput
                  placeholder={placeholder}
                  name={name}
                  value={phoneInput[name]}
                  onChange={handlePhoneInputChange}
                  onBlur={validatePhoneNumber}
                  ref={(ref) => addRef(name, ref)}
                />
                {index < phoneInfo.length - 1 && <div>-</div>}
              </Fragment>
            ))}
          </TelInputWrap>
          <Text text={alertMessage} />
        </Wrap>
      </TelWrap>
    </label>
  );
};

export default PhoneInput;

const TelInput = styled(Input)`
  width: 40px;
  text-align: center;
`;
const TelInputWrap = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;

`;
const TelWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  p {
    height: 20px;
  }
`;
