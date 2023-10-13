import React from "react";
import Card from "./Card";
import styled from "styled-components";

const CardList = ({ id, name, price, img, totalStock, productData }) => {
  return (
    <ItemList>
      <Card
        id={id}
        name={name}
        price={price}
        img={img}
        totalStock={totalStock}
        productData={productData}
      />
    </ItemList>
  );
};

export default CardList;

const ItemList = styled.li`
  width: 25%;
  height: 100%;
  min-width: 300px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1600px) {
    width: 50%;
  }
  @media screen and (max-width: 820px) {
    width: 100%;
  }
`;
