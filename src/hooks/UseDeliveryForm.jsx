import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAlertMessage,
  setDeliveryInput,
  setFullPhoneNumber,
  setPhoneInput,
} from '../store/slices/deliveryFormSlice';

const UseDeliveryForm = () => {
  const { deliveryInput, alertMessage, phoneInput, fullPhoneNumber } =
    useSelector((state) => state.deliveryFormData );
  const dispatch = useDispatch();
  const inputRefs = useRef({});

  const handleDeliveryInputChange = (event) => {
    const { name, value } = event.target;
    dispatch(setDeliveryInput({ [name]: value }));
  };
  const validateUserName = () => {
    const userName = inputRefs.current['recipient'].value;
    const invalidUserName = userName === '' && userName.trim() === '';
    if (invalidUserName) {
      dispatch(
        setAlertMessage({
          ...alertMessage,
          recipient: '이름을 올바르게 작성해주세요',
        })
      );
    } else {
      dispatch(setAlertMessage({ ...alertMessage, recipient: '' }));
    }
  };

  const validateAddress = () => {
    const zipCode = inputRefs.current['recipient_zipcode'].value;
    const address = inputRefs.current['recipient_address'].value.trim();
    const detailAddress =
      inputRefs.current['recipient_detail_address'].value.trim();

    const invalidZipCode = !/^[0-9]{5}$/.test(zipCode); // 정확히 3개의 숫자인지 확인
    const invalidAddress = !address;
    const invalidDetailAddress = !detailAddress;

    if (invalidZipCode || invalidAddress || invalidDetailAddress) {
      dispatch(
        setAlertMessage({
          ...alertMessage,
          recipient_address: '올바른 주소를 입력해주세요',
        })
      );
    } else {
      dispatch(
        setAlertMessage({
          ...alertMessage,
          recipient_address: '',
        })
      );
    }
  };

  const validatePhoneNumber = () => {
    const koreanPhoneNumberRegex = /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/;
    if (!koreanPhoneNumberRegex.test(fullPhoneNumber)) {
      dispatch(
        setAlertMessage({
          ...alertMessage,
          recipient_tel: '핸드폰 번호가 유효하지 않습니다',
        })
      );
    } else {
      dispatch(setAlertMessage({ ...alertMessage, recipient_tel: '' }));
    }
  };

  const handlePhoneInputChange = (event) => {
    const { name, value } = event.target;

    if (/[^0-9]/.test(value)) {
      return;
    }
    const updatedPhoneInput = { ...phoneInput, [name]: value };
    const updatedFullPhoneNumber = `${updatedPhoneInput.firstPhoneNumber}-${updatedPhoneInput.secondPhoneNumber}-${updatedPhoneInput.thirdPhoneNumber}`;

    dispatch(setFullPhoneNumber(updatedFullPhoneNumber));
    dispatch(setDeliveryInput({ recipient_tel: updatedFullPhoneNumber }));
    dispatch(setPhoneInput(updatedPhoneInput));
  };
  const addRef = (name, ref) => {
    inputRefs.current[name] = ref;
  };
  const getAddress = (recipient_address, recipient_zipcode) => {
    dispatch(
      setDeliveryInput({
        ...deliveryInput,
        recipient_address,
        recipient_zipcode,
      })
    );
  };

  return {
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
  };
};

export default UseDeliveryForm;
