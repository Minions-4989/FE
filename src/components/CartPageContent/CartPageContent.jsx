import CartCard from '../CartCard/CartCard';
import Ul from '../ui/Ul/Ul';
import Wrap from '../ui/Wrap/Wrap';
import T from '../../assets/images/black_t.jpg';
import styled from 'styled-components';
import PurchaseCard from '../PurchaseCard/PurchaseCard';
import { useState } from 'react';
import EmptyStateCard from '../EmptyStateCard/EmptyStateCard';
import CartIcon from '../../assets/images/cart_icon.svg';

const CartPageContent = () => {
  const [totalCount, setTotalCount] = useState();
  const [totalPrice, setTotalPrice] = useState();
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

  if (userCartData.length === 0)
    return (
      <EmptyStateCard
        imageSrc={CartIcon}
        text="장바구니가 비었습니다."
        toPath="/"
        linkText="상품 보러가기"
      />
    );

  return (
    <CartContent>
      <CartList>
        {userCartData.map((cartItemData) => (
          <CartCard
            key={cartItemData.productId}
            cartItemData={cartItemData}
            setTotalCount={setTotalCount}
            setTotalPrice={setTotalPrice}
            border="border"
          />
        ))}
      </CartList>
      <PurchaseCard totalPrice={totalPrice} totalCount={totalCount} />
    </CartContent>
  );
};

export default CartPageContent;

const CartContent = styled(Wrap)`
  display: flex;
  gap: 200px;
`;

const CartList = styled(Ul)`
  width: 100%;
`;
