import styled from 'styled-components';
import Wrap from '../ui/Wrap/Wrap';
import Span from '../ui/Span/Span';
import { useLocation, useNavigate } from 'react-router-dom';
import PaymentInfo from './PurchaseInfo';
import UnifiedCartCard from '../CartCard/UnifiedCartCard';
import Ul from '../ui/Ul/Ul';
import { useEffect, useState } from 'react';
import useDeliveryForm from '../../hooks/useDeliveryForm';
import usePaymentForm from '../../hooks/usePaymentForm';
import { useDispatch } from 'react-redux';
import { initialState, setDeliveryInput, setPhoneInput } from '../../store/slices/deliveryFormSlice';
import { initialState as paymentInit  , setCardNumberInput, setPaymentInput } from '../../store/slices/paymentFormSlice';

const PurchaseCard = ({ userCartData, totalPrice, totalCount }) => {
  const pathName = useLocation().pathname;

  const { deliveryInput } = useDeliveryForm();
  const { paymentInput } = usePaymentForm();
  const isCartPage = pathName === '/cart';
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [orderData, setOrderData] = useState({});

  const allValuesEmpty = (obj) => {
    return Object.values(obj).every((value) => value === '');
  };
  const handlePurchaseClick = (event) => {
    const { name } = event.target;

    if (name === 'purchase') return navigate('/order');
    if (name === 'payment') {
      if (!allValuesEmpty(deliveryInput) && !allValuesEmpty(paymentInput)) {
        setOrderData({ ...orderData, ...deliveryInput, ...paymentInput });
        dispatch(setDeliveryInput(initialState.deliveryInput));
        dispatch(setPhoneInput(initialState.phoneInput))
        dispatch(setCardNumberInput(paymentInit.cardNumberInput))
        dispatch(setPaymentInput(paymentInit.paymentInput));
      } else {
        alert('배송지 및 결제를 입력해주세요');
      }
    }
  };


  useEffect(() => {
    if (!allValuesEmpty(orderData)) {
      navigate('/orderComplete');
    }
  }, [orderData]);
  console.log(orderData);
  return (
    <PaymentCardWrap>
      <Span text={isCartPage ? '결제정보' : '주문상품 1개'} />
      {isCartPage ? (
        <PaymentInfo labelText="상품수" value={`${totalCount}개`} />
      ) : (
        <Ul>
          {userCartData.map((cartDataItem) => (
            <UnifiedCartCard
              key={cartDataItem.productId}
              cartDataItem={cartDataItem}
            />
          ))}
        </Ul>
      )}
      <PaymentInfo labelText="상품금액" value='10000원' />
      <PaymentInfo
        labelText="총 결제금액"
        value={`${totalPrice}원`}
        border="borderTop"
      />
      <PurchaseButtonWrap>
        <button
          onClick={handlePurchaseClick}
          name={isCartPage ? 'purchase' : 'payment'}
        >
          {isCartPage ? '구매하기' : '결제하기'}
        </button>
      </PurchaseButtonWrap>
    </PaymentCardWrap>
  );
};

export default PurchaseCard;

const PaymentCardWrap = styled(Wrap)`
  border: 1px solid #000;
  border-radius: 4px;
  padding: 20px;
  width: 40%;
  height: 100%;
  font-size: 18px;
`;

const PurchaseButtonWrap = styled(Wrap)`
  margin-top: 20px;
  button {
    border: 1px solid transparent;
    width: 100%;
    height: 50px;
    color: #fff;
    font-weight: 600;
    background-color: #27262d;
    font-size: 18px;
  }
`;
