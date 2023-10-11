import Main from '../../../components/ui/Main/Main';
import SalesUserProfile from '../../../components/MySalesPage/SalesUserProfile';
import PageSectionTitle from '../../../components/MySalesPage/PageSectionTitle';
import * as seller from '../../../components/MySalesPage/salesStyle'
const SalesProductInquiry = () => {
  return (
    <Main>
      <SalesUserProfile 
        ImageUrl="이미지URL"
        name="닉네임"
        email="이메일"/>
    <seller.MySalesPageSection>
     <PageSectionTitle sectiontitle="판매상품조회" sectionsummary="당신이 판매하는 상품을 여기서 조회하세요!" />
     <seller.PageContainer>
      
     </seller.PageContainer>
     </seller.MySalesPageSection>
    </Main>
  )
}

export default SalesProductInquiry
