import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {axiosImgInstance} from '../../../apis/axiosInstance/axiosInstance'



const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  width: 300px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: blue;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: darkblue;
  }
`;

const SalesProductInquiry = () => {
    const [productName, setProductName] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [stockQuantity, setStockQuantity] = useState('');
    const [stockSize, setStockSize] = useState('');
    const [stockColor, setStockColor] = useState('');
    const [productImage, setProductImage] = useState('');
    const [imageFileList, setImageFileList] = useState([]);
  
    useEffect(() => {
      if (productName && categoryName && productPrice) {
        const imageInfo = {
          imageId: 1,
          productId: 1,
          productImage: "8f14e58e-0e33-436c-a8c3-a2d55abf934c.jpeg",
          productImageOriginName: "33.jpeg",
          productImageSave: "https://s3-minions-goods-image-bucket.s3.ap-northeast-2.amazonaws.com/8f14e58e-0e33-436c-a8c3-a2d55abf934c.jpeg"
        };
  
        // 이미지 정보를 imageFileList 배열에 추가
        setImageFileList([imageInfo]);
      }
    }, [productName, categoryName, productPrice]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('categoryName', categoryName);
        formData.append('productPrice', productPrice);
        formData.append('imageFileList', JSON.stringify(imageFileList)); // 이미지 정보 추가
        formData.append('productImage', productImage);
  
        const response = await axios.post('/product', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
  
        if (response.status === 200) {
          alert('Product registered successfully!');
        }
      } catch (error) {
        console.error('An error occurred while registering the product:', error);
        alert('Failed to register product');
      }
    };
  return (
    <Container>
      <h1>Product Registration</h1>
      <form onSubmit={handleSubmit}>
        <Input 
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <Input 
          type="text"
          placeholder="Category Name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <Input 
          type="number"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <Input 
          type="number"
          placeholder="Stock Quantity"
          value={stockQuantity}
          onChange={(e) => setStockQuantity(e.target.value)}
        />
        <Input 
          type="text"
          placeholder="Stock Size"
          value={stockSize}
          onChange={(e) => setStockSize(e.target.value)}
        />
        <Input 
          type="text"
          placeholder="Stock Color"
          value={stockColor}
          onChange={(e) => setStockColor(e.target.value)}
        />
        <Input 
          type="file"
          onChange={(e) => setProductImage(e.target.files[0])}
        />
        <Button type="submit">Register Product</Button>
      </form>
    </Container>
  );
};

export default SalesProductInquiry;
