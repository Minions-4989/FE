import UserProfileContent from '../../../components/MyPageContents/UserProfileContent';
import PageSection from '../../../components/PageSection';
import UserCartContent from '../../../components/MyPageContents/UserCartContent';
import UserOrderContent from '../../../components/MyPageContents/UserOrderContent';
import UserSaleItemsContent from '../../../components/MyPageContents/UserSaleItemsContent';

const UserInfoPage = () => {
  return (
    <>
      <PageSection titleText="내 정보">
        <UserProfileContent />
      </PageSection>
      <PageSection titleText="장바구니">
        <UserCartContent />
      </PageSection>
      <PageSection titleText="구매 목록">
        <UserOrderContent/>
      </PageSection>
      <PageSection titleText="판매 목록">
        <UserSaleItemsContent/>
      </PageSection>
    </>
  );
};

export default UserInfoPage;
