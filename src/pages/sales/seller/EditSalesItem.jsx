import React, { useState } from 'react';
import styled from 'styled-components';
import Main from '../../../components/ui/Main/Main';
import SalesUserProfile from '../../../components/MySalesPage/SalesUserProfile';
import PageSectionTitle from '../../../components/MySalesPage/PageSectionTitle';
import * as seller from '../../../components/MySalesPage/salesStyle';

const WhiteBox = styled.div`
  width: 100%;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  color: #333;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ececec;
`;

const TableHeader = styled.th`
  padding: 15px 10px;
  text-align: center;
  background-color: #f8f8f8;
  font-weight: 600;
  border-right: 1px solid #ececec;
`;

const TableCell = styled.td`
  padding: 15px 10px;
  text-align: center;
  border-right: 1px solid #ececec;
  &:empty {
    background-color: #fafafa;
  }
`;

const EditSalesItem = () => {
  const [products, setProducts] = useState([]);

  const emptyRows = 20;

  const exampleProduct = {
    product_id: '1',
    product_name: 'Example Product',
    product_price: '1000',
    category_name: 'Category 1',
    stock_option: [
      { stock_quantity: '10', stock_size: 'M', stock_color: 'Red' },
    ],
  };

  const onFinalSubmit = () => {
    setProducts((prevProducts) => [...prevProducts, exampleProduct]);
  };

  return (
    <Main>
      <SalesUserProfile
        ImageUrl="이미지URL"
        name="닉네임"
        email="이메일"/>
      <seller.MySalesPageSection>
        <PageSectionTitle sectiontitle="판매상품수정" sectionsummary="당신이 판매하는 상품을 여기서 수정하세요!" />
        <seller.PageContainer>
          <WhiteBox
            onSubmit={(e) => {
              e.preventDefault();
              onFinalSubmit();
            }}
          >
            <StyledTable>
              <thead>
                <TableRow>
                  <TableHeader>노출상품명</TableHeader>
                  <TableHeader>카테고리</TableHeader>
                  <TableHeader>상품가격</TableHeader>
                  <TableHeader>상품시리즈</TableHeader>
                  <TableHeader>상품색상</TableHeader>
                  <TableHeader>상품수량</TableHeader>
                </TableRow>
              </thead>
              <tbody>
              {products.length > 0 ? (
                  products.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell>{product.product_name}</TableCell>
                      <TableCell>{product.category_name}</TableCell>
                      <TableCell>{product.product_price}</TableCell>
                      {product.stock_option.map((option, idx) => (
                        <React.Fragment key={idx}>
                          <TableCell>{option.stock_size}</TableCell>
                          <TableCell>{option.stock_color}</TableCell>
                          <TableCell>{option.stock_quantity}</TableCell>
                        </React.Fragment>
                    ))}
                    </TableRow>
                  ))
                ) : (
                  // 데이터가 없는 경우 빈 셀로 이루어진 10개의 로우를 표시
                  [...Array(emptyRows)].map((_, index) => (
                    <TableRow key={index}>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  ))
                )}
              </tbody>
            </StyledTable>
          </WhiteBox>
        </seller.PageContainer>
      </seller.MySalesPageSection>
    </Main>
  );
};

export default EditSalesItem;
