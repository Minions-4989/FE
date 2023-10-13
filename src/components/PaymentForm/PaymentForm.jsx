import styled from 'styled-components';
import InputLabel from '../ui/InputLabel/InputLabel';
import Wrap from '../ui/Wrap/Wrap';
import { useState } from 'react';

const PaymentForm = () => {
  const [isShown, setIsShown] = useState(true);
  const handleAccordionButton = () => {
    setIsShown((prev) => !prev);
  };
  return (
    <PaymentFormWrap>
      <PaymentFormHeader>
        결제
        <button onClick={handleAccordionButton}>입력하기</button>
      </PaymentFormHeader>
      {isShown && (
        <PaymentFormContent>
          <InputLabel label="이메일" placeholder="이메일" />
          <InputLabel label="카드번호" placeholder="카드번호" />
          <InputLabel label="유효기간" placeholder="유효기간" />
          <InputLabel label="cvc" placeholder="cvc" />
        </PaymentFormContent>
      )}
    </PaymentFormWrap>
  );
};

export default PaymentForm;
const PaymentFormWrap = styled(Wrap)`
  display: flex;
  flex-direction: column;
`
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
  label {
    display: flex;
    gap: 20px;
    div {
      margin-left: 10px;
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
