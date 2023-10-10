import styled from "styled-components";
import CardList from "../../components/Card/CardList";

const MainPage = () => {
  const productList = [
    {
      id: "1",
      name: "Denim Shirt Jacket-Black",
      price: 119000,
      img: ["../src/assets/images/p1.jpg", "../src/assets/images/p1-2.png"],

      buySize: {
        white: { s: 0, m: 0, l: 0 },
        navy: { s: 0, m: 0, l: 0 },
        khaki: { s: 0, m: 0, l: 0 },
      },
      buyQuantity: 0,

      stock: {
        white: { s: 1, m: 1, l: 1 },
        navy: { s: 1, m: 1, l: 1 },
        khaki: { s: 1, m: 1, l: 1 },
      },

      totalStock: 9,
      category: "tops-t-shirts",
    },
    {
      id: "2",
      name: "GOALSTUDIO Delight Tote Bag",
      price: 95200,
      img: ["../src/assets/images/p2.jpg"],
      buySize: {
        black: { s: 0, m: 0, l: 0 },
        navy: { s: 0, m: 0, l: 0 },
        khaki: { s: 0, m: 0, l: 0 },
      },
      buyQuantity: 0,
      stock: {
        black: { s: 1, m: 1, l: 1 },
        navy: { s: 1, m: 1, l: 1 },
        khaki: { s: 1, m: 1, l: 1 },
      },
      totalStock: 10,
      category: "hoodies-sweatshirts",
    },
    {
      id: "3",
      name: "Denim Shirt Jacket-Blue",
      price: 119000,
      img: ["../src/assets/images/p3.jpg", "../src/assets/images/p3-2.png"],
      buySize: {
        white: { s: 0, m: 0, l: 0 },
        navy: { s: 0, m: 0, l: 0 },
        khaki: { s: 0, m: 0, l: 0 },
      },
      buyQuantity: 0,
      stock: {
        white: { s: 1, m: 0, l: 2 },
        navy: { s: 0, m: 1, l: 30 },
        khaki: { s: 10, m: 10, l: 0 },
      },
      totalStock: 15,
      category: "tops-t-shirts",
    },

    {
      id: "4",
      name: "GOALSTUDIO Delight Bag",
      price: 119000,
      img: ["../src/assets/images/p4.jpg", "../src/assets/images/p4-2.png"],
      buySize: {
        black: { s: 0, m: 0, l: 0 },
        navy: { s: 0, m: 0, l: 0 },
        khaki: { s: 0, m: 0, l: 0 },
      },
      buyQuantity: 0,
      stock: {
        black: { s: 1, m: 1, l: 1 },
        navy: { s: 1, m: 1, l: 1 },
        khaki: { s: 1, m: 1, l: 1 },
      },
      totalStock: 3,
      category: "tops-t-shirts",
    },

    {
      id: "5",
      name: "Denim Shirt Jacket-Black",
      price: 119000,
      img: ["../src/assets/images/p1-2.png", "../src/assets/images/p1.jpg"],
      buySize: {
        black: { s: 0, m: 0, l: 0 },
        navy: { s: 0, m: 0, l: 0 },
        khaki: { s: 0, m: 0, l: 0 },
      },
      buyQuantity: 0,
      stock: {
        black: { s: 10, m: 10, l: 10 },
        navy: { s: 30, m: 0, l: 20 },
        khaki: { s: 0, m: 20, l: 10 },
      },
      totalStock: 15,
      category: "tops-t-shirts",
    },
    {
      id: "6",
      name: "GOALSTUDIO Delight Tote Bag",
      price: 95200,
      img: ["../src/assets/images/p2.jpg"],
      buySize: {
        black: { s: 0, m: 0, l: 0 },
        navy: { s: 0, m: 0, l: 0 },
        khaki: { s: 0, m: 0, l: 0 },
      },
      buyQuantity: 0,
      stock: {
        black: { s: 10, m: 10, l: 10 },
        navy: { s: 30, m: 0, l: 20 },
        khaki: { s: 0, m: 20, l: 10 },
      },
      totalStock: 10,
      category: "tops-t-shirts",
    },
    {
      id: "7",
      name: "Denim Shirt Jacket-Blue",
      price: 119000,
      img: ["../src/assets/images/p3-2.png", "../src/assets/images/p3.jpg"],
      buySize: {
        black: { s: 0, m: 0, l: 0 },
        navy: { s: 0, m: 0, l: 0 },
        khaki: { s: 0, m: 0, l: 0 },
      },
      buyQuantity: 0,
      stock: {
        black: { s: 10, m: 0, l: 10 },
        navy: { s: 10, m: 0, l: 10 },
        khaki: { s: 10, m: 0, l: 10 },
      },
      totalStock: 15,
      category: "pants",
    },

    {
      id: "8",
      name: "GOALSTUDIO Delight Bag",
      price: 119000,
      img: ["../src/assets/images/p4-2.png", "../src/assets/images/p4.jpg"],
      buySize: {
        black: { s: 0, m: 0, l: 0 },
        navy: { s: 0, m: 0, l: 0 },
        khaki: { s: 0, m: 0, l: 0 },
      },
      buyQuantity: 0,
      stock: {
        black: { s: 10, m: 10, l: 10 },
        navy: { s: 30, m: 0, l: 20 },
        khaki: { s: 0, m: 20, l: 10 },
      },
      totalStock: 3,
      category: "bundle",
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
