import Main from '../../components/ui/Main/Main';
import PageSection from '../../components/PageSection/index';
import styled from 'styled-components';
import Wrap from '../../components/ui/Wrap/Wrap';
import OrderPageContent from '../../components/OrderPageContent/OrderPageContent';
const OrderPage = () => {
  return (
    <Main>
      <PageSection titleText="주문하기">
        <OrderContent>
          <OrderPageContent />
        </OrderContent>
      </PageSection>
    </Main>
  );
};

export default OrderPage;

const OrderContent = styled(Wrap)`
  display: flex;
  gap: 70px;
`;
