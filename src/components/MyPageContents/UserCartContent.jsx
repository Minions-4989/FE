import T from '../../assets/images/black_t.jpg';
import cartIcon from '../../assets/images/cart_icon.svg';
import Wrap from '../ui/Wrap/Wrap';
import styled from 'styled-components';
import Ul from '../../components/ui/Ul/Ul'
import UnifiedCartCard from '../CartCard/UnifiedCartCard';
import EmptyStateCard from '../EmptyStateCard/EmptyStateCard';

const UserCartContent = () => {
  const userCartData = [
    {
      productId: 1,
      product_name: '티셔츠',
      product_img: T,
      count: 1,
      price: 10000,
      option: 's',
    },
    {
      productId: 2,
      product_name: '티셔츠',
      product_img: T,
      count: 1,
      price: 10000,
      option: 's',
    },
  ];

  if (userCartData.length === 0)
    return (
      <CartList>
        <EmptyStateCard
          imageSrc={cartIcon}
          altText='cart_icon'
          toPath="/"
          text="장바구니에 담은 상품이 없습니다."
          linkText="상품 보러가기"
        />
      </CartList>
    );

  return (
    <CartContent>
      <CartList>
        {userCartData.map((cartDataItem) => (
          <UnifiedCartCard
            border="border"
            key={cartDataItem.productId}
            cartDataItem={cartDataItem}
          />
        ))}
      </CartList>
    </CartContent>
  );
};

export default UserCartContent;

const CartContent = styled(Wrap)`
  display: flex;
  gap: 200px;
`;
const CartList = styled(Ul)`
  width: 100%;
  border: 1px solid #e2e2e2;
  & > :not(:first-child) {
    border-top: 1px solid #ccc;
  }
`;
