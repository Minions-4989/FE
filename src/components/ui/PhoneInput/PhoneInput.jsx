import styled from 'styled-components';
import Input from '../Input/Input';
import Text from '../Text/Text';
import  { Fragment, forwardRef } from 'react';

const phoneInfo = [
  { name: 'fristPhoneNumber', placeholder: '010' },
  { name: 'secondPhoneNumber', placeholder: '1234' },
  { name: 'thridPhoneNumber', placeholder: '5678' },
];
const PhoneInput = forwardRef(
  (
    { phoneInput, handlePhoneInputChange, validateInputValue, alertMessage },
    ref
  ) => {
    return (
      <label>
        연락처
        <TelWrap>
          <TelInputWrap>
            {phoneInfo.map(({ name, placeholder }, index) => (
              <Fragment key={name}>
                <TelInput
                  placeholder={placeholder}
                  name={name}
                  value={phoneInput[name]}
                  onChange={handlePhoneInputChange}
                  onBlur={validateInputValue}
                  ref={ref}
                />
                {index < phoneInfo.length - 1 && <div>-</div>}
              </Fragment>
            ))}
          </TelInputWrap>
          <Text text={alertMessage} />
        </TelWrap>
      </label>
    );
  }
);

export default PhoneInput;

const TelInput = styled(Input)`
  width: 40px;
  text-align: center;
`;
const TelInputWrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  p {
    height: 20px;
  }
`;
const TelWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  p {
    height: 20px;
  }
`;
