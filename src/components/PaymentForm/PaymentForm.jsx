import styled from 'styled-components';
import InputLabel from '../ui/InputLabel/InputLabel';
import Wrap from '../ui/Wrap/Wrap';
import { useState } from 'react';
import CardNumberInput from '../ui/CardNumberInput/CardNumberInput';
import usePaymentForm from '../../hooks/usePaymentForm';

const PaymentForm = () => {
  const [isShown, setIsShown] = useState(true);
  const handleAccordionButton = () => {
    setIsShown((prev) => !prev);
  };
  const {
    cardNumberInput,
    paymentInput,
    alertMessage,
    handleCardNumberInputChange,
    handlePaymentInputChange,
    addPaymentInputRef,
    validateEmail,
    validateCvcNumber,
    validateCardNumber,
    validateExpirationDate,
  } = usePaymentForm();
  return (
    <PaymentFormWrap>
      <PaymentFormHeader>
        결제
        <button onClick={handleAccordionButton}>입력하기</button>
      </PaymentFormHeader>
      {isShown && (
        <PaymentFormContent>
          <InputLabel
            label="이메일"
            placeholder="이메일"
            name="email"
            onChange={handlePaymentInputChange}
            ref={(ref) => addPaymentInputRef('email', ref)}
            value={paymentInput.email}
            onBlur={validateEmail}
            alertText={alertMessage.email}
          />
          <CardNumberInput
            handleCardNumberInputChange={handleCardNumberInputChange}
            validateCardNumber={validateCardNumber}
            addPaymentInputRef={addPaymentInputRef}
            cardNumberInput={cardNumberInput}
          />
          <ExpirationInputLabel
            name="expirationDate"
            onChange={handlePaymentInputChange}
            onBlur={validateExpirationDate}
            ref={(ref) => addPaymentInputRef('expirationDate', ref)}
            value={paymentInput.expirationDate}
            label="유효기간"
            placeholder="MM/YY"
            alertText={alertMessage.expirationDate}
          />
          <CvcInputLabel
            name="cvcNumber"
            value={paymentInput.cvcNumber }
            onChange={handlePaymentInputChange}
            onBlur={validateCvcNumber}
            ref={(ref) => addPaymentInputRef('cvcNumber', ref)}
            label="cvc"
            placeholder="CVC"
            alertText={alertMessage.cvcNumber}
          />
        </PaymentFormContent>
      )}
    </PaymentFormWrap>
  );
};

export default PaymentForm;
const PaymentFormWrap = styled(Wrap)`
  display: flex;
  flex-direction: column;
`;
const PaymentFormHeader = styled(Wrap)`
  border: 1px solid #e2e2e2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e2e2e2;
  padding: 20px;
`;

const PaymentFormContent = styled(Wrap)`
  border: 1px solid #e2e2e2;
  padding: 20px;
  border: 1px solid #e2e2e2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  label {
    display: flex;
    gap: 20px;
    span {
      width: 65px;
      text-align: left;
    }
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
const ExpirationInputLabel = styled(InputLabel)`
  text-align: center;
  width: 60px;
`;
const CvcInputLabel = styled(InputLabel)`
  text-align: center;
  width: 50px;
`;
