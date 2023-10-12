import EmptyStateCard from '../EmptyStateCard/EmptyStateCard';
import SalesIcon from '../../assets/images/sales_product_icon.svg';
const UserSaleItemsContent = () => {
  const salesProductData = [];
  if (salesProductData.length === 0) return (
    <EmptyStateCard
      imageSrc={SalesIcon}
      altText='sales_icon'
      toPath="/my/sales"
      text="판매하는 상품이 없습니다."
      linkText="상품 올리기"
    />
  );
  return <div>안녕</div>;
};

export default UserSaleItemsContent;
