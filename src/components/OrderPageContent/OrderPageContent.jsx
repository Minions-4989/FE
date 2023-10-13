import DeliveryForm from '../DeliveryForm/DeliveryForm';
import PurchaseCard from '../PurchaseCard/PurchaseCard';
import PaymentForm from '../PaymentForm/PaymentForm';
import T from '../../assets/images/black_t.jpg';
import styled from 'styled-components';
import Wrap from '../ui/Wrap/Wrap';

const OrderPageContent = () => {
  const userCartData = [
    {
      productId: 1,
      product_name: '티셔츠',
      product_img: T,
      count: 1,
      price: 10000,
      option: 's',
    },
  ];
  return (
    <>
      <FormWrap>
        <DeliveryForm />
        <PaymentForm />
      </FormWrap>
      <PurchaseCard userCartData={userCartData} />
    </>
  );
};

export default OrderPageContent;

const FormWrap = styled(Wrap)`
  width: 76%;
`;