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
  const [size, setSize] = useState({ s: 0, m: 0, l: 0 });
  const [nonSize, setNonSize] = useState(1);

  //input 수량 증가
  const handleUpButton = (e) => {
    switch (e.target.value) {
      case "s":
        setSize((prev) => {
          return { ...prev, s: prev.s + 1 };
        });
        break;
      case "m":
        setSize((prev) => {
          return { ...prev, m: prev.m + 1 };
        });
        break;
      case "l":
        setSize((prev) => {
          return { ...prev, l: prev.l + 1 };
        });
        break;
      case "non":
        setNonSize((prev) => prev + 1);
        break;
    }
  };
  //input 수량 감소
  const handleDownButton = (e) => {
    switch (e.target.value) {
      case "s":
        setSize((prev) => {
          return { ...prev, s: prev.s - 1 };
        });
        break;
      case "m":
        setSize((prev) => {
          return { ...prev, m: prev.m - 1 };
        });
        break;
      case "l":
        setSize((prev) => {
          return { ...prev, l: prev.l - 1 };
        });
        break;
      case "non":
        setNonSize((prev) => prev - 1);
        break;
    }
  };
  //input에서 직접 숫자 입력 시
  const changeQuantity = (e) => {
    switch (e.target.id) {
      case "s":
        setSize((prev) => {
          return { ...prev, s: Number(e.target.value) };
        });
        break;
      case "m":
        setSize((prev) => {
          return { ...prev, m: Number(e.target.value) };
        });
        break;
      case "l":
        setSize((prev) => {
          return { ...prev, l: Number(e.target.value) };
        });
        break;
      case "non":
        setNonSize(Number(e.target.value));
        break;
    }
  };
  // x 버튼 클릭 시
  const deleteItem = (e) => {
    switch (e.target.value) {
      case "s":
        setSize((prev) => {
          return { ...prev, s: 0 };
        });

        break;
      case "m":
        setSize((prev) => {
          return { ...prev, m: 0 };
        });

        break;
      case "l":
        setSize((prev) => {
          return { ...prev, l: 0 };
        });
        break;
    }
  };
  //셀렉트박스 선택 시
  const handleSelect = (e) => {
    if (isInitial) setIsInitial(false);

    switch (e.target.value) {
      case "s":
        setSize((prev) => {
          return { ...prev, s: prev.s + 1 };
        });

        break;
      case "m":
        setSize((prev) => {
          return { ...prev, m: prev.m + 1 };
        });

        break;
      case "l":
        setSize((prev) => {
          return { ...prev, l: prev.l + 1 };
        });
        break;
    }
  };
  //서버에 보낼 데이터
  const setBuySize = () => {
    if (productData.buySize) {
      productData.buySize = size;
      productData.buyQuantity = size.s + size.m + size.l;
    } else {
      productData.buyQuantity = nonSize;
    }
  };

  useEffect(() => {
    setBuySize();
    // console.log("size", size);
    // console.log("buySize", productData.buySize);
    // console.log("productData", productData);
    // console.log("nonSize", nonSize);
    if (productData.totalStock === 0) {
      setNonSize(0);
    }
  }, [setBuySize, size, productData]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderImg = (data) => {
    return (
      <div key={Math.random()}>
        <img src={data} alt="" />
      </div>
    );
  };

  return (
    <>
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
          <S.ProductPrice>
            {productData.price.toLocaleString()}원
          </S.ProductPrice>
          {/* 제품 옵션(사이즈)이 있는 제품일 경우 옵션 선택*/}
          {productData?.buySize && (
            <S.TalbeRow>
              <S.TableHead>사이즈</S.TableHead>
              <S.TableData>
                <S.Options className="option" onChange={handleSelect}>
                  <option key="" value="" disabled={isInitial ? false : true}>
                    - [필수] 옵션을 선택해 주세요 -
                  </option>
                  <option
                    key="s"
                    value="s"
                    disabled={productData.stock.s === 0 ? true : false}
                  >
                    S {productData.stock.s === 0 && <span> [품절]</span>}
                  </option>
                  <option
                    key="m"
                    value="m"
                    disabled={productData.stock.m === 0 ? true : false}
                  >
                    M {productData.stock.m === 0 && <span> [품절]</span>}
                  </option>
                  <option
                    key="l"
                    value="l"
                    disabled={productData.stock.l === 0 ? true : false}
                  >
                    L {productData.stock.l === 0 && <span> [품절]</span>}
                  </option>
                </S.Options>
              </S.TableData>
            </S.TalbeRow>
          )}
          {/* 선택한 옵션 수량 확인하는 영역 */}
          <div className="option-selected-area">
            {/* 옵션선택이 없는 제품일 경우 바로 수량 선택 */}
            {!productData.buySize && (
              <S.OptionSelected>
                <p>{productData.name}</p>
                <S.InputDiv>
                  <S.InputNumber
                    id="non"
                    type="number"
                    value={nonSize}
                    onChange={changeQuantity}
                  />
                  <S.InputBtnImgDiv>
                    <S.CountUpBtn value="non" onClick={handleUpButton} />
                    <S.CountDownBtn
                      value="non"
                      onClick={handleDownButton}
                      disabled={nonSize === 1 ? true : false}
                    />
                  </S.InputBtnImgDiv>
                </S.InputDiv>

                <S.SelectedOptionPrice>
                  {(productData.price * nonSize).toLocaleString()}원
                </S.SelectedOptionPrice>
              </S.OptionSelected>
            )}
            {/* 옵션을 선택해서 옵션(사이즈s)가 1개 이상일 경우 */}
            {size.s > 0 && (
              <S.OptionSelected>
                <p>
                  {productData.name}
                  <br />-<span>S</span>
                </p>
                <S.InputDiv>
                  <S.InputNumber
                    id="s"
                    type="number"
                    value={size.s}
                    onChange={changeQuantity}
                  />
                  <S.InputBtnImgDiv>
                    <S.CountUpBtn value="s" onClick={handleUpButton} />
                    <S.CountDownBtn
                      value="s"
                      onClick={handleDownButton}
                      disabled={size.s === 1 ? true : false}
                    />
                  </S.InputBtnImgDiv>
                </S.InputDiv>
                <S.DeleteOptionBtn onClick={deleteItem} value="s" />
                <S.SelectedOptionPrice>
                  {(productData.price * size.s).toLocaleString()}원
                </S.SelectedOptionPrice>
              </S.OptionSelected>
            )}

            {size.m > 0 && (
              <S.OptionSelected>
                <p>
                  {productData.name}
                  <br />-<span>M</span>
                </p>
                <S.InputDiv>
                  <S.InputNumber
                    id="m"
                    type="number"
                    value={size.m}
                    onChange={changeQuantity}
                  />
                  <S.InputBtnImgDiv>
                    <S.CountUpBtn value="m" onClick={handleUpButton} />
                    <S.CountDownBtn
                      value="m"
                      onClick={handleDownButton}
                      disabled={size.m === 1 ? true : false}
                    />
                  </S.InputBtnImgDiv>
                </S.InputDiv>
                <S.DeleteOptionBtn onClick={deleteItem} value="m" />
                <S.SelectedOptionPrice>
                  {(productData.price * size.m).toLocaleString()}원
                </S.SelectedOptionPrice>
              </S.OptionSelected>
            )}

            {size.l > 0 && (
              <S.OptionSelected>
                <p>
                  {productData.name}
                  <br />-<span>L</span>
                </p>
                <S.InputDiv>
                  <S.InputNumber
                    id="l"
                    type="number"
                    value={size.l}
                    onChange={changeQuantity}
                  />
                  <S.InputBtnImgDiv>
                    <S.CountUpBtn value="l" onClick={handleUpButton} />
                    <S.CountDownBtn
                      value="l"
                      onClick={handleDownButton}
                      disabled={size.l === 1 ? true : false}
                    />
                  </S.InputBtnImgDiv>
                </S.InputDiv>
                <S.DeleteOptionBtn onClick={deleteItem} value="l" />
                <S.SelectedOptionPrice>
                  {(productData.price * size.l).toLocaleString()}원
                </S.SelectedOptionPrice>
              </S.OptionSelected>
            )}
          </div>

          <S.TotalPriceDiv>
            TOTAL :{/* 옵션(사이즈)가 있는 제품일 경우 */}
            {productData.buySize && (
              <S.TotalPriceSpan>
                {(
                  productData.price *
                  (size.s + size.m + size.l)
                ).toLocaleString()}
                원
              </S.TotalPriceSpan>
            )}
            {/* 옵션(사이즈)가 없는 제품일 경우 */}
            {!productData.buySize && (
              <S.TotalPriceSpan>
                {(productData.price * nonSize).toLocaleString()}원
              </S.TotalPriceSpan>
            )}
          </S.TotalPriceDiv>
          {/* 품절일 경우 */}
          {productData.totalStock != 0 && (
            <>
              <S.LowBtnArea>
                <S.LowBtn>장바구니</S.LowBtn>
                <S.LowBtn>관심상품</S.LowBtn>
              </S.LowBtnArea>
            </>
          )}
          {/* 품절이 아닐 경우 */}
          {productData.totalStock === 0 && (
            <S.LowBtnArea>
              <S.LowBtn>품절</S.LowBtn>
              <S.LowBtn>관심상품</S.LowBtn>
            </S.LowBtnArea>
          )}
        </S.InfoArea>
      </S.Section>
    </>
  );
};

export default ProductDetailPage;
