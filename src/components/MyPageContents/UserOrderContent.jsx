import EmptyStateCard from "../EmptyStateCard/EmptyStateCard";
import OrderIcon from '../../assets/images/order_icon.svg'

const UserOrderContent = () => {
  const orderItemData = [];
  if (orderItemData.length === 0) return (
    <EmptyStateCard
      imageSrc={OrderIcon}
      altText='order_icon'
      toPath="/"
      text="구매한 상품이 없습니다."
      linkText="상품 보러가기"
    />
  );
  return <div>UserOrderContent</div>;
};

export default UserOrderContent;
