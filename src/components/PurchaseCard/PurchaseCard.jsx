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

const PurchaseCard = ({ userCartData, totalPrice, totalCount, cartData }) => {
  console.log(totalPrice)
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

    if (name === 'purchase') return navigate('/order', { state: { cartData } });
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
    <PaymentCardWrap margin={isCartPage ? 'marginTop' : ''}>
      <Span text={isCartPage ? '결제정보' : `주문정보`} />
      {isCartPage ? (
        <PaymentInfo labelText="상품수" value={`${totalCount}개`} />
      ) : (
        <Ul>
          {userCartData.product.map((cartDataItem) => (
            <UnifiedCartCard
              key={cartDataItem.productId}
              cartDataItem={cartDataItem}
            />
          ))}
        </Ul>
      )}
      <PaymentInfo labelText="상품금액" value="10000원" />
      <PaymentInfo
        labelText="총 결제금액"
        value={isCartPage ? `${totalPrice}원` : `${userCartData.totalPrice}원`}
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
  margin-top: ${(props) => props.margin === 'marginTop' && '60px'};
  border-radius: 4px;
  padding: 20px;
  width: 40%;
  height: ${(props) => props.margin === 'marginTop' ? '80%': '100%'};
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
