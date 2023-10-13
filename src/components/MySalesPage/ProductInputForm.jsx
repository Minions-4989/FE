// import { useState, useEffect } from 'react';
import styled from 'styled-components';
// import axios from 'axios';

const ProductInputForm = ({
  product,
  handleChange,
  handleSubmit,
  handleCancel,
  imagePreviewUrl,
}) => {
  const dummyCategories = ["카테고리1", "카테고리2","카테고리3","카테고리4","카테고리5"];// 임시 나중에 지울거임 

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // 모든 필드가 채워졌는지 확인

    if (
      product.product_name.trim() === '' ||
      product.category_name.trim() === '' ||
      product.product_price.trim() === '' ||
      product.stock_quantity.trim() === '' ||
      product.stock_size.trim() === '' ||
      product.stock_color.trim() === ''
    ) {
      alert('작성되지 않은 텍스트가 있습니다');
      return; // early return
    } 
    
     // 이미지의 수를 확인
     if (imagePreviewUrl.length < 1) {
      alert('1개 이상의 이미지를 불러와주세요.');
      return; // early return
    }

      const newProduct = {
        ...product,
      };

      handleSubmit(newProduct);
    };
  
  return (
    <InputForm onSubmit={handleFormSubmit}>
      <InputTitle>
        <h2>노출상품명</h2>
        <Input
          name="product_name"
          value={product.product_name}
          onChange={handleChange}
          placeholder="물품 이름"
        />
      </InputTitle>

      <InputTitle>
      <h2>카테고리</h2>
      <select 
        name="category_name" 
        value={product.category_name} 
        onChange={handleChange}
      >
      <option value="">-- 카테고리 선택 --</option>
      {dummyCategories.map((category, index) => {
      console.log("Key (index):", index, "Value (category):", category); // 이 부분을 추가했습니다.
      return (
      <option key={index} value={category}>
      {category}
      </option>
      );
      })}
      </select>
      </InputTitle>

      <InputTitle>
        <h2>상품가격</h2>
        <Input
          name="product_price"
          value={product.product_price}
          onChange={handleChange}
          placeholder="가격"
        />
      </InputTitle>

      <InputTitle>
        <h2>상품수량</h2>
        <Input
          name="stock_quantity"
          value={product.stock_quantity}
          onChange={handleChange}
          placeholder="수량"
        />
      </InputTitle>

      <InputTitle>
        <h2>상품시리즈</h2>
        <Input
          name="stock_size"
          value={product.stock_size}
          onChange={handleChange}
          placeholder="사이즈"
        />
      </InputTitle>

      <InputTitle>
        <h2>상품색상</h2>
        <Input
          name="stock_color"
          value={product.stock_color}
          onChange={handleChange}
          placeholder="색상"
        />
      </InputTitle>

      <Button type="button" onClick={handleCancel}>
        취소하기
      </Button>
      <Button type="button" onClick={handleFormSubmit}>등록하기</Button>
    </InputForm>
  );
};

export default ProductInputForm;

//styled component
const InputForm = styled.form`
  width: 25%;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InputTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 92%;
  border: 1px solid #d9d9d9;
  color: black;
  cursor: pointer;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);

  h2{
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 3px;
  }

  h2 select{
    margin-top: 5px;
  }
`;

const Input = styled.input`
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  
`;

const Button = styled.button`
  padding: 10px 15px;
  border: 1px solid black;
  background-color: #000000;
  color: white;
  cursor: pointer;
  border-radius: 10px;
`;
