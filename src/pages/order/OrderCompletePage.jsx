import EmptyStateCard from "../../components/EmptyStateCard/EmptyStateCard";
import PageSection from "../../components/PageSection";
import Main from "../../components/ui/Main/Main";
import OrderIcon from '../../assets/images/order_icon.svg'
const OrderCompletePage = () => {
	return (
    <Main>
      <PageSection titleText="결제완료">
        <EmptyStateCard
          imageSrc={OrderIcon}
          altText="order_complete_icon"
					text="결제가 완료되었습니다."
					linkText='구매 목록으로 가기'
          toPath="/my/purchase"
        />
      </PageSection>
    </Main>
  );
}

export default OrderCompletePage