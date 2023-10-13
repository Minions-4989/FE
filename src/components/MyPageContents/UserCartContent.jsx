import UserCartCard from '../MypageCard/UserCartCard/UserCartCard';
import T from '../../assets/images/black_t.jpg';
import cartIcon from '../../assets/images/cart_icon.svg';
import EmptyDataCard from '../MypageCard/EmptyDataCard';
import Wrap from '../ui/Wrap/Wrap';
import styled from 'styled-components';
import MyPageList from '../MyPageList/MyPageList';
import PaymentCard from '../P/PaymentCard';
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
  ];

  if (userCartData.length === 0)
    return (
      <EmptyDataCard
        imageSrc={cartIcon}
        toPath="/"
        text="장바구니에 담은 상품이 없습니다."
        linkText="상품 보러가기"
      />
    );

  return (
    <CartContent>
      <CartList>
        {userCartData.map((cartDataItem) => (
          <UserCartCard
            border="border"
            key={cartDataItem.productId}
            cartDataItem={cartDataItem}
          />
        ))}
      </CartList>
      <PaymentCard />
    </CartContent>
  );
};

export default UserCartContent;

const CartContent = styled(Wrap)`
  display: flex;
  gap: 200px;
`;
const CartList = styled(MyPageList)`
  width: 100%;
`;
