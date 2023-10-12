import styled from 'styled-components';
import { useState } from 'react';
import useDeliveryForm from '../../hooks/useDeliveryForm';
import InputLabel from '../ui/InputLabel/InputLabel';
import PhoneInput from '../ui/PhoneInput/PhoneInput';
import AddressInput from '../ui/AddressInput/AddressInput';

const DeliveryForm = () => {
  const [isShown, setIsShown] = useState(true);
  const {
    addRef,
    getAddress,
    validateAddress,
    validatePhoneNumber,
    validateUserName,
    handleDeliveryInputChange,
    handlePhoneInputChange,
    deliveryInput,
    alertMessage,
    phoneInput,
  } = useDeliveryForm();

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
              onChange={handleDeliveryInputChange}
              ref={(ref) => addRef('recipient', ref)}
              onBlur={validateUserName}
              alertText={alertMessage.recipient}
            />
            <PhoneInput
              phoneInput={phoneInput}
              handlePhoneInputChange={handlePhoneInputChange}
              validatePhoneNumber={validatePhoneNumber}
              addRef={addRef}
              alertMessage={alertMessage.recipient_tel}
            />
            <AddressInput
              deliveryInput={deliveryInput}
              handleDelieryInputChange={handleDeliveryInputChange}
              getAddress={getAddress}
              addRef={addRef}
              validateAddress={validateAddress}
              alertMessage={alertMessage.recipient_address}
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
    gap: 48px;
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
