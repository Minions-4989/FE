import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = ({ id, name, price, img, totalStock, productData }) => {
  const soldout = "/soldout.png";
  return (
    <ItemListBox to={`/product/${id}`} state={{ data: productData }}>
      <ThumbnailDiv>
        <ThumbnailImg src={img[0]} alt="" />
      </ThumbnailDiv>
      <Title>{name}</Title>
      <Price>{price.toLocaleString()}원</Price>
      {totalStock === 0 && (
        <SoldOut>
          <img src={soldout} alt="" />
        </SoldOut>
      )}
    </ItemListBox>
  );
};

export default Card;

const ItemListBox = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;

  margin-bottom: 70px;
  &:visited,
  &:link {
    text-decoration: none;
    color: #222222;
  }
`;
const ThumbnailDiv = styled.div`
  width: 100%;
  height: 100%;
`;
const ThumbnailImg = styled.img`
  width: 100%;
`;
const Title = styled.div`
  width: 100%;
  border-bottom: 1px solid #ececec;
  text-align: center;
  line-height: 180%;
  font-size: 17px;
  font-weight: bold;
`;
const Price = styled.div`
  width: 100%;
  text-align: center;
  line-height: 180%;
  font-size: 17px;
  font-weight: bold;
`;
const SoldOut = styled.div`
  padding-top: 10px;
`;
