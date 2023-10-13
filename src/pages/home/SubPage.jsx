import CardList from "../../components/Card/CardList";
import { useEffect, useState } from "react";
import * as S from "./SubPageStyle";
import { useSearchParams } from "react-router-dom";
const SubPage = () => {
  // const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1");
  const limit = 4;
  const offset = (page - 1) * limit;
  const [category, setCategory] = useState("");

  const productList = [
    {
      id: "P00000KA",
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
      category: "tops-t-shirts",
    },
    {
      id: "P00000KB",
      name: "GOALSTUDIO Delight Tote Bag",
      price: 95200,
      img: ["../src/assets/images/p2.jpg"],
      buyQuantity: 0,
      totalStock: 10,
      category: "hoodies-sweatshirts",
    },
    {
      id: "P00000KC",
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
      category: "tops-t-shirts",
    },

    {
      id: "P00000KD",
      name: "GOALSTUDIO Delight Bag",
      price: 119000,
      img: ["../src/assets/images/p4.jpg", "../src/assets/images/p4-2.png"],
      buyQuantity: 0,
      totalStock: 3,
      category: "tops-t-shirts",
    },

    {
      id: "P00000KE",
      name: "Denim Shirt Jacket-Black",
      price: 119000,
      img: ["../src/assets/images/p1-2.png", "../src/assets/images/p1.jpg"],
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
      category: "tops-t-shirts",
    },
    {
      id: "P00000KF",
      name: "GOALSTUDIO Delight Tote Bag",
      price: 95200,
      img: ["../src/assets/images/p2.jpg"],
      buyQuantity: 0,
      totalStock: 10,
      category: "tops-t-shirts",
    },
    {
      id: "P00000KG",
      name: "Denim Shirt Jacket-Blue",
      price: 119000,
      img: ["../src/assets/images/p3-2.png", "../src/assets/images/p3.jpg"],
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
      category: "pants",
    },

    {
      id: "P00000KH",
      name: "GOALSTUDIO Delight Bag",
      price: 119000,
      img: ["../src/assets/images/p4-2.png", "../src/assets/images/p4.jpg"],
      buyQuantity: 0,
      totalStock: 3,
      category: "bundle",
    },
  ];
//한 페이지 데이터 개수 설정
  const sliceData = (data) => {
    if (data) {
      let result = data.slice(offset, offset + limit);
      return result;
    }
  };
//숫자로 페이지 이동
  const changePage = (e) => {
    if (category === null) setSearchParams({ page: e.target.value });
    else
      setSearchParams({
        category,
        page: e.target.value,
      });
  };
  //화살표로 페이지 이동
  const changePagination = (e) => {
    switch (e.target.value) {
      case "first":
        if (category === null) setSearchParams({ page: 1 });
        else setSearchParams({ category, page: 1 });
        break;
      case "prev":
        if (category === null) setSearchParams({ page: page - 1 });
        else setSearchParams({ category, page: page - 1 });
        break;
      case "next":
        if (category === null) setSearchParams({ page: page + 1 });
        else setSearchParams({ category, page: page + 1 });
        break;
      case "end":
        if (category === null) setSearchParams({ page: maxPage });
        else setSearchParams({ category, page: maxPage });
        break;
    }
  };
  //카드 생성
  const renderCard = (product) => {
    return (
      <CardList
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        img={product.img}
        productData={product}
      />
    );
  };
  //페이지네이션 생성
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

  const handleChangeCategory = () => {
    setCategory(searchParams.get("category"));
  };

  const sortByCategory = (value) => {
    if (value === null) {
      return productList;
    } else {
      const filtered = productList.filter((product) => {
        return product.category === value;
      });
      return filtered;
    }
  };
  //maxPage가 소수점일 경우 올림
  const maxPage = Math.ceil(sortByCategory(category).length / limit);

  useEffect(() => {
    handleChangeCategory();
    sortByCategory(category);
  }, [searchParams]);

  return (
    <S.Section>
      <S.SectionTitle>
        <S.SectionTitleText>APPAREL</S.SectionTitleText>
        <S.SectionTitleCategory>
          <S.StyledLink
            to={`?category=tops-t-shirts&page=1`}
            className={category === "tops-t-shirts" ? "selected" : "default"}
          >
            TOPS & T-SHIRTS
          </S.StyledLink>
          <S.StyledLink
            to={`?category=hoodies-sweatshirts`}
            className={
              category === "hoodies-sweatshirts" ? "selected" : "default"
            }
          >
            HOODIES & SWEATSHIRTS
          </S.StyledLink>
          <S.StyledLink
            to={`?category=pants`}
            className={category === "pants" ? "selected" : "default"}
          >
            PANTS
          </S.StyledLink>
          <S.StyledLink
            to={`?category=bundle`}
            className={category === "bundle" ? "selected" : "default"}
          >
            BUNDLE
          </S.StyledLink>
        </S.SectionTitleCategory>
      </S.SectionTitle>
      <S.ItemListGrid>
        {sliceData(sortByCategory(category)).map(renderCard)}
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

export default SubPage;
