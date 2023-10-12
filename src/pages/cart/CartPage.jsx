import CartPageContent from '../../components/CartPageContent/CartPageContent';
import PageSection from '../../components/PageSection';
import Main from '../../components/ui/Main/Main';

const CartPage = () => {
  return (
    <Main>
      <PageSection titleText="장바구니">
        <CartPageContent />
      </PageSection>
    </Main>
  );
};

export default CartPage;
