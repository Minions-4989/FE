import CardLi from "../../components/Card/CardLi";
import { useState } from "react";
import * as S from "./SubPageStyle";
const Category1 = () => {
  const [page, setPage] = useState(1);
  const limit = 4;
  const offset = (page - 1) * limit;

  const productList = [
    {
      id: "P00000KA",
      name: "Denim Shirt Jacket-Black",
      price: 119000,
      img: ["/p1.jpg", "/p1-2.png"],
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
      category: "TOPS & T-SHIRTS",
    },
    {
      id: "P00000KB",
      name: "GOALSTUDIO Delight Tote Bag",
      price: 95200,
      img: ["/p2.jpg"],
      buyQuantity: 0,
      totalStock: 10,
      category: "HOODIES & SWEATSHIRTS",
    },
    {
      id: "P00000KC",
      name: "Denim Shirt Jacket-Blue",
      price: 119000,
      img: ["/p3.jpg", "/p3-2.png"],
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
      category: "PANTS",
    },

    {
      id: "P00000KD",
      name: "GOALSTUDIO Delight Bag",
      price: 119000,
      img: ["/p4.jpg", "/p4-2.png"],
      buyQuantity: 0,
      totalStock: 3,
      category: "BUNDLE",
    },

    {
      id: "P00000KE",
      name: "Denim Shirt Jacket-Black",
      price: 119000,
      img: ["/p1-2.png", "/p1.jpg"],
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
      category: "TOPS & T-SHIRTS",
    },
    {
      id: "P00000KF",
      name: "GOALSTUDIO Delight Tote Bag",
      price: 95200,
      img: ["/p2.jpg"],
      buyQuantity: 0,
      totalStock: 10,
      category: "TOPS & T-SHIRTS",
    },
    {
      id: "P00000KG",
      name: "Denim Shirt Jacket-Blue",
      price: 119000,
      img: ["/p3-2.png", "/p3.jpg"],
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
      category: "PANTS",
    },

    {
      id: "P00000KH",
      name: "GOALSTUDIO Delight Bag",
      price: 119000,
      img: ["/p4-2.png", "/p4.jpg"],
      buyQuantity: 0,
      totalStock: 3,
      category: "BUNDLE",
    },
  ];

  const sortByCategory = () => {
    const fitered = productList.filter((product) => {
      return product.category === "TOPS & T-SHIRTS";
    });
    return fitered;
  };
  const maxPage = Math.ceil(sortByCategory().length / limit);

  const sliceData = (data) => {
    if (data) {
      let result = data.slice(offset, offset + limit);
      return result;
    }
  };

  const changePage = (e) => {
    setPage(Number(e.target.value));
  };
  const changePagination = (e) => {
    switch (e.target.value) {
      case "first":
        setPage(1);
        break;
      case "prev":
        setPage((prev) => prev - 1);
        break;
      case "next":
        setPage((prev) => prev + 1);
        break;
      case "end":
        setPage(maxPage);
        break;
    }
  };

  const renderCard = (product) => {
    return (
      <CardLi
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        img={product.img}
        productData={product}
      />
    );
  };
  const renderPagination = () => {
    const result = [];
    for (let i = 0; i < maxPage; i++) {
      if (i === 0) {
        result.push(
          <S.PaginationLiFirst key="1">
            <S.PageBtn
              className={page === 1 ? "selected" : "num"}
              value="1"
              onClick={changePage}
            >
              1
            </S.PageBtn>
          </S.PaginationLiFirst>
        );
      } else {
        result.push(
          <S.PaginationLi key={i + 1}>
            <S.PageBtn
              className={page === i + 1 ? "selected" : "num"}
              value={i + 1}
              onClick={changePage}
            >
              {i + 1}
            </S.PageBtn>
          </S.PaginationLi>
        );
      }
    }
    return result;
  };

  return (
    <S.Section>
      <S.SectionTitle>
        <S.SectionTitleText>APPAREL</S.SectionTitleText>
        <S.SectionTitleCategory>
          <S.StyledLinkSelected to={`/category/tops-t-shirts`}>
            TOPS & T-SHIRTS
          </S.StyledLinkSelected>
          <S.StyledLink to={`/category/hoodies-sweatshirts`}>
            HOODIES & SWEATSHIRTS
          </S.StyledLink>
          <S.StyledLink to={`/category/pants`}>PANTS</S.StyledLink>
          <S.StyledLink to={`/category/bundle`}>BUNDLE</S.StyledLink>
        </S.SectionTitleCategory>
      </S.SectionTitle>
      <S.ItemListGrid>
        {sliceData(sortByCategory()).map(renderCard)}
      </S.ItemListGrid>
      <S.Pagination>
        <S.PageFirst
          value="first"
          onClick={changePagination}
          disabled={page === 1 ? true : false}
        ></S.PageFirst>
        <S.PagePrev
          value="prev"
          onClick={changePagination}
          disabled={page === 1 ? true : false}
        ></S.PagePrev>
        <S.PaginationOl>{renderPagination()}</S.PaginationOl>
        <S.PageNext
          value="next"
          onClick={changePagination}
          disabled={page === maxPage ? true : false}
        ></S.PageNext>
        <S.PageEnd
          value="end"
          onClick={changePagination}
          disabled={page === maxPage ? true : false}
        ></S.PageEnd>
      </S.Pagination>
    </S.Section>
  );
};

export default Category1;
