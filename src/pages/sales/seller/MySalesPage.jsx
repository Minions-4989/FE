import styled from 'styled-components';
import { useState } from 'react';
import Main from '../../../components/ui/Main/Main';
import ProductImageForm from '../../../components/MySalesPage/ProductImageForm';
import ProductInputForm from '../../../components/MySalesPage/ProductInputForm';
import SalesUserProfile from '../../../components/MySalesPage/SalesUserProfile';
import SaveProductForm from '../../../components/MySalesPage/SaveProductForm';
import PageSectionTitle from '../../../components/MySalesPage/PageSectionTitle';

const MySalesPage = () => {
  const initialState = {
    product_id: '',
    product_name: '',
    category_name: '',
    product_price: '',
    stock_quantity: '',
    stock_size: '',
    stock_color: '',
    product_image: '',
  };

  const [product, setProduct] = useState(initialState);
  const [savedProducts, setSavedProducts] = useState([]);
  const [imagePreviewUrl, setImagePreviewUrl] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);

  //--------------------------------------------------------------------------

  
//----------------------------------------------------------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (productData) => {
    if (savedProducts.length >= 5) {
      alert('최대 5개의 제품만 저장할 수 있습니다.');
      return;
    }

    const newData = {
      product_image: imagePreviewUrl, // 이미지 주소
      product_name: productData.product_name,
      category_name: productData.category_name,
      product_price: parseInt(productData.product_price), // 문자열을 숫자로 변환
      stock_option: [
          {
              stock_quantity: parseInt(productData.stock_quantity), // 문자열을 숫자로 변환
              stock_size: productData.stock_size,
              stock_color: productData.stock_color
          }
      ]
  };

    const existingProductIndex = savedProducts.findIndex(p => 
        p.product_name === newData.product_name &&
        p.category_name === newData.category_name &&
        p.product_price === newData.product_price &&
        p.product_image === newData.product_image
    );

    if (existingProductIndex > -1) {
        // 상품의 기본 정보가 동일한 경우
        const updatedProducts = [...savedProducts];
        updatedProducts[existingProductIndex].stock_option.push(...newData.stock_option);
        setSavedProducts(updatedProducts);
    } else {
        // 새로운 상품 정보인 경우
        setSavedProducts(prev => [...prev, newData]);
    }

    setProduct(initialState);
};

  const handleCancel = (event) => {
    event.preventDefault();
    setProduct(initialState);
  };

  return (
    <Main>
      {/* 최상단 프로필 박스 */}
      <SalesUserProfile
        profileImageUrl="이미지URL"
        name="닉네임"
        email="이메일"
      />
      <MySalesPageSection>
        
        {/* 물품 등록하기 */}
        {/* 페이지 타이틀 박스 */}
        <PageSectionTitle sectiontitle="판매상품등록" sectionsummary="당신이 판매하는 상품을 여기서 등록하세요!"/>
      
        <PageContainer>
          {/* 타이틀 박스 아래 전체 div */}
          <ProductImageForm
               imagePreviewUrl={imagePreviewUrl} 
               setImagePreviewUrl={setImagePreviewUrl}
               setImageFiles={setImageFiles}
          />
          <ProductInputForm
            product={product}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            imagePreviewUrl={imagePreviewUrl}
          />
          <SaveProductForm products={savedProducts} imageFiles={imageFiles} setSavedProducts={setSavedProducts} />
          {/* 여러 제품 데이터를 props로 전달 */}
        </PageContainer>
        {/* 타이틀 박스 아래 전체 div */}
      </MySalesPageSection>
      {/* 물품 등록하기 */}
    </Main>
  );
};

export default MySalesPage;

const MySalesPageSection = styled.div`
  max-width: 1920px;
  max-height: 1000px;
  padding: 20px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
`;

const PageContainer = styled.div`
  display: flex;
  border-radius: 10px;
  padding: 10px;
  max-width: 1920px;
  max-height: 1000px;
`;