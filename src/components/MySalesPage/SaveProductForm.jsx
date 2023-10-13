import styled from 'styled-components';
import React from 'react';

const SaveProductForm = ({ products, imageFiles }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const formData = new FormData();
    
    imageFiles.forEach((file, index) => {
      formData.append(`imageFile${index + 1}`, file);
    });
  
  // 저장된 제품의 정보 로깅
  React.useEffect(() => {
    console.log("Saved products:", products);
  }, [products]);

  return (
    <SaveProductContainer onSubmit={handleSubmit}>
      {products && products.map((product, index) => (
        <DisplayDiv key={product.product_id} product={product}>
          <div>노출상품명: {product.product_name}</div>
          <div>상품가격: {product.product_price}</div>
          <div>카테고리: {product.category_name}</div>
          {product.stock_option && product.stock_option.map((option, idx) => (
            <React.Fragment key={idx}>
              <div>상품수량: {option.stock_quantity}</div>
              <div>상품시리즈: {option.stock_size}</div>
              <div>상품색상: {option.stock_color}</div>
            </React.Fragment>
          ))}
        </DisplayDiv>
      ))}
      <Button type="submit">최종등록</Button>
    </SaveProductContainer>
  );
};

export default SaveProductForm;

const DisplayDiv = styled.div`
    margin-bottom: 5;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    padding: 10px;
`;

const SaveProductContainer = styled.form`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 50%;
`;

const Button = styled.button`
    width: 100%;
    padding: 10px 15px;
    border: 1px solid black;
    background-color: #000000;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    align-self: flex-end;
    margin-top: auto;
`;