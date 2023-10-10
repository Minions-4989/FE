import React from "react";
import * as S from "./ProductDetailPageStyle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ProductDetailPage = () => {
  const soldout = "../src/assets/images/soldout.png";

  const { data: productData } = useLocation().state;

  const [isInitial, setIsInitial] = useState(true);
  const colors = Object.keys(productData.stock);
  const [size, setSize] = useState({
    [colors[0]]: { s: 0, m: 0, l: 0 },
    [colors[1]]: { s: 0, m: 0, l: 0 },
    [colors[2]]: { s: 0, m: 0, l: 0 },
  });
  // const [nonSize, setNonSize] = useState(1);
  const [firstOptionSelected, setFirstOptionSelected] = useState(false);
  const [secondOptionSelected, setSecondOptionSelected] = useState(false);
  const [selectColor, setSelectColor] = useState("");

  //첫 렌더링 시 제품의 색상 정보 불러오기
  const colorOptions = {};
  for (let i = 0; i < colors.length; i++) {
    colorOptions[colors[i]] = { s: 0, m: 0, l: 0 };
  }
  useEffect(() => {
    setSize(colorOptions);
  }, []);

  //재고 없을 시 재고없음 표시 위함
  let stock = {};
  let totalStock = { [colors[0]]: 0, [colors[1]]: 0, [colors[2]]: 0 };
  for (let i = 0; i < colors.length; i++) {
    stock[colors[i] + `Stock`] = Object.values(productData.stock[colors[i]]);
    for (let j = 0; j < stock[colors[0] + `Stock`].length; j++) {
      totalStock[colors[i]] += stock[colors[i] + "Stock"][j];
    }
  }
  //input 수량 증가
  const handleUpButton = (e) => {
    for (let i = 0; i < colors.length; i++) {
      switch (e.target.value) {
        case colors[i] + "s":
          setSize((prev) => {
            return {
              ...prev,
              [colors[i]]: { ...prev[colors[i]], s: prev[colors[i]].s + 1 },
            };
          });
          break;
        case colors[i] + "m":
          setSize((prev) => {
            return {
              ...prev,
              [colors[i]]: { ...prev[colors[i]], m: prev[colors[i]].m + 1 },
            };
          });
          break;
        case colors[i] + "l":
          setSize((prev) => {
            return {
              ...prev,
              [colors[i]]: { ...prev[colors[i]], l: prev[colors[i]].l + 1 },
            };
          });
          break;
      }
    }
  };
  //input 수량 감소
  const handleDownButton = (e) => {
    for (let i = 0; i < colors.length; i++) {
      switch (e.target.value) {
        case colors[i] + "s":
          setSize((prev) => {
            return {
              ...prev,
              [colors[i]]: { ...prev[colors[i]], s: prev[colors[i]].s - 1 },
            };
          });
          break;
        case colors[i] + "m":
          setSize((prev) => {
            return {
              ...prev,
              [colors[i]]: { ...prev[colors[i]], m: prev[colors[i]].m - 1 },
            };
          });
          break;
        case colors[i] + "l":
          setSize((prev) => {
            return {
              ...prev,
              [colors[i]]: { ...prev[colors[i]], l: prev[colors[i]].l - 1 },
            };
          });
          break;
      }
    }
  };
  //input에서 직접 숫자 입력 시
  const changeQuantity = (e) => {
    for (let i = 0; i < colors.length; i++) {
      switch (e.target.id) {
        case colors[i] + "s":
          setSize((prev) => {
            return {
              ...prev,
              [colors[i]]: { ...prev[colors[i]], s: Number(e.target.value) },
            };
          });
          break;
        case colors[i] + "m":
          setSize((prev) => {
            return {
              ...prev,
              [colors[i]]: { ...prev[colors[i]], m: Number(e.target.value) },
            };
          });
          break;
        case colors[i] + "l":
          setSize((prev) => {
            return {
              ...prev,
              [colors[i]]: { ...prev[colors[i]], l: Number(e.target.value) },
            };
          });
          break;
      }
    }
  };
  // x 버튼 클릭 시
  const deleteItem = (e) => {
    for (let i = 0; i < colors.length; i++) {
      switch (e.target.value) {
        case colors[i] + "s":
          setSize((prev) => {
            return { ...prev, [colors[i]]: { ...prev[colors[i]], s: 0 } };
          });

          break;
        case colors[i] + "m":
          setSize((prev) => {
            return { ...prev, [colors[i]]: { ...prev[colors[i]], m: 0 } };
          });

          break;
        case colors[i] + "l":
          setSize((prev) => {
            return { ...prev, [colors[i]]: { ...prev[colors[i]], l: 0 } };
          });
          break;
      }
    }
  };
  //색상 셀렉트박스 클릭 시
  const handleColorSelect = (e) => {
    if (isInitial) {
      setIsInitial(false);
    }
    setFirstOptionSelected(true);
    setSecondOptionSelected(false);
    for (let i = 0; i < colors.length; i++) {
      switch (e.target.value) {
        case colors[i]:
          setSelectColor(colors[i]);
          break;
      }
    }
  };
  //사이즈 셀렉트박스 클릭 시
  const handleSizeSelect = (e) => {
    setSecondOptionSelected(true);
    setFirstOptionSelected(false);
    setIsInitial(true);
    for (let i = 0; i < colors.length; i++) {
      switch (e.target.value) {
        case colors[i] + "s":
          setSize((prev) => {
            return {
              ...prev,
              [colors[i]]: { ...prev[colors[i]], s: prev[colors[i]].s + 1 },
            };
          });
          break;
        case colors[i] + "m":
          setSize((prev) => {
            return {
              ...prev,
              [colors[i]]: { ...prev[colors[i]], m: prev[colors[i]].m + 1 },
            };
          });
          break;
        case colors[i] + "l":
          setSize((prev) => {
            return {
              ...prev,
              [colors[i]]: { ...prev[colors[i]], l: prev[colors[i]].l + 1 },
            };
          });
          break;
      }
      // switch (e.target.value) {
      //   case colors[0] + "s":
      //     setSize((prev) => {
      //       return {
      //         ...prev,
      //         [colors[0]]: { ...prev[colors[0]], s: prev[colors[0]].s + 1 },
      //       };
      //     });
      //     break;
      //   case colors[0] + "m":
      //     setSize((prev) => {
      //       return {
      //         ...prev,
      //         [colors[0]]: { ...prev[colors[0]], m: prev[colors[0]].m + 1 },
      //       };
      //     });
      //     break;
      //   case colors[0] + "l":
      //     setSize((prev) => {
      //       return {
      //         ...prev,
      //         [colors[0]]: { ...prev[colors[0]], l: prev[colors[0]].l + 1 },
      //       };
      //     });
      //     break;
      //   case colors[1] + "s":
      //     setSize((prev) => {
      //       return {
      //         ...prev,
      //         [colors[1]]: { ...prev[colors[1]], s: prev[colors[1]].s + 1 },
      //       };
      //     });
      //     break;
      //   case colors[1] + "m":
      //     setSize((prev) => {
      //       return {
      //         ...prev,
      //         [colors[1]]: { ...prev[colors[1]], m: prev[colors[1]].m + 1 },
      //       };
      //     });
      //     break;
      //   case colors[1] + "l":
      //     setSize((prev) => {
      //       return {
      //         ...prev,
      //         [colors[1]]: { ...prev[colors[1]], l: prev[colors[1]].l + 1 },
      //       };
      //     });
      //     break;
      //   case colors[2] + "s":
      //     setSize((prev) => {
      //       return {
      //         ...prev,
      //         [colors[2]]: { ...prev[colors[2]], s: prev[colors[2]].s + 1 },
      //       };
      //     });
      //     break;
      //   case colors[2] + "m":
      //     setSize((prev) => {
      //       return {
      //         ...prev,
      //         [colors[2]]: { ...prev[colors[2]], m: prev[colors[2]].m + 1 },
      //       };
      //     });
      //     break;
      //   case colors[2] + "l":
      //     setSize((prev) => {
      //       return {
      //         ...prev,
      //         [colors[2]]: { ...prev[colors[2]], l: prev[colors[2]].l + 1 },
      //       };
      //     });
      //     break;
      // case "non":
      //   setNonSize((prev) => prev + 1);
      //   break;
    }
    setSelectColor("");
  };
  //서버에 보낼 데이터
  const setBuySize = () => {
    productData.buySize = size;
    productData.buyQuantity = getTotalCount();
  };

  useEffect(() => {
    setBuySize();
    console.log("productData", productData);
  }, [setBuySize, size, productData]);
  //색상 select box 옵션 렌더링
  const renderColorOptions = (color) => {
    return (
      <option
        key={color}
        value={color}
        disabled={totalStock[color] === 0 ? true : false}
      >
        {color} {totalStock[color] === 0 && "[재고없음]"}
      </option>
    );
  };
  //사이즈 select box 옵션 렌더링
  const renderSizeOptions = (color) => {
    return (
      <React.Fragment key={color}>
        {selectColor === color && (
          <>
            <option
              key={color + "s"}
              value={color + "s"}
              disabled={productData.stock[color].s === 0 ? true : false}
            >
              S {productData.stock[color].s === 0 && "[재고없음]"}
            </option>
            <option
              key={color + "m"}
              value={color + "m"}
              disabled={productData.stock[color].m === 0 ? true : false}
            >
              M {productData.stock[color].m === 0 && "[재고없음]"}
            </option>
            <option
              key={color + "l"}
              value={color + "l"}
              disabled={productData.stock[color].l === 0 ? true : false}
            >
              L {productData.stock[color].l === 0 && "[재고없음]"}
            </option>
          </>
        )}
      </React.Fragment>
    );
  };
  //선택한 옵션 렌더링
  const renderSelectedOptions = (color) => {
    return (
      <React.Fragment key={color}>
        {size[color].s > 0 && (
          <S.OptionSelected>
            <p>
              {productData.name}
              <br />
              <span>{color}</span>-<span>S</span>
            </p>
            <S.InputDiv>
              <S.InputNumber
                id={color + "s"}
                type="number"
                value={size[color].s}
                onChange={changeQuantity}
              />
              <S.InputBtnImgDiv>
                <S.CountUpBtn value={color + "s"} onClick={handleUpButton} />
                <S.CountDownBtn
                  value={color + "s"}
                  onClick={handleDownButton}
                  disabled={size[color].s === 1 ? true : false}
                />
              </S.InputBtnImgDiv>
            </S.InputDiv>
            <S.DeleteOptionBtn onClick={deleteItem} value={color + "s"} />
            <S.SelectedOptionPrice>
              {(productData.price * size[color].s).toLocaleString()}원
            </S.SelectedOptionPrice>
          </S.OptionSelected>
        )}
        {size[color].m > 0 && (
          <S.OptionSelected>
            <p>
              {productData.name}
              <br />
              <span>{color}</span>-<span>M</span>
            </p>
            <S.InputDiv>
              <S.InputNumber
                id={color + "m"}
                type="number"
                value={size[color].m}
                onChange={changeQuantity}
              />
              <S.InputBtnImgDiv>
                <S.CountUpBtn value={color + "m"} onClick={handleUpButton} />
                <S.CountDownBtn
                  value={color + "m"}
                  onClick={handleDownButton}
                  disabled={size[color].m === 1 ? true : false}
                />
              </S.InputBtnImgDiv>
            </S.InputDiv>
            <S.DeleteOptionBtn onClick={deleteItem} value={color + "m"} />
            <S.SelectedOptionPrice>
              {(productData.price * size[color].m).toLocaleString()}원
            </S.SelectedOptionPrice>
          </S.OptionSelected>
        )}
        {size[color].l > 0 && (
          <S.OptionSelected>
            <p>
              {productData.name}
              <br />
              <span>{color}</span>-<span>L</span>
            </p>
            <S.InputDiv>
              <S.InputNumber
                id={color + "l"}
                type="number"
                value={size[color].l}
                onChange={changeQuantity}
              />
              <S.InputBtnImgDiv>
                <S.CountUpBtn value={color + "l"} onClick={handleUpButton} />
                <S.CountDownBtn
                  value={color + "l"}
                  onClick={handleDownButton}
                  disabled={size[color].l === 1 ? true : false}
                />
              </S.InputBtnImgDiv>
            </S.InputDiv>
            <S.DeleteOptionBtn onClick={deleteItem} value={color + "l"} />
            <S.SelectedOptionPrice>
              {(productData.price * size[color].l).toLocaleString()}원
            </S.SelectedOptionPrice>
          </S.OptionSelected>
        )}
      </React.Fragment>
    );
  };
  //선택한 전체 물품 수량
  const getTotalCount = () => {
    let totalCount = 0;
    for (let i = 0; i < colors.length; i++) {
      totalCount =
        totalCount + size[colors[i]].s + size[colors[i]].m + size[colors[i]].l;
    }
    return totalCount;
  };

  //이미지 슬라이드 이미지 렌더링
  const renderImg = (data) => {
    return (
      <div key={Math.random()}>
        <img src={data} alt="" />
      </div>
    );
  };
  //이미지 슬라이더 세팅
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.Section>
      <S.ImgArea>
        {/* 이미지 슬라이더 */}
        <S.ProductImg default={productData.img}>
          <div>
            <Slider {...settings}>{productData.img.map(renderImg)}</Slider>
          </div>
        </S.ProductImg>
      </S.ImgArea>
      {/* 제품 정보 */}
      <S.InfoArea>
        <S.ProductTitle>
          {productData.name}
          {/* 제품 재고 없을 시 */}
          {productData.totalStock === 0 && (
            <S.SoldOut>
              <img src={soldout} alt="" />
            </S.SoldOut>
          )}
        </S.ProductTitle>
        <S.ProductPrice>{productData.price.toLocaleString()}원</S.ProductPrice>
        {/* 제품 옵션 선택*/}
        <>
          {/* 컬러 select box */}
          <S.TalbeRow>
            <S.TableHead>컬러</S.TableHead>
            <S.TableData>
              <S.Options
                className="option"
                onChange={handleColorSelect}
                value={secondOptionSelected ? "" : selectColor}
              >
                <option key="" value="" disabled={isInitial ? false : true}>
                  - [필수] 옵션을 선택해 주세요 -
                </option>
                {colors.map(renderColorOptions)}
              </S.Options>
            </S.TableData>
          </S.TalbeRow>
          {/* 사이즈 select box */}
          <S.TalbeRow>
            <S.TableHead>사이즈</S.TableHead>
            <S.TableData>
              <S.Options
                className="option"
                onChange={handleSizeSelect}
                disabled={firstOptionSelected ? false : true}
                value={secondOptionSelected ? "" : false}
              >
                <option key="" value="">
                  - [필수] 옵션을 선택해 주세요 -
                </option>
                {colors.map(renderSizeOptions)}
              </S.Options>
            </S.TableData>
          </S.TalbeRow>
        </>

        {/* 선택한 옵션 수량 확인하는 영역 */}
        <div className="option-selected-area">
          {/* 옵션을 선택해서 옵션(사이즈s)가 1개 이상일 경우 */}
          {colors.map(renderSelectedOptions)}
        </div>

        <S.TotalPriceDiv>
          TOTAL : {/* 옵션(사이즈)가 있는 제품일 경우 */}
          <S.TotalPriceSpan>
            {(productData.price * getTotalCount()).toLocaleString()}원
          </S.TotalPriceSpan>
        </S.TotalPriceDiv>
        {/* 품절이 아닐 경우 */}
        {productData.totalStock != 0 && (
          <>
            <S.LowBtnArea>
              <S.LowBtn>장바구니</S.LowBtn>
              <S.LowBtn>관심상품</S.LowBtn>
            </S.LowBtnArea>
          </>
        )}
        {/* 품절일 경우 */}
        {productData.totalStock === 0 && (
          <S.LowBtnArea>
            <S.LowBtn>품절</S.LowBtn>
            <S.LowBtn>관심상품</S.LowBtn>
          </S.LowBtnArea>
        )}
      </S.InfoArea>
    </S.Section>
  );
};

export default ProductDetailPage;
