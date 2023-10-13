import { useRef, useState } from 'react';

const UseDeliveryForm = () => {
  const inputRefs = useRef({});
  const validationMessage = {
    recipient: '수신자를 입력해주세요',
    recipient_tel: '핸드폰 번호를 입력하세요',
    recipient_address: '주소를 입력해주세요',
  };
  const [alertMessage, setAlertMassege] = useState({
    recipient: '',
    recipient_tel: '',
    recipient_address: '',
  });
  const [fullPhoneNumber, setFullPhoneNumber] = useState('');
  const [deliveryInput, setDeliveryInput] = useState({
    recipient: '',
    recipient_tel: '',
    recipient_address: '',
    recipient_zipcode: '',
    recipient_detail_address: '',
  });
  const [phoneInput, setPhoneInput] = useState({
    fristPhoneNumber: '',
    secondPhoneNumber: '',
    thridPhoneNumber: '',
  });

  const handleDelieryInputChange = (event) => {
    const { name, value } = event.target;
    setDeliveryInput({ ...deliveryInput, [name]: value });
  };

  const validateInputValue = (name) => {
    const input = inputRefs.current[name];
    if (input && input.value === '')
      setAlertMassege({ ...alertMessage, [name]: validationMessage[name] });
    else {
      setAlertMassege({ ...alertMessage, [name]: '' });
    }
  };

  const handlePhoneInputChange = (event) => {
    const { name, value } = event.target;
    setPhoneInput((prevPhoneInput) => {
      const updatedPhoneInput = { ...prevPhoneInput, [name]: value };
      const updatedFullPhoneNumber = `${updatedPhoneInput.fristPhoneNumber}-${updatedPhoneInput.secondPhoneNumber}-${updatedPhoneInput.thridPhoneNumber}`;
      setFullPhoneNumber(updatedFullPhoneNumber);
      setDeliveryInput((prevDeliveryInput) => ({
        ...prevDeliveryInput,
        recipient_tel: updatedFullPhoneNumber,
      }));
      return updatedPhoneInput;
    });
  };
  const addRef = (name, ref) => {
    inputRefs.current[name] = ref;
  };
  const getAddress = (recipient_address, recipient_zipcode) => {
    setDeliveryInput({
      ...deliveryInput,
      recipient_address,
      recipient_zipcode,
    });
  };

  return {
    addRef,
    getAddress,
    validateInputValue,
    handleDelieryInputChange,
    handlePhoneInputChange,
    deliveryInput,
    phoneInput,
    alertMessage,
  };
};

export default UseDeliveryForm;
