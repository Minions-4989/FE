import styled from "styled-components";
import CardList from "../../components/Card/CardList";

const MainPage = () => {
  const productList = [
    {
      id: "P00000KP",
      name: "Denim Shirt Jacket-Black",
      price: 119000,
      img: ["../src/assets/images/p1.jpg", "../src/assets/images/p1-2.png"],
      buySize: {
        s: 0,
        m: 0,
        l: 0,
      },
      buyQuantity: 0,
      stock: {
        s: 5,
        m: 6,
        l: 4,
      },
      totalStock: 15,
    },
    {
      id: "P00000KO",
      name: "GOALSTUDIO Delight Tote Bag",
      price: 95200,
      img: ["../src/assets/images/p2.jpg"],
      buyQuantity: 0,
      totalStock: 7,
    },
    {
      id: "P00000KQ",
      name: "Denim Shirt Jacket-Blue",
      price: 119000,
      img: ["../src/assets/images/p3.jpg", "../src/assets/images/p3-2.png"],
      buySize: {
        s: 0,
        m: 0,
        l: 0,
      },
      buyQuantity: 0,
      stock: {
        s: 5,
        m: 6,
        l: 4,
      },
      totalStock: 15,
    },

    {
      id: "P00000KA",
      name: "GOALSTUDIO Delight Bag",
      price: 119000,
      img: ["../src/assets/images/p4.jpg", "../src/assets/images/p4-2.png"],
      buyQuantity: 0,
      totalStock: 3,
    },
  ];
  
  //카드 생성
  const renderCard = (product) => {
    return (
      <CardList
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        img={product.img}
        totalStock={product.totalStock}
        productData={product}
      />
    );
  };
  return (
    <>
      <Section>
        <ListTitle>
          <ListTitleText>NEW ARRIVALS</ListTitleText>
          <Bar />
        </ListTitle>
        <ItemListGrid>{productList.map(renderCard)}</ItemListGrid>
      </Section>

      <Section>
        <ListTitle>
          <ListTitleText>FAKER X DECA</ListTitleText>
          <Bar />
        </ListTitle>
        <ItemListGrid>{productList.map(renderCard)}</ItemListGrid>
      </Section>
    </>
  );
};

export default MainPage;

const Section = styled.div`
  padding: 60px 5% 0;
`;
const ListTitle = styled.div`
  text-align: center;
  padding: 80px 0 30px;
`;
const ListTitleText = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
`;
const Bar = styled.p`
  margin: 20px auto 15px;
  height: 2px;
  width: 35px;
  display: block;
  background: #111;
`;

const ItemListGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 60px 5% 0;
`;
