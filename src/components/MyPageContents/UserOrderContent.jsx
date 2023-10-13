import { UserEmptyOrderCard } from '../MypageCard';

const UserOrderContent = () => {
  const orderItemData = [];
  if (orderItemData.length === 0) return <UserEmptyOrderCard />;
  return <div>UserOrderContent</div>;
};

export default UserOrderContent;
