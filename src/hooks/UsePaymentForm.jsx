import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAlertMessage, setCardNumberInput, setFullCardNumber, setPaymentInput } from '../store/slices/paymentFormSlice';

const usePaymentForm = () => {
  const inputRefs = useRef({});
  const {paymentInput, alertMessage, cardNumberInput, fullCardNumber } = useSelector((state)=> state.paymentFormData)
  const dispatch = useDispatch()
  const addPaymentInputRef = (name, ref) => {
    inputRefs.current[name] = ref;
  };
  const handlePaymentInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name)
    dispatch(setPaymentInput({ ...paymentInput, [name]: value }));
  };

  const validateEmail = () => {
    const emailRefValue = inputRefs.current['email'].value;
    const checkedEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!checkedEmail.test(emailRefValue)) {
      dispatch(setAlertMessage({
        ...alertMessage,
        email: '올바른 이메일 형식이 아닙니다.',
      }));
    } else {
      dispatch(setAlertMessage({ ...alertMessage, email: '' }));
    }
  };

  const validateCardNumber = () => {
    const checkCardNumber = /^[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
    if (!checkCardNumber.test(fullCardNumber)) {
      dispatch(setAlertMessage({
        ...alertMessage,
        cardNumber: '올바른 카드번호 형식이 아닙니다.',
      }));
    } else {
      dispatch(setAlertMessage({ ...alertMessage, cardNumber: '' }));
    }
  };
  const validateExpirationDate = () => {
    const expirationDateRefValue = inputRefs.current['expirationDate'].value;
		const checkExpirationDate = /^[0-9]{2}\/[0-9]{2}$/;
		
    if (!checkExpirationDate.test(expirationDateRefValue)) {
      dispatch(setAlertMessage({
        ...alertMessage,
        expirationDate: '올바른 유효기간이 아닙니다.',
      }));
    } else {
      dispatch(setAlertMessage({ ...alertMessage, expirationDate: '' }));
    }
  };

  const validateCvcNumber = () => {
    const cvcNumberRefValue = inputRefs.current['cvcNumber'].value;
    const checkCvcNumber = /^[0-9]{3}/;
    if (!checkCvcNumber.test(cvcNumberRefValue)) {
      dispatch(setAlertMessage({
        ...alertMessage,
        cvcNumber: '올바른 cvc번호가 아닙니다.',
      }));
    } else {
      dispatch(setAlertMessage({ ...alertMessage, cvcNumber: '' }));
    }
  };
  const handleCardNumberInputChange = (event) => {
    const { name, value } = event.target;
    if (/[^0-9]/.test(value)) {
      return;
    }
    console.log(name)
    const updatedCardNumberInput = { ...cardNumberInput, [name]: value };
    const updatedCardNumber = `${updatedCardNumberInput.firstCardNumber}-${updatedCardNumberInput.secondCardNumber}-${updatedCardNumberInput.thirdCardNumber}-${updatedCardNumberInput.fourthCardNumber}`;
    dispatch(setFullCardNumber(updatedCardNumber));
    dispatch(setPaymentInput({ cardNumber: updatedCardNumber }));
    dispatch(setCardNumberInput(updatedCardNumberInput))
  };

  return {
    cardNumberInput,
    paymentInput,
    alertMessage,
    handleCardNumberInputChange,
		handlePaymentInputChange,
		addPaymentInputRef ,
    validateEmail,
		validateCvcNumber,
    validateCardNumber,
		validateExpirationDate,
  };
};

export default usePaymentForm;
