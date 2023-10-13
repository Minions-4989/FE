import styled from 'styled-components';
import { useState } from 'react';
import UseDeliveryForm from '../../hooks/UseDeliveryForm';
import InputLabel from '../ui/InputLabel/InputLabel';
import PhoneInput from '../ui/PhoneInput/PhoneInput';
import AddressInput from '../ui/AddressInput/AddressInput';

const DeliveryForm = () => {
  const [isShown, setIsShown] = useState(true);
  const {
    handleDelieryInputChange,
    handlePhoneInputChange,
    getAddress,
    deliveryInput,
    phoneInput,
    alertMessage,
    addRef,
    validateInputValue,
  } = UseDeliveryForm();

  const handleAccordionButton = () => {
    setIsShown((prev) => !prev);
  };
  return (
    <DeliveryFormWrap>
      <AccordionHeader>
        <div>배송지</div>
        <button onClick={handleAccordionButton}>입력하기</button>
      </AccordionHeader>
      <>
        {isShown && (
          <DeliveryFormContent>
            <InputLabel
              label="수령인"
              placeholder="수령인"
              name="recipient"
              value={deliveryInput.recipient}
              onChange={handleDelieryInputChange}
              ref={(ref) => addRef('recipient', ref)}
              onBlur={() => validateInputValue('recipient')}
              alertText={alertMessage.recipient}
            />
            <PhoneInput
              phoneInput={phoneInput}
              handlePhoneInputChange={handlePhoneInputChange}
              validateInputValue={() => validateInputValue('recipient_tel')}
              ref={(ref) => addRef('recipient_tel', ref)}
              alertMessage={alertMessage.recipient_tel}
            />
            <AddressInput
              deliveryInput={deliveryInput}
              handleDelieryInputChange={handleDelieryInputChange}
              getAddress={getAddress}
            />
          </DeliveryFormContent>
        )}
      </>
    </DeliveryFormWrap>
  );
};

export default DeliveryForm;

const DeliveryFormWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e2e2e2;
  padding: 20px;
`;
const DeliveryFormContent = styled.div`
  padding: 20px;
  border: 1px solid #e2e2e2;
  label {
    display: flex;
    gap: 30px;
    div {
      p {
        margin-top: 10px;
        height: 20px;
        color: #ed5454;
      }
    }
    input {
      height: 30px;
    }
  }
`;
